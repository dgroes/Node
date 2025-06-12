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
let directorio = 'documentos'
const subdirectorio = 'mangas'
const archivo = "Shamo-Tomo01.cbr";

const rutaManga = path.join(directorio, subdirectorio, archivo);
console.log(rutaManga);

//Ejercicio 03
const rutaDirectorio = "C:\\Workspace\\Node\\00-Reforzamiento\\02-path.js";
directorio = path.dirname(rutaDirectorio);
console.log(directorio);

//Ejercicio 04
const rutaAbsoluta = path.resolve(directorio, subdirectorio, archivo);
console.log(rutaAbsoluta);


//Ejercicio 05

const ruta1 = path.resolve("carpeta", "archivo.txt");
const ruta2 = path.resolve("carpeta/./archivo.txt");

console.log("Ruta 1:", ruta1);
console.log("Ruta 2:", ruta2);

const iguales = ruta1 === ruta2;
console.log("¿Son iguales?", iguales);