import { Usuario } from "../js/class/usuario.js";

export let listaUsuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

document.addEventListener("DOMContentLoaded", () => {
    const newAccount = document.querySelector("#formCreateAccount");
    if (newAccount) {
        newAccount.addEventListener("submit", crearCuenta);
    } else {
        console.error("Formulario no encontrado");
    }
});

function comprobarUsuarioExistente(object) {
    let listaUsuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (
            listaUsuarios[i].usuario === object.usuario ||
            listaUsuarios[i].email === object.email
        ) {
            return false;
        }
    }
    return true;
}

function crearCuenta(e) {
    e.preventDefault();

    const datosCuenta = new Usuario(
        document.querySelector("#usuarioLogin").value,
        document.querySelector("#passwordLogin").value,
        document.querySelector("#emailAccount").value,
        document.querySelector("#preguntaSeguridad").value
    );
    if (comprobarUsuarioExistente(datosCuenta)) {
        listaUsuarios.push(datosCuenta);
        guardarUsuario(listaUsuarios);
        Swal.fire({
            title: "¡Espere!",
            text: "Creando cuenta...",
            icon: "info",
            timer: 2000,
            showConfirmButton: false
        });
        setTimeout(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cuenta creada exitosamente",
                showConfirmButton: false,
                timer: 2000
            });
        }, 2000);
    } else {
        Swal.fire({
            title: "¡Espere!",
            text: "Creando cuenta...",
            icon: "info",
            timer: 2000,
            showConfirmButton: false
        });
        setTimeout(() => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Usuario o email ya existente",
                showConfirmButton: false,
                timer: 2000
            });
        }, 2000);
        
    }

}

function guardarUsuario(listaUsuarios) {
    sessionStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}
