-- Outreach board: one row per person per campaign, so Kaavish can see live
-- who is being pitched, what they were sent, where it stands and what they said.
-- Additive only. Filled by the outreach sync (Apollo, Aimfox, Gmail) and read by outreach.html.

create table if not exists os.pitches (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  source text not null,              -- apollo, aimfox, whatsapp
  campaign_id text not null,         -- Apollo sequence id or Aimfox campaign id
  campaign text not null,            -- its name
  step_id text not null,
  position int not null,
  steps int,                         -- how many steps the campaign has
  step_type text,                    -- auto_email, manual_email, linkedin_step_connect, call, dm
  wait_days int,
  subject text,
  body text,                         -- the template as written, merge fields left in
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  unique (org_id, source, step_id)
);

create table if not exists os.outreach (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  source text not null,              -- apollo, aimfox, whatsapp, manual
  external_id text not null,         -- Apollo: contact id:sequence id. Aimfox: conversation urn
  channel text not null check (channel in ('email','linkedin','whatsapp')),
  contact_ref text,                  -- Apollo contact id or LinkedIn urn
  full_name text,
  title text,
  company text,
  domain text,
  email text,
  linkedin_url text,
  city text,
  country text,
  campaign_id text,
  campaign text,                     -- what they are in
  step_id text,
  step int,                          -- the step they are on
  steps int,
  pitch text,                        -- what is being pitched to them now (subject or opener)
  sender text,                       -- the mailbox or LinkedIn account it goes from
  status text not null default 'queued'
    check (status in ('queued','sent','opened','replied','meeting','bounced','paused','finished','stopped')),
  opens int not null default 0,
  reply text,                        -- what they said, when we can read it
  reply_kind text,                   -- interested, later, redirect, objection, ooo, unsubscribe, hostile
  reply_at timestamptz,
  next_action text,                  -- what the OS will do next, or what waits for Kaavish
  added_at timestamptz,
  last_event_at timestamptz,
  synced_at timestamptz not null default now(),
  unique (org_id, source, external_id)
);

create index if not exists outreach_recent on os.outreach (org_id, last_event_at desc nulls last);
create index if not exists outreach_status on os.outreach (org_id, status);

-- One row per sync run, so the board can say how fresh it is.
create table if not exists os.syncs (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  source text not null,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  rows int,
  note text
);

alter table os.pitches enable row level security;
alter table os.outreach enable row level security;
alter table os.syncs enable row level security;

-- ---------- sync helpers: the sync passes raw rows, the database does the mapping ----------

-- Status rank, so a sync never moves someone backwards (a reply stays a reply).
create or replace function os.outreach_rank(s text) returns int language sql immutable as $$
  select case s when 'meeting' then 9 when 'replied' then 8 when 'bounced' then 7 when 'stopped' then 6
    when 'opened' then 5 when 'finished' then 4 when 'paused' then 4 when 'sent' then 3 else 1 end
$$;

-- Fill merge fields in a subject line with the person's own details.
create or replace function os.outreach_fill(t text, first text, company text) returns text language sql immutable as $$
  select regexp_replace(regexp_replace(regexp_replace(coalesce(t, ''),
    '\{\{\s*first_name\s*\}\}', coalesce(nullif(first, ''), 'there'), 'gi'),
    '\{\{\s*(company|company_name|account_name)\s*\}\}', coalesce(nullif(company, ''), 'your company'), 'gi'),
    '\{\{[^}]*\}\}', '', 'g')
$$;

-- Steps of a campaign. rows: [{campaign_id, campaign, step_id, position, steps, step_type, wait_days, subject, body, active}]
create or replace function os.pitches_upsert(src text, rows jsonb) returns int language plpgsql as $$
declare n int;
begin
  insert into os.pitches (org_id, source, campaign_id, campaign, step_id, position, steps, step_type, wait_days, subject, body, active, updated_at)
  select o.id, src, r.campaign_id, r.campaign, r.step_id, r.position, r.steps, r.step_type, r.wait_days, r.subject, left(r.body, 6000), coalesce(r.active, true), now()
  from os.orgs o, jsonb_to_recordset(rows) as r(campaign_id text, campaign text, step_id text, position int, steps int,
    step_type text, wait_days int, subject text, body text, active boolean)
  where o.slug = 'mask360'
  on conflict (org_id, source, step_id) do update set campaign = excluded.campaign, position = excluded.position,
    steps = excluded.steps, step_type = excluded.step_type, wait_days = excluded.wait_days, subject = excluded.subject,
    body = excluded.body, active = excluded.active, updated_at = now();
  get diagnostics n = row_count;
  return n;
end $$;

-- People in an Apollo sequence, straight from contacts search.
-- rows: [{xid, cid, seq, name, first, title, org, domain, email, li, city, country, cs, step_id, from, added, last}]
-- cs is the contact's status in that sequence (active, paused, finished, failed).
create or replace function os.outreach_upsert_apollo(rows jsonb) returns int language plpgsql as $$
declare n int;
begin
  with o as (select id from os.orgs where slug = 'mask360'),
  -- One row per person per sequence. Apollo's contact_campaign_statuses id is shared by everyone
  -- added in one batch, so the key is contact id + sequence id, and duplicates in a page collapse.
  x as (
    select distinct on (x.cid, x.seq) x.*
    from jsonb_to_recordset(rows) as x(xid text, cid text, seq text, name text, first text, title text, org text, domain text,
      email text, li text, city text, country text, cs text, step_id text, "from" text, added timestamptz, last timestamptz)
    where x.cid is not null and x.seq is not null
    order by x.cid, x.seq, x.last desc nulls last
  ),
  r as (
    select x.*, p.position as pos, p.steps as nsteps, p.campaign as seqname
    from x left join os.pitches p on p.source = 'apollo' and p.step_id = x.step_id
  ),
  m as (
    select r.*,
      case when r.cs = 'failed' then 'bounced' when r.cs = 'paused' then 'paused' when r.cs = 'finished' then 'finished'
           when coalesce(r.pos, 1) > 1 then 'sent' else 'queued' end as base,
      (select q.subject from os.pitches q where q.source = 'apollo' and q.campaign_id = r.seq and q.subject is not null and q.subject <> ''
         and q.position <= case when r.cs = 'finished' then 999 when coalesce(r.pos, 1) > 1 then r.pos - 1 else 1 end
       order by q.position desc limit 1) as subj
    from r
  )
  insert into os.outreach as t (org_id, source, external_id, channel, contact_ref, full_name, title, company, domain, email,
    linkedin_url, city, country, campaign_id, campaign, step_id, step, steps, pitch, sender, status, added_at, last_event_at, synced_at)
  select o.id, 'apollo', m.cid || ':' || m.seq, 'email', m.cid, m.name, m.title, m.org, m.domain, m.email, m.li, m.city, m.country,
    m.seq, coalesce(m.seqname, m.seq), m.step_id, m.pos, m.nsteps, os.outreach_fill(m.subj, m.first, m.org), m."from", m.base,
    m.added, m.last, now()
  from m, o
  on conflict (org_id, source, external_id) do update set
    full_name = excluded.full_name, title = excluded.title, company = excluded.company, domain = excluded.domain,
    email = excluded.email, linkedin_url = excluded.linkedin_url, city = excluded.city, country = excluded.country,
    campaign = excluded.campaign, step_id = excluded.step_id, step = excluded.step, steps = excluded.steps,
    pitch = coalesce(excluded.pitch, t.pitch), sender = excluded.sender,
    status = case when os.outreach_rank(t.status) >= os.outreach_rank(excluded.status) then t.status else excluded.status end,
    last_event_at = greatest(t.last_event_at, excluded.last_event_at), synced_at = now();
  get diagnostics n = row_count;
  return n;
end $$;

-- Message events from Apollo: kind is replied, bounced or opened.
-- items: [{cid, seq, opens, at}]; cid is the Apollo contact id.
create or replace function os.outreach_mark_apollo(kind text, items jsonb) returns int language plpgsql as $$
declare n int;
begin
  update os.outreach t set
    status = case when os.outreach_rank(t.status) >= os.outreach_rank(kind) then t.status else kind end,
    opens = greatest(t.opens, coalesce(i.opens, 0)),
    reply_at = case when kind = 'replied' then coalesce(t.reply_at, i."at") else t.reply_at end,
    last_event_at = greatest(t.last_event_at, i."at"),
    next_action = case when kind = 'replied' and t.next_action is null then 'Read the reply and answer it' else t.next_action end,
    synced_at = now()
  from jsonb_to_recordset(items) as i(cid text, seq text, opens int, "at" timestamptz)
  where t.source = 'apollo' and t.contact_ref = i.cid and (i.seq is null or t.campaign_id = i.seq);
  get diagnostics n = row_count;
  return n;
end $$;

-- What the board reads.
create or replace view os.v_outreach_counts as
select o.org_id,
  count(*) as total,
  count(*) filter (where o.status = 'queued') as queued,
  count(*) filter (where o.status in ('sent','opened','replied','meeting','finished')) as pitched,
  count(*) filter (where o.status = 'opened') as opened,
  count(*) filter (where o.status = 'replied') as replied,
  count(*) filter (where o.status = 'meeting') as meetings,
  count(*) filter (where o.status = 'bounced') as bounced,
  count(*) filter (where o.last_event_at > date_trunc('day', now() at time zone 'Asia/Kolkata') at time zone 'Asia/Kolkata') as moved_today
from os.outreach o group by o.org_id;
