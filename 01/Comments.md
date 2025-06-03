Repo: https://github.com/dgroes/Node

### Qué es Node.JS
`Node.JS` es un entorno de ejecución para JavaScript que permite ejecutar código JS fuera del navegador, es decir, en el **servidor**
- Está construido sobre el **motor V8** de Google Chrome (el mismo que usa el navegador para ejecutar JS)
- Es **asíncrono** y **orientado a eventos**, lo que lo hace ideal para aplicaciones rápidas y escalables, como servidores web o APIs.

### Qué tiene que ver con JS
Antes de Node.JS, JS solo se usaba en el navegador. Node.JS amplió el uso de JS, permitiendo que también se use para:
- Crear servidores web
- Leer y escribir archivos
- Conectarse a BD
- Crear aplicaciones completas del lado del servidor
Node.js **permite usar JavaScript en el backend**, no solo en el frontend


### Node.JS solo en Backend? 
No. Node.js también se puede usar para tareas del frontend, automatización, herramientas de desarrollo, y más.

1. Herramientas de desarrollo frontend
	- Muchas herramientas modernas del frontend (como Webpack, Vite, Babel, EsLint, etc.) están construidas con Node.js.
2. Gestores de paquetes
	- `npm` (Node Package Manager) y `yarn` están basados en Node.js.
	- Se usan para instalar librerías tanto de frontend como de backend
3. Aplicaciones de escritorio
	- Usando frameworks como **Electron**, se pueden crear aplicaciones de escritorios con JS, HTML y CSS (Como Visual Studio Code o Discord), y se ejecutan con Node.JS
4. Aplicaciones CLI (Línea de Comandos)
	- Creaciones de herramientas propias de línea de comandos con Node.js.
5. Automatización de tareas
	- Herramientas como Gulp o Grunt, que automatizan tareas (minificar código, compilar SASS, etc) usan Node
6. Testing
	- Herramientas como Jest, Mocha o Playwright (para pruebas automatizadas) también usan Node.js

### Node VS React o Agular
React y Angular no son alternativas a Node.js, porque **resuelven problemas diferentes**.
Node.js puede **trabajar junto a** React o Angular, pero **no los reemplaza ni compite con ellos**:
- **Node.js** se usa para construir el **servidor**: API, base de datos, autenticación, etc.
- **React/Angular** se usan para construir la **interfaz del usuario**: botones, formularios, vistas, etc.
De hecho, **Node.js es muy útil para servir aplicaciones hechas con React o Angular**, por ejemplo cuando usas herramientas como `create-react-app`, `Vite`, `Next.js` o `Angular CLI`.

Supón que haces una aplicación de tareas (To-Do App):
- El **frontend (React o Angular)** se encarga de mostrar los formularios y la lista de tareas.
- El **backend (Node.js)** se encarga de guardar las tareas en una base de datos y responder a peticiones HTTP (como `GET`, `POST`, `DELETE`).

### Puedo hacer una app de escritorio con Node.js + React o Angular?
**Sí, totalmente.** Puedes usar:
- **Node.js** para acceder a funcionalidades del sistema (como leer archivos, bases de datos locales, etc.)
- **React o Angular** para la **interfaz gráfica de la aplicación**
- 
La combinación más común para esto es usando **Electron**:
Ejemplos comunes:
- **Electron + React + Node.js**
- **Electron + Angular + Node.js**
Así puedes construir una app de escritorio que tenga:
- Una interfaz moderna y dinámica con React o Angular
- Acceso a funcionalidades del sistema operativo gracias a Node.js

### Instalación de Node y alternativas
La forma clásica, oficial y recomendada es descargar la versión **LTS** de la página oficial. La desventaja principal es que no posee un **control de versiones**, si quiero utilizar diferentes versiones hay alternativas para ese problema. 
Otra opción es utilizar un "**Administrador de versiones de Node**", de los administradores de versiones más conocidos para Node son: `nvm` y `fnm` 

### Qué es un administrador de versiones de Node?
Un gestor de versiones de Node.js permite:
- Instalar múltiples versiones de Node en tu sistema
- Cambiar entre ellas fácilmente (según el proyecto)
- Establecer una versión por defecto
Esto es súper útil si un proyecto usa Node 14, otro usa Node 18, y otro está probando con Node 20.

#### Los más conocidos: `nvm` y `fnm`
`nvm` – Node Version Manager
- 📌 **El más popular** y ampliamente usado
- Funciona bien en **Linux y macOS**

`fnm` – Fast Node Manager
- ⚡ **Más rápido** que `nvm` (escrito en Rust)
- Compatible con **Linux, macOS y Windows**
- Ocupa menos espacio y se instala más rápido
- Repo: https://github.com/Schniz/fnm


### Uso de fnm
Luego de instalar Rust y fnm en el sistema con el comando `fnm list` se podrán ver las versiones de Node instaladas. 
Para añadir una versión de Node se podrá hacer con el siguiente comando de ejemplo: `fnm install 18.19.1`. Luego listando la versiones saldrá algo así:
```
❯ fnm list
* v18.19.1 default
* system
```
Para usar una de las versiones instaladas con el comando `fnm use` seguido de la versión, bastará para que Node utilice dicha versión indicada

### C01: GlobalThis
`GlobalThis` es una forma estándar y universal de acceder al objeto global del entorno donde se ejecuta JS.

| Entorno    | Objeto global  | También accesible como |
| ---------- | -------------- | ---------------------- |
| Navegador  | `window`       | `self`, `frames`, etc. |
| Web Worker | `self`         |                        |
| Node.js    | `global`       |                        |
| Cualquiera | `globalThis`   | (desde ES2020)         |

Entonces en Node.js, globalThis es una forma moderna de acceder al objeto global, que antes solo se podía acceder usando global.

```js
// Equivalente:
console.log(globalThis === global); // true
```
Entonces, puedes usar globalThis para acceder a cosas globales desde cualquier parte de tu app, sin importar si es navegador, Node o Deno. Muchismas varíables como `console`, `setTimeout`, `clearInterval`, etc. salen realmente del globalThis, por lo que puedes acceder a ellas directamente sin necesidad de usar `global` o `window`. Por ejemplo:
```js
console.log("Hola mundo");

// Es exactamente lo mismo que:
globalThis.console.log("Hola mundo");
```
### C02: Patrón de diseño de Module (commonjs) .cjs
El patrón de diseño "Module" en Node.js es una forma de organizar y encapsular el código, permitiendo que diferentes partes de una aplicación estén aisladas entre sí, pero puedan compartir funcionalidad mediante exports e imports.

🧩 ¿Qué es el patrón módulo?
- Es un patrón que:
- Encapsula variables y funciones privadas.
- Expone solo lo necesario (una API pública).
- Evita contaminar el espacio global.
- Promueve reutilización y mantenibilidad.

#### En Node.js, todo archivo JS es un módulo
Cada archivo tiene su propio **ámbito**. Variables definidas en un archivo no se "filtran" a otros, a menos que tú las exportes.

####  Beneficios del patrón módulo
- Encapsulamiento
- Separación de responsabilidades
- Reutilización de código
- Testeo más fácil
- Menos errores por colisiones de nombres

#### commonjs .cjs
CommonJS es el sistema de módulos original de Node.js. Permite dividir el código en archivos y reutilizarlo fácilmente.
Etonces en el fichero de `cjs/sum.js` se está utilizando el sistema de módulos nativo y original de Node.js (commonjs)
Más info del tema: https://lenguajejs.com/nodejs/fundamentos/commonjs-vs-esm/

**Importante**:
Es una forma "clasica" y antigua de importar y exportar módulos en Node.js. NO es la única forma, pero es la más común en proyectos más antiguos. Etonces a día de hoy no es tan recomendable usarlo, ya que hay una forma más moderna de hacerlo (ESM), pero sigue siendo muy usado en muchos proyectos.


### C03: Patrón de diseño de Module (ESM) .mjs
El patrón de diseño "Module" en Node.js también se puede implementar usando el sistema de módulos ESM (ECMAScript Modules), que es la forma estándar de manejar módulos en JavaScript moderno.

Node.js por defecto usa CommonJS (require, module.exports). Para decirle a Node que un archivo usa módulos ESM, puedes hacerlo de dos formas:
1. Cambiando la extensión del archivo a `.mjs`
2. Añadiendo `"type": "module"` en el `package.json` del proyecto

| Aspecto                 | CommonJS         | ES Modules (ESM)           |
| ----------------------- | ---------------- | -------------------------- |
| Carga de módulos        | `require()`      | `import`                   |
| Exportación             | `module.exports` | `export`                   |
| Carga de forma          | Sincrónica       | Asíncrona (ideal para web) |
| Uso por defecto en Node | Sí               | No (requiere config)       |
| Uso en navegador        | No directamente  | Sí                         |


### C04: File System
El File System (FS) en Node.js es un módulo nativo que te permite leer, escribir, modificar, borrar y trabajar con archivos y directorios en el sistema operativo.

### C05: Prefijo 'node:...'
Es una forma explícita de indicar que estás importando un módulo nativo (built-in) de Node.js.
`const fs = require('node:fs'); // ✅ recomendado`
Esto le dice al motor de Node.js:
“Estoy pidiendo el módulo interno fs de Node.js, no un paquete llamado fs que pueda estar en node_modules.”

#### Por qué es útil?
- Más seguro y claro: Evita conflictos si algún paquete externo se llama igual (por ejemplo, alguien podría instalar un paquete fs desde npm). 
- Mejor compatibilidad futura: Es má fácil para herramientas como linters, bundlers o analizadores de código saber que estás usando un módulo core.
- Buena práctica moderna: Desde Node.js v14.18+ y más aún en v16+, esta es la forma recomendada.

| Sintaxis             | ¿Funciona? | ¿Recomendado?                      |
| -------------------- | ---------- | ---------------------------------- |
| `require('fs')`      | ✅ Sí       | ⚠️ Común pero menos explícito      |
| `require('node:fs')` | ✅ Sí       | ✅ Recomendado en entornos modernos |


### C06: Asíncronía y Callbacks
*Operación asincrónica → No bloquea el hilo principal de ejecución*

*Callback → Es una función que se pasa como argumento y que se ejecuta más tarde, cuando termine la tarea asincrónica.*

Este fichero lee 2 ficheros de texto de forma asincróna, mientras eso ocurre, siguie ejecutando otras instrucciones.

1. Importacición del Módulo File System (`fs`)
`const fs = require('node:fs')`
Esto carga el módulo `fs` para que se pueda acceder a funciones para trabajar con el sistema de archivos, como `readFile`.

2. LLamando a `fs.readFile()` (asincrónico)
```js
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log(data);
});
```
Aquí ocurre lo siguiente:
- Node No espera a que terminte esta tarea.
- El archivo `archivo.txt` se empieza a leer en **segundo plano**
- Cuando se termine de leer, Node ejecturará la **función callback** que imprimirá el contenido.
Lo que ocurre con la segunda función callback es lo mismo que la primera.

`fs.readFile` es Asincrónica. Las tareas pesadas como leer un archivo no bloquerán el flujo del probrama haciendo que el orden de ejución en la consola será mas o menos así:
```txt
Leyendo el primer archivo...

Haciendo algo más mientras se lee el primer archivo...

Leyendo el segundo archivo...
(Contenido de archivo.txt)
(Contenido de archivo02.txt)
```
| Estilo              | ¿Bloquea el flujo? | ¿Paralelo o secuencial?                                             | Sintaxis clara |
| ------------------- | ------------------ | ------------------------------------------------------------------- | -------------- |
| **Callback**        | No                 | Paralelo (por defecto)                                              | Menos legible  |
| **Promesas (then)** | No                 | Paralelo (con `Promise.all`)                                        | Más clara      |
| **Async/Await**     | No                 | Secuencial (por defecto, pero puede ser paralelo con `Promise.all`) | Muy clara ✅    |


### C07: Asincronía y Promesas
`const fs = require('node:fs/promises')`
En esta línea se está importando la **versión basada en Promesas** del módulo `fs` de Node.js. Esto permite que la funciones como `fs.readFile()` devuelvan una **promeas** en lugar de requerir un callback.

```js
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log(text);
  });
```
- fs.readFile() inicia una operación asincrónica.
- En lugar de pasar un callback, el método devuelve una promesa.
- Cuando la promesa se resuelve con éxito, el contenido del archivo se recibe como text.
- Si hubiera un error, se puede capturarlo con .catch().


### C08: Callbacks o Promesas
*Comentaro no vinculado a un fichero del repositorio*

| Característica            | Callbacks                | Promesas                  |
| ------------------------- | ------------------------ | ------------------------- |
| Sintaxis                  | Más antigua, más anidada | Más limpia, encadenable   |
| Manejo de errores         | Dentro del callback      | `.catch()` separado       |
| Mantenimiento             | Difícil con muchos pasos | Más fácil de leer/escalar |
| Soporte con `async/await` | ❌ No aplica directamente | ✅ Sí                      |

### C09 Asincronía Secuencial
El uso de `await`, hace que pause la ejecución sólo dentro de la función `async`, sin bloquear el hilo principal de Node.js.
- El programa espera a que se termine de lerr cada archivo **antes de continuar** al siguiente paso
- Pero **no bloquea todo Node.js**, sólo esa función `async`.

Por qué es secuencial:
```js
const text = await readFile('./archivo.txt', 'utf-8')
// se espera que termine antes de continuar

const secondText = await readFile('./archivo02.txt', 'utf-8')
// se espera después de la primera
```
Cada archivo se lee uno tras otro, aunque sea de forma asincrónica.
Esto es útil cuando se necesita que el orden de lectura se respete o que una tarea dependa de la anterior.

| Estilo              | ¿Bloquea el flujo? | ¿Paralelo o secuencial?                                             | Sintaxis clara |
| ------------------- | ------------------ | ------------------------------------------------------------------- | -------------- |
| **Callback**        | No                 | Paralelo (por defecto)                                              | Menos legible  |
| **Promesas (then)** | No                 | Paralelo (con `Promise.all`)                                        | Más clara      |
| **Async/Await**     | No                 | Secuencial (por defecto, pero puede ser paralelo con `Promise.all`) | Muy clara ✅    |


### C10: Asincronía con Promesas y Async/Await en Paralelo
```js
Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
])
```
- Aquí se lanza ambas lecturas de archivos al mismo tiempo.
- Node.js empieza a leer los dos archivos en paralelo.
- Luego, cuando ambas operaciones terminan, .then() se ejecuta con los resultados en orden.

| Estilo              | ¿Bloquea el flujo? | ¿Paralelo o secuencial?                                             | Sintaxis clara |
| ------------------- | ------------------ | ------------------------------------------------------------------- | -------------- |
| **Callback**        | No                 | Paralelo (por defecto)                                              | Menos legible  |
| **Promesas (then)** | No                 | Paralelo (con `Promise.all`)                                        | Más clara      |
| **Async/Await**     | No                 | Secuencial (por defecto, pero puede ser paralelo con `Promise.all`) | Muy clara ✅    |


### C11: Rutas y directorios
El módulo `path` de Node.js es esencial para majera rutas de archivos y directorios de manera segura y multiplataforma (Windows, Linux y macOS).

Para seguir una buenas practicas y evitar errores es importante **usar siempre** `path.join()` o ``path.resolve()` en lugar de concatenar strings.

#### Practicas 
Mal uso: <br>
`const ruta = 'dir' + '\\' + 'file.txt';`
¡Depende del SO!

Buen uso (multiplataforma)<br>
`const ruta = path.join('dir', 'file.txt');`
Funciona en Windows/Unix.

Normalizar rutas con `path.normlaize()` si hay `./` o `../` así:<br>
`const rutaRelativa = path.normalize('dir/../file.txt'); // → 'file.txt'`

Uso de `path.resolve()` para rutas absolutas<br>
`const rutaAbsoluta = path.resolve(__dirname, 'archivo.txt');`
<br>Ejemplo en Windows: 'C:\proyecto\archivo.txt'
<br>Ejemplo en Unix: '/home/user/proyecto/archivo.txt'

Evitar harcodear separadores (`/` o `\`).<br>
`const ruta = 'carpeta\\subcarpeta\\archivo.txt'; // Solo Windows.`

Buena forma:<br>
`const ruta = path.join('carpeta', 'subcarpeta', 'archivo.txt'); // Universal.`

### C12: Process
process es un objeto global en Node.js que proporciona información y control sobre el proceso actual de Node.js en ejecución. Es una de las características centrales de Node.js, permitiendo interactuar con el entorno del sistema operativo, variables de entorno, argumentos de línea de comandos, streams de entrada/salida, y más.

Usos pricipales de `process`:
| Propiedad/Método                  | Descripción                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| `process.argv`                   | Argumentos pasados al script de Node.js (incluyendo `node` y el nombre del archivo). |
| `process.env`                    | Variables de entorno del sistema (ej: `process.env.PATH`, `process.env.NODE_ENV`). |
| `process.cwd()`                  | Directorio de trabajo actual (Current Working Directory).                  |
| `process.exit()`                 | Termina el proceso de Node.js (con un código de salida opcional).          |
| `process.pid`                    | ID del proceso actual.                                                     |
| `process.platform`              | Sistema operativo actual (`'win32'`, `'linux'`, `'darwin'` para macOS).    |
| `process.stdin` / `stdout` / `stderr` | Streams de entrada/salida estándar.                                  |
| `process.on()`                   | Escucha eventos del proceso (ej: `'exit'`, `'uncaughtException'`).         |



### C13: Ls Avanzado 
#### 1. Importación de Módulos
El código utiliza tres módulos esenciales:
- fs/promises: Versión con promesas del módulo de filesystem para operaciones asíncronas
- path: Para manejo seguro de rutas de archivos multiplataforma
- picocolors: Librería minimalista para añadir colores a la salida de terminal
#### 2. Obtención del Directorio Objetivo
`const folder = process.argv[2] ?? '.'`<br>
- process.argv[2]: Obtiene el tercer argumento de línea de comandos (el primero es node, el segundo el script)
- ?? '.': Operador nullish coalescing para usar el directorio actual si no se proporciona argumento

#### 3. Función Principal ls()
Función asíncrona que realiza las siguientes operaciones:
##### a. Lectura del Directorio
`files = await fs.readdir(folder)`
- fs.readdir(): Lee el contenido del directorio (nombres de archivos/subdirectorios)
- El try/catch maneja errores si el directorio no existe o no se puede leer

##### b. Procesamiento de Cada Archivo
Para cada archivo encontrado:
- Construye la ruta completa con path.join()
- Obtiene estadísticas con fs.stat()
- Determina el tipo (archivo/directorio)
- Formatea la información:
  - Tamaño (en bytes)
  - Fecha de modificación (en formato local)

##### c. Aplicación de Estilos con Colores
- pc.bgMagenta(): Fondo magenta para el tipo (d/f)
- pc.blue(): Nombre en azul
- pc.green(): Tamaño en verde
- pc.yellow(): Fecha en amarillo

##### d. Presentación de Resultados
- Promise.all(): Espera a que todas las promesas de procesamiento de archivos se completen
- forEach(): Imprime cada línea formateada en la consola
#### 4. Manejo de Errores
El código incluye dos bloques try/catch para manejar:
- Error al leer el directorio principal
- Error al obtener estadísticas de un archivo específico
En ambos casos, muestra un mensaje de error y termina el proceso con código 1 (error).

#### 5. Ejecución
Finalmente, se llama a la función ls() con el directorio objetivo para iniciar el proceso.
- Explorar contenido de directorios
- Ver metadatos de archivos (tamaño, fecha)
- Practicar con operaciones asíncronas en Node.js
- Aprender a formatear salidas de consola

### C14: NPM
*comentario no vinculado con un fichero*
NPM (Node Package Manager) es el gestor de paquetes predeterminado para Node.js. Es una herramienta que permite:
- 📦 Instalar librerías (dependencias) para proyectos Node.js.
- 🏗️ Gestionar versiones de paquetes.
- 📝 Definir proyectos mediante el archivo package.json.
- 🚀 Ejecutar scripts y tareas automatizadas.

### C15 Servidor de Node
Un servidor HTTP es una apliación que escucha peticiones y responde a esas peticiones. Un ervidro HTTP hace:
- Escuchar conexiones por el protocolo HTTP.
- Recibir solicitudes del navegador (GET, POST, etc.).
- Procesar esas solicitudes.
- Responder con contenido (HTML, texto, JSON, etc.).

Para importar el módulo `http`:<br>
`const http = require('node:http')`

Con `createServer()` se puede crear un servidor
El callback `(req, res)` se ejecuta cada vez que alguien hace una petición al servidor (por ejemplo, visitando `http://localhost:PUERTO`).
- `req` = objeto que representa la petición del cliente
- `res` = objeto que representa la respuesta del servidor

Entonces en el ejemplo del fichero:
```js
const server = http.createServer((req, res) => {
    console.log("Request received...")
    res.end("Hola Mundo")
})
```
Lo que le llegará al usuario será el `res`, "Hola Mundo"

Será importante asignarle un puerto para el levantamiento del servidor
```js
server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
})
```
En este ejemplo al utilizar `0`, Node buscará automaticamente un puerto que esté disponible. Esto no cería recomentable en producción.


### C16: Net = Sockets de red a bajo nivel
El módulo `net` de Node.js se utiliza para trabajar con **sockets de red a bajo nivel**, es decir, conexiones TCP o IPC (Inter-Process Communication).
Mientras que el módulo `http` se usa específicamente para manejar el **protocolo HTTP**, el módulo `net` permite crear **servidores y clientes TCP genéricos**, lo cual te da mucho más control y flexibilidad.

Diferencias clave entre net y http:
| `http`                    | `net`                                                    |
| ------------------------- | -------------------------------------------------------- |
| Usa protocolo HTTP        | Usa protocolo TCP                                        |
| Ideal para servidores web | Ideal para protocolos personalizados o sistemas internos |
| Capa más alta             | Capa más baja (más control)                              |


#### 📦 ¿Qué hacer con net?
- Crear un servidor TCP personalizado.
- Crear un cliente TCP que se conecte a otro servidor.
- Comunicar procesos entre sí.
- Usar protocolos que no son HTTP (como SMTP, FTP, etc.).

###

###

###

###