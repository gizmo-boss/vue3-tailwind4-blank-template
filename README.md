# Vue 3 + Tailwind CSS 4 Template

A modern, minimal starter template for building web applications with Vue 3, TypeScript, Tailwind CSS 4, and Vite.

## Features

- **Vue 3** - Progressive JavaScript framework with Composition API support
- **TypeScript** - Full TypeScript support for type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast and modern build tool
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS preprocessing
- **Router** - Vue Router integration for navigation
- **State Management** - Pinia stores setup
- **API Service** - Pre-configured API service layer
- **Zod** - TypeScript-first schema validation with static type inference

## Current Stack Versions

- `vue` `^3.5.34`
- `vite` `^8.0.13`
- `tailwindcss` `^4.3.0`
- `typescript` `~6.0.3`
- `pinia` `^3.0.4`
- `vue-router` `^5.0.7`
- `axios` `^1.16.1`
- `zod` `^4.4.3`
- `eslint` `^10.3.0`

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable Vue components
├── layouts/         # Layout components
│   └── DefaultLayout.vue
├── router/          # Vue Router configuration
├── services/        # API and service utilities
│   └── api.service.ts
├── stores/          # Pinia store configuration
├── types/           # TypeScript type definitions
├── views/           # Page components
│   └── Home.vue
├── App.vue          # Root component
├── main.ts          # Application entry point
└── style.css        # Global styles
```

## Getting Started

### Prerequisites

- Node.js `20.19+` or `22.12+` (recommended: latest LTS)
- npm `10+`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gizmo-boss/vue3-tailwind4-blank-template
cd vue3-tailwind4-blank-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Auto-fix ESLint issues where possible
- `npm run format` - Format source files with Prettier
- `npm run format:check` - Verify formatting without changes
- `npm run init` - Install project dependencies

## Quality Checks

Before pushing changes, run:

```bash
npm run format:check
npm run lint
npm run build
```

This order keeps the code style consistent, validates lint rules, and confirms type-safe production build output.

## First Page UI

The default first screen (`src/views/Home.vue`) is updated to a modern landing layout:

- Responsive hero section with stack badges
- Light/dark mode toggle with localStorage persistence
- Interactive reactivity widgets (counter + greeting input)
- "Next steps" panel for onboarding new project contributors

## Configuration Files

- **vite.config.ts** - Vite configuration
- **tailwind.config.js** - Tailwind CSS customization
- **tsconfig.json** - TypeScript compiler options
- **eslint.config.js** - ESLint configuration
- **postcss.config.js** - PostCSS configuration

## Customization

### Tailwind CSS

Customize your design tokens in `tailwind.config.js`. Learn more at [Tailwind CSS Documentation](https://tailwindcss.com/docs).

### Vue Router

Configure routes in `src/router/index.ts` to set up your application navigation.

### State Management

Use Pinia stores in `src/stores/` for global state management. See [Pinia Documentation](https://pinia.vuejs.org/).

### API Service

Extend `src/services/api.service.ts` to add your API endpoints and HTTP methods.

## Browser Support

This template uses modern JavaScript features and is best suited for modern browsers. For legacy browser support, additional transpilation may be needed.

## License

This template is open source and available under the MIT License.

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Contributing

Feel free to submit issues and enhancement requests!

---

Happy coding! 🚀
