# AI Brand Agency

Autonomiczny landing page HTML/CSS/JS przygotowany na podstawie briefu. Projekt nie wymaga Node ani instalowania zależności.

## Podgląd

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Następnie otwórz `http://127.0.0.1:4173`.

## Video w hero

Kompozycja hero jest gotowa pod zapętlone video. Przy integracji docelowego materiału umieść plik w `assets/hero-loop.mp4` i dodaj element `<video autoplay muted loop playsinline>` wewnątrz `.stage-media`. Obecna wersja używa lekkiego, animowanego visualu CSS jako bezpiecznego placeholdera.

## Formularz

Formularz ma atrybuty kompatybilne z Netlify Forms (`data-netlify="true"`). W lokalnym podglądzie działa w trybie demonstracyjnym; po wdrożeniu na Netlify wysyła dane bez dodatkowego backendu.
