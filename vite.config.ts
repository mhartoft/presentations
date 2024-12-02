import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: "/presentations/",
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          aspnetcoreAngular: resolve(__dirname, 'pages/aspnetcore-angular/index.html'),
        },
      },
    },
  })