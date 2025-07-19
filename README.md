# 🛒 Product Viewer

A **React application** built with **Vite**, **Redux Toolkit**, and **React Router DOM**, designed for fast product viewing and management with clean architecture and testing setup.

---

## 🚀 Features

- React 19 with functional components
- Redux Toolkit for state management
- React Router DOM for routing
- Axios for API calls
- TypeScript for type safety
- ESLint for linting and code quality
- Jest + React Testing Library for unit testing
- Vite for fast builds and development server

---

## 📁 Project Structure (High Level)

```plaintext
product-viewer/
├── public/
├── src/
│   ├── assets/             # Static assets
│   ├── components/
│   │   ├── about/          # About page/component
│   │   ├── app/            # App wrapper and routes
│   │   ├── contact/        # Contact component
│   │   ├── header/         # Header/navbar component
│   │   ├── home/           # Home component
│   │   ├── product/        # Product-related components:
│   │   │   ├── add/            # Add product
│   │   │   ├── list/           # List products
│   │   │   ├── list-store/     # Product list using Redux store
│   │   │   ├── view/           # Product view by ID
│   │   │   ├── view-context/   # Product view using context
│   │   │   └── view-props/     # Product view using props
│   │   └── shared/         # Shared/reusable components
│   ├── services/           # API services (Axios)
│   ├── slices/             # Redux slices
│   ├── styles/             # CSS or global styles
│   ├── index.css
│   ├── main.tsx            # App entry point
│   ├── setupTests.ts       # Jest setup
│   ├── store.ts            # Redux store configuration
│   └── vite-env.d.ts       # Vite environment types
├── .gitignore
├── eslint.config.js
└── package.json
