-- Clusters: every agent works as three roles. think plans, verify tries to refute the plan, do executes only what passed.
-- os.agents is the registry the control room draws; os.steps is the live trace of every role on every run.

create table os.agents (
  org_id uuid not null references os.orgs(id) on delete cascade,
  name text not null,
  desk text not null,
  desk_order int not null,
  position int not null,
  job text not null,
  enabled boolean not null default true,
  primary key (org_id, name)
);

create table os.steps (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references os.orgs(id) on delete cascade,
  run_id uuid references os.runs(id) on delete set null,
  agent text not null,
  role text not null check (role in ('think','verify','do')),
  attempt int not null default 1,
  status text not null default 'running' check (status in ('queued','running','done','passed','fixed','failed','killed','blocked','skipped')),
  title text,
  plan jsonb,
  verdict text,
  output text,
  approval_id uuid references os.approvals(id) on delete set null,
  started_at timestamptz not null default now(),
  finished_at timestamptz
);
create index on os.steps (org_id, started_at desc);
create index on os.steps (org_id, agent, role, started_at desc);

-- Latest step per agent and role in the last 24 hours, for the control room.
create view os.v_agent_live as
select a.org_id, a.name, a.desk, a.desk_order, a.position, a.job,
       t.status as think_status, t.title as think_title, t.started_at as think_at,
       v.status as verify_status, v.verdict as verify_verdict, v.started_at as verify_at,
       d.status as do_status, d.output as do_output, d.started_at as do_at,
       greatest(t.started_at, v.started_at, d.started_at) as last_at
from os.agents a
left join lateral (select status, title, started_at from os.steps s where s.org_id = a.org_id and s.agent = a.name and s.role = 'think' and s.started_at > now() - interval '24 hours' order by started_at desc limit 1) t on true
left join lateral (select status, verdict, started_at from os.steps s where s.org_id = a.org_id and s.agent = a.name and s.role = 'verify' and s.started_at > now() - interval '24 hours' order by started_at desc limit 1) v on true
left join lateral (select status, output, started_at from os.steps s where s.org_id = a.org_id and s.agent = a.name and s.role = 'do' and s.started_at > now() - interval '24 hours' order by started_at desc limit 1) d on true;

-- Recent activity across steps, actions, approvals and escalations, newest first.
create view os.v_feed as
select org_id, started_at as at, 'step' as kind, agent, role as detail_kind, coalesce(title, verdict, output) as text, status from os.steps
union all
select org_id, at, 'action', agent, action, coalesce(target, '') || case when result is not null then ': ' || result else '' end, gate_applied from os.actions
union all
select org_id, requested_at, 'approval', agent, action, code || ' ' || title, status from os.approvals
union all
select org_id, raised_at, 'escalation', coalesce(raised_by, 'os-chief'), severity, topic, status from os.escalations;

alter table os.agents enable row level security;
alter table os.steps enable row level security;
