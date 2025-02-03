const formularioContactos = document.querySelector("#formularioContactos");

formularioContactos.addEventListener("submit", ObjectToJSON);

function ObjectToJSON (e) {
    e.preventDefault();

    const datosFormulario = {
        nombre: document.querySelector("#nombre-form").value,
        email: document.querySelector("#email-form").value,
        telefono: document.querySelector("#telefono-form").value,
        mensaje: document.querySelector("#mensaje-form").value
    }

    sessionStorage.setItem("formulario", JSON.stringify(datosFormulario));
};

sessionStorage.clear();