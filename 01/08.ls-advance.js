/* C13: Ls Avanzado */
/**
 * Módulo para listar archivos de un directorio con información detallada
 * Implementa colores en la terminal usando picocolors
 */

// Importación de módulos necesarios
const fs = require('node:fs/promises') // Módulo de filesystem con promesas
const path = require('node:path') // Módulo para manejo de rutas
const pc = require('picocolors') // Librería ligera para colores en terminal
/**
 * Obtiene el directorio a listar desde los argumentos de línea de comandos
 * Si no se proporciona argumento, usa el directorio actual ('.')
 */
const folder = process.argv[2] ?? '.'

/**
 * Función asíncrona para listar contenido de un directorio
 * @param {string} folder - Ruta del directorio a listar
 */
async function ls(folder) {
  let files
  
  try {
    // Leer el contenido del directorio
    files = await fs.readdir(folder)
  } catch {
    // Manejo de error si no se puede leer el directorio
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1) // Sale del proceso con código de error
  }

  /**
   * Mapeamos cada archivo a una promesa que obtiene:
   * - Tipo (archivo/directorio)
   * - Tamaño
   * - Fecha de modificación
   */
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file) // Construye ruta completa
    let stats

    try {
      // Obtiene estadísticas del archivo (tamaño, fechas, permisos, etc.)
      stats = await fs.stat(filePath)
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    // Determina si es directorio o archivo
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f' // 'd' para directorio, 'f' para archivo
    
    // Formatea el tamaño y fecha de modificación
    const fileSize = stats.size.toString() // Tamaño en bytes
    const fileModified = stats.mtime.toLocaleString() // Fecha de modificación

    /**
     * Retorna string formateado con colores:
     * - Tipo con fondo magenta
     * - Nombre en azul (alineado a 20 caracteres)
     * - Tamaño en verde (alineado a 10 caracteres)
     * - Fecha en amarillo
     */
    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  // Espera a que todas las promesas se resuelvan
  const filesInfo = await Promise.all(filesPromises)

  // Imprime cada línea de información de archivo
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

// Ejecuta la función con el directorio especificado
ls(folder)