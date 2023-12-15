import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: path.resolve(dirname, "./src/components"),
      Pages: path.resolve(dirname, "./src/pages"),
      Utils: path.resolve(dirname, "./src/utils"),
      Assets: path.resolve(dirname, "./src/assets"),
      Context: path.resolve(dirname, "./src/context"),
      Routes: path.resolve(dirname, "./src/routes"),
      Layouts: path.resolve(dirname, "./src/layouts"),
      Data: path.resolve(dirname, "./src/data"),
      Hooks: path.resolve(dirname, "./src/hooks"),
      Src: path.resolve(dirname, "./src"),
    },
  },
})
