-- Reconcile: the columns and gate the agent clusters need. Run after schema.sql, seed.sql and 002_clusters.sql.
-- Additive, idempotent, safe to rerun. A fresh schema.sql already has all of this, so rerunning changes nothing.

-- Where an engagement or a team member came from.
alter table os.engagements add column if not exists source text;
alter table os.team add column if not exists source text;

-- The account's home city, next to market.
alter table os.accounts add column if not exists city text;

-- The event host (an account) and when the event ends.
alter table os.events add column if not exists account_id uuid references os.accounts(id) on delete set null;
alter table os.events add column if not exists ends_at timestamptz;

-- Tie invoices and payables to an event, and payables to a PO. Several payables can bill one PO, so the index is not unique.
alter table os.invoices add column if not exists event_id uuid references os.events(id) on delete set null;
alter table os.payables add column if not exists event_id uuid references os.events(id) on delete set null;
alter table os.payables add column if not exists po_number text;
create index if not exists payables_org_po on os.payables (org_id, po_number) where po_number is not null;

-- Guests: a Circle member (circle_id) or a prospect or client guest (person_id). The key moves from (event_id, circle_id) to id.
alter table os.guests add column if not exists id uuid not null default gen_random_uuid();
alter table os.guests add column if not exists person_id uuid references os.people(id) on delete cascade;
do $$ begin
  if exists (select 1 from pg_constraint where conrelid = 'os.guests'::regclass and contype = 'p' and array_length(conkey,1) = 2) then
    alter table os.guests drop constraint guests_pkey;
  end if;
  if not exists (select 1 from pg_constraint where conrelid = 'os.guests'::regclass and contype = 'p') then
    alter table os.guests add constraint guests_pkey primary key (id);
  end if;
end $$;
alter table os.guests alter column circle_id drop not null;
alter table os.guests drop constraint if exists guests_who_check;
alter table os.guests add constraint guests_who_check check (circle_id is not null or person_id is not null);
create unique index if not exists guests_event_circle on os.guests (event_id, circle_id) where circle_id is not null;
create unique index if not exists guests_event_person on os.guests (event_id, person_id) where circle_id is null and person_id is not null;

-- Client posts get their own gate, apart from founder posts.
insert into os.gates (org_id, action, gate, outward, limit_value, note)
select o.id, 'client.post', 'approve', true, null, 'Schedule or publish a client-approved post on a client channel' from os.orgs o
on conflict (org_id, action) do nothing;
update os.gates set note = 'Post on Kaavish''s own channels (founder posts, posted by hand)' where action = 'social.post';
