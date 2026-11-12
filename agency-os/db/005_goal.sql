-- The revenue target, and how far along we are. Additive, safe to rerun.
-- Target lives in os.orgs.settings->'goal'. Revenue counts what bills inside the window.
-- baseline_inr is what existing clients bill inside the window without any new win (set from the 6 crore plan).
-- weekly holds the weekly scoreboard targets: {replies, meetings, proposals, new_deals, won_inr}.

update os.orgs set settings = jsonb_set(coalesce(settings, '{}'::jsonb), '{goal}',
  coalesce(settings->'goal', '{}'::jsonb) || jsonb_build_object(
    'revenue_inr', 60000000, 'start', '2026-11-12', 'end', '2027-11-11', 'label', '6 crore in 12 months'),
  true)
where slug = 'mask360';

create or replace view os.v_goal as
with p as (
  select o.id as org_id, (o.settings->'goal'->>'revenue_inr')::numeric as target,
    (o.settings->'goal'->>'start')::date as s, (o.settings->'goal'->>'end')::date as e,
    coalesce((o.settings->'goal'->>'baseline_inr')::numeric, 0) as baseline,
    coalesce(o.settings->'goal'->'weekly', '{}'::jsonb) as weekly,
    o.settings->'goal'->>'label' as label
  from os.orgs o where o.settings ? 'goal'
),
d as (
  select d.*, case when d.currency = 'AED' then 22.7 else 1 end as fx,
    coalesce(d.value_once, 0) as v1, coalesce(d.value_monthly, 0) as vm, coalesce(d.months, 12) as mo
  from os.deals d
),
w as (select (date_trunc('week', now() at time zone 'Asia/Kolkata') at time zone 'Asia/Kolkata') as wk)
select p.org_id, p.label, p.target, p.s as starts_on, p.e as ends_on, p.baseline, p.weekly,
  -- won inside the window, counting only the months each retainer bills before the window ends
  coalesce((select sum(d.fx * (d.v1 + d.vm * least(d.mo, greatest(0, floor((p.e - coalesce(d.closed_at, d.stage_changed_at)::date) / 30.4)::int))))
    from d where d.org_id = p.org_id and d.stage = 'won' and coalesce(d.closed_at, d.stage_changed_at)::date between p.s and p.e), 0) as won,
  coalesce((select sum(d.fx * coalesce(d.probability, 0) / 100.0 * (d.v1 + d.vm * least(d.mo, 12)))
    from d where d.org_id = p.org_id and d.stage not in ('won','lost','nurture')), 0) as weighted,
  coalesce((select sum(d.fx * (d.v1 + d.vm * least(d.mo, 12)))
    from d where d.org_id = p.org_id and d.stage not in ('won','lost','nurture')), 0) as open_value,
  (select count(*) from d where d.org_id = p.org_id and d.stage not in ('won','lost','nurture')) as open_deals,
  (select count(*) from d where d.org_id = p.org_id and d.stage not in ('won','lost','nurture') and d.value_once is null and d.value_monthly is null) as unvalued,
  (select count(*) from os.outreach t, w where t.org_id = p.org_id and t.status in ('replied','meeting') and coalesce(t.reply_at, t.last_event_at) >= w.wk) as replies_week,
  (select count(*) from os.outreach t, w where t.org_id = p.org_id and t.status = 'meeting' and t.last_event_at >= w.wk)
    + (select count(*) from d, w where d.org_id = p.org_id and d.stage in ('discovery','diagnostic') and d.stage_changed_at >= w.wk) as meetings_week,
  (select count(*) from os.proposals x, w where x.org_id = p.org_id and x.sent_at >= w.wk)
    + (select count(*) from d, w where d.org_id = p.org_id and d.stage = 'proposal' and d.stage_changed_at >= w.wk
       and not exists (select 1 from os.proposals x2 where x2.deal_id = d.id and x2.sent_at >= w.wk)) as proposals_week,
  (select count(*) from d, w where d.org_id = p.org_id and d.created_at >= w.wk and coalesce(d.source, '') <> 'boot') as new_deals_week,
  coalesce((select sum(d.fx * (d.v1 + d.vm * least(d.mo, 12))) from d, w where d.org_id = p.org_id and d.stage = 'won' and d.closed_at >= w.wk), 0) as won_week
from p;
