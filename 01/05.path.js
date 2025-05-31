/* C11: Rutas y directorios */
const path = require('node:path');

//Como saber que barras utilizar según el OS
console.log(path.sep);

/* Unir rutas con pahth.join */

//Como no unir las rutas
// '/content/subfolder/test.txt' <-- No es portable 💀

//Como si unir las rutas
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log('así se unen con path.join -> ' + filePath);

//Sacar el nombre el fichero
const base = path.basename('/tmp/dalpo-scretet-files/password.txt');
console.log('Nombre de un fichero -> ' + base);

//Sacar el nombre del fichero sin la extencion
const base01 = path.basename('/tmp/dalpo-scretet-files/password.txt', '.txt');
console.log('Nombre de un fichero "sin la extención" -> ' + base01);

//Sacar la extención
const extension = path.extname('image.jpg')
console.log(extension);