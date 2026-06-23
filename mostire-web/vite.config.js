import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Treat 3D model files as static assets so they can be imported and bundled
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
