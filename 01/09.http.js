/* C15 Servidor de Node */
const http = require('node:http') /*<-- Importar el módulo */

//Importación e integración de modulo de fichero 10
const {findAvailablePort} = require('./10.free-port.js')

// Creación del servidor:
const server = http.createServer((req, res) => {
    console.log("Request received...")
    res.end("Hola Mundo")
})

//Buscar si funciona un puerto en especificio, sino busca otro
findAvailablePort(2134).then(port => {
    server.listen(port, () => {
        console.log(`server  listenting on port http://localhost:${port}`)
    })
})



//Indicar al sistema que utilice un puerto disponible "al azar"
/* server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
}) */