-- Run once in Supabase > SQL Editor: allows the new "About you" form to be saved.
alter table public.events drop constraint if exists events_type_check;
alter table public.events add constraint events_type_check check (type in (
  'page_view','quiz_start','profile','answer','quiz_complete','retake',
  'tracker_tap','checkin','checkin_skip'));
