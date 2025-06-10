// Ejercicio 01
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function procesarEntrada(nombre, callback) {
  callback(nombre);
}

procesarEntrada("carlos", saludar);

//Ejercicio 02
function sumar(a, b) {
  return a + b;
}

function operar(a, b, callback) {
  const resultado = callback(a, b);
  console.log(resultado);
}
operar(1, 3, sumar);

//Ejercicio 03
function verificarEdad(edad, callback) {
  if (edad < 18) {
    callback("Eres menor de edad");
  } else {
    console.log("Eres mayor de edad");
  }
}

function mostrarMensaje(mensaje) {
  console.log(`Mensaje: ${mensaje}`);
}

verificarEdad(16, mostrarMensaje);


//Ejercicio 04
function multiplicar(a, b) {
  return a * b;
}

function conRetraso(a, b, callback) {
  setTimeout(() => {
    const resultado = callback(a, b);
    console.log(resultado);
  }, 2000);
}
conRetraso(3, 4, multiplicar);

//Ejercicio 05
const frutas = ["pera", "manzana", "mandarian", "limón", "tomate", "zandia"];

function mostarElemento(elemento) {
  console.log(`Elemento: ${elemento}`);
}

function procesarArray(frutas, callback) {
  frutas.forEach(function (fruta) {
    const resultado = callback(fruta);
    return resultado;
  });
}

procesarArray(frutas, mostarElemento);

//Ejercicio 06:
const https = require('https');

function obtenerDatos(url, callback) {
  https.get(url, (response) => {
    let datos = '';

    // Acumulamos los datos recibidos
    response.on('data', (chunk) => {
      datos += chunk;
    });

    // Cuando termina la respuesta
    response.on('end', () => {
      try {
        const datosParseados = JSON.parse(datos);
        callback(datosParseados);
      } catch (error) {
        console.error('Error al parsear JSON:', error);
      }
    });

  }).on('error', (error) => {
    console.error('Error en la petición:', error);
  });
}

function mostrarDatos(datos) {
  console.log('Datos recibidos:', datos);
}

// Llamamos a la función con el callback
obtenerDatos('https://jsonplaceholder.typicode.com/posts/1', mostrarDatos);