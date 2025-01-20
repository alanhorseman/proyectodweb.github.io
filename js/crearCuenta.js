import {Usuario} from '../js/class/usuario.js';

const newAccount = document.querySelector('#formCreateAccount');

newAccount.addEventListener("submit", crearCuenta);

function crearCuenta (e) {
    e.preventDefault();

    const datosCuenta = new Usuario(
        document.querySelector('#usuarioLogin').value,
        document.querySelector('#passwordLogin').value,
        document.querySelector('#emailAccount').value,
    )

    datosCuenta.guardarUsuario();
}
