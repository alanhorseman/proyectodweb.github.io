# Entrega Final

## DOM, EVENTS, JSON & STORAGE

Quise crear un archivo Markdown para detallar un poco lo que hice en el código.

En la página de **Contacto** hay un pequeño *Form* donde implementé los requisitos de esta entrega final.

1. Usé el **DOM** en la obtención de los datos del formulario y los almacené en una variable *formularioContactos*.
```javascript
const formularioContactos = document.querySelector("#formularioContactos");
```

2. Implementé un **Evento** a esa variable.
```javascript
formularioContactos.addEventListener("submit", ObjectToJSON);
```

3. Usé **JSON** sobre el Objeto creado dentro de la función **ObjectToJSON**.
```javascript
JSON.stringify(datosFormulario);
```

4. Apliqué la funcionalidad de **sessionStorage** al *JSON*.
```javascript
sessionStorage.setItem("formulario", JSON.stringify(datosFormulario));
```

## CLASS, FUNCTION, IMPORT Y EXPORT

En esta entrega, decidí usar el proyecto que empecé en **Maquetación**, por lo que tuve que agregarle también algunas *Function* y *Class* ya que no tenía ninguna.

### Funcionalidades implementadas en un sistema de Creación de Usuario e Inicio de Sesión

- Usé una **Class** y su **Constructor** para crear nuevos *Usuarios*.

- Creé una **Function** para hacer un *Desconstructor*, usado para la *verificación de usuarios*.

- Hice uso de los **EXPORT** e **IMPORT** para enlazar los *Function* a diferentes archivos *.js*.

- Implementé **Promise** para la función *verificarUsuarioConPromesa* simulando una DB.

- Implementé también **setTimeout** para un *SweetAlert* y dentro del *Promise*.

- Usé las librerías *SweetAlert* y *Toastify*.

- Agregué la función de *Olvidé mi contraseña*.