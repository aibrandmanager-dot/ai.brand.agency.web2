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
const budgetRange = document.querySelector('[data-budget-range]');
const budgetOutput = document.querySelector('[data-budget-output]');

const SUPABASE_CONFIG = {
  url: 'https://igtjpyyxfwyezyvchxfk.supabase.co',
  publishableKey: 'sb_publishable_y4HM1wIINVGRjMZrjmrjOA_iIsilUr2',
};

const isSupabaseConfigured =
  SUPABASE_CONFIG.url.startsWith('https://') &&
  !SUPABASE_CONFIG.url.includes('YOUR_PROJECT_REF') &&
  SUPABASE_CONFIG.publishableKey.startsWith('sb_publishable_');

const formatBudget = (value) => `${Number(value || 0).toLocaleString('pl-PL')} zł`;

const updateBudgetOutput = () => {
  if (!budgetRange || !budgetOutput) return;
  budgetOutput.textContent = formatBudget(budgetRange.value);
};

budgetRange?.addEventListener('input', updateBudgetOutput);
updateBudgetOutput();

const escapeHTML = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const getNestedValue = (source, key) =>
  key.split('.').reduce((current, part) => (current && current[part] !== undefined ? current[part] : undefined), source);

const applySiteContent = (content) => {
  if (!content || typeof content !== 'object') return;
  if (content.__version !== 'landing-v2') return;

  document.querySelectorAll('[data-content]').forEach((element) => {
    const value = getNestedValue(content, element.dataset.content);
    if (typeof value !== 'string') return;
    element.innerHTML = escapeHTML(value).replace(/\n/g, '<br />');
  });

  document.querySelectorAll('[data-image-key]').forEach((element) => {
    const value = getNestedValue(content, element.dataset.imageKey);
    if (typeof value !== 'string' || !value.trim()) return;
    element.style.backgroundImage = `linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.12)), url("${value.trim()}")`;
    element.classList.add('has-custom-image');
  });
};

const loadSiteContent = async () => {
  if (!isSupabaseConfigured) return;

  try {
    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/site_content?id=eq.homepage&select=content`, {
      headers: {
        apikey: SUPABASE_CONFIG.publishableKey,
        Authorization: `Bearer ${SUPABASE_CONFIG.publishableKey}`,
      },
    });

    if (!response.ok) return;
    const [row] = await response.json();
    applySiteContent(row?.content);
  } catch (error) {
    console.warn('Site content was not loaded:', error);
  }
};

loadSiteContent();

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
    budzet: Number(data.get('budzet') || 0),
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
    const leadPayload = getLeadPayload(form);
    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/contact_requests`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_CONFIG.publishableKey,
        Authorization: `Bearer ${SUPABASE_CONFIG.publishableKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(leadPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (errorText.includes('budzet')) {
        const fallbackPayload = {
          ...leadPayload,
          wiadomosc: `${leadPayload.wiadomosc}\n\nBudżet projektu: ${formatBudget(leadPayload.budzet)}`,
        };
        delete fallbackPayload.budzet;

        const fallbackResponse = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/contact_requests`, {
          method: 'POST',
          headers: {
            apikey: SUPABASE_CONFIG.publishableKey,
            Authorization: `Bearer ${SUPABASE_CONFIG.publishableKey}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify(fallbackPayload),
        });

        if (fallbackResponse.ok) {
          formStatus.textContent = 'Dziękujemy. Wiadomość została wysłana — odezwiemy się z propozycją kierunku.';
          form.reset();
          updateBudgetOutput();
          return;
        }
      }
      throw new Error(errorText || `Supabase error ${response.status}`);
    }

    formStatus.textContent = 'Dziękujemy. Wiadomość została wysłana — odezwiemy się z propozycją kierunku.';
    form.reset();
    updateBudgetOutput();
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

if (window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.service-card, .benefit-card, .visual-card, .v2-service-card, .v2-gallery-card, .v2-worth-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}
