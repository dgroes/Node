const fs = require('node:fs')
const path = require('node:path');

//Ejercicio 01 fs.readFile.
const rutaNotaTxt = './nota.txt'
fs.readFile(rutaNotaTxt, 'utf-8', (err, data) => {
    if(err){
        console.error(`Error al leer el fichero ${err}`);
        return;
    }
    console.log(data);
})

//Ejercicio 02 fs.writeFile
const mensaje = "Este archivo fue creado desde Node.js usando fs.writeFile";
fs.writeFile('./salida.txt', mensaje, err => {
    if(err){
        console.error(err);
    } else {
        console.log("- Fichero creado correctamente");
    }
})

//Ejercicio 03 fs.appendFile.


