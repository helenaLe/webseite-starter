// Startpunkt der Webseite. Hier wird Vue gestartet und der Router eingebunden.
// Hier musst du normalerweise nichts ändern.
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'

// Reihenfolge ist wichtig: erst Farben (Variablen), dann das Layout.
import './styles/farben.css'
import './styles/main.css'

createApp(App).use(router).mount('#app')
