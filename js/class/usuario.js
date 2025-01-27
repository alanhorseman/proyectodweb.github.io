
export class Usuario {
    constructor(usuario, password, email, pregunta){
        this.usuario = usuario;
        this.password = password;
        this.email = email;
        this.pregunta = pregunta;
    }

}

export function desestructurarUsuario(object){
    const {usuario, password, email} = object;
    return {usuario, password, email};
}