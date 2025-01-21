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

function prueba(object) {
    let listaUsuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (
            listaUsuarios[i].usuario === object.usuario ||
            listaUsuarios[i].password === object.password ||
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
        document.querySelector("#emailAccount").value
    );

    if (prueba(datosCuenta)){
        listaUsuarios.push(datosCuenta);
        guardarUsuario(listaUsuarios);
        alert("Cuenta creada con éxito");
    } else {
        alert("El usuario ya existe");
    }
    
}

function guardarUsuario(listaUsuarios) {
    sessionStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}
