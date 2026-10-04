# Portafolio de Juan Pablo Coca Robles — contexto para Claude

Responder SIEMPRE en español.

## Qué es este repo

Portafolio personal, HTML/CSS estático (sin build), publicado con GitHub Pages
en `https://juanpablex.github.io/portfolio`. Cuenta de GitHub: **juanpablex**
(personal — nunca usar la cuenta de la empresa).

- `index.html` + `style.css` — portada. Estilo: fondo `#081b29`, acento
  `#00abf0`, íconos de boxicons (unpkg). Mantener ese estilo visual.
- `portafolios.html` + `portafolios.css` — grilla de proyectos.
- `moviereviews/` — proyecto Movie Review Hub (estático).
- `portfolio/` — un proyecto React viejo (revisar antes de tocar).

## Ya hecho

- Subtítulo de la portada cambiado a **"AI Agent Developer | React | React Native"**
  (antes "Full-stack Developer").
- Ícono de GitHub ahora apunta a `https://github.com/juanpablex`.

## Pendiente (en este orden)

1. **Portada** — el párrafo bajo el título todavía dice ".net core web api…";
   reemplazar por algo alineado a "AI Agent Developer", ej.: *"I build AI agents
   that connect LLMs to real business data — ERPs, SQL Server, Power BI and
   WhatsApp — with React and React Native frontends."* Los botones "Hire me" /
   "Let's Talk" y los links `#` del menú (About, Services, Contact) no llevan a
   nada. El ícono de Gmail está vacío — **preguntar** antes de publicar el email
   (`juanpablococarobles@gmail.com`).
2. **portafolios.html** — el menú apunta a `portfolio.html`, que NO existe (la
   página es `portafolios.html`). Las tarjetas AgroMarket, DevConnect y TaskFlow
   no tienen link: preguntar si se marcan "próximamente" o se quitan. Hay un
   `</a>` suelto dentro del `<h3>` de Movie Review Hub.
3. **Proyecto destacado: "Asistente Virtual con agente de IA para ERP"** (ver
   abajo).

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
- Carpeta `demo/` con una demo en React + Vite (chat + 2-3 paneles de reportes
  con gráficos + un mapa) usando SOLO JSON con datos ficticios, compilada a
  estático y publicada con GitHub Actions a Pages.
- Chat de la demo: respuestas preparadas por palabras clave (muestran tablas y
  gráficos) como modo por defecto. Dejar preparado, sin activar, un modo de IA
  real: el loop agéntico corre en el navegador y las herramientas consultan los
  JSON ficticios; las llamadas a Claude pasan por un proxy mínimo en Cloudflare
  Workers (guarda la API key, límite de mensajes por visitante por día, modelo
  barato tipo Haiku 4.5 sin "adaptive thinking"); si el proxy falla o se
  alcanza el límite, volver a las respuestas preparadas. Además el usuario
  pondrá un tope de gasto mensual en la consola de Anthropic.

## Forma de trabajar

- El usuario está gastando un crédito de sesiones en la nube (USD 100, vence el
  5 de noviembre) — ser eficiente, no hacer QA visual con screenshots salvo que
  lo pida; él revisa visualmente.
- Preguntar antes de publicar datos personales (email, teléfono).
