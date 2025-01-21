import {Usuario} from '../js/class/usuario.js';

export let listaUsuarios = JSON.parse(sessionStorage.getItem('usuarios')) || [];

// const newAccount = document.querySelector('#formCreateAccount');

// newAccount.addEventListener("submit", crearCuenta);

document.addEventListener("DOMContentLoaded", () => {
    const newAccount = document.querySelector('#formCreateAccount');
    if (newAccount) {
        newAccount.addEventListener("submit", crearCuenta);
    } else {
        console.error('Formulario no encontrado');
    }
});



function crearCuenta (e) {
    e.preventDefault();

    const datosCuenta = new Usuario(
        document.querySelector('#usuarioLogin').value,
        document.querySelector('#passwordLogin').value,
        document.querySelector('#emailAccount').value,
    )

    listaUsuarios.push(datosCuenta);

    guardarUsuario(listaUsuarios);
}

function guardarUsuario(listaUsuarios){
    sessionStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
}