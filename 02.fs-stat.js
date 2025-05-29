// C04: File System
// C05: Prefijo 'node:...'
const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

//Sincrono
console.log(
    stats.isFile(), //Si es un archivo
    stats.isDirectory(), //Si es un directorio
    stats.isSymbolicLink(), //Si es un enlace simbólico
    stats.size, //Tamaño del archivo en bytes
)