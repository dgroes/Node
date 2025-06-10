## C01: Callback
Un **Callback** es una función que se pasa como argumento a otra función, y que se ejecutará más tarde, ya sea inmediamente, después de un evento, o cuando termine una operación asincrónica.
*Cuando se habla de 'callback' y función callback es lo mismo*
Es una función muy requerida en JS debido por su naturaleza asincrónica (como cuando se hace una petición a un servidor). 

### Comun mente se utiliza de la siguiente forma:
#### Manejo de eventos
```js
button.addEventListener('click', function() {
  console.log('¡Botón clickeado!');
});
```
#### Temporizadores:
```js
setTimeout(function() {
  console.log('Han pasado 2 segundos');
}, 2000);
```
#### Operaciones asincrónicas (como leer ficheros, hacer fetch, etc.):
```js
function leerArchivo(callback) {
  // Simulación
  setTimeout(function() {
    let contenido = "Contenido del archivo";
    callback(contenido);
  }, 1000);
}

leerArchivo(function(resultado) {
  console.log("El archivo dice: " + resultado);
});
```


### Ejemplo simpre
```js
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

function despedir() {
  console.log("Adiós");
}

saludar("Carlos", despedir);

// Resultado:
// Hola Carlos
// Adiós
```
Aquí despedir es el callback, porque se pasa como argumento y se ejecuta dentro de saludar.

### Arrow Callback
Un arroy callback es lo mismo que una función flecha
```js
setTimeout(() => {
  console.log("Soy una arrow callback");
}, 1000);
```
- `() => { ... }` es una función flecha (arrow function)
- Como se pasa a otra función (`setTimeout`), es también un callback

| Característica            | Función tradicional | Arrow function |
| ------------------------- | ------------------- | -------------- |
| Tiene su propio `this`    | ✅ Sí                | ❌ No           |
| Código más corto          | ❌ No                | ✅ Sí           |
| Ideal como callback corta | ✅ Sí                | ✅ Sí           |
| Uso como método de objeto | ✅ Mejor opción      | ❌ Evitar       |


- Todas las arrow functions pueden ser callbacks, si las usas como argumento de otra función.
- Usa funciones flecha para callbacks cortos y simples, especialmente en métodos como .map(), .filter(), .forEach(), setTimeout(), etc.
- Evita arrow functions si necesitas que el this se refiera al objeto actual (como en métodos de objetos o clases).

