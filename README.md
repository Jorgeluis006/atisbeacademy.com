# Atisbe - Manual de Marca (sitio estático React + Vite)

Este repositorio contiene una página sencilla en React que muestra el Manual de Marca de Atisbe. Está pensada para desplegar como sitio estático (Hostinger, Netlify, Vercel, etc.).

Requisitos

- Node.js 18+ recomendado
- PowerShell (Windows)

Instalación y ejecución (PowerShell)

```powershell
npm install
npm run dev
```

Construir para producción

```powershell
npm run build
# Para previsualizar localmente
npm run preview
```

Despliegue en Hostinger (resumen)

1. Genera la build: npm run build
2. Sube el contenido de la carpeta `dist/` al administrador de archivos de tu hosting o configura el deploy desde Git/FTP. Hostinger acepta subir archivos ZIP o usar Git/FTP.
3. Asegúrate de apuntar el dominio a la carpeta pública donde colocaste `index.html`.

Contenido

El sitio incluye:
- `index.html`
- `src/main.jsx`
- `src/App.jsx` (todo el contenido del Manual de Marca en español)
- `src/styles.css` (estilos responsive y paleta de colores)

Si quieres, puedo:
- Agregar un favicon y logo SVG.
- Añadir meta tags para SEO y Open Graph.
- Preparar scripts para deploy automático por FTP a Hostinger.

Contacta y dime qué prefieres que haga a continuación.