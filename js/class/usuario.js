export class Usuario {
    constructor(usuario, password, email){
        this.usuario = usuario;
        this.password = password;
        this.email = email;
    }

    guardarUsuario(){
        sessionStorage.setItem('usuario', JSON.stringify(this));
    }
}

export function desestructurarUsuario(object){
    const {usuario, password, email} = JSON.parse(object);
    return {usuario, password, email};
}