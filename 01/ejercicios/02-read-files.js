/* 
Objetivo: Usar fs.readFile con callbacks.
Crea un archivo read-files.js que lea dos archivos:
archivo1.txt
archivo2.txt
- Debe imprimir su contenido en consola. Entre lectura y lectura, 
  imprime un mensaje tipo: "Leyendo segundo archivo...".
*/

const fs = require('node:fs');
const fichero01 = './archivo1.txt';
const fichero02 = './archivo2.txt';

fs.readFile(fichero01, 'utf8', (err, data) => {
  if(err){
    console.error(err);
    return;
  }
  console.log("[Primer Fichero]:")
  console.log(data);
  console.log(" ");
})


fs.readFile(fichero02, 'utf-8', (err, data) => {
  if(err){
    console.log(err);
    return;
  }
  console.log("[Segundo Fichero]:")
  console.log(data);
})





