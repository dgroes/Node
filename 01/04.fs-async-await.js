/* C09 Asincronía Secuencial */
const {readFile} = require('node:fs/promises');

//IIFE - Immediately Invoked Function Expression (Expresión de función invocada inmediatamente)
(
   async () => {
     console.log('Leyendo el primer archivo...')
     const text = await readFile('./archivo.txt', 'utf-8')
     console.log('primer texto:', text)
     console.log('--> Hacer cosas mientras lee el archivo...')
    
     console.log('Leyendo el segundo archivo...')
     const secondText = await readFile('./archivo02.txt', 'utf-8')
     console.log('segundo texto:', secondText)
   }
 )()


 


