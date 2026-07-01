const SUPABASE_CONFIG = {
  url: 'https://igtjpyyxfwyezyvchxfk.supabase.co',
  publishableKey: 'sb_publishable_y4HM1wIINVGRjMZrjmrjOA_iIsilUr2',
};

const loginForm = document.querySelector('[data-login-form]');
const loginStatus = document.querySelector('[data-login-status]');

const setStatus = (element, message, isError = false) => {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle('admin-error', isError);
};

// Check if already logged in and redirect to dashboard
const checkExistingSession = () => {
  const session = JSON.parse(localStorage.getItem('aiba_admin_session') || 'null');
  if (session && session.access_token) {
    window.location.href = 'dashboard.html';
  }
};

// Demo login handler
document.querySelector('[data-demo-login]')?.addEventListener('click', () => {
  setStatus(loginStatus, 'Logowanie w trybie demo...');
  const session = {
    access_token: 'mock_demo_token',
    user: { email: 'demo@agency.com' },
    is_demo: true
  };
  localStorage.setItem('aiba_admin_session', JSON.stringify(session));
  setStatus(loginStatus, 'Zalogowano! Otwieranie panelu...');
  
  // Open dashboard in new tab and redirect current tab
  window.open('dashboard.html', '_blank');
  window.location.href = 'dashboard.html';
});

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

    localStorage.setItem('aiba_admin_session', JSON.stringify(payload));
    setStatus(loginStatus, 'Zalogowano! Otwieranie panelu...');
    
    // Open in new tab and redirect current
    window.open('dashboard.html', '_blank');
    window.location.href = 'dashboard.html';
  } catch (error) {
    setStatus(loginStatus, error.message, true);
  }
});

// Run session check on page load
checkExistingSession();
