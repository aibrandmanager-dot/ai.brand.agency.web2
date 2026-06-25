# AI Brand Agency

Autonomiczny landing page HTML/CSS/JS przygotowany na podstawie briefu. Projekt nie wymaga Node ani instalowania zależności.

## Podgląd

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Następnie otwórz `http://127.0.0.1:4173`.

## Video w hero

Kompozycja hero jest gotowa pod zapętlone video. Przy integracji docelowego materiału umieść plik w `assets/hero-loop.mp4` i dodaj element `<video autoplay muted loop playsinline>` wewnątrz `.stage-media`. Obecna wersja używa lekkiego, animowanego visualu CSS jako bezpiecznego placeholdera.

## Supabase

Formularz kontaktowy wysyła dane do tabeli `contact_requests` w Supabase. Panel administracyjny (`/admin.html`) korzysta z Supabase Auth, pobiera zgłoszenia i zapisuje treści strony w tabeli `site_content`.

Przed testowaniem nowej wersji uruchom w Supabase SQL Editor plik:

```text
supabase-admin-setup.sql
```

Następnie utwórz konto admina w:

```text
Supabase → Authentication → Users → Add user
```

Tym adresem e-mail i hasłem zalogujesz się w `/admin.html`.

Do frontendu dodany jest tylko publishable key. Nie dodawaj do plików ani GitHuba kluczy `sb_secret_*`.
