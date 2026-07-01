const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

// Initialize Lenis smooth kinetic scrolling website-wide
let lenis = null;
if (window.Lenis) {
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential decay curve for premium inertia feel
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false, // Keep native touch-swipe performance on mobile
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

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

// Custom smooth scroll handler for anchor links with header offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();

    if (lenis) {
      lenis.scrollTo(targetElement, { offset: -88, duration: 1.1 });
    } else {
      const headerOffset = 88;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Remove reveal classes after transition finishes to prevent hover conflicts
        setTimeout(() => {
          entry.target.classList.remove('reveal', 'is-visible');
        }, 850);
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

// Static cards - no hover coordinate tracking required

const animateFaqClose = (detail) => {
  if (!detail.open || detail.dataset.animating === 'true') return;

  const startHeight = detail.offsetHeight;
  const summaryHeight = detail.querySelector('summary')?.offsetHeight || 0;
  detail.dataset.animating = 'true';
  detail.style.height = `${startHeight}px`;

  const animation = detail.animate(
    [
      { height: `${startHeight}px`, opacity: 1 },
      { height: `${summaryHeight}px`, opacity: 0.92 },
    ],
    { duration: 280, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  );

  animation.onfinish = () => {
    detail.open = false;
    detail.style.height = '';
    detail.dataset.animating = 'false';
  };
};

const animateFaqOpen = (detail) => {
  if (detail.open || detail.dataset.animating === 'true') return;

  document.querySelectorAll('.accordion details[open]').forEach((other) => {
    if (other !== detail) animateFaqClose(other);
  });

  const summaryHeight = detail.querySelector('summary')?.offsetHeight || 0;
  detail.open = true;
  const endHeight = detail.offsetHeight;
  detail.dataset.animating = 'true';
  detail.style.height = `${summaryHeight}px`;

  const animation = detail.animate(
    [
      { height: `${summaryHeight}px`, opacity: 0.94 },
      { height: `${endHeight}px`, opacity: 1 },
    ],
    { duration: 360, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  );

  animation.onfinish = () => {
    detail.style.height = '';
    detail.dataset.animating = 'false';
  };
};

document.querySelectorAll('.accordion details').forEach((detail) => {
  detail.querySelector('summary')?.addEventListener('click', (event) => {
    event.preventDefault();
    if (detail.open) animateFaqClose(detail);
    else animateFaqOpen(detail);
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

const initBlurText = () => {
  const titleEl = document.querySelector('[data-content="hero.title"]');
  if (!titleEl) return;

  const text = titleEl.textContent.trim();
  const words = text.split(/\s+/);
  
  titleEl.innerHTML = '';
  titleEl.classList.add('blur-text-container');
  
  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'blur-word';
    if (index === 0 && titleEl.hasAttribute('data-accent-first')) {
      span.classList.add('accent-serif');
    }
    span.textContent = word;
    
    titleEl.appendChild(span);
    if (index < words.length - 1) {
      titleEl.appendChild(document.createTextNode('\u00A0'));
    }

    // Trigger animation with a staggered delay of 45ms per word
    setTimeout(() => {
      span.classList.add('animate-in');
    }, index * 45 + 50); // 50ms page load delay
  });
};

const escapeHTML = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const getNestedValue = (source, key) =>
  key.split('.').reduce((current, part) => (current && current[part] !== undefined ? current[part] : undefined), source);

const renderEditableText = (value, accentFirst = false) => {
  const escaped = escapeHTML(value).replace(/\n/g, '<br />');
  if (!accentFirst) return escaped;

  return escaped.replace(/^(\S+)/, '<span class="accent-serif">$1</span>');
};

const renderDynamicServices = (cards) => {
  const grid = document.querySelector('.v2-service-grid');
  if (!grid || !cards || !Array.isArray(cards)) return;

  grid.innerHTML = cards.map((card, index) => {
    const num = String(index + 1).padStart(2, '0');
    const tagsHTML = (card.tags || '')
      .split(',')
      .map(tag => `<span>${escapeHTML(tag.trim())}</span>`)
      .join('');

    return `
      <a href="#kontakt" class="v2-service-card reveal" data-delay="${index}">
        <div class="service-card-header">
          <span class="card-number">${num}</span>
        </div>
        <div class="service-card-body">
          <h3>${escapeHTML(card.title || '')}</h3>
          <div class="service-tags">
            ${tagsHTML}
          </div>
        </div>
        <div class="service-card-footer">
          <div class="service-arrow" aria-hidden="true">↗</div>
        </div>
      </a>
    `;
  }).join('');
};

const renderDynamicFaq = (questions) => {
  const accordion = document.querySelector('.v2-faq .accordion');
  if (!accordion || !questions || !Array.isArray(questions)) return;

  accordion.innerHTML = questions.map((item, index) => {
    const isOpen = index === 0 ? 'open' : '';
    return `
      <details ${isOpen}>
        <summary>
          <span>${escapeHTML(item.q)}</span>
          <i aria-hidden="true"></i>
        </summary>
        <p>${escapeHTML(item.a)}</p>
      </details>
    `;
  }).join('');
};

const renderDynamicProcess = (cards) => {
  const timeline = document.querySelector('.v2-timeline');
  if (!timeline || !cards || !Array.isArray(cards)) return;

  timeline.innerHTML = cards.map((card, index) => {
    const num = String(index + 1).padStart(2, '0');
    return `
      <li class="reveal" data-delay="${index}">
        <span>${num}</span>
        <h3>${escapeHTML(card.title || '')}</h3>
        <p>${escapeHTML(card.desc || '')}</p>
      </li>
    `;
  }).join('');
};

const renderDynamicGallery = (cards) => {
  const gallery = document.querySelector('.v2-gallery');
  if (!gallery || !cards || !Array.isArray(cards)) return;

  gallery.innerHTML = cards.map((card, index) => {
    const imgStyle = card.image ? `background-image: linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.12)), url("${card.image}"); background-size: cover; background-position: center;` : '';
    const fallbackClass = ['art-hero', 'art-product', 'art-beauty', 'art-food'][index % 4];

    return `
      <article class="v2-gallery-card reveal" data-delay="${index}">
        <div class="visual-art ${card.image ? '' : fallbackClass}" style="${imgStyle}" aria-hidden="true">
          ${card.image ? '' : '<div class="hero-shape-a"></div><div class="hero-shape-b"></div>'}
        </div>
        <div class="v2-gallery-info">
          <h3>${escapeHTML(card.title || '')}</h3>
          <p>${escapeHTML(card.desc || '')}</p>
        </div>
      </article>
    `;
  }).join('');
};

const renderDynamicWorth = (cards) => {
  const grid = document.querySelector('.v2-worth-grid');
  if (!grid || !cards || !Array.isArray(cards)) return;

  grid.innerHTML = cards.map((card, index) => {
    const num = String(index + 1).padStart(2, '0');
    return `
      <article class="v2-worth-card reveal" data-delay="${index}">
        <span>${num}</span>
        <h3>${escapeHTML(card.title || '')}</h3>
        <p>${escapeHTML(card.desc || '')}</p>
      </article>
    `;
  }).join('');
};

const renderDynamicNav = (links) => {
  const desktopNav = document.querySelector('[data-nav-menu]');
  const mobileNav = document.querySelector('[data-mobile-nav-links]');
  if (!links || !Array.isArray(links)) return;

  const linksHTML = links.map(link => `<a href="${escapeHTML(link.href)}">${escapeHTML(link.title)}</a>`).join('');
  if (desktopNav) desktopNav.innerHTML = linksHTML;

  if (mobileNav) {
    const ctaBtn = mobileNav.querySelector('.button');
    mobileNav.innerHTML = linksHTML;
    if (ctaBtn) mobileNav.appendChild(ctaBtn);

    mobileNav.querySelectorAll('a:not(.button)').forEach((link) => {
      link.addEventListener('click', () => {
        const header = document.querySelector('[data-header]');
        const menuToggle = document.querySelector('[data-menu-toggle]');
        if (header) header.classList.remove('menu-open');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.setAttribute('aria-label', 'Otwórz menu');
        }
        mobileNav.setAttribute('inert', '');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('nav-lock');
      });
    });
  }
};

const applySiteContent = (content) => {
  if (!content || typeof content !== 'object') return;
  if (content.__version !== 'landing-v3') return;

  // Apply custom theme colors
  if (content.theme) {
    const accent = content.theme.accent || '#FF5A1F';
    const bg = content.theme.bg || '#070707';
    let styleTag = document.getElementById('custom-theme-styles');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'custom-theme-styles';
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `
      :root {
        --accent: ${accent} !important;
        --bg: ${bg} !important;
      }
    `;
  }

  // Render dynamic cards, timeline, gallery, worth, and FAQ
  if (content.offer && Array.isArray(content.offer.cards)) {
    renderDynamicServices(content.offer.cards);
  }
  if (content.faq && Array.isArray(content.faq.questions)) {
    renderDynamicFaq(content.faq.questions);
  }
  if (content.process && Array.isArray(content.process.cards)) {
    renderDynamicProcess(content.process.cards);
  }
  if (content.extra && Array.isArray(content.extra.cards)) {
    renderDynamicGallery(content.extra.cards);
  }
  if (content.worth && Array.isArray(content.worth.cards)) {
    renderDynamicWorth(content.worth.cards);
  }
  if (content.nav && Array.isArray(content.nav.links)) {
    renderDynamicNav(content.nav.links);
  }

  document.querySelectorAll('[data-content]').forEach((element) => {
    const value = getNestedValue(content, element.dataset.content);
    if (typeof value !== 'string') return;
    const arrow = element.querySelector('.button-arrow');
    element.innerHTML = renderEditableText(value, element.hasAttribute('data-accent-first'));
    if (arrow) element.appendChild(arrow);
  });

  document.querySelectorAll('[data-href-key]').forEach((element) => {
    const value = getNestedValue(content, element.dataset.hrefKey);
    if (typeof value !== 'string') return;
    element.setAttribute('href', value);
  });

  document.querySelectorAll('[data-html-content]').forEach((element) => {
    const value = getNestedValue(content, element.dataset.htmlContent);
    if (typeof value !== 'string') return;
    element.innerHTML = value;
  });

  document.querySelectorAll('[data-image-key]').forEach((element) => {
    const value = getNestedValue(content, element.dataset.imageKey);
    if (typeof value !== 'string' || !value.trim()) return;
    element.style.backgroundImage = `linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.12)), url("${value.trim()}")`;
    element.classList.add('has-custom-image');
  });

  // Split and animate the Hero title
  initBlurText();
};

const loadSiteContent = async () => {
  const localOverride = localStorage.getItem('aiba_mock_content');
  if (localOverride) {
    try {
      const parsed = JSON.parse(localOverride);
      if (parsed && parsed.__version === 'landing-v3') {
        applySiteContent(parsed);
      }
    } catch (e) {
      console.warn('Failed parsing mock content override:', e);
    }
  }

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
    if (!localOverride) {
      applySiteContent(row?.content);
    }
  } catch (error) {
    console.warn('Site content was not loaded:', error);
  }
};

loadSiteContent().then(() => {
  const titleEl = document.querySelector('[data-content="hero.title"]');
  if (titleEl && !titleEl.classList.contains('blur-text-container')) {
    initBlurText();
  }
});

const setSubmitState = (button, isSubmitting) => {
  button.disabled = isSubmitting;
  button.firstChild.textContent = isSubmitting ? 'Wysyłamy... ' : 'Wyślij zapytanie ';
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

const WEB3FORMS_ACCESS_KEY = ''; // Paste your key from web3forms.com to receive submissions via email

const saveMockLead = (leadPayload) => {
  try {
    const mockLeads = JSON.parse(localStorage.getItem('aiba_mock_leads') || '[]');
    const newLead = {
      id: `lead-${Date.now()}`,
      created_at: new Date().toISOString(),
      ...leadPayload,
      status: 'new',
    };
    mockLeads.unshift(newLead);
    localStorage.setItem('aiba_mock_leads', JSON.stringify(mockLeads));
  } catch (err) {
    console.warn('Failed to save mock lead:', err);
  }
};

const sendToWeb3Forms = async (leadPayload) => {
  if (!WEB3FORMS_ACCESS_KEY) return false;
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Nowe zapytanie od ${leadPayload.imie} (${leadPayload.firma})`,
        from_name: 'AI Brand Agency Website',
        ...leadPayload
      })
    });
    return response.ok;
  } catch (error) {
    console.warn('Web3Forms send failed:', error);
    return false;
  }
};

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const button = form.querySelector('button[type="submit"]');
  const leadPayload = getLeadPayload(form);

  setSubmitState(button, true);
  formStatus.textContent = '';

  let emailSent = false;
  if (WEB3FORMS_ACCESS_KEY) {
    emailSent = await sendToWeb3Forms(leadPayload);
  }

  if (!isSupabaseConfigured) {
    saveMockLead(leadPayload);
    let msg = 'Dziękujemy (Tryb Demo). Wiadomość została zapisana lokalnie! Sprawdź ją w panelu admina.';
    if (emailSent) {
      msg = 'Dziękujemy! Wiadomość została wysłana na Twój e-mail oraz zapisana lokalnie w panelu admina (Tryb Demo).';
    }
    formStatus.textContent = msg;
    form.reset();
    updateBudgetOutput();
    setSubmitState(button, false);
    return;
  }

  try {
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

// Grainient WebGL2 effect initialization (vanilla JS port)
function initGrainient() {
  const container = document.querySelector('.grainient-bg');
  if (!container) return;

  const OGL = window.ogl;
  if (!OGL) { console.warn('OGL not loaded'); return; }

  // Check WebGL2 support
  const testCanvas = document.createElement('canvas');
  const gl2 = testCanvas.getContext('webgl2');
  if (!gl2) { console.warn('Grainient: WebGL2 not supported'); return; }

  // Site brand colors
  const color1 = '#FF5A1F';
  const color2 = '#1a0f08';
  const color3 = '#0a0a0a';

  const hexToRgb = hex => {
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? [parseInt(r[1],16)/255, parseInt(r[2],16)/255, parseInt(r[3],16)/255] : [1,1,1];
  };

  const renderer = new OGL.Renderer({
    webgl: 2,
    alpha: true,
    antialias: false,
    dpr: Math.min(window.devicePixelRatio || 1, 2)
  });
  const gl = renderer.gl;
  const canvas = gl.canvas;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  container.appendChild(canvas);

  const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

  const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);
  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;
  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);
  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));
  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;
  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}`;

  const geometry = new OGL.Geometry(gl, {
    position: { size: 2, data: new Float32Array([-1,-1, 3,-1, -1,3]) }
  });

  const program = new OGL.Program(gl, {
    vertex,
    fragment,
    uniforms: {
      iTime:           { value: 0 },
      iResolution:     { value: new Float32Array([1, 1]) },
      uTimeSpeed:      { value: 0.25 },
      uColorBalance:   { value: 0.0 },
      uWarpStrength:   { value: 1.0 },
      uWarpFrequency:  { value: 5.0 },
      uWarpSpeed:      { value: 2.0 },
      uWarpAmplitude:  { value: 50.0 },
      uBlendAngle:     { value: 0.0 },
      uBlendSoftness:  { value: 0.05 },
      uRotationAmount: { value: 500.0 },
      uNoiseScale:     { value: 2.0 },
      uGrainAmount:    { value: 0.1 },
      uGrainScale:     { value: 2.0 },
      uGrainAnimated:  { value: 0.0 },
      uContrast:       { value: 1.5 },
      uGamma:          { value: 1.0 },
      uSaturation:     { value: 1.0 },
      uCenterOffset:   { value: new Float32Array([0, 0]) },
      uZoom:           { value: 0.9 },
      uColor1:         { value: new Float32Array(hexToRgb(color1)) },
      uColor2:         { value: new Float32Array(hexToRgb(color2)) },
      uColor3:         { value: new Float32Array(hexToRgb(color3)) }
    }
  });

  const mesh = new OGL.Mesh(gl, { geometry, program });

  const setSize = () => {
    const rect = container.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    renderer.setSize(w, h);
    const res = program.uniforms.iResolution.value;
    res[0] = gl.drawingBufferWidth;
    res[1] = gl.drawingBufferHeight;
  };

  const ro = new ResizeObserver(setSize);
  ro.observe(container);
  setSize();

  let raf = 0;
  let isVisible = true;
  let isPageVisible = !document.hidden;
  const t0 = performance.now();

  const loop = t => {
    program.uniforms.iTime.value = (t - t0) * 0.001;
    renderer.render({ scene: mesh });
    raf = requestAnimationFrame(loop);
  };

  const tryStart = () => {
    if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop);
  };
  const tryStop = () => {
    if (raf !== 0) { cancelAnimationFrame(raf); raf = 0; }
  };

  const io = new IntersectionObserver(
    ([entry]) => { isVisible = entry.isIntersecting; isVisible ? tryStart() : tryStop(); },
    { threshold: 0 }
  );
  io.observe(container);

  const onVisibility = () => {
    isPageVisible = !document.hidden;
    isPageVisible ? tryStart() : tryStop();
  };
  document.addEventListener('visibilitychange', onVisibility);

  tryStart();
}

// Safely execute Grainient WebGL setup
try {
  initGrainient();
} catch (err) {
  console.warn('Grainient initialization failed:', err);
}

// Cookie Banner Consent Handler
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  if (!banner || !acceptBtn) return;

  const isAccepted = localStorage.getItem('cookie-consent-accepted');
  if (!isAccepted) {
    banner.style.display = 'block';
    // Small delay to trigger transition smoothly
    setTimeout(() => {
      banner.classList.add('show');
      banner.removeAttribute('aria-hidden');
    }, 100);
  }

  acceptBtn.addEventListener('click', () => {
    banner.classList.remove('show');
    localStorage.setItem('cookie-consent-accepted', 'true');
    banner.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      banner.style.display = 'none';
    }, 400);
  });
}

// Safely execute Cookie Banner setup
try {
  initCookieBanner();
} catch (err) {
  console.warn('Cookie banner initialization failed:', err);
}

