import { desestructurarUsuario } from './class/usuario.js';

export function verificarUsuario(e) {
    e.preventDefault();

    const datosUsuario = JSON.parse(sessionStorage.getItem('usuarios')) || [];
    const userLogin = document.querySelector('#usuarioLogin').value;
    const passLogin = document.querySelector('#passwordLogin').value;
    const recordarCheck = document.querySelector('#recordar').checked;

    verificarUsuarioConPromesa(userLogin, passLogin, datosUsuario)
        .then(() => {
            Toastify({
                text: "Usuario correcto",
                duration: 3000,
                position: "center",
                style: {
                    background: "linear-gradient(to right, #5bb43a, #1dfde8)",
                },
            }).showToast();

            if (recordarCheck) {
                localStorage.setItem('usuario', JSON.stringify(userLogin));
            } else {
                localStorage.removeItem('usuario');
            }
        })
        .catch(() => {
            Toastify({
                text: "Usuario incorrecto",
                duration: 3000,
                position: "center",
                style: {
                    background: "linear-gradient(to right, #833ab4, #fd1d1d)",
                },
            }).showToast();
        });
}

function verificarUsuarioConPromesa(usuario, password, listaUsuarios) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = listaUsuarios.find(user => {
                const { usuario: nombre, password: pass } = desestructurarUsuario(user);
                return nombre === usuario && pass === password;
            });

            usuarioEncontrado ? resolve() : reject();
        }, 1500);
    });
}
