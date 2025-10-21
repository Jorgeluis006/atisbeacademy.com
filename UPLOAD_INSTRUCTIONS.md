Instrucciones para subir los archivos a Hostinger

Archivos generados:
- backend.zip -> contiene la carpeta `backend` con `api/submit.php` y `db_config.php`.
- frontend-source.zip -> contiene la carpeta `frontend` con el código fuente (útil si quieres construir localmente antes de subir `dist`).

Subir mediante el Administrador de Archivos (panel de Hostinger):
1. Accede al panel de Hostinger y abre "Administrador de Archivos".
2. En la carpeta `public_html` (o la carpeta del dominio), sube `backend.zip` y `frontend-source.zip`.
3. Selecciona `backend.zip` y elige "Extraer" para colocar los archivos. Asegúrate de que `api/submit.php` quede en `public_html/api/submit.php`.
4. Si quieres servir el frontend directamente desde Hostinger, en tu máquina local corre `npm run build` en `frontend` y sube el contenido de `frontend/dist/` a `public_html/`.

Subir mediante FTP (FileZilla u otro cliente):
1. Obtén los datos de FTP desde el panel de Hostinger (host, usuario, contraseña, puerto).
2. Conéctate con tu cliente FTP a `ftp.tudominio.com` o al host que Hostinger provea.
3. Navega a `public_html` y sube los archivos y carpetas.

Configurar la base de datos:
1. Crea una base de datos MySQL en Hostinger (panel -> Bases de datos MySQL) y anota nombre, usuario y contraseña.
2. Abre phpMyAdmin desde el panel de Hostinger y selecciona la base de datos.
3. Importa `sql/schema.sql` (este archivo está en el repo) para crear la tabla `messages`.
4. Edita `backend/db_config.php` (en Hostinger) y reemplaza DB_USER, DB_PASS y DB_NAME por las credenciales reales.

Pruebas finales:
1. Abre la URL de tu dominio y prueba el formulario.
2. Si el envío falla, revisa los logs de Hostinger o prueba llamar directamente a `https://tudominio.com/api/submit.php` con una petición POST (Postman) para ver la respuesta JSON.

Notas de seguridad:
- Cambia `db_config.php` para que no contenga credenciales en control de fuente si vas a publicar el repo públicamente.
- Restringe CORS en `api/submit.php` a tu dominio en producción.
- Considera usar reCAPTCHA para evitar spam.

Si quieres, puedo:
- Generar una versión `frontend-dist.zip` ya construida (necesitaría ejecutar `npm install` y `npm run build` en tu entorno o aquí si permites instalar dependencias).
- Probar el endpoint con una petición de ejemplo localmente.
