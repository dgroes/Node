/* C07: Asincronía y Promesas */
const fs = require('node:fs/promises');

/* Solo en los moulos nativos que no tienen promesas nativas:
const {promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile); 
*/

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

console.log(' ')
console.log('Haciendo algo más mientras se lee el primer archivo...');
console.log(' ')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo02.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

