//C02: Patrón de diseño de Module
// CommonJS require module
const {sum} = require('./sum')

console.log("hola Node");
console.warn("una alerta");

//Comando que no funciona con Node (terminal)
// console.log(window);

console.log(typeof window);

//C01: GlobalThis
console.log(globalThis);

console.log(sum(1,2))