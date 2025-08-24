import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

const BASE = process.env.VITE_BASE_PATH ?? '/ECI_Full_Stack/'

export default defineConfig({
  plugins: [react()],
  base: BASE.endsWith('/') ? BASE : `${BASE}/`,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
