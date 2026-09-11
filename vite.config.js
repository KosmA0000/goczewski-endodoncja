import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/goczewski-endodoncja/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5175,
    host: true,
    watch: {
      usePolling: true,
      interval: 100,
      ignored: ['**/scrape*/**', '**/full_images/**', '**/site/**', '**/.git/**']
    }
  }
})
