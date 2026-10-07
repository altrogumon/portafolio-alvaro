# Portafolio de Alvaro Troche Gutierrez

Proyecto final del módulo Fundamentos de Desarrollo Web y Diseño Web del Diplomado en Desarrollo Web Full Stack.

Página básica hecha con HTML, CSS y JavaScript, sin librerías ni instalaciones adicionales para verla.

## Archivos

- `index.html`: información personal, formación, experiencia, proyecto y contacto.
- `style.css`: colores, espacios y una media query para celulares.
- `script.js`: botón que muestra un saludo.

## Ver el proyecto

Abre `index.html` con doble clic. Se abrirá en tu navegador.
Haz clic en **Mostrar saludo** y prueba reducir el ancho de la ventana: el menú cambia a una lista vertical cuando la pantalla mide 600 píxeles o menos.

## Información personal

El portafolio incluye formación académica, formación complementaria y experiencia en Banco Unión, Banco PRODEM y Banco FIE. La maestría en Gestión Financiera fue concluida en marzo de 2026 y el Diplomado en Big Data, Analytics y Business Intelligence en UNIVALLE, en agosto de 2026. Actualmente curso el Diplomado en Desarrollo Web Full Stack en UNIVALLE.

La sección Contacto muestra mi correo y mi perfil de GitHub: https://github.com/altrogumon.

## Crear un repositorio público

1. Inicia sesión en [GitHub](https://github.com).
2. Haz clic en **+** y después en **New repository**.
3. Escribe el nombre `portafolio-alvaro`.
4. Selecciona **Public**.
5. Deja sin seleccionar las opciones para agregar README, .gitignore y licencia; esta carpeta ya incluye un README.
6. Haz clic en **Create repository**.

## Subir los archivos con Git

Si no tienes Git, instala [Git para Windows](https://git-scm.com/downloads/win).

Abre la carpeta `portafolio-alvaro` en Visual Studio Code. Selecciona **Terminal > New Terminal**. La terminal debe estar dentro de esta carpeta, donde está `index.html`, no en la carpeta que contiene todo el proyecto del diplomado.

Ejecuta cada comando por separado. Sustituye `TU_CORREO_DE_GITHUB` por el correo asociado a tu cuenta de GitHub (o el correo privado que GitHub muestra en Settings > Emails):

```bash
git init
git config user.name "Alvaro Troche Gutierrez"
git config user.email "TU_CORREO_DE_GITHUB"
git add .
git commit -m "Crear mi portafolio personal"
git branch -M main
git remote add origin https://github.com/altrogumon/portafolio-alvaro.git
git push -u origin main
```

Cuando Git solicite iniciar sesión, sigue las indicaciones y autoriza el acceso a tu cuenta en el navegador. Si pide una contraseña en la terminal, no uses la contraseña de tu cuenta: GitHub requiere un token o un método de autenticación compatible. Consulta [la guía de autenticación de GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).

## Obtener el enlace para entregar

Después de subir los archivos, actualiza la página del repositorio y comprueba que aparecen `index.html`, `style.css`, `script.js` y `README.md`.

Copia la dirección de la barra del navegador. Si usaste el nombre indicado, será:

```text
https://github.com/altrogumon/portafolio-alvaro
```

Ese es el enlace que debes pegar en la plataforma del módulo. El repositorio debe aparecer como **Public**. Puedes comprobarlo abriendo el enlace en una ventana privada sin iniciar sesión.

## Guardar cambios posteriores

Después de editar y guardar tus archivos, ejecuta:

```bash
git add .
git commit -m "Actualizar mi informacion"
git push
```

Guía oficial: [Subir un proyecto local a GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
