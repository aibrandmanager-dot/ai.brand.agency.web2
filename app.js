const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

menuToggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
  mobileNav.toggleAttribute('inert', !isOpen);
  mobileNav.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('nav-lock', isOpen);
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Otwórz menu');
    mobileNav.setAttribute('inert', '');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-lock');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px' },
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const trackedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  },
  { rootMargin: '-25% 0px -65%' },
);

trackedSections.forEach((section) => navObserver.observe(section));

document.querySelectorAll('.accordion details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.accordion details').forEach((other) => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});

const form = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');

const SUPABASE_CONFIG = {
  url: 'https://igtjpyyxfwyezyvchxfk.supabase.co',
  publishableKey: 'sb_publishable_y4HM1wIINVGRjMZrjmrjOA_iIsilUr2',
};

const isSupabaseConfigured =
  SUPABASE_CONFIG.url.startsWith('https://') &&
  !SUPABASE_CONFIG.url.includes('YOUR_PROJECT_REF') &&
  SUPABASE_CONFIG.publishableKey.startsWith('sb_publishable_');

const setSubmitState = (button, isSubmitting) => {
  button.disabled = isSubmitting;
  button.firstChild.textContent = isSubmitting ? 'Wysyłamy... ' : 'Poproś o wycenę ';
};

const getLeadPayload = (submittedForm) => {
  const data = new FormData(submittedForm);

  return {
    imie: String(data.get('imie') || '').trim(),
    firma: String(data.get('firma') || '').trim(),
    branza: String(data.get('branza') || '').trim(),
    strona: String(data.get('strona') || '').trim() || null,
    email: String(data.get('email') || '').trim(),
    telefon: String(data.get('telefon') || '').trim() || null,
    wiadomosc: String(data.get('wiadomosc') || '').trim(),
    zgoda_na_kontakt: data.get('zgoda_na_kontakt') === 'on',
    source: 'website',
  };
};

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const button = form.querySelector('button[type="submit"]');

  if (!isSupabaseConfigured) {
    formStatus.textContent = 'Formularz czeka na konfigurację Supabase. Uzupełnij adres projektu w pliku app.js.';
    return;
  }

  setSubmitState(button, true);
  formStatus.textContent = '';

  try {
    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/contact_requests`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_CONFIG.publishableKey,
        Authorization: `Bearer ${SUPABASE_CONFIG.publishableKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(getLeadPayload(form)),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Supabase error ${response.status}`);
    }

    formStatus.textContent = 'Dziękujemy. Wiadomość została wysłana — odezwiemy się z propozycją kierunku.';
    form.reset();
  } catch (error) {
    console.error('Supabase form error:', error);
    formStatus.textContent = 'Nie udało się wysłać formularza. Spróbuj ponownie albo napisz do nas bezpośrednio.';
  } finally {
    setSubmitState(button, false);
  }
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

window.addEventListener(
  'scroll',
  () => header?.classList.toggle('scrolled', window.scrollY > 24),
  { passive: true },
);
