const SUPABASE_CONFIG = {
  url: 'https://igtjpyyxfwyezyvchxfk.supabase.co',
  publishableKey: 'sb_publishable_y4HM1wIINVGRjMZrjmrjOA_iIsilUr2',
};

const DEFAULT_SITE_CONTENT = {
  __version: 'landing-v3',
  hero: {
    title: 'Nowoczesne strony dla firm i ekspertów',
    subtitle:
      'Tworzymy strony internetowe, które budują profesjonalny wizerunek, jasno pokazują wartość oferty i prowadzą klientów do kontaktu.',
  },
  offer: {
    title: 'Co tworzymy?',
    subtitle: 'Łączymy nowoczesne strony internetowe, AI visuale i content, żeby Twoja firma wyglądała lepiej online.',
    card1: {
      title: 'Strony internetowe',
      text: 'Nowoczesne strony dla firm, ekspertów i usługodawców.',
    },
    card2: {
      title: 'Visuale AI',
      text: 'Grafiki i obrazy, które wzmacniają wygląd strony i marki.',
    },
    card3: {
      title: 'Digital content',
      text: 'Materiały wizualne do social media, reklam i prezentacji.',
    },
  },
  web: {
    title: 'Profesjonalny wizerunek online',
    subtitle: 'Tworzymy stronę, która buduje zaufanie, porządkuje ofertę i wzmacnia pierwsze wrażenie.',
  },
  extra: {
    title: 'Dodatkowe usługi, które wzmacniają stronę',
    subtitle: 'Jeśli nie masz dobrych materiałów, możemy stworzyć visuale i content dopasowany do Twojej marki.',
    card1: { title: 'AI visuale do strony', image: '' },
    card2: { title: 'Product visuals', image: '' },
    card3: { title: 'Content do social media', image: '' },
    card4: { title: 'AI video / motion', image: '' },
  },
  contact: {
    title: 'Opowiedz nam o swoim projekcie',
    text: 'Opisz swoją firmę i stronę, której potrzebujesz. Wrócimy z propozycją i wstępną wyceną.',
  },
};

const EDITABLE_FIELDS = [
  ['hero.title', 'Hero — główny nagłówek', 'textarea'],
  ['hero.subtitle', 'Hero — opis', 'textarea'],
  ['offer.title', 'Oferta — nagłówek', 'textarea'],
  ['offer.subtitle', 'Oferta — opis', 'textarea'],
  ['offer.card1.title', 'Karta 1 — tytuł', 'input'],
  ['offer.card1.text', 'Karta 1 — opis', 'textarea'],
  ['offer.card2.title', 'Karta 2 — tytuł', 'input'],
  ['offer.card2.text', 'Karta 2 — opis', 'textarea'],
  ['offer.card3.title', 'Karta 3 — tytuł', 'input'],
  ['offer.card3.text', 'Karta 3 — opis', 'textarea'],
  ['web.title', 'Web design — nagłówek', 'textarea'],
  ['web.subtitle', 'Web design — opis', 'textarea'],
  ['extra.title', 'Usługi AI — nagłówek', 'textarea'],
  ['extra.subtitle', 'Usługi AI — podpis', 'input'],
  ['extra.card1.title', 'Usługa AI 1 — tytuł', 'input'],
  ['extra.card1.image', 'Usługa AI 1 — URL zdjęcia', 'input'],
  ['extra.card2.title', 'Usługa AI 2 — tytuł', 'input'],
  ['extra.card2.image', 'Usługa AI 2 — URL zdjęcia', 'input'],
  ['extra.card3.title', 'Usługa AI 3 — tytuł', 'input'],
  ['extra.card3.image', 'Usługa AI 3 — URL zdjęcia', 'input'],
  ['extra.card4.title', 'Usługa AI 4 — tytuł', 'input'],
  ['extra.card4.image', 'Usługa AI 4 — URL zdjęcia', 'input'],
  ['contact.title', 'Kontakt — nagłówek', 'textarea'],
  ['contact.text', 'Kontakt — opis', 'textarea'],
];

const loginSection = document.querySelector('[data-admin-login]');
const dashboard = document.querySelector('[data-admin-dashboard]');
const loginForm = document.querySelector('[data-login-form]');
const loginStatus = document.querySelector('[data-login-status]');
const leadsList = document.querySelector('[data-leads-list]');
const contentEditor = document.querySelector('[data-content-editor]');
const contentJson = document.querySelector('[data-content-json]');
const contentStatus = document.querySelector('[data-content-status]');

let session = JSON.parse(localStorage.getItem('aiba_admin_session') || 'null');
let currentContent = structuredClone(DEFAULT_SITE_CONTENT);

const setStatus = (element, message, isError = false) => {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle('admin-error', isError);
};

const escapeHTML = (value) =>
  String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const getNestedValue = (source, key) =>
  key.split('.').reduce((current, part) => (current && current[part] !== undefined ? current[part] : undefined), source);

const setNestedValue = (source, key, value) => {
  const parts = key.split('.');
  const last = parts.pop();
  const target = parts.reduce((current, part) => {
    current[part] = current[part] && typeof current[part] === 'object' ? current[part] : {};
    return current[part];
  }, source);
  target[last] = value;
};

const headers = (token = session?.access_token) => ({
  apikey: SUPABASE_CONFIG.publishableKey,
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
});

const showDashboard = async () => {
  loginSection.hidden = true;
  dashboard.hidden = false;
  await Promise.all([loadLeads(), loadContent()]);
};

const showLogin = () => {
  dashboard.hidden = true;
  loginSection.hidden = false;
};

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  setStatus(loginStatus, 'Logowanie...');
  const data = new FormData(loginForm);

  try {
    const response = await fetch(`${SUPABASE_CONFIG.url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_CONFIG.publishableKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: String(data.get('email')).trim(),
        password: String(data.get('password')),
      }),
    });

    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error_description || payload.msg || 'Nie udało się zalogować.');

    session = payload;
    localStorage.setItem('aiba_admin_session', JSON.stringify(session));
    setStatus(loginStatus, '');
    await showDashboard();
  } catch (error) {
    setStatus(loginStatus, error.message, true);
  }
});

document.querySelector('[data-logout]')?.addEventListener('click', () => {
  session = null;
  localStorage.removeItem('aiba_admin_session');
  showLogin();
});

document.querySelectorAll('[data-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('[data-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === button.dataset.tab));
  });
});

const leadStatusOptions = ['new', 'contacted', 'qualified', 'closed', 'spam'];

const formatDate = (value) =>
  new Intl.DateTimeFormat('pl-PL', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));

const safeUrl = (value) => {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
};

const renderLeads = (leads) => {
  if (!leads.length) {
    leadsList.innerHTML = '<p class="admin-status">Brak zgłoszeń.</p>';
    return;
  }

  leadsList.innerHTML = leads
    .map(
      (lead) => `
        <article class="lead-card">
          <header>
            <div>
              <h3>${escapeHTML(lead.imie || 'Bez imienia')}</h3>
              <time datetime="${lead.created_at}">${formatDate(lead.created_at)}</time>
            </div>
            <select class="status-select" data-lead-status="${lead.id}" aria-label="Status zgłoszenia">
              ${leadStatusOptions.map((status) => `<option value="${status}" ${lead.status === status ? 'selected' : ''}>${status}</option>`).join('')}
            </select>
          </header>
          <div class="lead-meta">
            <span><b>Firma:</b> ${escapeHTML(lead.firma || '-')}</span>
            <span><b>Branża:</b> ${escapeHTML(lead.branza || '-')}</span>
            <span><b>Budżet:</b> ${lead.budzet ? Number(lead.budzet).toLocaleString('pl-PL') + ' zł' : '-'}</span>
            <span><b>Email:</b> <a href="mailto:${escapeHTML(lead.email)}">${escapeHTML(lead.email || '-')}</a></span>
            <span><b>Telefon:</b> ${escapeHTML(lead.telefon || '-')}</span>
            <span><b>Strona:</b> ${safeUrl(lead.strona) ? `<a href="${escapeHTML(safeUrl(lead.strona))}" target="_blank" rel="noreferrer">${escapeHTML(lead.strona)}</a>` : '-'}</span>
          </div>
          <p class="lead-message">${escapeHTML(lead.wiadomosc || '')}</p>
        </article>
      `,
    )
    .join('');

  document.querySelectorAll('[data-lead-status]').forEach((select) => {
    select.addEventListener('change', async () => {
      await updateLeadStatus(select.dataset.leadStatus, select.value);
    });
  });
};

const loadLeads = async () => {
  leadsList.innerHTML = '<p class="admin-status">Ładowanie zgłoszeń...</p>';

  try {
    const response = await fetch(
      `${SUPABASE_CONFIG.url}/rest/v1/contact_requests?select=*&order=created_at.desc&limit=60`,
      { headers: headers() },
    );
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.message || 'Nie udało się pobrać zgłoszeń.');
    renderLeads(payload);
  } catch (error) {
    leadsList.innerHTML = `<p class="admin-status admin-error">${error.message}. Sprawdź SQL/RLS w Supabase.</p>`;
  }
};

const updateLeadStatus = async (id, status) => {
  await fetch(`${SUPABASE_CONFIG.url}/rest/v1/contact_requests?id=eq.${id}`, {
    method: 'PATCH',
    headers: { ...headers(), Prefer: 'return=minimal' },
    body: JSON.stringify({ status }),
  });
};

document.querySelector('[data-refresh-leads]')?.addEventListener('click', loadLeads);

const renderContentEditor = () => {
  contentEditor.innerHTML = EDITABLE_FIELDS.map(([key, label, type]) => {
    const value = getNestedValue(currentContent, key) || '';
    const wide = type === 'textarea' || key.includes('image') ? ' wide' : '';
    const control =
      type === 'textarea'
        ? `<textarea data-content-field="${key}" rows="4">${value}</textarea>`
        : `<input data-content-field="${key}" value="${value}" placeholder="${key.includes('image') ? 'https://...' : ''}" />`;
    return `<label class="editor-field${wide}"><span>${label}</span>${control}</label>`;
  }).join('');
  contentJson.value = JSON.stringify(currentContent, null, 2);
};

const syncContentFromFields = () => {
  const nextContent = structuredClone(currentContent);
  nextContent.__version = 'landing-v3';
  document.querySelectorAll('[data-content-field]').forEach((field) => setNestedValue(nextContent, field.dataset.contentField, field.value));

  try {
    const jsonContent = JSON.parse(contentJson.value || '{}');
    currentContent = { ...nextContent, ...jsonContent };
  } catch {
    currentContent = nextContent;
  }

  contentJson.value = JSON.stringify(currentContent, null, 2);
};

const loadContent = async () => {
  try {
    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/site_content?id=eq.homepage&select=content`, {
      headers: headers(),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.message || 'Nie udało się pobrać treści.');
    const savedContent = payload[0]?.content;
    currentContent = savedContent?.__version === 'landing-v3' ? savedContent : structuredClone(DEFAULT_SITE_CONTENT);
  } catch (error) {
    setStatus(contentStatus, `${error.message}. Jeżeli to pierwszy raz, uruchom SQL z pliku supabase-admin-setup.sql.`, true);
    currentContent = structuredClone(DEFAULT_SITE_CONTENT);
  }

  renderContentEditor();
};

document.querySelector('[data-save-content]')?.addEventListener('click', async () => {
  syncContentFromFields();
  setStatus(contentStatus, 'Zapisywanie...');

  try {
    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/site_content`, {
      method: 'POST',
      headers: { ...headers(), Prefer: 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify({
        id: 'homepage',
        content: currentContent,
        updated_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const payload = await response.json();
      throw new Error(payload.message || 'Nie udało się zapisać treści.');
    }

    setStatus(contentStatus, 'Zapisano. Odśwież stronę główną, żeby zobaczyć zmiany.');
  } catch (error) {
    setStatus(contentStatus, error.message, true);
  }
});

if (session?.access_token) showDashboard();
else showLogin();
