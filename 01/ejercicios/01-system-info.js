/* 
Objetivo: Usar el módulo os.
Crea un script llamado system-info.js que imprima la siguiente información:
- Nombre del sistema operativo
- Arquitectura
- Número total de CPUs
- Tiempo que lleva encendido el sistema (en horas y minutos)
*/

const os = require('node:os')
console.log(os.type())
console.log(os.arch())
// console.log(os.cpus())

cpu = os.cpus();
const count = Object.keys(cpu).length;
console.log(count)

console.log(Math.round(os.uptime() / 60) + " Minutos")