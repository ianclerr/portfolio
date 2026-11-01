# Portfolio — Ian Cler Renaud

Sitio estático en **Astro 7** y **Tailwind CSS 4**. Misma página cyberpunk (home + detalle de COARCO), partida para poder editar el contenido sin recorrer un HTML enorme.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Dónde se edita

| Qué cambiar | Archivo |
|---|---|
| Nombre, links, WhatsApp | `src/data/site.ts` |
| Skills | `src/data/skills.ts` |
| Proyectos | `src/data/projects.ts` |
| Experiencia | `src/data/experience.ts` |
| Servicios | `src/data/services.ts` |
| Contacto y footer | `src/data/contact.ts` |
| Página COARCO | `src/data/coarco.ts` |
| Look de la home | `src/styles/portfolio.css` |
| Look de COARCO | `src/pages/coarco.astro` + `src/styles/coarco.css` |

## Vercel

El repo queda listo para importar en Vercel. Framework: Astro. Build: `npm run build`. Salida: `dist`.

Esta rama no está mergeada a `main`.
