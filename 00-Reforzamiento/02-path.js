//Ejercicio 01
/* 
Objetivo: Practicar path.basename() y path.extname().

Instrucciones:

Crea un archivo llamado ejercicio1.js.

Declara una ruta cualquiera, por ejemplo: /users/juan/imagenes/foto.png.

Usa path.basename() para mostrar el nombre del archivo.

Usa path.extname() para mostrar la extensión del archivo.

 */
const path = require('node:path');
const rutaFicticia = "/users/juan/imagenes/foto.png"

const nombre = path.basename(rutaFicticia);
console.log(nombre);

const extencion = path.extname(rutaFicticia);
console.log(extencion);

//Ejercicio 02
