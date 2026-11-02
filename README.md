# Mundo Cancel — Sitio web

Sitio estático (HTML + CSS + JavaScript, sin build) para **Mundo Cancel · Sistemas de Aluminio y Cristal**. Incluye catálogo de sistemas, cotizador visual con croquis en tiempo real y galería con lightbox.

Está preparado para publicarse en **GitHub Pages** sin configuración adicional: no requiere Node, ni compilación, ni servidor.

---

## Estructura del repositorio

```
.
├── index.html              # Página principal (solo estructura)
├── 404.html                # Página de error personalizada
├── site.webmanifest        # Metadatos PWA / icono
├── robots.txt              # Instrucciones para buscadores
├── .nojekyll               # Evita el procesamiento de Jekyll en GitHub Pages
├── .gitignore
├── README.md
└── assets/
    ├── css/
    │   └── styles.css      # Todos los estilos (variables, componentes, responsive)
    ├── js/
    │   ├── config.js       # ⚙️ Datos editables: WhatsApp, imágenes, categorías
    │   └── app.js          # Lógica: tarjetas, cotizador, croquis, lightbox
    └── img/
        └── favicon.svg     # Icono del sitio
```

Todas las rutas son **relativas** (`assets/css/styles.css`, no `/assets/...`), así el sitio funciona igual en `usuario.github.io/mi-repo/` que en un dominio propio.

---

## Ver el sitio en tu computadora

Abre `index.html` con doble clic. Si las imágenes de Unsplash o las animaciones no cargan, sírvelo por HTTP:

```bash
# Opción 1: Python (ya viene en macOS)
python3 -m http.server 8000

# Opción 2: Node
npx serve .
```

Luego visita <http://localhost:8000>.

---

## Publicar en GitHub Pages

### 1. Crear el repositorio y subir el código

```bash
git init
git add .
git commit -m "Sitio Mundo Cancel listo para GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

> Si tienes GitHub CLI autenticado (`gh auth login`), puedes crear el repo y subir en un paso:
> `gh repo create TU-REPO --public --source=. --remote=origin --push`

### 2. Activar Pages

1. En GitHub, entra al repositorio → **Settings** → **Pages**.
2. En *Build and deployment* → *Source*, elige **Deploy from a branch**.
3. Branch: **main** · Folder: **/ (root)** → **Save**.
4. Espera 1–2 minutos. La URL aparecerá en esa misma pantalla:

```
https://TU-USUARIO.github.io/TU-REPO/
```

### 3. Actualizar el sitio

Cada `git push` a `main` republica el sitio automáticamente en menos de un minuto. Si no ves los cambios, recarga con `Ctrl/Cmd + Shift + R` (caché del navegador).

---

## Personalizar

Casi todo el contenido editable vive en **`assets/js/config.js`**:

| Qué cambiar | Dónde |
| --- | --- |
| Número de WhatsApp | `whatsapp` y `whatsappUrl` en `config.js` **y** los enlaces `wa.me` dentro de `index.html` |
| Imagen del hero y galerías | `imagenes` en `config.js` |
| Categorías y su orden | `categorias` en `config.js` |
| Colores, tipografía, radios | Variables en `:root` de `assets/css/styles.css` |
| Textos de secciones | `index.html` |
| Enlaces de redes sociales | `footer` de `index.html` (hoy apuntan a `#`) |

**Imágenes locales:** guarda tus fotos en `assets/img/` y referencia `assets/img/mi-foto.jpg` en `config.js`. Usa JPG/WebP de 1200–1600 px de ancho para que el sitio cargue rápido.

**Agregar una categoría nueva:** añade una entrada en `categorias` y su galería en `imagenes`. Si necesita un croquis propio, agrega un `case` en `actualizarCroquis()` dentro de `app.js`.

---

## Dominio propio (opcional)

1. En **Settings → Pages → Custom domain**, escribe tu dominio (por ejemplo `mundocancel.com`) y guarda.
2. En tu proveedor de DNS crea los registros:
   - `A` para `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` para `www` → `TU-USUARIO.github.io`
3. Marca **Enforce HTTPS** cuando el certificado esté listo (puede tardar unos minutos).

GitHub Pages crea solo el archivo `CNAME` en la rama al guardar el dominio; no hace falta agregarlo a mano.

---

## Notas técnicas

- **Sin dependencias de build.** GSAP y Google Fonts se cargan por CDN; si el CDN falla, el sitio sigue visible gracias al *failsafe* de `app.js`.
- **`.nojekyll`** evita que GitHub Pages ignore carpetas que empiezan con `_` y acelera el despliegue.
- **404.html** se muestra automáticamente en rutas inexistentes. Si publicas en un sitio de proyecto, cambia su enlace `href="./"` por `/TU-REPO/`.
- **Rendimiento:** las imágenes del catálogo usan `loading="lazy"`; puedes servir WebP y ajustar los `w=` de Unsplash.
- **Accesibilidad:** los controles flotantes tienen `aria-label`; el lightbox responde a `Esc`, `←` y `→`.

---

© 2026 Mundo Cancel. Todos los derechos reservados.
