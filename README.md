# Landing Page — Vite + React + Tailwind

Landing page moderna y responsive construida con React, Tailwind CSS y Vite. Incluye formulario de contacto funcional conectado a una API real (Web3Forms), diseño mobile-first y componentes reutilizables.

## Tecnologías

- [React](https://react.dev/) — librería para construir interfaces de usuario basadas en componentes.
- [Vite](https://vite.dev/) — bundler y servidor de desarrollo rápido.
- [Tailwind CSS](https://tailwindcss.com/) — framework de utilidades CSS.
- [Web3Forms](https://web3forms.com/) — servicio de envío de formularios sin backend propio.

## Características

- Diseño responsive (mobile-first) con menú de navegación adaptable.
- Componentes reutilizables (tarjetas de servicios generadas dinámicamente).
- Formulario de contacto con validación, estados de carga/éxito/error y conexión real a API mediante `fetch`.
- Código organizado por responsabilidades (`components`, `sections`, `data`).

## Instalación y uso local

Clona el repositorio:

```bash
git clone https://github.com/J-Mayhua/pagina-landing-vite.git
cd pagina-landing-vite
```

Instala las dependencias:

```bash
npm install
```

Crea un archivo `.env.local` en la raíz del proyecto (ver sección de Variables de entorno).

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## Variables de entorno

Este proyecto usa [Web3Forms](https://web3forms.com/) para el envío del formulario de contacto. Necesitas tu propia Access Key gratuita:

1. Regístrate en [web3forms.com](https://web3forms.com/) y obtén tu Access Key.
2. Crea un archivo `.env.local` en la raíz del proyecto con:

```
VITE_WEB3FORMS_KEY=tu_access_key_aqui
```

## Estructura del proyecto

```
src/
├── components/   # Componentes reutilizables (Navbar, FeatureCard)
├── sections/     # Secciones de la landing (Hero, Features, Contact, Footer)
├── data/         # Contenido separado de la UI
├── App.jsx
└── main.jsx
```

## Autor

Desarrollado por **José Adolfo Mayhua Palomino** — [LinkedIn](https://www.linkedin.com/in/jose-adolfo-mayhua-palomino-184a79237/) · [GitHub](https://github.com/J-Mayhua)
