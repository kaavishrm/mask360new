-- Tenant #1: Mask360. A new agency copies this file, changes the org row and the house/ folder, and keeps the gates.

insert into os.orgs (slug, name, timezone, mode, owner_email, settings) values (
  'mask360', 'Mask360', 'Asia/Kolkata', 'shadow', 'kaavish@mask360.agency',
  jsonb_build_object(
    'owner_name', 'Kaavish Ramchandani',
    'brief_subject_tag', '[M360 OS]',
    'working_hours', '09:00-21:00',
    'working_days', 'Mon-Sat',
    'markets', jsonb_build_array('India','UAE','Saudi'),
    'entities', jsonb_build_object('india','Mask Management, Mumbai','uae','to confirm'),
    'shadow_started', current_date::text,
    'daily_caps', jsonb_build_object('apollo_enroll',150,'apollo_reveal_credits',60,'linkedin_connects',20,'linkedin_dms',25,'email_replies',40)
  )
) on conflict (slug) do nothing;

-- Gates. outward=false actions never leave the building and run as auto even in shadow mode.
insert into os.gates (org_id, action, gate, outward, limit_value, note)
select o.id, g.action, g.gate, g.outward, g.limit_value, g.note from os.orgs o,
(values
  -- internal
  ('db.write','auto',false,null,'Record state in the OS database'),
  ('gmail.label','auto',false,null,'Label and sort email. Never archive, delete or mark read'),
  ('gmail.draft','auto',false,null,'Create Gmail drafts in the right thread'),
  ('brief.owner','auto',false,null,'Send briefs and escalations to the owner only'),
  ('research','auto',false,null,'Web research, enrichment from free sources'),
  ('doc.create','auto',false,null,'Create Google Docs and Sheets in the OS Drive folder'),
  ('task.create','auto',false,null,'Create tasks in os.tasks'),
  -- new business
  ('apollo.reveal','auto',true,60,'Spend Apollo credits to reveal contacts. Daily cap in credits'),
  ('apollo.enroll','auto',true,150,'Add contacts to sequences the owner approved (house/stack.md). Daily cap'),
  ('apollo.sequence_edit','approve',true,null,'Create, edit, activate or pause a sequence'),
  ('linkedin.connect','auto',true,20,'Connection requests with no note or the approved note. Daily cap'),
  ('linkedin.dm','approve',true,25,'First-touch DM after a connection accepts'),
  ('linkedin.reply','approve',true,null,'Replies inside LinkedIn conversations'),
  ('whatsapp.message','approve',true,null,'No WhatsApp API connected. Always a draft with a tap-to-send link'),
  ('email.reply_lead','approve',true,40,'Reply to an inbound lead or positive outreach reply'),
  ('email.followup_prospect','approve',true,null,'Follow-up on a live prospect conversation'),
  ('calendar.book','notify',true,null,'Put a discovery call on the owner calendar inside working hours'),
  ('calendar.respond','approve',true,null,'Accept, decline or move invites'),
  ('diagnostic.send','approve',true,null,'Send a paid diagnostic offer'),
  ('proposal.send','approve',true,null,'Send any proposal or pitch document'),
  ('price.quote','approve',true,null,'State any price or fee in writing'),
  ('discount.offer','approve',true,null,'Any concession on price. Never below the floor in house/pricing.md'),
  ('pitch.accept','approve',true,null,'Say yes to a pitch or RFP'),
  -- contracts
  ('contract.send','approve',true,null,'Send NDA, MSA, SOW or subscription agreement'),
  ('contract.sign','never',true,null,'Only the owner signs'),
  ('empanelment.submit','approve',true,null,'Submit vendor registration packs (KYC, PAN, GST, bank)'),
  -- clients
  ('client.reply','approve',true,null,'Reply to a client email or message'),
  ('client.status_report','approve',true,null,'Weekly status report to a client'),
  ('client.approval_chase','approve',true,null,'Chase a client for pending approvals'),
  ('client.ideas','approve',true,null,'Monthly proactive ideas note to a client'),
  ('client.scope_addendum','approve',true,null,'Quote extra scope as an addendum'),
  ('team.assign','notify',true,null,'Email a team member a task or brief'),
  ('vendor.brief','notify',true,null,'Brief or request a quote from a vendor'),
  ('vendor.po','approve',true,null,'Issue a purchase order or confirm a vendor booking'),
  ('circle.invite','approve',true,null,'Invite a Circle member to an event. Consent required'),
  -- money
  ('invoice.issue_new','approve',true,null,'First invoice on an engagement, or any change in amount'),
  ('invoice.issue_recurring','notify',true,null,'Recurring invoice identical to the last approved one'),
  ('collections.remind','auto',true,null,'Polite reminders at due minus 3, due plus 3 and due plus 10 days'),
  ('collections.escalate','approve',true,null,'Firm reminder, late interest notice or hold on work'),
  ('payables.list','notify',false,null,'Prepare the weekly payables list'),
  ('payables.pay','never',true,null,'No bank access. The owner or finance pays'),
  -- agency brand and people
  ('social.post','approve',true,null,'Post on agency or founder channels'),
  ('press.reply','approve',true,null,'Reply to journalists'),
  ('hiring.reply','approve',true,null,'Reply to candidates'),
  -- hard stops
  ('legal.reply','never',true,null,'Notices, disputes, threats: escalate red, do not reply'),
  ('crisis.reply','never',true,null,'Client crisis or public issue: escalate red, do not reply'),
  ('money.move','never',true,null,'No transfers, refunds or payment instructions, ever')
) as g(action, gate, outward, limit_value, note)
where o.slug = 'mask360'
on conflict (org_id, action) do nothing;
