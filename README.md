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

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
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
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

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
