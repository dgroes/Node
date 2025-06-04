/* 
Objetivo: Usar el módulo os.
Crea un script llamado system-info.js que imprima la siguiente información:
- Nombre del sistema operativo
- Arquitectura
- Número total de CPUs
- Tiempo que lleva encendido el sistema (en horas y minutos)
*/

// const { console } = require('node:inspector');
const os = require("node:os");

function secondToHours(segundos) {
  const horas = Math.round(segundos / 3600);
  const minutos = Math.round((segundos % 3600) / 60);
  const segs = Math.round(segundos % 60);

  return (`${horas}:${minutos}:${segs}`);
}

function systemInfo() {
  console.log("Nombre del OS:", os.type());
  console.log("Architectura del OS:", os.arch());

  cpu = os.cpus();
  const count = Object.keys(cpu).length;
  console.log("Número de nucleos: ", count);

  const segundos = os.uptime();
  console.log("Tiempo activo:", secondToHours(segundos));
}

systemInfo(os);
