Despliegue automático con GitHub Actions (build + FTP)

He incluido un workflow de GitHub Actions en `.github/workflows/deploy.yml` que realiza:
- Checkout del repo
- Instalación y build del `frontend` (Vite)
- Subida del contenido de `frontend/dist` y de la carpeta `backend` al servidor vía FTP/FTPS

Configuración de secretos (en el repositorio GitHub -> Settings -> Secrets and variables -> Actions -> New repository secret):

- `FTP_HOST`: host FTP de tu servidor (p. ej. `ftp.tudominio.com`)
- `FTP_USERNAME`: nombre de usuario FTP
- `FTP_PASSWORD`: contraseña FTP

Una vez añadidos los secretos, cada push a `main` hará build y deploy automático. Ajusta `server-dir` en el workflow si necesitas subir a una subcarpeta específica.
# English Academy - Proyecto (React + PHP)

Este repositorio incluye un frontend en React (Vite) y un backend en PHP que guarda mensajes en una base de datos MySQL (importable con phpMyAdmin). También contiene instrucciones para desplegar en Hostinger.

Estructura:
- frontend/: aplicación React con Vite
- backend/: endpoints PHP (api/submit.php) y configuración de DB (db_config.php)
- sql/: `schema.sql` para crear la DB y tabla `messages`

Pasos rápidos para desarrollo local:
1. Frontend
   - Instala dependencias: npm install
   - Corre en modo desarrollo: npm run dev
2. Backend
   - Coloca la carpeta `backend` en un servidor PHP (por ejemplo, el servidor de Hostinger o un servidor local como XAMPP)
   - Edita `backend/db_config.php` con las credenciales de tu base de datos

Despliegue en Hostinger (resumen):
1. Crea la base de datos en el panel de Hostinger -> MySQL Databases.
2. Importa `sql/schema.sql` en phpMyAdmin.
3. Sube los archivos del backend (`backend/`) a la carpeta pública (public_html o la carpeta del dominio) con el administrador de archivos o FTP.
4. Sube los archivos construidos del frontend (`frontend/dist`) al mismo dominio (o sirve el frontend desde un CDN). Para construir:
   - En `frontend`: npm run build
   - Sube los contenidos de `dist/` al servidor.
5. En `backend/db_config.php` reemplaza DB_USER, DB_PASS y DB_NAME por las credenciales de Hostinger.
6. Asegúrate de que `api/submit.php` esté accesible en la URL `/api/submit.php` desde el frontend.

Pasos detallados para Hostinger

1) Crear la base de datos y usuario
   - En el panel de Hostinger, ve a "Bases de datos MySQL" y crea una nueva base de datos. Anota el nombre de la base, usuario y contraseña.
   - En `backend/db_config.php` reemplaza los valores por los provistos.

2) Importar el esquema
   - Abre phpMyAdmin desde el panel de Hostinger.
   - Selecciona la base de datos creada y usa "Importar" para subir `sql/schema.sql`.

3) Subir el backend
   - En el Administrador de Archivos o mediante FTP/SFTP sube la carpeta `backend` a `public_html` (o coloca los archivos dentro de la carpeta del dominio).
   - La ruta final típica será `public_html/api/submit.php`.

4) Construir y subir el frontend
   - En tu máquina local, en `frontend` ejecuta:

```powershell
npm install; npm run build
```

   - Sube el contenido de `frontend/dist/` al `public_html/` (si quieres que la app se sirva desde la raíz del dominio).

5) Configurar CORS y rutas
   - Si el frontend y backend están en el mismo dominio no necesitarás cambiar CORS.
   - Si los alojas en subdominios distintos, ajusta `api/submit.php` para permitir sólo el origen del frontend.

Pruebas locales rápidas

- Usando PHP integrado (para probar el backend):

```powershell
# Desde la carpeta backend
php -S localhost:8000 -t .
```

Esto servirá `api/submit.php` en `http://localhost:8000/api/submit.php`.

- Frontend con Vite:

```powershell
cd frontend; npm install; npm run dev
```

Luego abre la URL que te muestra Vite (por defecto `http://localhost:5173`). Si tu frontend está en otro puerto que el backend, el fetch en `App.jsx` apunta a `/api/submit.php`, así que para probar localmente puedes cambiar temporalmente la URL de fetch a `http://localhost:8000/api/submit.php` o configurar un proxy en Vite.

Proxy rápido en Vite (opcional):
 - En `frontend/package.json` puedes agregar una configuración de proxy usando `vite.config.js`. Si quieres que lo haga por ti, dime y lo agrego.

Siguientes sugerencias (opcionales):
- Añadir protección anti-spam (reCAPTCHA)
- Añadir envío de correo al administrador con `mail()` o integrando un servicio como SendGrid
- Mejorar UI y accesibilidad

Si quieres, continúo y:
- Agrego `vite.config.js` con proxy para desarrollo local
- Agrego validaciones en el frontend y manejo de errores más detallado
- Integro envío de email al backend

Notas importantes:
- Por seguridad, restringe CORS y valida/escapa datos más estrictamente antes de poner en producción.
- Hostinger ya provee phpMyAdmin para importar el archivo SQL y administrar la base de datos.

Si quieres, puedo:
- Añadir validaciones extra en PHP (email válido, longitud máxima).
- Añadir reCAPTCHA o protección contra spam.
- Implementar envío de correo al administrador cuando llegue un mensaje.

