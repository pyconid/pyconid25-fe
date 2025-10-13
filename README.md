# pyconid25-fe

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Requirement
- Node v22 (LTS)
- npm

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Project Structure
- app/
    - api/ (API connection to backend)
        - endpoint/ (List of endpoint)
            - .client/ (Client-side only endpoints, only accessible from client-side)
            - .server/ (Server-side only endpoints, only accessible from server-side)
        - schema/ (schema of endpoint parsed by zod)
    - components/ (React components)
    - hooks/ (React custom hooks)
    - lib/ (Utility functions)
    - routes/ (React Router routes)
    - services/
        - auth/ (Authentication services)
        - sessions/ (Session Cookie Storage)
    - types/ (Type definitions)
    - **/.client/ (Only can access from client-side, code inside this folder will only be executed on client-side)
    - **/.server/ (Only can access from server-side, code inside this folder will only be executed on server-side)
    - `**/*.client.ts` (Only can access from client-side, code inside this file will only be executed on client-side)
    - `**/*.server.ts` (Only can access from server-side, code inside this file will only be executed on server-side)
        - Note: The `**/*.client.ts` and `**/*.server.ts` are special file naming conventions that React Router uses to separate client-side and server-side code.


## Building for Production

Create a production build:

```bash
npm run build
```

## Kontribusi
untuk tata cara kontribusi bisa dilihat di [CONTRIBUTING.md](./CONTRIBUTING.md) dan diharapkan kontributor memematuhi [Code of Conduct](./CODE%20OF%20CONDUCT.md) yang berlaku.

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
