import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  define: {
    __APP_VERSION__:JSON.stringify(
      fs.readFileSync('./VERSION','utf-8').trim()
    )
  }
})
