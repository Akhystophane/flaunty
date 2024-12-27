import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  root: './root', // Chemin vers ton dossier contenant index.html
  assetsInclude: ["**/*.glb"],
  build: {
    outDir: './root',
  }
})
