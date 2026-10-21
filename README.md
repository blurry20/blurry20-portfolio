# Portfolio de Augusto Castillo Vergara

Portfolio personal en inglés, desarrollado con Astro y CSS. Incluye experiencia profesional, tecnologías agrupadas, presentación personal y contacto.

## Desarrollo local

Desde la carpeta del proyecto, en PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Abre la dirección que muestra la terminal (normalmente `http://localhost:4321`). `npm.cmd` evita el bloqueo de `npm.ps1` cuando PowerShell no permite ejecutar scripts.

## Comprobar y previsualizar

```powershell
npm.cmd run build
npm.cmd run preview
```

La compilación ejecuta `astro check` y genera el sitio estático en `dist/`.

## Actualizar el contenido

- `src/pages/index.astro`: presentación, experiencia, sobre mí y contacto.
- `src/consts.ts`: título, descripción, perfiles sociales y grupos de tecnologías.
- `src/styles/global.css`: colores, tipografía, botones y estilos compartidos.
- `public/social-card.svg`: fuente editable de la imagen para compartir. La versión utilizada en los metadatos es `public/social-card.png`.

Para habilitar **Download CV**, agrega tu currículum en `public/cv.pdf` y vuelve a compilar. Mientras no exista el archivo se muestra **Let's connect**.

La sección de proyectos se incorporará cuando haya casos reales con descripción, aporte personal y enlaces.
