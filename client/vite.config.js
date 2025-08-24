// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Use an env var if provided, otherwise default.
// If deploying to GitHub Pages for this repo, keep '/ECI_Full_Stack/'.
// If deploying at site root (Vercel/Netlify), you can change this default to '/'.
const BASE = process.env.VITE_BASE_PATH ?? '/ECI_Full_Stack/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Normalize to always have a trailing slash
  base: BASE.endsWith('/') ? BASE : `${BASE}/`,
})
