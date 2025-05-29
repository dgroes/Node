// const { console } = require('node:inspector');
const os = require('node:os');

console.log('Nombre del OS: ', os.platform())
console.log('Versión del OS: ', os.release())
console.log('Arquitectura del OS: ', os.arch())
console.log('CPUs del OS: ', os.cpus()) // <-- para escalar procesos en node
console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total: ', os.totalmem() / 1024 / 1024)
console.log('Uptime:', os.uptime() / 60 / 60)
