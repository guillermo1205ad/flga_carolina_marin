import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base relativo para que funcione en GitHub Pages sin importar el nombre del repositorio.
  base: './'
});
