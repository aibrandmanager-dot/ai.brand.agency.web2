-- Quick repair for AI Brand Agency admin panel tables.
-- Use this if the full setup SQL failed halfway.

alter table public.contact_requests
  add column if not exists replies jsonb default '[]'::jsonb;

alter table public.contact_requests
  add column if not exists budzet integer;

alter table public.contact_requests
  add column if not exists updated_at timestamptz default now();

create table if not exists public.site_content (
  id text primary key,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_contact_requests_updated_at on public.contact_requests;

create trigger set_contact_requests_updated_at
before update on public.contact_requests
for each row
execute function public.set_updated_at();

drop trigger if exists set_site_content_updated_at on public.site_content;

create trigger set_site_content_updated_at
before update on public.site_content
for each row
execute function public.set_updated_at();

alter table public.contact_requests enable row level security;
alter table public.site_content enable row level security;

drop policy if exists "Allow public contact form inserts"
on public.contact_requests;

create policy "Allow public contact form inserts"
on public.contact_requests
for insert
to anon
with check (
  zgoda_na_kontakt = true
  and length(imie) >= 2
  and length(firma) >= 2
  and length(branza) >= 2
  and email like '%@%'
  and length(wiadomosc) >= 10
  and (budzet is null or budzet between 3000 and 50000)
);

drop policy if exists "Allow authenticated users to read contact requests"
on public.contact_requests;

create policy "Allow authenticated users to read contact requests"
on public.contact_requests
for select
to authenticated
using (true);

drop policy if exists "Allow authenticated users to update contact requests"
on public.contact_requests;

create policy "Allow authenticated users to update contact requests"
on public.contact_requests
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Allow public to read homepage content"
on public.site_content;

create policy "Allow public to read homepage content"
on public.site_content
for select
to anon
using (id = 'homepage');

drop policy if exists "Allow authenticated users to manage site content"
on public.site_content;

create policy "Allow authenticated users to manage site content"
on public.site_content
for all
to authenticated
using (true)
with check (true);

insert into public.site_content (id, content)
values (
  'homepage',
  '{}'::jsonb
)
on conflict (id) do nothing;
