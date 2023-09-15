import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/20-My-React-Portfolio/',
  // server: {
  //   port: 3000,
  //   open: true,
  // }
})
