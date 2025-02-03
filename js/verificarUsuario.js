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
            Toastify({
                text: "Usuario correcto",
                duration: 3000,
                position: "center",
                style: {
                    background: "linear-gradient(to right, #5bb43a, #1dfde8)",
                },
            }).showToast();
            
            if (recordarCheck){
                localStorage.setItem('usuario', JSON.stringify(usuario, password));
            } else {
                localStorage.removeItem('usuario');
            }
            return;
        }
    }
    Toastify({
        text: "Usuario incorrecto",
        duration: 3000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #833ab4, #fd1d1d)",
        },
    }).showToast();
}