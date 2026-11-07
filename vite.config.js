import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuración básica de Vite para un proyecto Vue
export default defineConfig({
  base: "./",
  build: { outDir: "docs", assetsDir: "." },
  plugins: [vue()]
})
