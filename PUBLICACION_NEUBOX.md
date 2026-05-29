# Guía de Publicación Completa en el Servidor de Neubox 🚀
## Inmobiliaria CRM S.A. de C.V.

Esta guía te guiará paso a paso para publicar el sitio web de **Inmobiliaria CRM** en tu hosting de **Neubox** (cualquier plan de hosting con cPanel).

---

### Lo que hemos preparado para ti:
1. **Rutas Relativas (`base: './'`)**: El sitio está configurado para que todos los elementos (imágenes, CSS, scripts) se carguen de manera perfecta independientemente de si los pones en la raíz de tu dominio (`https://www.inmobiliariacrm.com/`) o en una carpeta de pruebas (como `https://www.inmobiliariacrm.com/nueva-version/`).
2. **Archivo `.htaccess` Automático**: Agregamos un archivo de configuración óptimo para Apache (el servidor web detrás de Neubox). Este archivo:
   - Configura compresión **Gzip** para que el sitio cargue al instante incluso en conexiones móviles lentas.
   - Activa el **caché del navegador** para acelerar visitas recurrentes.
   - Protege el ruteo web de React por si decides añadir páginas internas más adelante.
3. **Formulario 100% Funcional**: El código utiliza ahora un envío asíncrono optimizado con **FormSubmit** directo a `contacto@inmobiliariacrm.com` con copia invisible (CC) a `cotizaciones@inmobiliariacrm.com` para estar alineado y ser idéntico al comportamiento del sitio original.

---

### Paso 1: Generar los archivos finales (El sitio web estático)

* **Opción A (La más sencilla - Descargando el build ya hecho por el bot)**:
  1. En las opciones de este entorno (arriba a la derecha en el menú de AI Studio), puedes exportar o descargar el proyecto completo en un archivo `.zip`.
  2. En el archivo descargado, la carpeta `dist/` contiene el sitio ya compilado por nosotros, optimizado al 100% y listo para subir.

* **Opción B (Para desarrolladores - Generando el build en tu computadora local)**:
  Si deseas hacer cambios en el futuro y compilarlo tú mismo, solo necesitas abrir una terminal en la carpeta de tu código y correr:
  ```bash
  npm install
  npm run build
  ```
  Esto creará la carpeta `dist/` con todos los archivos listos para subir.

---

### Paso 2: Subir los archivos a Neubox (Por cPanel)

1. Ingresa a tu panel de **cPanel** de Neubox (usualmente `tudominio.com:2083` o a través del área de clientes de Neubox).
2. Busca la herramienta llamada **"Administrador de Archivos"** (File Manager).
3. Entra a la carpeta raíz de tu sitio, que normalmente se llama **`public_html`** (o la carpeta asignada a tu subdominio correspondiente).
4. **Respalda tus archivos antiguos**: Es recomendable crear una carpeta llamada `respaldo_antiguo/` y mover los archivos viejos (como `contacts.html`, `index.html` anteriores, etc.) ahí para mantener el servidor limpio.
5. Sube los archivos:
   - Entra a la carpeta local `dist/` en tu computadora.
   - Selecciona **todos los archivos y carpetas** que están *adentro* de `dist/` (incluyendo la carpeta `assets/`, el archivo `index.html` y el archivo oculto `.htaccess`).
   - Súbelos directamente dentro de `public_html/`.

> **⚠️ NOTA IMPORTANTÍSIMA DE ARCHIVOS OCULTOS:** El archivo `.htaccess` comienza con un punto, por lo que cPanel podría ocultarlo por defecto. Asegúrate de hacer clic en **"Configuración"** (arriba a la derecha en el Administrador de Archivos de cPanel) y activar la casilla **"Mostrar archivos ocultos (dotfiles)"** para confirmar que el `.htaccess` se subió correctamente a la raíz de tu sitio.

---

### Paso 3: ¡Listo para Disfrutar! 📱💻
Una vez subidos los archivos de la carpeta `dist/` a tu `public_html`, el sitio web estará en línea con:
- El nuevo logotipo vectorizado en tamaño grande en el header de la web.
- Excelente rendimiento adaptativo (responsivo) para cualquier celular, tablet o computadora (Chrome, Safari, Firefox, Edge, etc.).
- Formulario de contacto funcionando al 100% bajo AJAX, que envía la información a tus correos asignados sin recargar bruscamente la página.
