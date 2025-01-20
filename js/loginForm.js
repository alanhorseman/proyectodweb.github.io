import { verificarUsuario } from "./class/verificarUsuario.js";

const iniciarSesion = document.querySelector('#formLoginSesion');

iniciarSesion.addEventListener("submit", verificarUsuario);