# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Firebase environment setup

Create a local env file from [.env.example](.env.example):

```bash
cp .env.example .env.local
```

Then fill all `VITE_FIREBASE_*` values with your Firebase Web App config.

## Firebase services usage

The app initializes Firebase in [src/firebase.js](src/firebase.js).
Reusable services are exported from [src/firebase-services.js](src/firebase-services.js):

```js
import { auth, db } from './firebase-services'
```

## Auto deploy on commit (GitHub Actions)

Workflow file: [.github/workflows/firebase-hosting-deploy.yml](.github/workflows/firebase-hosting-deploy.yml)

It runs on every push to `main`, builds the app, and deploys to Firebase Hosting.

Required GitHub repository secrets:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `FIREBASE_SERVICE_ACCOUNT_PERSONAL_WEBPAGE_2CD1F`

To generate the service account secret value:

1. Open Firebase Console > Project settings > Service accounts.
2. Click Generate new private key.
3. Copy the JSON content into GitHub secret `FIREBASE_SERVICE_ACCOUNT_PERSONAL_WEBPAGE_2CD1F`.
