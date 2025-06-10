/* 

Ejercicio 4: Crear una mini utilidad de info de archivos

Objetivo: Usar fs.promises y path.
__Crea un archivo file-info.js que:

- Reciba como argumento el nombre de un archivo
- Imprima:
    - Si es archivo o directorio
    - Tamaño en bytes
    - Fecha de modificación
    - Nombre sin extensión
    - Extensión

BASH:
node file-info.js ./archivo.txt
*/
const fs = require('node:fs/promises');
const path = require('node:path');

async function getFileInfo(filePath) {
  try {
    // Obtener stats del archivo
    const stats = await fs.stat(filePath);
    
    // Extraer información del path
    const { name: nombreSinExt, ext: extension } = path.parse(filePath);
    
    // Mostrar información
    console.log(`- Tipo: ${stats.isFile() ? 'Archivo' : 'Directorio'}`);
    console.log(`- Tamaño: ${stats.size} bytes`);
    console.log(`- Última modificación: ${stats.mtime.toLocaleString()}`);
    console.log(`- Nombre sin extensión: ${nombreSinExt}`);
    console.log(`- Extensión: ${extension || 'Ninguna'}`);
    
  } catch (err) {
    console.error('Error al obtener información del archivo:', err.message);
    process.exit(1);
  }
}

// Verificar que se proporcionó un argumento
if (process.argv.length < 3) {
  console.log('Uso: node file-info.js <ruta-del-archivo>');
  process.exit(1);
}

// Obtener ruta del argumento y ejecutar
const filePath = process.argv[2];
getFileInfo(filePath);