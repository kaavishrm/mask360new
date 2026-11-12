-- Agency OS database. Postgres (Supabase). Everything lives in schema "os".
-- Multi-tenant from day one: every row carries org_id, so a second agency is a second org row.
-- RLS is on for every table with no policies: only the service connection (the OS sessions) can read or write.

create schema if not exists os;

-- ---------- tenancy and control ----------
create table os.orgs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  timezone text not null default 'Asia/Kolkata',
  mode text not null default 'shadow' check (mode in ('shadow','live','paused')),
  owner_email text not null,
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- One row per action key. gate: auto (just do it), notify (do it, tell the owner), approve (draft, queue, wait), never (refuse).
-- In shadow mode every outward action behaves as approve, whatever this table says.
create table os.gates (
  org_id uuid not null references os.orgs(id) on delete cascade,
  action text not null,
  gate text not null check (gate in ('auto','notify','approve','never')),
  outward boolean not null default true,
  limit_value numeric,
  note text,
  updated_at timestamptz not null default now(),
  primary key (org_id, action)
);

create table os.memory (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  kind text not null check (kind in ('decision','preference','fact','lesson','instruction')),
  subject text not null,
  content text not null,
  source text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- market: accounts, people, signals ----------
create table os.accounts (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  name text not null,
  parent text,
  domain text,
  lane text,
  category text,
  market text,
  city text,
  brand_tier text check (brand_tier in ('Luxury','Premium','Mass') or brand_tier is null),
  tier text not null default 'Volume' check (tier in ('Prime','Premium','Volume')),
  fit int, timing int, score int,
  status text not null default 'target' check (status in ('target','engaged','client','past_client','lost','suppressed','partner','competitor')),
  incumbents text,
  signals_summary text,
  source text,
  apollo_org_id text,
  linkedin_url text,
  notes text,
  last_touch_at timestamptz,
  last_signal_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (org_id, name)
);

create table os.people (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  account_id uuid references os.accounts(id) on delete set null,
  full_name text not null,
  first_name text,
  title text,
  bucket text check (bucket in ('decision_maker','brand_marketer','procurement','partner','creator','talent','other') or bucket is null),
  email text,
  email_status text,
  phone text,
  whatsapp text,
  linkedin_url text,
  city text,
  apollo_id text,
  source text,
  do_not_contact boolean not null default false,
  dnc_reason text,
  notes text,
  last_touch_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index people_org_email on os.people(org_id, lower(email)) where email is not null;
create unique index people_org_linkedin on os.people(org_id, linkedin_url) where linkedin_url is not null;

create table os.signals (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  account_id uuid references os.accounts(id) on delete set null,
  kind text not null check (kind in ('pitch','review','appointment','exit','funding','launch','opening','jobs','turmoil','tender','award','press','other')),
  headline text not null,
  url text,
  weight int not null default 1,
  seen_at timestamptz not null default now(),
  acted boolean not null default false,
  unique (org_id, url)
);

-- ---------- conversations ----------
create table os.inbox (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  channel text not null check (channel in ('gmail','linkedin','whatsapp','instagram','website','calendar','call','other')),
  external_id text not null,
  from_addr text,
  subject text,
  category text check (category in ('lead','client','vendor','finance','hiring','legal','press','invite','founder','team','noise','approval')),
  person_id uuid references os.people(id) on delete set null,
  account_id uuid references os.accounts(id) on delete set null,
  summary text,
  state text not null default 'new' check (state in ('new','routed','handled','waiting','escalated','ignored')),
  routed_to text,
  received_at timestamptz,
  handled_at timestamptz,
  unique (org_id, channel, external_id)
);

create table os.touches (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  person_id uuid references os.people(id) on delete set null,
  account_id uuid references os.accounts(id) on delete set null,
  deal_id uuid,
  channel text not null check (channel in ('email','linkedin','whatsapp','call','meeting','event','gift','other')),
  direction text not null check (direction in ('out','in')),
  kind text,
  subject text,
  excerpt text,
  external_id text,
  at timestamptz not null default now()
);

-- ---------- revenue: deals to contracts ----------
create table os.deals (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  account_id uuid references os.accounts(id) on delete set null,
  person_id uuid references os.people(id) on delete set null,
  title text not null,
  lane text,
  unit text check (unit in ('content','experiential','systems','newsroom','advisory','mixed') or unit is null),
  offer text,
  stage text not null default 'replied' check (stage in ('signal','contacted','replied','qualified','discovery','diagnostic','proposal','pitch','negotiation','won','lost','nurture')),
  currency text not null default 'INR' check (currency in ('INR','AED','USD','SAR')),
  value_once numeric,
  value_monthly numeric,
  months int,
  probability int check (probability between 0 and 100),
  next_step text,
  next_step_due date,
  source text,
  lost_reason text,
  notes text,
  stage_changed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  closed_at timestamptz
);
alter table os.touches add constraint touches_deal_fk foreign key (deal_id) references os.deals(id) on delete set null;

create table os.proposals (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  deal_id uuid not null references os.deals(id) on delete cascade,
  version int not null default 1,
  kind text not null default 'proposal' check (kind in ('diagnostic','proposal','pitch','change_order')),
  options jsonb,
  currency text not null default 'INR',
  anchor_total numeric,
  floor_total numeric,
  doc_url text,
  status text not null default 'draft' check (status in ('draft','approved','sent','viewed','accepted','declined','superseded')),
  sent_at timestamptz,
  decided_at timestamptz,
  created_at timestamptz not null default now()
);

create table os.contracts (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  account_id uuid references os.accounts(id) on delete set null,
  deal_id uuid references os.deals(id) on delete set null,
  kind text not null check (kind in ('nda','msa','sow','subscription','addendum','vendor','empanelment','other')),
  title text,
  status text not null default 'draft' check (status in ('draft','sent','redlined','signed','expired','terminated')),
  doc_url text,
  value numeric,
  currency text default 'INR',
  starts_on date,
  ends_on date,
  notice_days int,
  signed_at timestamptz,
  created_at timestamptz not null default now()
);

-- ---------- delivery ----------
create table os.engagements (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  account_id uuid not null references os.accounts(id) on delete restrict,
  deal_id uuid references os.deals(id) on delete set null,
  name text not null,
  unit text not null check (unit in ('content','experiential','systems','newsroom','advisory','mixed')),
  model text not null check (model in ('subscription','retainer','project','diagnostic','event','advisory')),
  entity text not null default 'india' check (entity in ('india','uae')),
  currency text not null default 'INR',
  fee_monthly numeric,
  fee_total numeric,
  billing_day int default 1,
  payment_terms_days int default 30,
  starts_on date,
  ends_on date,
  scope jsonb,
  owner text,
  client_contacts jsonb,
  cadence text default 'weekly',
  health text not null default 'green' check (health in ('green','amber','red')),
  health_note text,
  status text not null default 'onboarding' check (status in ('onboarding','active','paused','ending','ended')),
  drive_folder text,
  source text,
  created_at timestamptz not null default now()
);

create table os.deliverables (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  engagement_id uuid not null references os.engagements(id) on delete cascade,
  title text not null,
  kind text,
  due_on date,
  owner text,
  status text not null default 'planned' check (status in ('planned','in_progress','internal_review','client_review','changes','approved','published','delivered','late','cancelled')),
  in_scope boolean not null default true,
  revision_round int not null default 0,
  url text,
  approval_requested_at timestamptz,
  updated_at timestamptz not null default now()
);

create table os.events (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  engagement_id uuid references os.engagements(id) on delete set null,
  account_id uuid references os.accounts(id) on delete set null,
  name text not null,
  kind text check (kind in ('salon','dinner','launch','retail_weekend','festival','preview','shoot','other')),
  starts_at timestamptz,
  ends_at timestamptz,
  city text,
  venue text,
  capacity int,
  budget numeric,
  currency text default 'INR',
  status text not null default 'planning' check (status in ('idea','planning','confirmed','live','wrapped','cancelled')),
  runsheet_url text,
  created_at timestamptz not null default now()
);

-- The Circle: consented high-net-worth guest database. Consent is required before any invite.
create table os.circle (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  person_id uuid references os.people(id) on delete set null,
  full_name text not null,
  city text,
  segment text,
  interests text[],
  tier text check (tier in ('A','B','C') or tier is null),
  consent boolean not null default false,
  consent_at timestamptz,
  consent_source text,
  introduced_by text,
  last_invited_at timestamptz,
  last_attended_at timestamptz,
  notes text,
  created_at timestamptz not null default now()
);

-- A guest is a Circle member (circle_id) or a prospect or client guest (person_id).
create table os.guests (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references os.events(id) on delete cascade,
  circle_id uuid references os.circle(id) on delete cascade,
  person_id uuid references os.people(id) on delete cascade,
  rsvp text not null default 'invited' check (rsvp in ('shortlist','invited','yes','no','maybe','attended','no_show')),
  plus_ones int default 0,
  notes text,
  constraint guests_who_check check (circle_id is not null or person_id is not null)
);
create unique index guests_event_circle on os.guests (event_id, circle_id) where circle_id is not null;
create unique index guests_event_person on os.guests (event_id, person_id) where circle_id is null and person_id is not null;

-- ---------- supply ----------
create table os.vendors (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  name text not null,
  category text,
  city text,
  contact text,
  email text,
  phone text,
  rates jsonb,
  rating numeric check (rating between 1 and 5),
  gstin text,
  pan text,
  notes text,
  created_at timestamptz not null default now()
);

-- ---------- money ----------
create table os.invoices (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  account_id uuid references os.accounts(id) on delete set null,
  engagement_id uuid references os.engagements(id) on delete set null,
  event_id uuid references os.events(id) on delete set null,
  number text,
  entity text not null default 'india' check (entity in ('india','uae')),
  kind text not null default 'fee' check (kind in ('fee','advance','milestone','media','passthrough','reimbursement','credit_note')),
  currency text not null default 'INR',
  subtotal numeric not null,
  tax_kind text,
  tax_amount numeric not null default 0,
  tds_expected numeric not null default 0,
  total numeric not null,
  period text,
  issued_on date,
  due_on date,
  status text not null default 'draft' check (status in ('draft','approved','sent','part_paid','paid','overdue','disputed','written_off','void')),
  doc_url text,
  sent_at timestamptz,
  paid_on date,
  reminders_sent int not null default 0,
  last_reminder_at timestamptz,
  created_at timestamptz not null default now(),
  unique (org_id, entity, number)
);

create table os.payments (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  invoice_id uuid references os.invoices(id) on delete set null,
  amount numeric not null,
  currency text not null default 'INR',
  tds_deducted numeric default 0,
  received_on date not null,
  reference text,
  created_at timestamptz not null default now()
);

create table os.payables (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  vendor_id uuid references os.vendors(id) on delete set null,
  engagement_id uuid references os.engagements(id) on delete set null,
  event_id uuid references os.events(id) on delete set null,
  po_number text,
  description text not null,
  amount numeric not null,
  currency text not null default 'INR',
  tds_to_deduct numeric default 0,
  due_on date,
  status text not null default 'pending' check (status in ('pending','approved','paid','disputed','cancelled')),
  doc_url text,
  created_at timestamptz not null default now()
);

-- ---------- people ops ----------
create table os.team (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  full_name text not null,
  email text,
  role text,
  unit text,
  kind text not null default 'employee' check (kind in ('founder','employee','freelancer','agent')),
  capacity_hours_week numeric,
  day_rate numeric,
  active boolean not null default true,
  source text,
  notes text
);

-- ---------- work queue, approvals, escalations, ledger ----------
create table os.tasks (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  title text not null,
  owner text not null,
  due_on date,
  status text not null default 'open' check (status in ('open','doing','blocked','done','dropped')),
  deal_id uuid references os.deals(id) on delete set null,
  engagement_id uuid references os.engagements(id) on delete set null,
  account_id uuid references os.accounts(id) on delete set null,
  source text,
  notes text,
  created_at timestamptz not null default now(),
  done_at timestamptz
);

create sequence os.approval_no;
create table os.approvals (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  code text unique not null default ('A' || lpad(nextval('os.approval_no')::text, 4, '0')),
  action text not null,
  agent text not null,
  title text not null,
  detail text,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending','approved','rejected','changes','expired','executed','failed')),
  requested_at timestamptz not null default now(),
  decided_at timestamptz,
  decision_note text,
  executed_at timestamptz,
  result text,
  expires_at timestamptz
);

create table os.escalations (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  severity text not null check (severity in ('red','amber')),
  topic text not null,
  detail text,
  link text,
  status text not null default 'open' check (status in ('open','sent','resolved')),
  raised_by text,
  raised_at timestamptz not null default now(),
  resolved_at timestamptz
);

create table os.runs (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  routine text not null,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  status text not null default 'running' check (status in ('running','ok','partial','failed')),
  summary text,
  counts jsonb,
  errors text
);

create table os.actions (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  run_id uuid references os.runs(id) on delete set null,
  agent text not null,
  action text not null,
  gate_applied text not null,
  target text,
  result text,
  approval_id uuid references os.approvals(id) on delete set null,
  at timestamptz not null default now()
);

create table os.metrics (
  org_id uuid not null references os.orgs(id) on delete cascade,
  period text not null,
  key text not null,
  value numeric,
  note text,
  at timestamptz not null default now(),
  primary key (org_id, period, key)
);

-- ---------- indexes ----------
create index on os.accounts (org_id, tier, score desc);
create index on os.accounts (org_id, status);
create index on os.people (org_id, account_id);
create index on os.signals (org_id, seen_at desc);
create index on os.inbox (org_id, state, received_at desc);
create index on os.touches (org_id, person_id, at desc);
create index on os.deals (org_id, stage, next_step_due);
create index on os.deliverables (org_id, status, due_on);
create index on os.invoices (org_id, status, due_on);
create index payables_org_po on os.payables (org_id, po_number) where po_number is not null;
create index on os.approvals (org_id, status, requested_at);
create index on os.tasks (org_id, status, due_on);
create index on os.actions (org_id, at desc);

-- ---------- views the routines read ----------
create view os.v_pipeline as
select d.org_id, d.stage, count(*) as deals,
       sum(coalesce(d.value_once,0) + coalesce(d.value_monthly,0) * coalesce(d.months,12)) as value,
       sum((coalesce(d.value_once,0) + coalesce(d.value_monthly,0) * coalesce(d.months,12)) * coalesce(d.probability,0) / 100.0) as weighted
from os.deals d where d.stage not in ('won','lost') group by d.org_id, d.stage;

create view os.v_stale_deals as
select d.*, a.name as account, now()::date - d.stage_changed_at::date as days_in_stage
from os.deals d left join os.accounts a on a.id = d.account_id
where d.stage not in ('won','lost','nurture')
  and (d.next_step_due is null or d.next_step_due < current_date or d.stage_changed_at < now() - interval '14 days');

create view os.v_ar_aging as
select i.org_id, i.id, i.number, a.name as account, i.currency, i.total, i.due_on, i.status, i.reminders_sent,
       greatest(0, current_date - i.due_on) as days_overdue,
       case when i.due_on is null then 'undated'
            when current_date <= i.due_on then 'current'
            when current_date - i.due_on <= 30 then '1-30'
            when current_date - i.due_on <= 60 then '31-60'
            when current_date - i.due_on <= 90 then '61-90'
            else '90+' end as bucket
from os.invoices i left join os.accounts a on a.id = i.account_id
where i.status in ('sent','part_paid','overdue','disputed');

create view os.v_concentration as
select e.org_id, a.name as account, e.currency,
       sum(coalesce(e.fee_monthly,0)) as monthly_fee,
       round(100.0 * sum(coalesce(e.fee_monthly,0)) / nullif(sum(sum(coalesce(e.fee_monthly,0))) over (partition by e.org_id, e.currency),0), 1) as pct
from os.engagements e join os.accounts a on a.id = e.account_id
where e.status in ('onboarding','active') group by e.org_id, a.name, e.currency;

create view os.v_approvals_pending as
select org_id, code, action, agent, title, detail, requested_at from os.approvals
where status = 'pending' order by requested_at;

create view os.v_due_deliverables as
select dl.*, e.name as engagement, a.name as account
from os.deliverables dl join os.engagements e on e.id = dl.engagement_id join os.accounts a on a.id = e.account_id
where dl.status not in ('approved','published','delivered','cancelled') and dl.due_on <= current_date + 7;

-- ---------- lock it down ----------
do $$ declare t record; begin
  for t in select tablename from pg_tables where schemaname = 'os' loop
    execute format('alter table os.%I enable row level security', t.tablename);
  end loop;
end $$;
revoke all on schema os from anon, authenticated;
