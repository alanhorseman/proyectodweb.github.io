
export class Usuario {
    constructor(usuario, password, email){
        this.usuario = usuario;
        this.password = password;
        this.email = email;
    }

}

export function desestructurarUsuario(object){
    const {usuario, password, email} = object;
    return {usuario, password, email};
}