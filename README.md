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
    - api/ (store api connection to backend)
    - components/ (store react component)
    - routes/ (react router routes)


## Building for Production

Create a production build:

```bash
npm run build
```

## Integrasi dengan API
- dokumentasi (swagger) dan api bisa diakses di https://api-dev.pycon.id/docs
- untuk mengakses api public. tinggal klik saja pada swagger
- untuk mengakses api private (gembok) buat akun terlebih dahulu
- detail cara membuat akun bisa dilihat di [integrasi api](./docs/integrasi_dengan_api.md)
- Jika terdapat masalah dalam mengakses api backend bisa dengan membuat issue di repo github backend [https://github.com/pyconid/pyconid25-be/issues](https://github.com/pyconid/pyconid25-be/issues) atau melalui telegram bandungpy topic pyconid [https://web.telegram.org/a/#-1001492883261_6340](https://web.telegram.org/a/#-1001492883261_6340)

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
