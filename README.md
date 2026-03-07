# Sampreetha Portfolio

A professional developer portfolio built with React, TypeScript, and Vite.

## Deployment to Vercel

This project is configured for deployment on Vercel. Here's how to deploy:

### Prerequisites

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```

### Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **For production deployment:**
   ```bash
   vercel --prod
   ```

4. **Or use the deployment script:**
   ```bash
   ./deploy.sh
   ```

### Automatic Deployment

If you connect this repository to Vercel, it will automatically deploy on every push to the main branch.

### Configuration

The deployment is configured with:
- `vercel.json` - Vercel deployment configuration
- Build output directory: `dist`
- SPA routing support for React Router

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css