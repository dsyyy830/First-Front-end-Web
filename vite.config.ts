import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ 仓库名一定要匹配 GitHub Pages 地址路径（注意大小写）
export default defineConfig({
  base: '/First-Front-end-Web/',
  plugins: [react()],
})
