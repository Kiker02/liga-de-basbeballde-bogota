# Liga de Béisbol de Bogotá

Sitio web oficial de la Liga de Béisbol de Bogotá desarrollado con Next.js, TypeScript y Tailwind CSS.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (viene incluido con Node.js)
- Git (opcional)

## Instalación

1. Clona el repositorio (si usas Git):
```bash
git clone <url-del-repositorio>
```

2. Navega al directorio del proyecto:
```bash
cd liga-beisbol-bogota
```

3. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Construcción

Para construir el proyecto para producción:

```bash
npm run build
```

## Ejecución en Producción

Para ejecutar la versión de producción:

```bash
npm run start
```

## Estructura del Proyecto

```
liga-beisbol-bogota/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Carousel.tsx
│   │   ├── Navigation.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── NewsSection.tsx
│   │   └── UpcomingEvents.tsx
│   └── styles/
│       └── globals.css
├── public/
│   └── images/
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Tecnologías Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Mantenimiento

Para mantener el proyecto actualizado:

1. Actualizar dependencias:
```bash
npm update
```

2. Verificar vulnerabilidades:
```bash
npm audit
```

3. Corregir problemas automáticamente:
```bash
npm audit fix
``` 