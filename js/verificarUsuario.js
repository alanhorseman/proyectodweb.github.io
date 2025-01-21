import { desestructurarUsuario } from './class/usuario.js';

export function verificarUsuario (e) {
    e.preventDefault();

    const datosUsuario = JSON.parse(sessionStorage.getItem('usuarios')) || [];
    const userLogin = document.querySelector('#usuarioLogin').value;
    const passLogin = document.querySelector('#passwordLogin').value;
    const recordarCheck = document.querySelector('#recordar').checked;

    for (let i = 0; i < datosUsuario.length; i++) {
        const {usuario, password} = desestructurarUsuario(datosUsuario[i]);
        if (userLogin === usuario && passLogin === password) {
            alert('Usuario correcto');
            
            if (recordarCheck){
                localStorage.setItem('usuario', JSON.stringify(usuario, password));
            } else {
                localStorage.removeItem('usuario');
            }
            return;
        }
    }
    alert('Usuario incorrecto');
}