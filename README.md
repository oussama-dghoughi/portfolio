# Portfolio — Oussama Dghoughi

Portfolio React + Vite (Software Engineer & IA).

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Déploiement gratuit (recommandé)

### Vercel
1. Importer le repo GitHub sur [vercel.com](https://vercel.com)
2. Framework : Vite — Build : `npm run build` — Output : `dist`
3. Deploy

### Netlify
1. Importer le repo sur [netlify.com](https://netlify.com)
2. Build : `npm run build` — Publish : `dist`

`vercel.json` et `netlify.toml` sont déjà présents.

## Docker

Build + run local (port 8080) :

```bash
docker compose up --build
```

Puis ouvrir [http://localhost:8080](http://localhost:8080).

Build image seule :

```bash
docker build -t oussama-portfolio .
docker run --rm -p 8080:80 oussama-portfolio
```
