const fs = require("node:fs");
const path = require("node:path");

//Ejercicio 01 fs.readFile.
const rutaNotaTxt = "./nota.txt";
fs.readFile(rutaNotaTxt, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error al leer el fichero ${err}`);
    return;
  }
  console.log(data);
});

//Ejercicio 02 fs.writeFile
const mensaje = "Este archivo fue creado desde Node.js usando fs.writeFile";
fs.writeFile("./salida.txt", mensaje, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("- Fichero creado correctamente");
  }
});

//Ejercicio 03 fs.appendFile.
const fichero = "./salida.txt";
const fecha = new Date();
const fechaFormat = fecha.toLocaleString();

fs.appendFile(fichero, "\n" + fechaFormat, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("- Se ha agregado la nueva línea");
  }
});

//Ejercicio 04 fs.unlink

//Creación del nuevo Fichero:
const rutaArchivo = "temporal.txt";
const contenido =
  "Tell me, what's the cost of giving up?\nWhy does it feel like help will never come?";

// Verificación y eliminación condicional
function manejarArchivo() {
  if (fs.existsSync(rutaArchivo)) {
    fs.unlink(rutaArchivo, (err) => {
      if (err) {
        console.error("Error al eliminar:", err);
      } else {
        console.log("- Archivo eliminado");
      }
    });
  } else {
    console.log("- El archivo no existe");
  }
}

// Creación inicial + verificación posterior (opcional)
fs.writeFile(rutaArchivo, contenido, (err) => {
  if (err) {
    console.error("Error al crear:", err);
    return;
  }
  console.log("- Archivo creado exitosamente");
  manejarArchivo(); // Llamamos a la función de verificación/eliminación
});

/* __Ejercicio 05 fs.mkdir y fs.writeFiles */

//Creación del directorio:
function crearRuta(ruta) {

  const verificaRuta = path.join(__dirname, ruta);

  if (fs.existsSync(verificaRuta)) {
    console.log("- La carpeta ya existe 📂");

  } else {
    fs.mkdir(path.join(__dirname, ruta), (err) => {
      if (err) {
        return console.error(err);
      }
      // const rutaReportes = 'reportes';
      console.log("- Directorio creado exitosamente!");
    });
  }

  const mensaje = "Este es un informe generado automáticamente.";
  fs.writeFile("./reportes/informe.txt", mensaje, (err) => {
    if(err){
        console.error(err)
    } else {
        console.log("- Fichero (informe.txt) creado exitosamente 📁")
    }
  })
}

const nombre = "reportes";
crearRuta(nombre);
