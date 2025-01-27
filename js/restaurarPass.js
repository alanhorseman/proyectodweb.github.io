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
            alert("Usuario restaurado");
            return;
        }
    }
    alert("Usuario no encontrado");
}

addEventListener("submit", restaurarPassword);
