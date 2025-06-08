/* 
Ejercicio 3: Leer archivos con async/await
Objetivo: Usar fs/promises y async/await.

Crea un archivo read-files-async.js que haga lo mismo que el ejercicio 2, pero usando async/await con fs/promises.

*/

// FS con Promesas
const fs = require('node:fs/promises');
console.log("[FS: Promises]:")
fs.readFile('./archivo1.txt', 'utf-8')
    .then(text => {
        console.log("{Primer TEXTO}")
        console.log(text);
        console.log(" ");
    });

// Async/Await
console.log("[Async / Await]:")
const {readFile} = require('node:fs/promises');
(async () => {
    console.log("[Leyendo el primer fichero]:")
    const text = await(readFile('./archivo1.txt', 'utf-8'))
    console.log("{PRIMER TEXTO}")
    console.log(text)

    const secondText = await(readFile('./archivo2.txt', 'utf-8'))
    console.log("{SEGUNDO TEXTO}")
    console.log(secondText)

}   
)()
