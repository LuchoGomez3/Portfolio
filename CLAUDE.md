# Portfolio — Luciano Gomez

## Project Overview

Portfolio personal desarrollado con Astro. El objetivo es presentar mi perfil profesional como desarrollador fullstack (React/Next.js + Python/FastAPI) de forma clara, moderna y orientada a recruiters y hiring managers.

## Tech Stack

- **Framework:** Astro
- **UI Islands:** React 19 (via `@astrojs/react`)
- **Styling:** Tailwind CSS
- **Language:** TypeScript (strict mode)
- **i18n:** Español (default) + English — routing nativo de Astro
- **Deployment:** Vercel
- **Package Manager:** npm

## Architecture

```
src/
├── components/    # Componentes reutilizables (.astro para estáticos, .tsx para islands)
│                  # Footer.astro, Header.astro, Welcome.astro, LanguageSwitcher.tsx, ThemeToggle.tsx
├── layouts/       # Layout principal del sitio (Layout.astro)
├── pages/         # Rutas del sitio (file-based routing de Astro)
│                  # index, about, experience, projects, skills — con subcarpeta en/ para i18n
├── i18n/          # Configuración de internacionalización (i18n.ts) y archivos de locales
├── styles/        # Estilos globales (globals.css) y variables CSS/Tailwind
└── assets/        # Imágenes y recursos estáticos optimizados por Astro
public/
├── favicon.svg   # Favicon del sitio
├── skills/       # Iconos de skills agrupados por categoría (backend, frontend, learning, tools)
└── works/        # Logos e imágenes de empresas/proyectos laborales
```

> Nota: aún no se usan Content Collections (`src/content/`). Si se agregan en el futuro proyectos/experiencia como datos estructurados, crear la carpeta y documentarla aquí. Lo mismo aplica para `src/utils/` y `src/types/` cuando aparezcan helpers o tipos compartidos.

## Commands

- `npm run dev` — Iniciar servidor de desarrollo
- `npm run build` — Build de producción
- `npm run preview` — Preview del build

## Coding Standards

### General

- Escribir todo el código en TypeScript con strict mode
- Componentes Astro para contenido estático, React (islands) solo cuando se necesite interactividad
- Nombres de archivos en kebab-case para páginas y utils, PascalCase para componentes
- Cada componente en su propio archivo, un componente por archivo
- Props tipadas con interfaces explícitas, nunca `any`
- Commits en español, convencionales: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `chore:`

### Astro-Specific

- Preferir componentes `.astro` sobre `.tsx` siempre que sea posible (mejor performance)
- Usar `client:load` solo cuando la interactividad es necesaria desde el inicio
- Usar `client:visible` para componentes interactivos below-the-fold
- Preferir Content Collections para datos estructurados cuando se agreguen (aún no implementadas)
- Optimizar imágenes con `astro:assets` y el componente `<Image />`
- Aprovechar view transitions de Astro para navegación fluida

### Tailwind CSS

- Usar clases de utilidad de Tailwind, evitar CSS custom salvo variables globales
- Responsive design mobile-first
- Mantener consistencia con el design system definido en `tailwind.config.mjs`
- Extraer grupos de clases repetidas a componentes, no a `@apply`

### Accessibility

- Todas las imágenes con `alt` descriptivo
- Navegación por teclado funcional
- Semántica HTML correcta (header, main, nav, section, article, footer)
- Contraste de colores WCAG AA mínimo

### Internacionalización (i18n)

- Idioma por defecto: español (`es`), segundo idioma: inglés (`en`)
- Routing nativo de Astro: páginas en español en la raíz (`/about`), en inglés bajo `/en/about`
- Traducciones en archivos JSON en `src/i18n/locales/` (`es.json`, `en.json`)
- Usar `getLangFromUrl()` para detectar el idioma desde la URL
- Usar `useTranslations(lang)` para obtener textos traducidos con soporte de claves anidadas
- Usar `useTranslatedPath(lang)` para generar rutas en el idioma correcto
- Cada página en `src/pages/` debe tener su equivalente en `src/pages/en/`
- Los islands interactivos (`LanguageSwitcher.tsx`) reciben el idioma actual por props

## Content Guidelines

- El contenido del portfolio debe reflejar experiencia real y verificable
- Las descripciones de proyectos deben explicar: qué problema resuelve, qué decisiones técnicas se tomaron, y qué se aprendió
- Evitar buzzwords vacíos; ser específico y técnico cuando corresponda
- Incluir métricas o resultados concretos cuando sea posible

## Git Workflow

- Branch principal: `main`
- Feature branches: `feat/nombre-del-feature`
- Fix branches: `fix/nombre-del-fix`
- Hacer commits atómicos y descriptivos
- No commitear archivos de build, env vars ni node_modules
