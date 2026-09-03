// Hier stehen alle Seiten (Routen) der Webseite.
// Neue Seite anlegen = 1. Datei in src/seiten/ erstellen,
//                      2. hier einen Eintrag ergänzen,
//                      3. Link in src/bausteine/Kopfzeile.vue setzen.
import { createRouter, createWebHistory } from 'vue-router'
import { allgemein } from './inhalte/allgemein.js'

import StartSeite from './seiten/StartSeite.vue'
import AngeboteSeite from './seiten/AngeboteSeite.vue'
import ImpressumSeite from './seiten/ImpressumSeite.vue'
import DatenschutzSeite from './seiten/DatenschutzSeite.vue'

const routen = [
  { path: '/', component: StartSeite, meta: { titel: 'Start' } },
  { path: '/angebote', component: AngeboteSeite, meta: { titel: 'Angebote' } },
  { path: '/impressum', component: ImpressumSeite, meta: { titel: 'Impressum' } },
  { path: '/datenschutz', component: DatenschutzSeite, meta: { titel: 'Datenschutz' } },

  // Unbekannte Adressen führen zurück zur Startseite.
  { path: '/:unbekannt(.*)*', redirect: '/' },
]

export const router = createRouter({
  // „Schöne“ Adressen ohne #, z. B. deine-domain.de/angebote.
  // Damit das auf Cloudflare Pages funktioniert, gibt es public/_redirects.
  history: createWebHistory(),
  routes: routen,

  // Beim Seitenwechsel immer oben anfangen.
  scrollBehavior() {
    return { top: 0 }
  },
})

// Browser-Tab-Titel nach jedem Seitenwechsel setzen, z. B. „Angebote – Mira Beispiel“.
router.afterEach((ziel) => {
  const seitenTitel = ziel.meta.titel
  document.title = seitenTitel ? `${seitenTitel} – ${allgemein.name}` : allgemein.name
})
