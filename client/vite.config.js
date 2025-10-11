import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración del servidor de desarrollo: cambia host/port aquí
  server: {
    // host: '0.0.0.0' permite acceder desde otras máquinas en la misma red
    host: '0.0.0.0',
    // puerto por defecto (cámbialo al que necesites)
    port: 3000,
    // si se pone true y el puerto está en uso, Vite fallará en vez de buscar otro
    strictPort: false,
  },
})
