-- AI Brand Agency: contact form budget + lightweight CMS/admin panel
-- Run this once in Supabase SQL Editor.

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  imie text not null,
  firma text not null,
  branza text not null,
  strona text,
  email text not null,
  telefon text,
  wiadomosc text not null,
  zgoda_na_kontakt boolean not null default false,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'closed', 'spam')),
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.contact_requests
  add column if not exists budzet integer;

alter table public.contact_requests
  add column if not exists imie text;

alter table public.contact_requests
  add column if not exists firma text;

alter table public.contact_requests
  add column if not exists branza text;

alter table public.contact_requests
  add column if not exists strona text;

alter table public.contact_requests
  add column if not exists email text;

alter table public.contact_requests
  add column if not exists telefon text;

alter table public.contact_requests
  add column if not exists wiadomosc text;

alter table public.contact_requests
  add column if not exists zgoda_na_kontakt boolean default false;

alter table public.contact_requests
  add column if not exists status text default 'new';

alter table public.contact_requests
  add column if not exists source text default 'website';

alter table public.contact_requests
  add column if not exists created_at timestamptz default now();

alter table public.contact_requests
  add column if not exists updated_at timestamptz default now();

create index if not exists contact_requests_created_at_idx
  on public.contact_requests (created_at desc);

create index if not exists contact_requests_status_idx
  on public.contact_requests (status);

create index if not exists contact_requests_email_idx
  on public.contact_requests (email);

create table if not exists public.site_content (
  id text primary key,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_content
  add column if not exists content jsonb not null default '{}'::jsonb;

alter table public.site_content
  add column if not exists created_at timestamptz not null default now();

alter table public.site_content
  add column if not exists updated_at timestamptz not null default now();

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

drop policy if exists "Allow authenticated users to read contact requests"
on public.contact_requests;

drop policy if exists "Allow authenticated users to update contact requests"
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

create policy "Allow authenticated users to read contact requests"
on public.contact_requests
for select
to authenticated
using (true);

create policy "Allow authenticated users to update contact requests"
on public.contact_requests
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Allow public to read homepage content"
on public.site_content;

drop policy if exists "Allow authenticated users to manage site content"
on public.site_content;

create policy "Allow public to read homepage content"
on public.site_content
for select
to anon
using (id = 'homepage');

create policy "Allow authenticated users to manage site content"
on public.site_content
for all
to authenticated
using (true)
with check (true);

insert into public.site_content (id, content)
values (
  'homepage',
  '{
    "hero": {
      "title": "Tworzymy kreatywne strony internetowe dla firm, które chcą wyglądać jak marka.",
      "subtitle": "Projektujemy landing pages i rozbudowane strony z bazą danych, domeną, formularzami oraz panelem administracyjnym, w którym możesz później edytować treści, zdjęcia i szczegóły oferty.",
      "cta": "Zamów wycenę strony ↗"
    },
    "offer": {
      "title": "Strony, które nie tylko wyglądają. One pracują.",
      "subtitle": "Budujemy kreatywne, szybkie i gotowe do rozwoju strony dla firm: od landing page po serwis z bazą danych, domeną i panelem do edycji treści.",
      "card1": { "title": "Strony internetowe pod klucz", "text": "Projekt, wdrożenie, formularze, baza danych, podłączenie domeny i publikacja. Dostajesz stronę gotową do działania, a nie tylko ładny obrazek." },
      "card2": { "title": "Landing pages", "text": "Strony sprzedażowe pod konkretną usługę, kampanię, reklamę lub premierę oferty." },
      "card3": { "title": "Strony z bazą danych", "text": "Formularze, zapis zgłoszeń, integracje z Supabase i struktura gotowa pod przyszłą automatyzację." },
      "card4": { "title": "Panel administracyjny", "text": "Prosty panel, w którym możesz zmieniać teksty, zdjęcia, sekcje i statusy zgłoszeń bez dotykania kodu." }
    },
    "web": {
      "title": "Nowoczesne strony internetowe dla firm",
      "subtitle": "Projektujemy strony tak, żeby były gotowe na realne użycie: formularze, baza danych, edycja treści, domena, responsywność i miejsce na rozwój."
    },
    "extra": {
      "title": "Poza stronami tworzymy też zaplecze AI dla marki.",
      "subtitle": "Visuale, video i automatyzacje.",
      "card1": { "title": "Generowanie zdjęć AI", "image": "" },
      "card2": { "title": "Video AI", "image": "" },
      "card3": { "title": "Agenci AI", "image": "" },
      "card4": { "title": "Content dla marki", "image": "" },
      "card5": { "title": "Integracje i workflow", "image": "" },
      "note": "Najważniejsza specjalizacja to strony internetowe. Dodatkowe usługi AI pomagają zrobić z nich pełniejszy, bardziej nowoczesny system sprzedaży i wizerunku."
    },
    "contact": {
      "title": "Chcesz stronę, którą da się pokazać klientom z dumą?",
      "text": "Napisz do nas i opisz krótko swoją firmę. Przygotujemy propozycję kierunku, zakres strony i realny plan wdrożenia."
    }
  }'::jsonb
)
on conflict (id) do nothing;
