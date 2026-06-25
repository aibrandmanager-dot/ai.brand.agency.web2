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

form?.addEventListener('submit', (event) => {
  const isPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);
  if (!isPreview) return;
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.firstChild.textContent = 'Wysyłamy... ';
  window.setTimeout(() => {
    formStatus.textContent = 'Dziękujemy. Formularz działa w trybie demonstracyjnym — po wdrożeniu wiadomość trafi do skrzynki.';
    button.disabled = false;
    button.firstChild.textContent = 'Poproś o wycenę ';
    form.reset();
  }, 700);
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

window.addEventListener(
  'scroll',
  () => header?.classList.toggle('scrolled', window.scrollY > 24),
  { passive: true },
);
