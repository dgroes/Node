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

## C02: Path
Es un módulo nativo de Node, proporciona utilidades para trabajar con rutas de archivos y direcotrios en el sistema de archivos (file system). Perite
- Construir rutas de manera segura y multiplataforma (Windows ya `\`, Linux y Mac usan `/`).
- Obtener partes de una ruta (como el nombre del archivo o su extencion)
- Resolver rutas absoslutas o relativas
- Unir directorios o rutas

Normalmente de utiliza
- Cuando se trabaja con rutas de archivos (por ejemplo, al leer archivos con `fs`).
- Cuando se necesitas compatibilidad entre sistemas operativos (Windows vs Linux).
- Cuando se quiere evitar concatenar rutas con +, lo cual puede causar errores.

### Ejemplo práctico
Une segmentos de ruta de forma segura según el sistema operativo con `path.join()`
```js
const ruta = path.join('carpeta', 'subcarpeta', 'archivo.txt');
console.log(ruta); 
// Windows: carpeta\subcarpeta\archivo.txt
// Linux/Mac: carpeta/subcarpeta/archivo.txt
```

Devolver una ruta absoluta a partir de segmentos con `path.resolve()`
```js
const rutaAbsoluta = path.resolve('carpeta', 'archivo.txt');
console.log(rutaAbsoluta);
// Ejemplo: /Users/usuario/proyecto/carpeta/archivo.txt
```

Obtener el nombre del archivo desde una ruta con `path.basename()`
```js
const archivo = path.basename('/ruta/completa/archivo.txt');
console.log(archivo); // archivo.txt
```

Obtener la extensión de un archivo con `path.extname()`
```js
const extension = path.extname('foto.png');
console.log(extension); // .png
```

Obtener el directorio padre de una ruta con `path.dirname()`
```js
const directorio = path.dirname('/ruta/completa/archivo.txt');
console.log(directorio); // /ruta/completa
```