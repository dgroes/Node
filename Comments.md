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


###

###