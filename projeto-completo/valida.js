// Usuários padrões fixos
const usuariosPadrao = [
  { login: 'victor', pass: 'victor' },
  { login: 'julio', pass: 'julio' },
  { login: 'admin', pass: 'admin' }
];

document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('btnLogar');

  botao.addEventListener('click', function (e) {
    e.preventDefault();

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    // Recupera usuários cadastrados do localStorage
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Junta os usuários padrão com os cadastrados
    const todosUsuarios = usuariosPadrao.concat(usuariosSalvos);

    // Verifica se existe algum que bate com o login e senha
    const usuarioValido = todosUsuarios.find(user => user.login === login && user.pass === senha);

    if (usuarioValido) {
      alert('Login bem-sucedido!');
      window.location.href = "home.html";
    } else {
      alert('Usuário ou senha incorretos');
    }
  });
});
