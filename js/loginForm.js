import { verificarUsuario } from "./verificarUsuario.js";

const iniciarSesion = document.querySelector('#formLoginSesion');

document.addEventListener('DOMContentLoaded', () => {
    const recordarDatos = JSON.parse(localStorage.getItem('recordarUsuario'));

    if (recordarDatos) {
        document.querySelector('#usuarioLogin').value = recordarDatos.usuario;
        document.querySelector('#passwordLogin').value = recordarDatos.password;
        document.querySelector('#recordar').checked = true;
    }
});


iniciarSesion.addEventListener("submit", verificarUsuario);