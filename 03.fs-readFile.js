/* C06: Asíncronía y Callbacks */
const fs = require('node:fs');

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log(data);
}
);
console.log(' ')
console.log('Haciendo algo más mientras se lee el primer archivo...');
console.log(' ')
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo02.txt', 'utf-8', (err, text02) => {
    if (err) {
        console.error('Error al leer el segundo archivo:', err);
        return;
    }
    console.log(text02);
}
);

