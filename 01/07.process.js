/* C12: Process */
//Argumentos de entrada
console.log(process.argv);

//Controlar el proceso y su salida
// process.exit(1)

//Controlar eventos del proceso
process.on('exit', () => {
    //Limpiar los recursos
})

//Current  working firectory (cual es el directorio en donde se lazan el proceso)
console.log(process.cwd());

console.log(process.cpuUsage);

//plataform
// console.log(process.en);