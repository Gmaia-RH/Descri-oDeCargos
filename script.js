
function toggleLogin() {
  document.getElementById('login-section').classList.toggle('hidden');
}
function switchTab(tab) {
  document.getElementById('cpf-form').classList.add('hidden');
  document.getElementById('email-form').classList.add('hidden');
  if (tab === 'cpf') {
    document.getElementById('cpf-form').classList.remove('hidden');
  } else {
    document.getElementById('email-form').classList.remove('hidden');
  }
}
function login() {
  alert('Login simulado com sucesso!');
}
