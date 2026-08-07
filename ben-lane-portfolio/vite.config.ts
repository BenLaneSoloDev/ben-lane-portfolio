import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { qrcode } from "vite-plugin-qrcode";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    qrcode()
  ],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
