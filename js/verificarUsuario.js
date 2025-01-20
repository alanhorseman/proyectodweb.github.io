import { desestructurarUsuario } from './class/usuario.js';


export function verificarUsuario (e) {
    e.preventDefault();

    const datosUsuario = sessionStorage.getItem('usuario');

    const {usuario, password} = desestructurarUsuario(datosUsuario);

    if (document.querySelector('#usuarioLogin').value === usuario && document.querySelector('#passwordLogin').value === password) {
        alert('Usuario correcto');
    } else {
        alert('Usuario incorrecto');
    }
}