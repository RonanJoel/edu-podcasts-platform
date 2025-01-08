import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Define el directorio raíz donde se encuentran tus archivos fuente
  build: {
    outDir: '../dist', // Define la carpeta de salida del build
  },
  server: {
    port: 3000, // Configura el puerto del servidor
  },
});
