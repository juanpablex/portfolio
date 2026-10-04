# Portafolio de Juan Pablo Coca Robles — contexto para Claude

Responder SIEMPRE en español.

## Qué es este repo

Portafolio personal, HTML/CSS estático (sin build), publicado con GitHub Pages
en `https://juanpablex.github.io/portfolio`. Cuenta de GitHub: **juanpablex**
(personal — nunca usar la cuenta de la empresa).

- `index.html` + `style.css` — portada. Estilo: fondo `#081b29`, acento
  `#00abf0`, íconos de boxicons (unpkg). Mantener ese estilo visual.
- `portafolios.html` + `portafolios.css` — grilla de proyectos.
- `moviereviews/` — plantilla de terceros (Themezy), ya NO enlazada desde el portafolio; no volver a presentarla como trabajo propio.
- `portfolio/` — un proyecto React viejo (revisar antes de tocar).

## Ya hecho

- Portada: subtítulo **"AI Agent Developer | React | React Native"**, párrafo
  nuevo orientado a agentes de IA, ícono de GitHub → `https://github.com/juanpablex`.
- Email publicado (autorizado): ícono de Gmail, "Let's Talk" y "Contact" usan
  `mailto:juanpablococarobles@gmail.com`; "Hire me" → LinkedIn.
- Menú en ambas páginas: Home / Portafolio / Contact (se quitaron About y
  Services porque no tenían contenido).
- `portafolios.html`: link del menú corregido, `</a>` suelto quitado, tarjetas
  AgroMarket, DevConnect y TaskFlow marcadas "Próximamente" (clase `upcoming`).

## Pendiente

1. **Proyecto destacado: "Asistente Virtual con agente de IA para ERP"** (ver
   abajo). Hecho: página `asistente-ia.html` (caso de estudio en inglés, SVG),
   tarjeta en `portafolios.html` y demo pública en el repo
   `juanpablex/ai-agent-frontend` (Pages: `https://juanpablex.github.io/ai-agent-frontend/`),
   enlazada desde `asistente-ia.html` (ENLACES RETIRADOS temporalmente: la demo y el repo pasan a privado hasta tener autorización escrita de la empresa; `asistente-ia.html` ofrece "Request a demo" por correo y se quitó la tarjeta del código en `portafolios.html`; restaurar al recibir el permiso). La demo liviana `demo/` de este repo se
   eliminó. Workflow `.github/workflows/pages.yml`: publica la raíz estática.
   Falta: modo IA real preparado, sin activar (proxy Cloudflare Workers, en
   `ai-agent-frontend`).

## Proyecto destacado: Asistente Virtual (hecho en el trabajo)

Lo construí en mi trabajo: asistente con chat + reportes gerenciales para un ERP
de una empresa importadora/distribuidora, usable como widget embebido en el ERP,
como app web standalone y por WhatsApp.

**Restricciones duras — el código y los datos son de la empresa:**
- NO publicar código fuente original, datos reales, IPs, nombres de bases,
  credenciales ni nombres internos. Nunca escribir "Espejo", "Dualbiz",
  "GestionESP" ni "Premium Brands". Usar "Empresa Demo", "ERP", "Ruteo/CRM".
- Todo lo que se muestre se reconstruye desde cero con datos ficticios.

**Arquitectura real (para el caso de estudio y diagramas):**
- Backend: Node.js + TypeScript + Express + `mssql` contra SQL Server (ERP)
  **estrictamente de solo lectura**: login SQL sin permisos de escritura + guard
  en código que rechaza todo lo que no sea SELECT/WITH + el agente solo invoca
  funciones de repositorio predefinidas (nunca genera SQL libre).
- Agente: Claude API con **tool use** en un loop agéntico con memoria de
  conversación; **prompt caching** de system + tools (bajó el costo por mensaje).
  Chat separado por canal: widget (solo datos del ERP), app standalone (ERP +
  ruteo de vendedores + Power BI juntos), WhatsApp (ruteo/comercial).
- Otras piezas: microservicio .NET (ASP.NET Core) que expone el modelo de Power
  BI Desktop por HTTP; WhatsApp Business Cloud API con webhook (incluye gráficos
  como imagen + links a reportes); notificaciones/mensajes automáticos
  programados; control de consumo de tokens de IA por usuario.
- Frontend: React + Vite + Tailwind + Recharts + mapas (rutas de vendedores,
  mapas de calor). Dos builds: app standalone y widget embebible (Shadow DOM).

**Qué construir en el portafolio:**
- Página de caso de estudio: problema, solución, mi rol, stack, decisiones
  técnicas interesantes (las de arriba), diagramas de arquitectura en SVG.
- Demo en React + Vite (chat + reportes con gráficos + mapas) usando SOLO JSON
  con datos ficticios, publicada con GitHub Actions a Pages (hoy en el repo
  `ai-agent-frontend`).
- Chat de la demo: respuestas preparadas por palabras clave (muestran tablas y
  gráficos) como modo por defecto. Dejar preparado, sin activar, un modo de IA
  real: el loop agéntico corre en el navegador y las herramientas consultan los
  JSON ficticios; las llamadas a Claude pasan por un proxy mínimo en Cloudflare
  Workers (guarda la API key, límite de mensajes por visitante por día, modelo
  barato tipo Haiku 4.5 sin "adaptive thinking"); si el proxy falla o se
  alcanza el límite, volver a las respuestas preparadas. Además el usuario
  pondrá un tope de gasto mensual en la consola de Anthropic.

## Forma de trabajar

- Todo el contenido visible del sitio (páginas, menús, textos de tarjetas) va en
  **inglés**; solo mis respuestas a él son en español.
- El usuario está gastando un crédito de sesiones en la nube (USD 100, vence el
  5 de noviembre) — ser eficiente, no hacer QA visual con screenshots salvo que
  lo pida; él revisa visualmente.
- Preguntar antes de publicar datos personales (email, teléfono).
