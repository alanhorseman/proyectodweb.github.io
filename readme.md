# Preentrega 3

## DOM, EVENTS, JSON & STORAGE

Quise crear un archivo Markdown para detallar un poco lo que hice en el código.

En la página de **Contacto** hay un pequeño *Form* donde implementé los requisitos de esta 3ra preentrega.

1. Usé el **DOM** en la obtención de los datos del formulario y los almacené en una variable *formularioContactos*.
```javascript
const formularioContactos = document.querySelector("#formularioContactos");
```

2. Implementé un **Evento** a esa variable.
```javascript
formularioContactos.addEventListener("submit", prueba);
```

3. Usé **JSON** sobre el Objecto creado dentro de la función **ObjectoToJSON**.
```javascript
JSON.stringify(datosFormulario);
```

4. Apliqué la funcionalidad de **sessionStorage** al *JSON*.
```javascript
sessionStorage.setItem("formulario", JSON.stringify(datosFormulario));
```

## CLASS, FUNCTION, IMPORT Y EXPORT

En esta entrega, decidí usar el proyecto que empecé en **Maquetacion**, por lo que tuve que agregarle también algunas *Function* y *Class* ya que no tenía ninguna.

### Funcionalidades implementadas en un sistema de Creación de Usuario e Inicio de Sesión

- Usé una **Class** y su **Constructor** para crear nuevos *Usuarios*.

- Creé una **Function** para hacer un *Desconstructor*, usado para la *verificación de usuarios*.

- Hice uso de los **EXPORT** e **IMPORT** para enlazar los *Function* a diferentes archivos *.js*.

## Próxima Update

- Implementar la función de *Olvidé mi contraseña*.

- Agregar condiciones para el ingreso de Password *(Cantidad min de caracteres, numeros, mayusculas, etc)*.

- Hacer uso de **Arrow Function**.

- Mejor organización de las carpetas.

- Agregar validaciones a los *Form* para asegurar que el usuario ingrese información válida.