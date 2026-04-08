# Landing Page Carolina Marín

Landing page comercial de alta conversión construida con React + JavaScript + HTML + CSS, orientada a captar contactos por WhatsApp y compatible con GitHub Pages.

## Stack

- React 18
- Vite
- JavaScript
- CSS

## Estructura del proyecto

```text
flga_carolina_marin/
├─ Profile (1).pdf
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ App.jsx
│  ├─ content.js
│  ├─ main.jsx
│  ├─ styles.css
│  └─ components/
│     ├─ Navbar.jsx
│     ├─ HeroSection.jsx
│     ├─ TrustSection.jsx
│     ├─ ServicesSection.jsx
│     ├─ BenefitsSection.jsx
│     ├─ CredentialsSection.jsx
│     ├─ CtaSection.jsx
│     ├─ ContactSection.jsx
│     ├─ FooterSection.jsx
│     ├─ FloatingWhatsApp.jsx
│     └─ SectionTitle.jsx
└─ README.md
```

## Datos editables importantes

Editar `src/content.js` antes de publicar:

- `whatsapp.number`: reemplazar `569XXXXXXXX` por el número real en formato internacional sin `+`.
- `placeholders`: completar modalidad de atención y horarios.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Vite mostrará una URL local (ej. `http://localhost:5173`).

## Build de producción

```bash
npm run build
```

El resultado queda en la carpeta `dist/`.

## Preview del build

```bash
npm run preview
```

## Deploy en GitHub Pages

### Opción 1: GitHub Actions (recomendada)

1. Subir el proyecto al repositorio.
2. En GitHub, ir a `Settings > Pages`.
3. En `Build and deployment`, seleccionar `GitHub Actions`.
4. El repositorio ya incluye el workflow [`deploy-pages.yml`](./.github/workflows/deploy-pages.yml), que publica `dist` automáticamente al hacer push a `main`.

La configuración `base: './'` en `vite.config.js` permite servir correctamente assets en GitHub Pages para este caso de landing estática.

### Opción 2: Publicar carpeta `dist` con gh-pages

```bash
npm run deploy
```

Este comando ejecuta build y publica `dist` usando la dependencia `gh-pages`.

## Notas de implementación

- Sitio single-page sin backend.
- Sin routing complejo.
- CTA principal y repetido a WhatsApp (hero, beneficios, bloque CTA, contacto y botón flotante).
- Contenido redactado desde el PDF de referencia, evitando formato de CV online.
