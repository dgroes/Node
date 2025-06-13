//Ejercicio 01
const promises = require('node:fs/promises');
const path = require('node:path');

// Leer los ficheros dentro de la ruta "./lecturas"
promises.readdir("./lecturas")
    .then(function (archivos) {

        // Mapear cada archivo a una promesa de lectura con la ruta completa
        const promesasDeLectura = archivos.map((archivo) => {
            const rutaCompleta = path.join('./lecturas', archivo);
            return promises.readFile(rutaCompleta, 'utf-8');
        });

        // Ejecutar todas las lecturas en paralelo
        return Promise.all(promesasDeLectura);
    })
    .then((contenidos) => {
        // Mostrar el contenido de cada archivo
        contenidos.forEach((contenido, index) => {
            console.log(`--- Archivo ${index + 1} ---\n${contenido}\n`);
        });
    })
    .catch((error) => {
        console.error("Error al leer archivos:", error);
    });


//Ejercicio 02