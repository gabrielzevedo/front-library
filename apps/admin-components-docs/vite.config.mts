import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { getAdminComponentsPath } from './utils'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': getAdminComponentsPath('src')
    }
  }
})
