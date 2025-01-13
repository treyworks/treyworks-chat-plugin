import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.jsx'),
      name: 'TWChatAdmin',
      // the proper extensions will be added
      fileName: 'tw-chat-admin',
    }
  },
  define: {
    'process.env': {}
  }
})
