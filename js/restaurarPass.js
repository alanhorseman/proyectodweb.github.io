function restaurarPassword(e) {
    e.preventDefault();

    const usuariosAVerificar =
        JSON.parse(sessionStorage.getItem("usuarios")) || [];

    const usuarioRestaurar = document.querySelector("#usuarioRestored").value;
    const emailRestaurar = document.querySelector("#emailRestored").value;
    const respuestaRestaurar = document.querySelector("#respuestaSeguridad").value;
    const nuevaPass = document.querySelector("#passwordRestored").value;

    for (let i = 0; i < usuariosAVerificar.length; i++) {
        if (
            usuariosAVerificar[i].usuario === usuarioRestaurar &&
            usuariosAVerificar[i].email === emailRestaurar &&
            usuariosAVerificar[i].pregunta === respuestaRestaurar
        ) {
            usuariosAVerificar[i].password = nuevaPass;
            sessionStorage.setItem("usuarios", JSON.stringify(usuariosAVerificar));
            Toastify({
                text: "Usuario restaurado",
                gravity: "top",
                position: "center",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #eeaeca, #94bbe9)",
                },
            }).showToast();
            return;
        }
    }
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Usuario no encontrado",
        showConfirmButton: false,
        timer: 2000
    });
}

addEventListener("submit", restaurarPassword);
