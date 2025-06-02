window.onload = function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginBtn) loginBtn.style.display = isLoggedIn ? 'none' : 'inline';
  if (logoutBtn) logoutBtn.style.display = isLoggedIn ? 'inline' : 'none';
};

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    localStorage.setItem('isLoggedIn', 'true');
    alert('Login berhasil!');
    window.location.href = 'index.html';
  } else {
    alert('Username atau password salah!');
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  alert('Anda telah logout.');
  window.location.href = 'index.html';
}
