import { desestructurarUsuario } from './class/usuario.js';
import { listaUsuarios } from './crearCuenta.js';


// export function verificarUsuario (e) {
//     e.preventDefault();

//     const datosUsuario = sessionStorage.getItem('usuarios');

//     const {usuario, password} = desestructurarUsuario(datosUsuario);

//     listaUsuarios.forEach()


//     if (document.querySelector('#usuarioLogin').value === usuario && document.querySelector('#passwordLogin').value === password) {
//         alert('Usuario correcto');
//     } else {
//         alert('Usuario incorrecto');
//     }
// }

// export function verificarUsuario (e) {
//     e.preventDefault();

//     const datosUsuario = JSON.parse(sessionStorage.getItem('usuarios'));

//     for (let i = 0; i < datosUsuario.length; i++) {
//         const {usuario, password} = desestructurarUsuario(datosUsuario[i]);
//         if (document.querySelector('#usuarioLogin').value === usuario && document.querySelector('#passwordLogin').value === password) {
//             alert('Usuario correcto');
//             return;
//         }
//     }
//     alert('Usuario incorrecto');
// }

export function verificarUsuario (e) {
    e.preventDefault();

    const datosUsuario = JSON.parse(sessionStorage.getItem('usuarios')) || [];

    for (let i = 0; i < datosUsuario.length; i++) {
        const {usuario, password} = desestructurarUsuario(datosUsuario[i]);
        if (document.querySelector('#usuarioLogin').value === usuario && document.querySelector('#passwordLogin').value === password) {
            alert('Usuario correcto');
            return;
        }
    }
    alert('Usuario incorrecto');
}