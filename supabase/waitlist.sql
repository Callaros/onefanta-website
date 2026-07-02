create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now(),
  consent_at timestamptz not null default now(),
  source text not null default 'website'
);

alter table public.waitlist_signups enable row level security;

drop policy if exists "Allow public waitlist signup" on public.waitlist_signups;

create policy "Allow public waitlist signup"
on public.waitlist_signups
for insert
to anon
with check (true);

create or replace function public.get_waitlist_signup_count()
returns integer
language sql
security definer
set search_path = public
stable
as $$
  select count(*)::integer
  from public.waitlist_signups;
$$;

revoke all on function public.get_waitlist_signup_count() from public;
grant execute on function public.get_waitlist_signup_count() to anon;
grant execute on function public.get_waitlist_signup_count() to authenticated;
