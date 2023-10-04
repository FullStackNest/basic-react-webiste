import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);
// D:\online-pro-videos\react-classes\basic-react-app\src\components\UserForm
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
