import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/chat-application",
  plugins: [react()],
  commonjsOptions: {
    transformMixedEsModules: true 
  }
})
