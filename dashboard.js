const SUPABASE_CONFIG = {
  url: 'https://igtjpyyxfwyezyvchxfk.supabase.co',
  publishableKey: 'sb_publishable_y4HM1wIINVGRjMZrjmrjOA_iIsilUr2',
};

const DEFAULT_SITE_CONTENT = {
  __version: 'landing-v3',
  theme: {
    accent: '#FF5A1F',
    bg: '#070707'
  },
  header: {
    cta_text: 'Zamów wycenę',
    cta_href: '#kontakt'
  },
  nav: {
    links: [
      { title: 'Oferta', href: '#oferta' },
      { title: 'Strony', href: '#strony' },
      { title: 'Proces', href: '#proces' },
      { title: 'Usługi dodatkowe', href: '#uslugi' },
      { title: 'FAQ', href: '#faq' },
      { title: 'Kontakt', href: '#kontakt' }
    ]
  },
  hero: {
    title: 'Nowoczesne strony dla firm i ekspertów',
    subtitle: 'Tworzymy strony internetowe, które budują profesjonalny wizerunek, jasno pokazują wartość oferty i prowadzą klientów do kontaktu.',
    btn1_text: 'Zamów wycenę',
    btn1_href: '#kontakt',
    btn2_text: 'Zobacz ofertę',
    btn2_href: '#oferta'
  },
  offer: {
    title: 'Co tworzymy?',
    subtitle: 'Łączymy nowoczesne strony internetowe, AI visuale i content, żeby Twoja firma wyglądała lepiej online.',
    cards: [
      {
        title: 'Strony internetowe',
        tags: 'Biznesowe, Landing Pages, Wygodne CMS, RWD (Mobile)'
      },
      {
        title: 'Visuale AI',
        tags: 'Grafiki AI, Mockupy, Ilustracje, Zdjęcia produktów'
      },
      {
        title: 'Digital content',
        tags: 'Social Media, Banery, Prezentacje, Wideo & Motion'
      }
    ]
  },
  web: {
    title: 'Profesjonalny wizerunek online',
    subtitle: 'Tworzymy stronę, która buduje zaufanie, porządkuje ofertę i wzmacnia pierwsze wrażenie.',
    cards: [
      { title: 'Strategię strony', desc: 'Przemyślany układ dopasowany do Twojego biznesu.' },
      { title: 'Treści', desc: 'Pomagamy przygotować teksty, które są jasne i przekonujące.' },
      { title: 'Projekt Premium', desc: 'Nowoczesny wygląd zgodny z identyfikacją marki.' },
      { title: 'Kompletne wdrożenie', desc: 'Kodujemy, testujemy i publikujemy stronę.' },
      { title: 'Spokojną głowę', desc: 'Nie musisz zajmować się technicznymi szczegółami - robimy to za Ciebie.' }
    ]
  },
  process: {
    title: 'Prosty proces bez chaosu',
    subtitle: 'Prowadzimy projekt krok po kroku - od pierwszej rozmowy do gotowej strony online.',
    cards: [
      { title: 'Rozmowa', desc: 'Poznajemy firmę, ofertę i cel strony.' },
      { title: 'Struktura', desc: 'Układamy sekcje, komunikację i kierunek wizualny.' },
      { title: 'Projekt', desc: 'Tworzymy pierwszą wersję nowoczesnej strony.' },
      { title: 'Poprawki', desc: 'Dopracowujemy teksty, visuale i szczegóły.' },
      { title: 'Publikacja', desc: 'Przygotowujemy stronę do uruchomienia online.' }
    ]
  },
  extra: {
    title: 'Dodatkowe usługi, które wzmacniają stronę',
    subtitle: 'Jeśli nie masz dobrych materiałów, możemy stworzyć visuale i content dopasowany do Twojej marki.',
    cards: [
      { title: 'AI visuale do strony', desc: 'Grafiki usług, tła i mockupy.', image: '' },
      { title: 'Product visuals', desc: 'Zdjęcia produktów do strony, sklepu i reklam.', image: '' },
      { title: 'Content do social media', desc: 'Materiały wizualne do Instagrama, reklam i prezentacji.', image: '' },
      { title: 'AI video / motion', desc: 'Krótkie animacje i video elementy do digital komunikacji.', image: '' }
    ]
  },
  worth: {
    title: 'Dlaczego warto pracować z nami?',
    subtitle: 'Łączymy design, strukturę i visuale, żeby Twoja firma wyglądała profesjonalnie od pierwszego kontaktu.',
    cards: [
      { title: 'Premium pierwsze wrażenie', desc: 'Strona, która od razu wygląda nowocześnie i profesjonalnie.' },
      { title: 'Jasna prezentacja oferty', desc: 'Pomagamy pokazać usługi w prosty i zrozumiały sposób.' },
      { title: 'Visuale dopasowane do marki', desc: 'Obrazy i grafiki, które pasują do stylu strony.' },
      { title: 'Łatwy kontakt', desc: 'Dodajemy przyciski i formularze ułatwiające kontakt.' }
    ]
  },
  contact: {
    title: 'Opowiedz nam o swoim projekcie',
    text: 'Opisz swoją firmę i stronę, której potrzebujesz. Wrócimy z propozycją i wstępną wyceną.',
    insta_text: 'Nasz Instagram',
    insta_href: 'https://www.instagram.com/ai.brand.agency/',
    consent_html: 'Zapoznałem(-am) się z <a href="polityka-prywatnosci.html" target="_blank" rel="noreferrer" class="consent-link">Polityką Prywatności</a> i wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na przesłane zapytanie.',
    submit_btn_text: 'Wyślij zapytanie'
  },
  faq: {
    title: 'Najczęstsze pytania',
    subtitle: 'Odpowiadamy na pytania, które słyszymy najczęściej. Jeśli nie znajdziesz odpowiedzi — napisz, chętnie pomożemy.',
    questions: [
      { q: 'Ile trwa stworzenie strony?', a: 'Prosta strona może być gotowa w ciągu kilku dni, a bardziej rozbudowany projekt zwykle wymaga więcej czasu.' },
      { q: 'Czy muszę mieć gotowe teksty?', a: 'Nie. Możemy pomóc ułożyć treść i strukturę strony.' },
      { q: 'Czy muszę mieć zdjęcia?', a: 'Nie zawsze. Możemy wykorzystać Twoje materiały albo stworzyć jakościowe AI visuale.' },
      { q: 'Czy strona będzie działać na telefonie?', a: 'Tak. Każdy projekt przygotowujemy również pod mobile.' },
      { q: 'Czy mogę zamówić tylko landing page?', a: 'Tak. Tworzymy landing pages oraz bardziej rozbudowane strony firmowe.' }
    ]
  },
  footer: {
    email_text: 'ai.brand.manager@gmail.com',
    email_href: 'mailto:ai.brand.manager@gmail.com',
    instagram_text: 'Nasz Instagram',
    instagram_href: 'https://www.instagram.com/ai.brand.agency/',
    copyright: 'AI Brand Agency'
  },
  legal: {
    privacy: '',
    cookies: ''
  }
};

// Selectors
const dashboard = document.querySelector('[data-admin-dashboard]');
const leadsList = document.querySelector('[data-leads-list]');
const contentEditor = document.querySelector('[data-content-editor]');
const contentJson = document.querySelector('[data-content-json]');
const contentStatus = document.querySelector('[data-content-status]');
const previewViewport = document.querySelector('[data-cms-preview-viewport]');
const privacyInput = document.getElementById('legal-privacy-input');
const cookiesInput = document.getElementById('legal-cookies-input');
const legalStatus = document.querySelector('[data-legal-status]');

let session = JSON.parse(localStorage.getItem('aiba_admin_session') || 'null');
let currentContent = null;

// Auth check
if (!session || !session.access_token) {
  window.location.href = 'admin.html';
}

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

const headers = () => ({
  apikey: SUPABASE_CONFIG.publishableKey,
  Authorization: `Bearer ${session?.access_token}`,
  'Content-Type': 'application/json',
});

// Logout handler
document.querySelector('[data-logout]')?.addEventListener('click', () => {
  localStorage.removeItem('aiba_admin_session');
  window.location.href = 'admin.html';
});

// Tabs navigation
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

let loadedLeadsCache = [];
let activeLeadId = null;

const renderLeads = (leads) => {
  if (!leads.length) {
    leadsList.innerHTML = '<p class="admin-status">Brak zgłoszeń.</p>';
    return;
  }

  leadsList.innerHTML = leads
    .map(
      (lead) => {
        const isActive = lead.id === activeLeadId;
        return `
          <article class="lead-card ${isActive ? 'active' : ''}" id="lead-card-${lead.id}" onclick="openLeadChat('${lead.id}')" style="cursor:pointer; border-left: 3px solid ${isActive ? 'var(--accent)' : 'transparent'}; transition: all 200ms ease; padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column; gap: 8px;">
            <header style="pointer-events:none; display:flex; justify-content:space-between; align-items:flex-start; width:100%;">
              <div style="text-align:left;">
                <h3 style="font-size:14px; margin:0 0 4px; font-weight:600; color:#fff;">${escapeHTML(lead.imie || 'Bez imienia')}</h3>
                <time datetime="${lead.created_at}" style="font-size:10px; color:var(--muted);">${formatDate(lead.created_at)}</time>
              </div>
              <span class="status-badge status-${lead.status}" style="font-size:9px; font-weight:600; padding:2px 8px; border-radius:10px; background:rgba(255,255,255,0.06); text-transform:uppercase; font-family:'DM Mono'; color:${lead.status === 'new' ? '#ff5a1f' : lead.status === 'contacted' ? '#3b82f6' : lead.status === 'qualified' ? '#10b981' : '#888'};">${lead.status}</span>
            </header>
            <div class="lead-meta" style="pointer-events:none; font-size:11px; display:flex; flex-direction:column; gap:2px; opacity:0.85; text-align:left;">
              <span><b style="color:rgba(255,255,255,0.6);">Firma:</b> ${escapeHTML(lead.firma || '-')}</span>
              <span><b style="color:rgba(255,255,255,0.6);">Branża:</b> ${escapeHTML(lead.branza || '-')}</span>
              <span><b style="color:rgba(255,255,255,0.6);">E-mail:</b> ${escapeHTML(lead.email || '-')}</span>
            </div>
          </article>
        `;
      }
    )
    .join('');
};

window.openLeadChat = (leadId) => {
  activeLeadId = leadId;

  document.querySelectorAll('.lead-card').forEach(card => {
    const isActive = card.id === `lead-card-${leadId}`;
    card.classList.toggle('active', isActive);
    card.style.borderLeft = isActive ? '3px solid var(--accent)' : 'transparent';
    card.style.background = isActive ? 'rgba(255,90,31,0.04)' : 'rgba(255,255,255,0.02)';
  });

  const lead = loadedLeadsCache.find(l => l.id === leadId);
  if (!lead) return;

  const clientTitle = document.getElementById('chat-client-title');
  const clientDot = document.getElementById('chat-client-dot');
  const statusWrapper = document.getElementById('chat-status-wrapper');
  const statusSelect = document.getElementById('chat-status-select');

  if (clientTitle) {
    clientTitle.textContent = `${lead.imie} (${lead.firma || 'Brak firmy'})`;
  }
  if (clientDot) {
    clientDot.style.background = lead.status === 'new' ? '#ff5a1f' : lead.status === 'contacted' ? '#3b82f6' : lead.status === 'qualified' ? '#10b981' : '#666';
    clientDot.style.boxShadow = `0 0 10px ${clientDot.style.background}`;
  }
  if (statusWrapper && statusSelect) {
    statusWrapper.style.display = 'flex';
    statusSelect.value = lead.status;

    const newSelect = statusSelect.cloneNode(true);
    statusSelect.parentNode.replaceChild(newSelect, statusSelect);
    newSelect.addEventListener('change', async (e) => {
      await updateLeadStatus(lead.id, e.target.value);
    });
  }

  let replies = lead.replies || [];
  if (typeof replies === 'string') {
    try { replies = JSON.parse(replies); } catch { replies = []; }
  }

  const localReplies = localStorage.getItem(`aiba_replies_${leadId}`);
  if (localReplies && (!replies || replies.length === 0)) {
    try { replies = JSON.parse(localReplies); } catch {}
  }

  const chatMessages = document.getElementById('chat-messages');
  if (chatMessages) {
    let html = `
      <div class="chat-msg client" style="align-self: flex-start; max-width: 85%; text-align: left; width: 100%;">
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); padding: 14px 18px; border-radius: 16px 16px 16px 0; color: #e5e5e5; font-size: 13px; line-height: 1.6;">
          <div style="font-size: 9px; color: var(--accent); margin-bottom: 8px; font-weight: 600; text-transform: uppercase; font-family:'DM Mono'; letter-spacing: 0.05em;">Wiadomość z formularza</div>
          <p style="margin: 0 0 12px; white-space: pre-wrap; font-size:13.5px; color:#fff;">${escapeHTML(lead.wiadomosc)}</p>
          <div style="padding-top:10px; border-top: 1px solid rgba(255,255,255,0.05); font-size:11.5px; opacity:0.85; display:grid; grid-template-columns: 1fr 1fr; gap:6px 16px;">
            <span><b style="color:rgba(255,255,255,0.5);">Branża:</b> ${escapeHTML(lead.branza || '-')}</span>
            <span><b style="color:rgba(255,255,255,0.5);">Budżet:</b> ${lead.budzet ? Number(lead.budzet).toLocaleString('pl-PL') + ' zł' : '-'}</span>
            <span><b style="color:rgba(255,255,255,0.5);">Email:</b> <a href="mailto:${escapeHTML(lead.email)}" style="color:var(--accent); text-decoration:underline;">${escapeHTML(lead.email)}</a></span>
            <span><b style="color:rgba(255,255,255,0.5);">Telefon:</b> ${escapeHTML(lead.telefon || '-')}</span>
            <span style="grid-column: 1/-1;"><b style="color:rgba(255,255,255,0.5);">Strona WWW:</b> ${lead.strona ? `<a href="${escapeHTML(safeUrl(lead.strona))}" target="_blank" style="color:var(--accent); text-decoration:underline;">${escapeHTML(lead.strona)}</a>` : '-'}</span>
          </div>
        </div>
        <span style="font-size: 9px; color: var(--muted); margin-top: 4px; display: block; padding-left: 4px;">${formatDate(lead.created_at)}</span>
      </div>
    `;

    html += replies.map(r => `
      <div class="chat-msg admin" style="align-self: flex-end; max-width: 80%; text-align: right; margin-top: 4px;">
        <div style="background: var(--accent); color: #fff; padding: 14px 18px; border-radius: 16px 16px 0 16px; text-align: left; font-size: 13px; line-height: 1.6; box-shadow: 0 4px 15px rgba(255,90,31,0.18);">
          <p style="margin: 0; white-space: pre-wrap;">${escapeHTML(r.text)}</p>
        </div>
        <span style="font-size: 9px; color: var(--muted); margin-top: 4px; display: block; padding-right: 4px;">${formatDate(r.created_at)}</span>
      </div>
    `).join('');

    chatMessages.innerHTML = html;
    setTimeout(() => { chatMessages.scrollTop = chatMessages.scrollHeight; }, 50);
  }

  const inputArea = document.getElementById('chat-input-area');
  if (inputArea) {
    inputArea.style.display = 'flex';
    const sendBtn = document.getElementById('chat-send-btn');
    const newSendBtn = sendBtn.cloneNode(true);
    sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);
    newSendBtn.addEventListener('click', () => sendLeadReply(lead));
  }
};

const sendLeadReply = async (lead) => {
  const replyInput = document.getElementById('chat-reply-text');
  const replyText = replyInput.value.trim();
  if (!replyText) return;

  const newReply = {
    sender: 'admin',
    text: replyText,
    created_at: new Date().toISOString()
  };

  let replies = lead.replies || [];
  if (typeof replies === 'string') {
    try { replies = JSON.parse(replies); } catch { replies = []; }
  }
  replies.push(newReply);

  lead.status = 'contacted';
  lead.replies = replies;

  if (session?.is_demo) {
    const userLeads = JSON.parse(localStorage.getItem('aiba_mock_leads') || '[]');
    const idx = userLeads.findIndex(l => l.id === lead.id);
    if (idx !== -1) {
      userLeads[idx] = lead;
    } else {
      userLeads.push(lead);
    }
    localStorage.setItem('aiba_mock_leads', JSON.stringify(userLeads));
  } else {
    await updateLeadStatus(lead.id, 'contacted');
    try {
      const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/contact_requests?id=eq.${lead.id}`, {
        method: 'PATCH',
        headers: { ...headers(), Prefer: 'return=minimal' },
        body: JSON.stringify({ replies }),
      });
      if (!response.ok) throw new Error();
    } catch {
      localStorage.setItem(`aiba_replies_${lead.id}`, JSON.stringify(replies));
    }
  }

  // Trigger mailto client so the email is actually sent!
  const subject = encodeURIComponent('Odp: Zapytanie do AI Brand Agency');
  const body = encodeURIComponent(replyText);
  window.location.href = `mailto:${lead.email}?subject=${subject}&body=${body}`;

  replyInput.value = '';
  renderLeads(loadedLeadsCache);
  openLeadChat(lead.id);
};

const loadLeads = async () => {
  leadsList.innerHTML = '<p class="admin-status">Ładowanie zgłoszeń...</p>';

  if (session?.is_demo) {
    const userLeads = JSON.parse(localStorage.getItem('aiba_mock_leads') || '[]');
    const defaultLeads = [
      {
        id: 'mock-1',
        created_at: new Date(Date.now() - 3600000).toISOString(),
        imie: 'Jan Kowalski',
        firma: 'Kowalski Design',
        branza: 'Wnętrza',
        budzet: 12000,
        email: 'jan@kowalski.pl',
        telefon: '+48 500 600 700',
        strona: 'https://kowalski.pl',
        wiadomosc: 'Potrzebuję nowoczesnej strony wizytówkowej z autorskimi visualalami AI.',
        status: 'new'
      },
      {
        id: 'mock-2',
        created_at: new Date(Date.now() - 86400000).toISOString(),
        imie: 'Anna Nowak',
        firma: 'Serenity Spa',
        branza: 'Beauty / Wellness',
        budzet: 8500,
        email: 'anna@serenityspa.pl',
        telefon: null,
        strona: null,
        wiadomosc: 'Chcemy odświeżyć wizerunek salonu spa. Interesuje nas landing page pod kampanie reklamowe.',
        status: 'contacted'
      }
    ];
    loadedLeadsCache = [...userLeads, ...defaultLeads];
    renderLeads(loadedLeadsCache);
    if (activeLeadId) openLeadChat(activeLeadId);
    return;
  }

  try {
    const response = await fetch(
      `${SUPABASE_CONFIG.url}/rest/v1/contact_requests?select=*&order=created_at.desc&limit=60`,
      { headers: headers() },
    );
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.message || 'Nie udało się pobrać zgłoszeń.');
    loadedLeadsCache = payload;
    renderLeads(loadedLeadsCache);
    if (activeLeadId) openLeadChat(activeLeadId);
  } catch (error) {
    leadsList.innerHTML = `<p class="admin-status admin-error">${error.message}.</p>`;
  }
};

const updateLeadStatus = async (id, status) => {
  const cached = loadedLeadsCache.find(l => l.id === id);
  if (cached) cached.status = status;

  if (session?.is_demo) {
    const userLeads = JSON.parse(localStorage.getItem('aiba_mock_leads') || '[]');
    const lead = userLeads.find(l => l.id === id);
    if (lead) {
      lead.status = status;
      localStorage.setItem('aiba_mock_leads', JSON.stringify(userLeads));
    }
    renderLeads(loadedLeadsCache);
    if (activeLeadId === id) openLeadChat(id);
    return;
  }

  await fetch(`${SUPABASE_CONFIG.url}/rest/v1/contact_requests?id=eq.${id}`, {
    method: 'PATCH',
    headers: { ...headers(), Prefer: 'return=minimal' },
    body: JSON.stringify({ status }),
  });

  renderLeads(loadedLeadsCache);
  if (activeLeadId === id) openLeadChat(id);
};

document.querySelector('[data-refresh-leads]')?.addEventListener('click', loadLeads);

// CMS Configuration
let activeCmsSection = 'hero';

const setupCmsSidebar = () => {
  const sidebarButtons = document.querySelectorAll('[data-cms-section]');
  sidebarButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      syncContentFromFields();
      activeCmsSection = btn.dataset.cmsSection;
      sidebarButtons.forEach((b) => b.classList.toggle('active', b === btn));
      renderContentEditor();
    });
  });
};

// File Uploader handler
window.uploadImage = async (fileInput) => {
  const file = fileInput.files[0];
  if (!file) return;

  const fieldDiv = fileInput.closest('.image-upload-wrapper') || fileInput.closest('.editor-field');
  const textInput = fieldDiv.querySelector('input');
  const originalSpan = fieldDiv.querySelector('span');

  if (originalSpan) {
    originalSpan.textContent = 'Wgrywanie pliku...';
    originalSpan.style.color = 'var(--accent)';
  }

  const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  
  try {
    const uploadUrl = `${SUPABASE_CONFIG.url}/storage/v1/object/site-assets/${fileName}`;
    const response = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_CONFIG.publishableKey,
        Authorization: `Bearer ${session?.access_token}`,
        'Content-Type': file.type,
      },
      body: file
    });

    if (response.ok) {
      const publicUrl = `${SUPABASE_CONFIG.url}/storage/v1/object/public/site-assets/${fileName}`;
      textInput.value = publicUrl;
      textInput.dispatchEvent(new Event('input', { bubbles: true }));
      if (originalSpan) {
        originalSpan.textContent = 'Wgrano pomyślnie!';
        originalSpan.style.color = '#34d399';
        setTimeout(() => { originalSpan.textContent = originalSpan.dataset.originalLabel || 'URL zdjęcia'; originalSpan.style.color = ''; }, 2000);
      }
      updatePreview();
      return;
    }
  } catch (err) {
    console.warn('Supabase storage upload failed, falling back to base64 encoding:', err);
  }

  const reader = new FileReader();
  reader.onload = () => {
    textInput.value = reader.result;
    textInput.dispatchEvent(new Event('input', { bubbles: true }));
    if (originalSpan) {
      originalSpan.textContent = 'Wgrano lokalnie (Base64)!';
      originalSpan.style.color = '#34d399';
      setTimeout(() => { originalSpan.textContent = originalSpan.dataset.originalLabel || 'URL zdjęcia'; originalSpan.style.color = ''; }, 2000);
    }
    updatePreview();
  };
  reader.readAsDataURL(file);
};

const renderContentEditor = () => {
  if (!currentContent) return;

  if (activeCmsSection === 'theme') {
    const accentVal = currentContent.theme?.accent || '#FF5A1F';
    const bgVal = currentContent.theme?.bg || '#070707';

    contentEditor.innerHTML = `
      <div class="editor-field">
        <span>Główny kolor akcentu (Przycisk, detale)</span>
        <input type="color" data-theme-color="accent" value="${accentVal}" style="height:52px; padding:4px; cursor:pointer;" />
        <input type="text" data-theme-text="accent" value="${accentVal}" style="margin-top:8px;" />
      </div>
      <div class="editor-field">
        <span>Kolor tła strony</span>
        <input type="color" data-theme-color="bg" value="${bgVal}" style="height:52px; padding:4px; cursor:pointer;" />
        <input type="text" data-theme-text="bg" value="${bgVal}" style="margin-top:8px;" />
      </div>
    `;

    contentEditor.querySelectorAll('[data-theme-color]').forEach(picker => {
      picker.addEventListener('input', (e) => {
        const type = picker.dataset.themeColor;
        const textInput = contentEditor.querySelector(`[data-theme-text="${type}"]`);
        if (textInput) textInput.value = e.target.value.toUpperCase();
        updatePreview();
      });
    });
    contentEditor.querySelectorAll('[data-theme-text]').forEach(text => {
      text.addEventListener('input', (e) => {
        const type = text.dataset.themeText;
        const picker = contentEditor.querySelector(`[data-theme-color="${type}"]`);
        if (picker && e.target.value.match(/^#[0-9A-F]{6}$/i)) {
          picker.value = e.target.value;
          updatePreview();
        }
      });
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'navigation') {
    // Navigation & Footer Editor (EVERYTHING EDITABLE)
    const headerCtaText = currentContent.header?.cta_text || 'Zamów wycenę';
    const headerCtaHref = currentContent.header?.cta_href || '#kontakt';
    
    const footerEmailText = currentContent.footer?.email_text || 'ai.brand.manager@gmail.com';
    const footerEmailHref = currentContent.footer?.email_href || 'mailto:ai.brand.manager@gmail.com';
    const footerInstaText = currentContent.footer?.instagram_text || 'Nasz Instagram';
    const footerInstaHref = currentContent.footer?.instagram_href || 'https://www.instagram.com/ai.brand.agency/';
    const footerCopy = currentContent.footer?.copyright || 'AI Brand Agency';

    const links = currentContent.nav?.links || [];
    let linksHTML = links.map((link, idx) => `
      <div class="editor-field nav-item" data-nav-index="${idx}" style="grid-column: 1/-1; border:1px solid rgba(255,255,255,0.06); padding:16px; margin-top:12px; position:relative;">
        <span style="font-weight:600; color:var(--accent);">Menu link ${idx + 1}</span>
        <button type="button" class="button button-small" onclick="deleteNavLink(${idx})" style="position:absolute; right:16px; top:12px; min-height:30px; padding:0 12px; background:rgba(255,90,31,0.15); color:var(--accent); border:0;">Usuń</button>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-top:12px;">
          <label style="display:grid; gap:6px;">
            <span>Nazwa przycisku</span>
            <input class="nav-title-input" value="${escapeHTML(link.title)}" />
          </label>
          <label style="display:grid; gap:6px;">
            <span>Link docelowy (kotwica)</span>
            <input class="nav-href-input" value="${escapeHTML(link.href)}" placeholder="#oferta, #kontakt..." />
          </label>
        </div>
      </div>
    `).join('');

    contentEditor.innerHTML = `
      <div class="panel-heading" style="grid-column: 1/-1;">
        <h3>Główny nagłówek (Header CTA)</h3>
      </div>
      <div class="editor-field">
        <span>Tekst przycisku w nagłówku</span>
        <input id="header-cta-text" value="${escapeHTML(headerCtaText)}" />
      </div>
      <div class="editor-field">
        <span>Adres linku przycisku</span>
        <input id="header-cta-href" value="${escapeHTML(headerCtaHref)}" />
      </div>

      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Linki menu głównego</h3>
        <button class="button button-small button-light" type="button" onclick="addNavLink()" style="min-height:38px; padding:0 18px;">Dodaj link +</button>
      </div>
      ${linksHTML}

      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Stopka strony (Footer)</h3>
      </div>
      <div class="editor-field">
        <span>Email tekst</span>
        <input id="footer-email-text" value="${escapeHTML(footerEmailText)}" />
      </div>
      <div class="editor-field">
        <span>Email link (href)</span>
        <input id="footer-email-href" value="${escapeHTML(footerEmailHref)}" />
      </div>
      <div class="editor-field">
        <span>Instagram tekst</span>
        <input id="footer-insta-text" value="${escapeHTML(footerInstaText)}" />
      </div>
      <div class="editor-field">
        <span>Instagram link</span>
        <input id="footer-insta-href" value="${escapeHTML(footerInstaHref)}" />
      </div>
      <div class="editor-field wide">
        <span>Prawa autorskie (Copyright)</span>
        <input id="footer-copy-text" value="${escapeHTML(footerCopy)}" />
      </div>
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'offer') {
    const titleVal = currentContent.offer?.title || '';
    const subVal = currentContent.offer?.subtitle || '';
    const cards = currentContent.offer?.cards || [];

    let cardsHTML = cards.map((card, idx) => `
      <div class="editor-field card-item" data-card-index="${idx}" style="grid-column: 1/-1; border:1px solid rgba(255,255,255,0.06); padding:16px; margin-top:12px; position:relative;">
        <span style="font-weight:600; color:var(--accent);">Karta ${idx + 1}</span>
        <button type="button" class="button button-small" onclick="deleteCard(${idx})" style="position:absolute; right:16px; top:12px; min-height:30px; padding:0 12px; background:rgba(255,90,31,0.15); color:var(--accent); border:0;">Usuń</button>
        <div style="display:grid; grid-template-columns: 1fr 1.5fr; gap:12px; margin-top:12px;">
          <label style="display:grid; gap:6px;">
            <span>Tytuł oferty</span>
            <input class="card-title-input" value="${escapeHTML(card.title)}" />
          </label>
          <label style="display:grid; gap:6px;">
            <span>Tagi (rozdzielone przecinkami)</span>
            <input class="card-tags-input" value="${escapeHTML(card.tags)}" placeholder="Tag 1, Tag 2, Tag 3..." />
          </label>
        </div>
      </div>
    `).join('');

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>Oferta — główny nagłówek</span>
        <textarea id="offer-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>Oferta — podnagłówek</span>
        <textarea id="offer-subtitle-input" rows="3">${subVal}</textarea>
      </div>
      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Karty usług</h3>
        <button class="button button-small button-light" type="button" onclick="addCard()" style="min-height:38px; padding:0 18px;">Dodaj kartę +</button>
      </div>
      ${cardsHTML}
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'web') {
    const titleVal = currentContent.web?.title || '';
    const subVal = currentContent.web?.subtitle || '';
    const cards = currentContent.web?.cards || [];

    let cardsHTML = cards.map((card, idx) => `
      <div class="editor-field" style="grid-column: 1/-1; border:1px solid rgba(255,255,255,0.04); padding:16px; margin-top:12px;">
        <span style="font-weight:600; color:var(--accent);">Karta ${idx + 1} (${escapeHTML(card.title)})</span>
        <div style="display:grid; gap:12px; margin-top:8px;">
          <label style="display:grid; gap:6px;">
            <span>Tytuł</span>
            <input class="web-card-title-input" data-card-idx="${idx}" value="${escapeHTML(card.title)}" />
          </label>
          <label style="display:grid; gap:6px;">
            <span>Opis</span>
            <textarea class="web-card-desc-input" data-card-idx="${idx}" rows="2">${escapeHTML(card.desc)}</textarea>
          </label>
        </div>
      </div>
    `).join('');

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>Wizerunek — główny nagłówek</span>
        <textarea id="web-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>Wizerunek — podnagłówek</span>
        <textarea id="web-subtitle-input" rows="3">${subVal}</textarea>
      </div>
      ${cardsHTML}
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'proces') {
    const titleVal = currentContent.process?.title || '';
    const subVal = currentContent.process?.subtitle || '';
    const cards = currentContent.process?.cards || [];

    let cardsHTML = cards.map((card, idx) => `
      <div class="editor-field process-item" data-process-index="${idx}" style="grid-column: 1/-1; border:1px solid rgba(255,255,255,0.06); padding:16px; margin-top:12px; position:relative;">
        <span style="font-weight:600; color:var(--accent);">Krok ${idx + 1}</span>
        <button type="button" class="button button-small" onclick="deleteProcess(${idx})" style="position:absolute; right:16px; top:12px; min-height:30px; padding:0 12px; background:rgba(255,90,31,0.15); color:var(--accent); border:0;">Usuń</button>
        <div style="display:grid; gap:12px; margin-top:12px;">
          <label style="display:grid; gap:6px;">
            <span>Tytuł kroku</span>
            <input class="process-title-input" value="${escapeHTML(card.title)}" />
          </label>
          <label style="display:grid; gap:6px;">
            <span>Opis kroku</span>
            <textarea class="process-desc-input" rows="2">${escapeHTML(card.desc)}</textarea>
          </label>
        </div>
      </div>
    `).join('');

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>Proces — główny nagłówek</span>
        <textarea id="process-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>Proces — opis</span>
        <textarea id="process-subtitle-input" rows="3">${subVal}</textarea>
      </div>
      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Kroki procesu</h3>
        <button class="button button-small button-light" type="button" onclick="addProcess()" style="min-height:38px; padding:0 18px;">Dodaj krok +</button>
      </div>
      ${cardsHTML}
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'extra') {
    const titleVal = currentContent.extra?.title || '';
    const subVal = currentContent.extra?.subtitle || '';
    const cards = currentContent.extra?.cards || [];

    let cardsHTML = cards.map((card, idx) => `
      <div class="editor-field extra-item" data-extra-index="${idx}" style="grid-column: 1/-1; border:1px solid rgba(255,255,255,0.06); padding:16px; margin-top:12px; position:relative;">
        <span style="font-weight:600; color:var(--accent);">Usługa ${idx + 1}</span>
        <button type="button" class="button button-small" onclick="deleteExtra(${idx})" style="position:absolute; right:16px; top:12px; min-height:30px; padding:0 12px; background:rgba(255,90,31,0.15); color:var(--accent); border:0;">Usuń</button>
        <div style="display:grid; gap:12px; margin-top:12px;">
          <label style="display:grid; gap:6px;">
            <span>Nazwa usługi</span>
            <input class="extra-title-input" value="${escapeHTML(card.title)}" />
          </label>
          <label style="display:grid; gap:6px;">
            <span>Opis krótki</span>
            <input class="extra-desc-input" value="${escapeHTML(card.desc)}" />
          </label>
          <div class="image-upload-wrapper" style="display:grid; gap:6px;">
            <span data-original-label="URL zdjęcia / grafiki (lub prześlij nowe)">URL zdjęcia / grafiki (lub prześlij nowe)</span>
            <div style="display:flex; gap:10px; align-items:center;">
              <input class="extra-image-input" value="${escapeHTML(card.image)}" placeholder="https://... lub wybierz plik" style="flex:1;" />
              <label class="button button-small button-light" style="cursor:pointer; display:inline-grid; place-items:center; min-height:38px; padding:0 14px; margin:0;">
                Wybierz plik
                <input type="file" accept="image/*" style="display:none;" onchange="uploadImage(this)" />
              </label>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>Usługi AI — główny nagłówek</span>
        <textarea id="extra-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>Usługi AI — opis</span>
        <textarea id="extra-subtitle-input" rows="3">${subVal}</textarea>
      </div>
      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Lista dodatkowych usług</h3>
        <button class="button button-small button-light" type="button" onclick="addExtra()" style="min-height:38px; padding:0 18px;">Dodaj usługę +</button>
      </div>
      ${cardsHTML}
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'worth') {
    const titleVal = currentContent.worth?.title || '';
    const subVal = currentContent.worth?.subtitle || '';
    const cards = currentContent.worth?.cards || [];

    let cardsHTML = cards.map((card, idx) => `
      <div class="editor-field worth-item" data-worth-index="${idx}" style="grid-column: 1/-1; border:1px solid rgba(255,255,255,0.06); padding:16px; margin-top:12px; position:relative;">
        <span style="font-weight:600; color:var(--accent);">Punkt ${idx + 1}</span>
        <button type="button" class="button button-small" onclick="deleteWorth(${idx})" style="position:absolute; right:16px; top:12px; min-height:30px; padding:0 12px; background:rgba(255,90,31,0.15); color:var(--accent); border:0;">Usuń</button>
        <div style="display:grid; gap:12px; margin-top:12px;">
          <label style="display:grid; gap:6px;">
            <span>Tytuł punktu</span>
            <input class="worth-title-input" value="${escapeHTML(card.title)}" />
          </label>
          <label style="display:grid; gap:6px;">
            <span>Opis zalety</span>
            <textarea class="worth-desc-input" rows="2">${escapeHTML(card.desc)}</textarea>
          </label>
        </div>
      </div>
    `).join('');

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>Dlaczego warto — główny nagłówek</span>
        <textarea id="worth-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>Dlaczego warto — opis</span>
        <textarea id="worth-subtitle-input" rows="3">${subVal}</textarea>
      </div>
      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Zalety (Karty korzyści)</h3>
        <button class="button button-small button-light" type="button" onclick="addWorth()" style="min-height:38px; padding:0 18px;">Dodaj punkt +</button>
      </div>
      ${cardsHTML}
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'faq') {
    const titleVal = currentContent.faq?.title || '';
    const subVal = currentContent.faq?.subtitle || '';
    const questions = currentContent.faq?.questions || [];

    let questionsHTML = questions.map((item, idx) => `
      <div class="editor-field faq-item" data-faq-index="${idx}" style="grid-column: 1/-1; border:1px solid rgba(255,255,255,0.06); padding:16px; margin-top:12px; position:relative;">
        <span style="font-weight:600; color:var(--accent);">Pytanie ${idx + 1}</span>
        <button type="button" class="button button-small" onclick="deleteFaq(${idx})" style="position:absolute; right:16px; top:12px; min-height:30px; padding:0 12px; background:rgba(255,90,31,0.15); color:var(--accent); border:0;">Usuń</button>
        <div style="display:grid; gap:12px; margin-top:12px;">
          <label style="display:grid; gap:6px;">
            <span>Pytanie</span>
            <input class="faq-q-input" value="${escapeHTML(item.q)}" />
          </label>
          <label style="display:grid; gap:6px;">
            <span>Odpowiedź</span>
            <textarea class="faq-a-input" rows="3">${escapeHTML(item.a)}</textarea>
          </label>
        </div>
      </div>
    `).join('');

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>FAQ — główny nagłówek</span>
        <textarea id="faq-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>FAQ — podnagłówek</span>
        <textarea id="faq-subtitle-input" rows="3">${subVal}</textarea>
      </div>
      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Accordion pytań</h3>
        <button class="button button-small button-light" type="button" onclick="addFaq()" style="min-height:38px; padding:0 18px;">Dodaj pytanie +</button>
      </div>
      ${questionsHTML}
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  // Expanded Hero with Editable Buttons
  if (activeCmsSection === 'hero') {
    const titleVal = currentContent.hero?.title || '';
    const subVal = currentContent.hero?.subtitle || '';
    const btn1Text = currentContent.hero?.btn1_text || 'Zamów wycenę';
    const btn1Href = currentContent.hero?.btn1_href || '#kontakt';
    const btn2Text = currentContent.hero?.btn2_text || 'Zobacz ofertę';
    const btn2Href = currentContent.hero?.btn2_href || '#oferta';

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>Hero — główny nagłówek</span>
        <textarea id="hero-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>Hero — opis podnagłówka</span>
        <textarea id="hero-subtitle-input" rows="4">${subVal}</textarea>
      </div>
      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Przyciski akcji (Buttons)</h3>
      </div>
      <div class="editor-field">
        <span>Przycisk główny (Główny CTA)</span>
        <input id="hero-btn1-text" value="${escapeHTML(btn1Text)}" />
      </div>
      <div class="editor-field">
        <span>Link przycisku głównego</span>
        <input id="hero-btn1-href" value="${escapeHTML(btn1Href)}" />
      </div>
      <div class="editor-field">
        <span>Przycisk poboczny (Ghost Button)</span>
        <input id="hero-btn2-text" value="${escapeHTML(btn2Text)}" />
      </div>
      <div class="editor-field">
        <span>Link przycisku pobocznego</span>
        <input id="hero-btn2-href" value="${escapeHTML(btn2Href)}" />
      </div>
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  if (activeCmsSection === 'contact') {
    const titleVal = currentContent.contact?.title || '';
    const textVal = currentContent.contact?.text || '';
    const instaText = currentContent.contact?.insta_text || 'Nasz Instagram';
    const instaHref = currentContent.contact?.insta_href || 'https://www.instagram.com/ai.brand.agency/';
    const submitBtnText = currentContent.contact?.submit_btn_text || 'Wyślij zapytanie';
    const consentHtml = currentContent.contact?.consent_html || '';

    contentEditor.innerHTML = `
      <div class="editor-field wide">
        <span>Kontakt — główny nagłówek</span>
        <textarea id="contact-title-input" rows="3">${titleVal}</textarea>
      </div>
      <div class="editor-field wide">
        <span>Kontakt — opis podnagłówka</span>
        <textarea id="contact-text-input" rows="3">${textVal}</textarea>
      </div>
      <div class="panel-heading" style="grid-column: 1/-1; margin-top:24px; border-top:1px solid rgba(255,255,255,0.08); padding-top:20px;">
        <h3>Przyciski i formularz kontaktowy</h3>
      </div>
      <div class="editor-field">
        <span>Tekst przycisku Instagrama</span>
        <input id="contact-insta-text" value="${escapeHTML(instaText)}" />
      </div>
      <div class="editor-field">
        <span>Link przycisku Instagrama (URL)</span>
        <input id="contact-insta-href" value="${escapeHTML(instaHref)}" />
      </div>
      <div class="editor-field wide">
        <span>Tekst przycisku wysyłania formularza</span>
        <input id="contact-submit-btn-text" value="${escapeHTML(submitBtnText)}" />
      </div>
      <div class="editor-field wide">
        <span>Klauzula zgody RODO (HTML)</span>
        <textarea id="contact-consent-html" rows="4">${consentHtml}</textarea>
      </div>
    `;

    contentEditor.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', updatePreview);
    });

    updatePreview();
    return;
  }

  const staticFields = {};
  const fields = staticFields[activeCmsSection] || [];
  contentEditor.innerHTML = fields.map(([key, label, type]) => {
    const value = getNestedValue(currentContent, key) || '';
    const control =
      type === 'textarea'
        ? `<textarea data-content-field="${key}" rows="4">${value}</textarea>`
        : `<input data-content-field="${key}" value="${value}" />`;
    return `<label class="editor-field wide"><span>${label}</span>${control}</label>`;
  }).join('');

  contentEditor.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', updatePreview);
  });

  updatePreview();
};

// Add / Delete dynamic card helpers for offer
window.addCard = () => {
  syncContentFromFields();
  if (!currentContent.offer.cards) currentContent.offer.cards = [];
  currentContent.offer.cards.push({ title: 'Nowa usługa', tags: 'Tag 1, Tag 2' });
  renderContentEditor();
};
window.deleteCard = (idx) => {
  syncContentFromFields();
  currentContent.offer.cards.splice(idx, 1);
  renderContentEditor();
};

// Add / Delete nav links
window.addNavLink = () => {
  syncContentFromFields();
  if (!currentContent.nav) currentContent.nav = { links: [] };
  currentContent.nav.links.push({ title: 'Nowa zakładka', href: '#nowa' });
  renderContentEditor();
};
window.deleteNavLink = (idx) => {
  syncContentFromFields();
  currentContent.nav.links.splice(idx, 1);
  renderContentEditor();
};

// Add / Delete dynamic helpers for process
window.addProcess = () => {
  syncContentFromFields();
  if (!currentContent.process.cards) currentContent.process.cards = [];
  currentContent.process.cards.push({ title: 'Nowy etap', desc: 'Opis nowego etapu prac.' });
  renderContentEditor();
};
window.deleteProcess = (idx) => {
  syncContentFromFields();
  currentContent.process.cards.splice(idx, 1);
  renderContentEditor();
};

// Add / Delete dynamic helpers for gallery
window.addExtra = () => {
  syncContentFromFields();
  if (!currentContent.extra.cards) currentContent.extra.cards = [];
  currentContent.extra.cards.push({ title: 'Nowa usługa', desc: 'Opis usługi.', image: '' });
  renderContentEditor();
};
window.deleteExtra = (idx) => {
  syncContentFromFields();
  currentContent.extra.cards.splice(idx, 1);
  renderContentEditor();
};

// Add / Delete dynamic helpers for worth
window.addWorth = () => {
  syncContentFromFields();
  if (!currentContent.worth.cards) currentContent.worth.cards = [];
  currentContent.worth.cards.push({ title: 'Nowa zaleta', desc: 'Opis zalety współpracy.' });
  renderContentEditor();
};
window.deleteWorth = (idx) => {
  syncContentFromFields();
  currentContent.worth.cards.splice(idx, 1);
  renderContentEditor();
};

// Add / Delete dynamic helpers for faq
window.addFaq = () => {
  syncContentFromFields();
  if (!currentContent.faq.questions) currentContent.faq.questions = [];
  currentContent.faq.questions.push({ q: 'Nowe pytanie?', a: 'Odpowiedź.' });
  renderContentEditor();
};
window.deleteFaq = (idx) => {
  syncContentFromFields();
  currentContent.faq.questions.splice(idx, 1);
  renderContentEditor();
};

const syncContentFromFields = () => {
  if (!currentContent) return;

  if (activeCmsSection === 'theme') {
    const accentPicker = contentEditor.querySelector('[data-theme-color="accent"]');
    const bgPicker = contentEditor.querySelector('[data-theme-color="bg"]');
    if (accentPicker && bgPicker) {
      currentContent.theme = {
        accent: accentPicker.value,
        bg: bgPicker.value
      };
    }
  } else if (activeCmsSection === 'hero') {
    const titleVal = document.getElementById('hero-title-input')?.value;
    const subVal = document.getElementById('hero-subtitle-input')?.value;
    const b1Text = document.getElementById('hero-btn1-text')?.value;
    const b1Href = document.getElementById('hero-btn1-href')?.value;
    const b2Text = document.getElementById('hero-btn2-text')?.value;
    const b2Href = document.getElementById('hero-btn2-href')?.value;

    currentContent.hero = {
      title: titleVal,
      subtitle: subVal,
      btn1_text: b1Text,
      btn1_href: b1Href,
      btn2_text: b2Text,
      btn2_href: b2Href
    };
  } else if (activeCmsSection === 'navigation') {
    const headerCtaText = document.getElementById('header-cta-text')?.value;
    const headerCtaHref = document.getElementById('header-cta-href')?.value;
    currentContent.header = { cta_text: headerCtaText, cta_href: headerCtaHref };

    const footerEmailText = document.getElementById('footer-email-text')?.value;
    const footerEmailHref = document.getElementById('footer-email-href')?.value;
    const footerInstaText = document.getElementById('footer-insta-text')?.value;
    const footerInstaHref = document.getElementById('footer-insta-href')?.value;
    const footerCopy = document.getElementById('footer-copy-text')?.value;
    currentContent.footer = {
      email_text: footerEmailText,
      email_href: footerEmailHref,
      instagram_text: footerInstaText,
      instagram_href: footerInstaHref,
      copyright: footerCopy
    };

    const navItems = contentEditor.querySelectorAll('.nav-item');
    const links = [];
    navItems.forEach(item => {
      const title = item.querySelector('.nav-title-input').value;
      const href = item.querySelector('.nav-href-input').value;
      links.push({ title, href });
    });
    currentContent.nav = { links };
  } else if (activeCmsSection === 'offer') {
    const titleInp = document.getElementById('offer-title-input');
    const subInp = document.getElementById('offer-subtitle-input');
    if (titleInp && subInp) {
      currentContent.offer.title = titleInp.value;
      currentContent.offer.subtitle = subInp.value;
    }
    const cardElms = contentEditor.querySelectorAll('.card-item');
    const cards = [];
    cardElms.forEach(card => {
      const title = card.querySelector('.card-title-input').value;
      const tags = card.querySelector('.card-tags-input').value;
      cards.push({ title, tags });
    });
    currentContent.offer.cards = cards;
  } else if (activeCmsSection === 'web') {
    const titleInp = document.getElementById('web-title-input');
    const subInp = document.getElementById('web-subtitle-input');
    if (titleInp && subInp) {
      currentContent.web.title = titleInp.value;
      currentContent.web.subtitle = subInp.value;
    }
    const titles = contentEditor.querySelectorAll('.web-card-title-input');
    const descs = contentEditor.querySelectorAll('.web-card-desc-input');
    const cards = [];
    titles.forEach((titleEl, idx) => {
      cards.push({
        title: titleEl.value,
        desc: descs[idx].value
      });
    });
    currentContent.web.cards = cards;
  } else if (activeCmsSection === 'proces') {
    const titleInp = document.getElementById('process-title-input');
    const subInp = document.getElementById('process-subtitle-input');
    if (titleInp && subInp) {
      currentContent.process.title = titleInp.value;
      currentContent.process.subtitle = subInp.value;
    }
    const items = contentEditor.querySelectorAll('.process-item');
    const cards = [];
    items.forEach(item => {
      const title = item.querySelector('.process-title-input').value;
      const desc = item.querySelector('.process-desc-input').value;
      cards.push({ title, desc });
    });
    currentContent.process.cards = cards;
  } else if (activeCmsSection === 'extra') {
    const titleInp = document.getElementById('extra-title-input');
    const subInp = document.getElementById('extra-subtitle-input');
    if (titleInp && subInp) {
      currentContent.extra.title = titleInp.value;
      currentContent.extra.subtitle = subInp.value;
    }
    const items = contentEditor.querySelectorAll('.extra-item');
    const cards = [];
    items.forEach(item => {
      const title = item.querySelector('.extra-title-input').value;
      const desc = item.querySelector('.extra-desc-input').value;
      const image = item.querySelector('.extra-image-input').value;
      cards.push({ title, desc, image });
    });
    currentContent.extra.cards = cards;
  } else if (activeCmsSection === 'worth') {
    const titleInp = document.getElementById('worth-title-input');
    const subInp = document.getElementById('worth-subtitle-input');
    if (titleInp && subInp) {
      currentContent.worth.title = titleInp.value;
      currentContent.worth.subtitle = subInp.value;
    }
    const items = contentEditor.querySelectorAll('.worth-item');
    const cards = [];
    items.forEach(item => {
      const title = item.querySelector('.worth-title-input').value;
      const desc = item.querySelector('.worth-desc-input').value;
      cards.push({ title, desc });
    });
    currentContent.worth.cards = cards;
  } else if (activeCmsSection === 'faq') {
    const titleInp = document.getElementById('faq-title-input');
    const subInp = document.getElementById('faq-subtitle-input');
    if (titleInp && subInp) {
      currentContent.faq.title = titleInp.value;
      currentContent.faq.subtitle = subInp.value;
    }
    const faqElms = contentEditor.querySelectorAll('.faq-item');
    const questions = [];
    faqElms.forEach(item => {
      const q = item.querySelector('.faq-q-input').value;
      const a = item.querySelector('.faq-a-input').value;
      questions.push({ q, a });
    });
    currentContent.faq.questions = questions;
  } else if (activeCmsSection === 'contact') {
    const titleVal = document.getElementById('contact-title-input')?.value;
    const textVal = document.getElementById('contact-text-input')?.value;
    const instaText = document.getElementById('contact-insta-text')?.value;
    const instaHref = document.getElementById('contact-insta-href')?.value;
    const submitBtnText = document.getElementById('contact-submit-btn-text')?.value;
    const consentHtml = document.getElementById('contact-consent-html')?.value;

    currentContent.contact = {
      title: titleVal,
      text: textVal,
      insta_text: instaText,
      insta_href: instaHref,
      submit_btn_text: submitBtnText,
      consent_html: consentHtml
    };
  } else {
    document.querySelectorAll('[data-content-field]').forEach((field) => {
      setNestedValue(currentContent, field.dataset.contentField, field.value);
    });
  }

  contentJson.value = JSON.stringify(currentContent, null, 2);
};

// High-Fidelity visual previews rendering
const updatePreview = () => {
  if (!previewViewport) return;

  const tempContent = structuredClone(currentContent || DEFAULT_SITE_CONTENT);

  const accent = tempContent.theme?.accent || '#FF5A1F';
  const bg = tempContent.theme?.bg || '#070707';

  let previewStyle = document.getElementById('cms-preview-styles');
  if (!previewStyle) {
    previewStyle = document.createElement('style');
    previewStyle.id = 'cms-preview-styles';
    document.head.appendChild(previewStyle);
  }
  previewStyle.innerHTML = `
    .preview-viewport-box {
      --accent: ${accent} !important;
      --bg: ${bg} !important;
      background: var(--bg) !important;
      border-radius: 12px;
      overflow-y: auto;
      max-height: 480px;
    }
  `;

  // Read active inputs to make preview updates instant
  if (activeCmsSection === 'theme') {
    const accPick = contentEditor.querySelector('[data-theme-color="accent"]');
    const bgPick = contentEditor.querySelector('[data-theme-color="bg"]');
    if (accPick) tempContent.theme.accent = accPick.value;
    if (bgPick) tempContent.theme.bg = bgPick.value;
  } else if (activeCmsSection === 'hero') {
    const titleVal = document.getElementById('hero-title-input')?.value;
    const subVal = document.getElementById('hero-subtitle-input')?.value;
    const b1Text = document.getElementById('hero-btn1-text')?.value;
    const b2Text = document.getElementById('hero-btn2-text')?.value;
    if (titleVal) tempContent.hero.title = titleVal;
    if (subVal) tempContent.hero.subtitle = subVal;
    if (b1Text) tempContent.hero.btn1_text = b1Text;
    if (b2Text) tempContent.hero.btn2_text = b2Text;
  } else if (activeCmsSection === 'navigation') {
    const headerCtaText = document.getElementById('header-cta-text')?.value;
    if (headerCtaText) tempContent.header.cta_text = headerCtaText;
    const footerEmailText = document.getElementById('footer-email-text')?.value;
    const footerInstaText = document.getElementById('footer-insta-text')?.value;
    const footerCopy = document.getElementById('footer-copy-text')?.value;
    if (footerEmailText) tempContent.footer.email_text = footerEmailText;
    if (footerInstaText) tempContent.footer.instagram_text = footerInstaText;
    if (footerCopy) tempContent.footer.copyright = footerCopy;

    const links = [];
    contentEditor.querySelectorAll('.nav-item').forEach(item => {
      links.push({
        title: item.querySelector('.nav-title-input').value,
        href: item.querySelector('.nav-href-input').value
      });
    });
    tempContent.nav.links = links;
  } else if (activeCmsSection === 'offer') {
    const titleInp = document.getElementById('offer-title-input');
    const subInp = document.getElementById('offer-subtitle-input');
    if (titleInp) tempContent.offer.title = titleInp.value;
    if (subInp) tempContent.offer.subtitle = subInp.value;
    const cards = [];
    contentEditor.querySelectorAll('.card-item').forEach(card => {
      cards.push({
        title: card.querySelector('.card-title-input').value,
        tags: card.querySelector('.card-tags-input').value
      });
    });
    tempContent.offer.cards = cards;
  } else if (activeCmsSection === 'web') {
    const titleInp = document.getElementById('web-title-input');
    const subInp = document.getElementById('web-subtitle-input');
    if (titleInp) tempContent.web.title = titleInp.value;
    if (subInp) tempContent.web.subtitle = subInp.value;
    const cards = [];
    contentEditor.querySelectorAll('.web-card-title-input').forEach((titleEl, idx) => {
      const descEl = contentEditor.querySelector(`.web-card-desc-input[data-card-idx="${idx}"]`);
      cards.push({
        title: titleEl.value,
        desc: descEl ? descEl.value : ''
      });
    });
    tempContent.web.cards = cards;
  } else if (activeCmsSection === 'proces') {
    const titleInp = document.getElementById('process-title-input');
    const subInp = document.getElementById('process-subtitle-input');
    if (titleInp) tempContent.process.title = titleInp.value;
    if (subInp) tempContent.process.subtitle = subInp.value;
    const cards = [];
    contentEditor.querySelectorAll('.process-item').forEach(item => {
      cards.push({
        title: item.querySelector('.process-title-input').value,
        desc: item.querySelector('.process-desc-input').value
      });
    });
    tempContent.process.cards = cards;
  } else if (activeCmsSection === 'extra') {
    const titleInp = document.getElementById('extra-title-input');
    const subInp = document.getElementById('extra-subtitle-input');
    if (titleInp) tempContent.extra.title = titleInp.value;
    if (subInp) tempContent.extra.subtitle = subInp.value;
    const cards = [];
    contentEditor.querySelectorAll('.extra-item').forEach(item => {
      cards.push({
        title: item.querySelector('.extra-title-input').value,
        desc: item.querySelector('.extra-desc-input').value,
        image: item.querySelector('.extra-image-input').value
      });
    });
    tempContent.extra.cards = cards;
  } else if (activeCmsSection === 'worth') {
    const titleInp = document.getElementById('worth-title-input');
    const subInp = document.getElementById('worth-subtitle-input');
    if (titleInp) tempContent.worth.title = titleInp.value;
    if (subInp) tempContent.worth.subtitle = subInp.value;
    const cards = [];
    contentEditor.querySelectorAll('.worth-item').forEach(item => {
      cards.push({
        title: item.querySelector('.worth-title-input').value,
        desc: item.querySelector('.worth-desc-input').value
      });
    });
    tempContent.worth.cards = cards;
  } else if (activeCmsSection === 'faq') {
    const titleInp = document.getElementById('faq-title-input');
    const subInp = document.getElementById('faq-subtitle-input');
    if (titleInp) tempContent.faq.title = titleInp.value;
    if (subInp) tempContent.faq.subtitle = subInp.value;
    const questions = [];
    contentEditor.querySelectorAll('.faq-item').forEach(item => {
      questions.push({
        q: item.querySelector('.faq-q-input').value,
        a: item.querySelector('.faq-a-input').value
      });
    });
    tempContent.faq.questions = questions;
  } else if (activeCmsSection === 'contact') {
    const titleVal = document.getElementById('contact-title-input')?.value;
    const textVal = document.getElementById('contact-text-input')?.value;
    const instaText = document.getElementById('contact-insta-text')?.value;
    const submitBtnText = document.getElementById('contact-submit-btn-text')?.value;
    if (titleVal) tempContent.contact.title = titleVal;
    if (textVal) tempContent.contact.text = textVal;
    if (instaText) tempContent.contact.insta_text = instaText;
    if (submitBtnText) tempContent.contact.submit_btn_text = submitBtnText;
  } else {
    contentEditor.querySelectorAll('[data-content-field]').forEach((field) => {
      setNestedValue(tempContent, field.dataset.contentField, field.value);
    });
  }

  let html = '';

  if (activeCmsSection === 'hero') {
    html = `
      <div class="site-v2 preview-viewport-box">
        <section class="v2-hero" style="min-height:auto; padding-top:40px; padding-bottom:40px;">
          <div class="container v2-hero-layout" style="grid-template-columns: 1fr; gap:0;">
            <div class="v2-hero-copy" style="max-width:100%;">
              <span class="section-index" style="color:var(--accent);">Web Design • AI Visuals</span>
              <h1 style="font-size:32px; line-height:1.1; text-align:left; margin-top:14px;">${escapeHTML(tempContent.hero.title)}</h1>
              <p class="v2-lead" style="font-size:13px; text-align:left; margin-top:12px; margin-bottom:24px;">${escapeHTML(tempContent.hero.subtitle)}</p>
              <div class="v2-hero-actions">
                <a class="button button-accent">${escapeHTML(tempContent.hero.btn1_text)} <span class="button-arrow">↗</span></a>
                <a class="button button-ghost" style="margin-left:8px;">${escapeHTML(tempContent.hero.btn2_text)}</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'navigation') {
    html = `
      <div class="site-v2 preview-viewport-box" style="padding:16px;">
        <header class="site-header" style="position:static; background:rgba(255,255,255,0.02); border-radius:8px; padding:12px;">
          <div class="header-inner" style="display:flex; justify-content:space-between; align-items:center;">
            <div class="brand"><span>AI Brand<br />Agency</span></div>
            <nav class="desktop-nav" style="display:flex; gap:10px;">
              ${(tempContent.nav.links || []).slice(0, 4).map(l => `<a href="${escapeHTML(l.href)}" style="font-size:11px;">${escapeHTML(l.title)}</a>`).join('')}
            </nav>
            <a class="button button-small button-light">${escapeHTML(tempContent.header.cta_text)} <span class="button-arrow">↗</span></a>
          </div>
        </header>
        <footer class="site-footer" style="margin-top:20px; padding:20px; background:#090909; border-radius:8px;">
          <div class="footer-top" style="display:flex; justify-content:space-between; flex-direction:column; gap:12px; text-align:left;">
            <p style="font-size:11px; margin:0;">Nowoczesne strony i AI visual content.</p>
            <div class="footer-contact" style="display:flex; flex-direction:column; gap:6px; align-items:flex-start;">
              <a class="footer-email" style="font-size:12px;">${escapeHTML(tempContent.footer.email_text)}</a>
              <a style="font-size:12px; color:var(--accent); text-decoration:underline;">${escapeHTML(tempContent.footer.instagram_text)}</a>
            </div>
          </div>
          <div class="footer-bottom" style="margin-top:20px; border-top:1px solid rgba(255,255,255,0.06); padding-top:12px; display:flex; justify-content:space-between; font-size:10px;">
            <span>© ${escapeHTML(tempContent.footer.copyright)}</span>
          </div>
        </footer>
      </div>
    `;
  } else if (activeCmsSection === 'offer') {
    const cards = tempContent.offer.cards || [];
    const cardsHTML = cards.map((c, i) => {
      const num = String(i + 1).padStart(2, '0');
      const tagsHTML = (c.tags || '').split(',').map(t => `<span>${escapeHTML(t.trim())}</span>`).join('');
      return `
        <div class="v2-service-card" style="min-height:auto; padding:20px; display:block;">
          <div class="service-card-header" style="margin-bottom:12px;"><span class="card-number">${num}</span></div>
          <div class="service-card-body" style="text-align:left;">
            <h3 style="font-size:18px; margin-bottom:8px; color:#fff;">${escapeHTML(c.title)}</h3>
            <div class="service-tags">${tagsHTML}</div>
          </div>
        </div>
      `;
    }).join('');

    html = `
      <div class="site-v2 preview-viewport-box" style="padding:30px 14px;">
        <section class="v2-offer" style="padding:0;">
          <div class="container">
            <div class="v2-section-head" style="grid-template-columns: 1fr; gap:8px; margin-bottom:24px; text-align:left;">
              <h2 style="font-size:24px; text-align:left; color:#fff;">${escapeHTML(tempContent.offer.title)}</h2>
              <p style="font-size:12px; text-align:left; color:var(--muted);">${escapeHTML(tempContent.offer.subtitle)}</p>
            </div>
            <div class="v2-service-grid" style="grid-template-columns: 1fr; gap:12px;">
              ${cardsHTML}
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'web') {
    const cards = tempContent.web.cards || [];
    const cardsHTML = cards.map((c) => `
      <div class="v2-feature-block" style="padding:16px; border:1px solid rgba(0,0,0,0.06); border-radius:14px; background:#fff; text-align:left; position:static;">
        <h4 style="font-size:14px; font-weight:600; color:#111; margin-bottom:4px;">${escapeHTML(c.title)}</h4>
        <p style="font-size:11px; color:#67615a; margin:0;">${escapeHTML(c.desc)}</p>
      </div>
    `).join('');

    html = `
      <div class="site-v2 preview-viewport-box" style="background:#f3f0ea !important; padding:30px 14px; color:#111;">
        <section class="v2-website-value" style="padding:0;">
          <div class="container">
            <div class="features-heading-cell" style="margin-bottom:24px; text-align:left;">
              <h2 style="font-size:24px; color:#111; text-align:left; margin-bottom:8px;">${escapeHTML(tempContent.web.title)}</h2>
              <p style="font-size:12px; color:#67615a; text-align:left;">${escapeHTML(tempContent.web.subtitle)}</p>
            </div>
            <div class="v2-web-system" style="grid-template-columns: 1fr; gap:12px; display:grid;">
              ${cardsHTML}
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'proces') {
    const cards = tempContent.process.cards || [];
    const cardsHTML = cards.map((c, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
        <div style="padding-left:20px; margin-bottom:20px; text-align:left; position:relative;">
          <div style="position:absolute; left:-18px; top:4px; width:10px; height:10px; border-radius:50%; background:var(--accent);"></div>
          <span style="font-family:'DM Mono'; font-size:11px; color:var(--accent); display:block; margin-bottom:4px;">${num}</span>
          <h3 style="font-size:16px; margin:0 0 6px; color:#fff;">${escapeHTML(c.title)}</h3>
          <p style="font-size:11px; color:var(--muted); margin:0;">${escapeHTML(c.desc)}</p>
        </div>
      `;
    }).join('');

    html = `
      <div class="site-v2 preview-viewport-box" style="padding:30px 14px;">
        <section class="v2-process" style="padding:0;">
          <div class="container">
            <div class="v2-section-head" style="grid-template-columns: 1fr; gap:8px; margin-bottom:24px; text-align:left;">
              <h2 style="font-size:24px; text-align:left; color:#fff;">${escapeHTML(tempContent.process.title)}</h2>
              <p style="font-size:12px; text-align:left; color:var(--muted);">${escapeHTML(tempContent.process.subtitle)}</p>
            </div>
            <div class="v2-timeline" style="grid-template-columns: 1fr; padding-left:20px; position:relative;">
              <div style="position:absolute; left:7px; top:0; width:2px; height:100%; background:rgba(255,255,255,0.1);"></div>
              <div style="position:absolute; left:7px; top:0; width:2px; height:60%; background:var(--accent);"></div>
              ${cardsHTML}
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'extra') {
    const cards = tempContent.extra.cards || [];
    const cardsHTML = cards.map((c, i) => {
      const imgStyle = c.image ? `background-image: linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.12)), url(${c.image}); background-size: cover; background-position: center;` : '';
      const fallbackClass = ['art-hero', 'art-product', 'art-beauty', 'art-food'][i % 4];
      return `
        <div class="v2-gallery-card" style="margin:0; text-align:left;">
          <div class="visual-art ${c.image ? '' : fallbackClass}" style="${imgStyle} height:140px;" aria-hidden="true">
            ${c.image ? '' : '<div class="hero-shape-a"></div><div class="hero-shape-b"></div>'}
          </div>
          <div class="v2-gallery-info" style="padding:12px 0;">
            <h3 style="font-size:16px; margin-bottom:4px; color:#fff;">${escapeHTML(c.title)}</h3>
            <p style="font-size:11px; color:var(--muted);">${escapeHTML(c.desc)}</p>
          </div>
        </div>
      `;
    }).join('');

    html = `
      <div class="site-v2 preview-viewport-box" style="padding:30px 14px;">
        <section class="v2-extra" style="padding:0;">
          <div class="container">
            <div class="v2-section-head" style="grid-template-columns: 1fr; gap:8px; margin-bottom:24px; text-align:left;">
              <h2 style="font-size:24px; text-align:left; color:#fff;">${escapeHTML(tempContent.extra.title)}</h2>
              <p style="font-size:12px; text-align:left; color:var(--muted);">${escapeHTML(tempContent.extra.subtitle)}</p>
            </div>
            <div class="v2-gallery" style="grid-template-columns: 1fr; gap:16px; display:grid;">
              ${cardsHTML}
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'worth') {
    const cards = tempContent.worth.cards || [];
    const cardsHTML = cards.map((c, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
        <div class="v2-worth-card" style="padding:16px; text-align:left;">
          <span style="font-size:10px; font-family:'DM Mono'; color:var(--accent);">${num}</span>
          <h3 style="font-size:16px; margin-top:8px; margin-bottom:4px; color:#fff;">${escapeHTML(c.title)}</h3>
          <p style="font-size:11px; color:var(--muted);">${escapeHTML(c.desc)}</p>
        </div>
      `;
    }).join('');

    html = `
      <div class="site-v2 preview-viewport-box" style="padding:30px 14px;">
        <section class="v2-worth" style="padding:0;">
          <div class="container">
            <div class="v2-section-head" style="grid-template-columns: 1fr; gap:8px; margin-bottom:24px; text-align:left;">
              <h2 style="font-size:24px; text-align:left; color:#fff;">${escapeHTML(tempContent.worth.title)}</h2>
              <p style="font-size:12px; text-align:left; color:var(--muted);">${escapeHTML(tempContent.worth.subtitle)}</p>
            </div>
            <div class="v2-worth-grid" style="grid-template-columns: 1fr; gap:12px;">
              ${cardsHTML}
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'contact') {
    const instaText = tempContent.contact.insta_text || 'Nasz Instagram';
    const submitBtnText = tempContent.contact.submit_btn_text || 'Wyślij zapytanie';
    html = `
      <div class="site-v2 preview-viewport-box" style="padding:10px;">
        <section class="v2-contact" style="padding:30px 16px; background:#090909; border-radius:10px;">
          <div class="v2-contact-layout" style="grid-template-columns: 1fr; gap:0;">
            <div class="v2-contact-copy" style="text-align:left; width:100%;">
              <span class="section-index" style="color:var(--accent);">07 / Contact</span>
              <h2 style="font-size:24px; margin-block:12px; text-align:left; color:#fff;">${escapeHTML(tempContent.contact.title)}</h2>
              <p style="font-size:12px; margin-bottom:20px; text-align:left; color:var(--muted);">${escapeHTML(tempContent.contact.text)}</p>
              <a class="contact-instagram-btn" style="width:100%; display:inline-flex; justify-content:center; align-items:center; gap:8px; margin-bottom:16px; min-height:45px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.02); color:#fff; font-size:12px;">
                <svg class="instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                ${escapeHTML(instaText)}
              </a>
              <button class="button button-accent" style="width:100%;">${escapeHTML(submitBtnText)} <span class="button-arrow">↗</span></button>
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'faq') {
    const questions = tempContent.faq.questions || [];
    const questionsHTML = questions.slice(0, 3).map((item, idx) => `
      <details ${idx === 0 ? 'open' : ''} style="border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:8px; margin-bottom:8px;">
        <summary style="font-size:12px; font-weight:600; cursor:pointer; color:#fff; display:flex; justify-content:space-between; list-style:none;">
          <span>${escapeHTML(item.q)}</span>
          <i style="color:var(--accent); font-style:normal;">+</i>
        </summary>
        <p style="font-size:11px; color:var(--muted); margin-top:6px;">${escapeHTML(item.a)}</p>
      </details>
    `).join('');

    html = `
      <div class="site-v2 preview-viewport-box" style="padding:30px 14px;">
        <section class="v2-faq" style="padding:0;">
          <div class="container">
            <div class="v2-section-head" style="grid-template-columns: 1fr; gap:8px; margin-bottom:24px; text-align:left;">
              <h2 style="font-size:24px; text-align:left; color:#fff;">${escapeHTML(tempContent.faq.title)}</h2>
              <p style="font-size:12px; text-align:left; color:var(--muted);">${escapeHTML(tempContent.faq.subtitle)}</p>
            </div>
            <div class="accordion" style="text-align:left;">
              ${questionsHTML}
            </div>
          </div>
        </section>
      </div>
    `;
  } else if (activeCmsSection === 'theme') {
    html = `
      <div class="preview-viewport-box" style="padding:30px; text-align:center;">
        <span style="font-size:12px; font-weight:600; color:rgba(255,255,255,0.7); display:block; margin-bottom:14px;">Aktywna paleta marki:</span>
        <div style="display:flex; justify-content:center; gap:20px;">
          <div><div style="width:45px; height:45px; border-radius:50%; background:var(--accent); border:2px solid #fff; margin-inline:auto;"></div><span style="font-size:10px; display:block; margin-top:6px; font-family:'DM Mono'; color:#fff;">${accent}</span></div>
          <div><div style="width:45px; height:45px; border-radius:50%; background:var(--bg); border:2px solid rgba(255,255,255,0.2); margin-inline:auto;"></div><span style="font-size:10px; display:block; margin-top:6px; font-family:'DM Mono'; color:#fff;">${bg}</span></div>
        </div>
      </div>
    `;
  }

  previewViewport.innerHTML = html;
};

// Sync content textarea and trigger preview
contentJson?.addEventListener('input', () => {
  try {
    const json = JSON.parse(contentJson.value);
    currentContent = json;
    renderContentEditor();
  } catch {}
});

const loadContent = async () => {
  if (session?.is_demo) {
    const local = localStorage.getItem('aiba_mock_content');
    if (local) {
      try { currentContent = JSON.parse(local); } catch { currentContent = structuredClone(DEFAULT_SITE_CONTENT); }
    } else {
      currentContent = structuredClone(DEFAULT_SITE_CONTENT);
    }
    renderContentEditor();
    await loadLegalCMS();
    return;
  }

  try {
    const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/site_content?id=eq.homepage&select=content`, {
      headers: headers(),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.message || 'Nie udało się pobrać treści.');
    const savedContent = payload[0]?.content;
    currentContent = savedContent?.__version === 'landing-v3' ? savedContent : structuredClone(DEFAULT_SITE_CONTENT);
  } catch (error) {
    setStatus(contentStatus, `${error.message}. Uruchom plik SQL w Supabase.`, true);
    currentContent = structuredClone(DEFAULT_SITE_CONTENT);
  }

  renderContentEditor();
  await loadLegalCMS();
};

document.querySelector('[data-save-content]')?.addEventListener('click', async () => {
  syncContentFromFields();
  setStatus(contentStatus, 'Zapisywanie...');

  if (session?.is_demo) {
    localStorage.setItem('aiba_mock_content', JSON.stringify(currentContent));
    setStatus(contentStatus, 'Zapisano (lokalnie w trybie demo). Odśwież stronę główną, żeby zobaczyć zmiany.');
    return;
  }

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

// Legal CMS Handlers (LOAD ACTUAL STATICS FROM SITE FILES IF EMPTY IN DB)
const loadLegalCMS = async () => {
  if (!currentContent) return;
  if (!currentContent.legal) {
    currentContent.legal = { privacy: '', cookies: '' };
  }

  // Load Privacy Policy from file if DB is blank
  if (!currentContent.legal.privacy || !currentContent.legal.privacy.trim()) {
    try {
      const res = await fetch('polityka-prywatnosci.html');
      if (res.ok) {
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        // Extract raw policy copy content
        const rawContent = doc.getElementById('privacy-content')?.innerHTML || doc.querySelector('.legal-copy')?.innerHTML || '';
        // Clean and load it
        currentContent.legal.privacy = rawContent.trim();
      }
    } catch (e) {
      console.warn('Failed to pre-fetch static privacy policy document:', e);
    }
  }

  // Load Cookies Policy from file if DB is blank
  if (!currentContent.legal.cookies || !currentContent.legal.cookies.trim()) {
    try {
      const res = await fetch('polityka-cookies.html');
      if (res.ok) {
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const rawContent = doc.getElementById('cookies-content')?.innerHTML || doc.querySelector('.legal-copy')?.innerHTML || '';
        currentContent.legal.cookies = rawContent.trim();
      }
    } catch (e) {
      console.warn('Failed to pre-fetch static cookies policy document:', e);
    }
  }

  privacyInput.value = currentContent.legal.privacy || '';
  cookiesInput.value = currentContent.legal.cookies || '';
};

document.querySelector('[data-save-legal]')?.addEventListener('click', async () => {
  if (!currentContent) return;
  setStatus(legalStatus, 'Zapisywanie dokumentów...');

  currentContent.legal = {
    privacy: privacyInput.value,
    cookies: cookiesInput.value
  };
  contentJson.value = JSON.stringify(currentContent, null, 2);

  if (session?.is_demo) {
    localStorage.setItem('aiba_mock_content', JSON.stringify(currentContent));
    setStatus(legalStatus, 'Zapisano dokumenty prawne (tryb demo).');
    return;
  }

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
      throw new Error(payload.message || 'Nie udało się zapisać dokumentów.');
    }

    setStatus(legalStatus, 'Dokumenty prawne zostały zapisane i zaktualizowane.');
  } catch (error) {
    setStatus(legalStatus, error.message, true);
  }
});

// Initialization
const init = async () => {
  await Promise.all([loadLeads(), loadContent()]);
  setupCmsSidebar();
};

init();
