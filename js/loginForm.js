const formLogin = document.querySelector('#formLoginSesion');

formLogin.addEventListener("submit", iniciarSesion);

function iniciarSesion(e) {
    e.preventDefault();

    const datosLogin = {
        usuario: document.querySelector('#usuarioLogin').value,
        password: document.querySelector('#passwordLogin').value
    }

    sessionStorage.setItem('login', JSON.stringify(datosLogin));
};