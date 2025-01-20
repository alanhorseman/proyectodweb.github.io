import { verificarUsuario } from "./verificarUsuario.js";

const iniciarSesion = document.querySelector('#formLoginSesion');

iniciarSesion.addEventListener("submit", verificarUsuario);