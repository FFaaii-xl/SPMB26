import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { rmSync } from 'fs'
import { resolve } from 'path'

// Custom plugin to remove specific heavy reference files from the dist folder after build
function removeHeavyReferencesPlugin() {
  return {
    name: 'remove-heavy-references',
    closeBundle() {
      const filesToIgnore = [
        'jukop.pdf', 
        'MateriSPMB.pptx', 
        'skgub_jugknis_spmb2026.pdf',
        'analysis_results.md',
        'extracted_juknis.txt',
        'extracted_pptx.txt'
      ];
      filesToIgnore.forEach(file => {
        try {
          rmSync(resolve(process.cwd(), 'dist', file));
        } catch (e) {
          // File might not exist, silently ignore
        }
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), removeHeavyReferencesPlugin()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor';
            if (id.includes('recharts')) return 'charts';
            if (id.includes('framer-motion')) return 'motion';
            return 'vendor';
          }
        }
      }
    }
  }
})
