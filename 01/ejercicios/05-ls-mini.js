/* 
Ejercicio 5: Mini versión del comando ls
Objetivo: Reforzar fs.readdir, path y stat.

Crea ls-mini.js que:

- Liste todos los archivos del directorio actual
- Muestre: nombre, si es directorio o archivo, y su tamaño

(Puedes hacerlo sin colores por ahora. Si te animas, usa picocolors.)
*/

const fs = require('node:fs')
const path = require('node:path')
const ruta = './';
const rutaAbsoluta = path.resolve(ruta)
console.log(rutaAbsoluta);

fs.readdir(rutaAbsoluta, (err, files) => {
  if (err) {
    console.log("Error al leer el directorio", err);
    return;
  }

  files.forEach((file) => {
    const base = path.basename(file)
    const stats = fs.stat(file)
    const size = file.size
    console.log(file, " | ", stats.size);
  });
});




