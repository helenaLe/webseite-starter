// Einstellungen für Vite (das Werkzeug, das die Seite baut und lokal startet).
// Hier musst du normalerweise nichts ändern.
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Bringt Vite bei, .vue-Dateien zu verstehen.
  plugins: [vue()],

  resolve: {
    alias: {
      // Abkürzung: „@/…“ steht für den Ordner „src/…“.
      // Beispiel: import { allgemein } from '@/inhalte/allgemein.js'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
