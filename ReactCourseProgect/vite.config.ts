/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.tsx',
    mockReset: false,
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      reporter: ['text'],
    },
    
  },
})
