-- DOTX "Find Your Time" — event log
-- Paste this whole block into Supabase > SQL Editor > New query, then press Run. Safe to run once.

create table if not exists public.events (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  device_id   text not null check (char_length(device_id) <= 64),   -- random id per browser, no personal data
  class_code  text check (char_length(class_code) <= 40),            -- from ?class= in the link, e.g. AKA-8B
  type        text not null check (type in (
                'page_view','quiz_start','profile','answer','quiz_complete','retake',
                'tracker_tap','checkin','checkin_skip')),
  payload     jsonb not null default '{}'::jsonb check (pg_column_size(payload) < 4000)
);

create index if not exists events_created_idx on public.events (created_at);
create index if not exists events_device_idx  on public.events (device_id);

alter table public.events enable row level security;

-- Visitors (the public website) may only ADD rows. They can never read, change or delete.
drop policy if exists "website can add events" on public.events;
create policy "website can add events" on public.events
  for insert to anon with check (true);

-- Only the owner, signed in on the results page, can read.
drop policy if exists "owner can read events" on public.events;
create policy "owner can read events" on public.events
  for select to authenticated
  using ((auth.jwt() ->> 'email') = 'akkineni.sarada@gmail.com');
