<script setup>
// Grundgerüst jeder Seite: Kopfzeile oben, Inhalt in der Mitte, Fußzeile unten.
// Der Inhalt (<RouterView />) wechselt je nach Adresse, siehe src/router.js.
import Kopfzeile from './bausteine/Kopfzeile.vue'
import Fusszeile from './bausteine/Fusszeile.vue'
</script>

<template>
  <!-- Sprung-Link für Tastatur- und Screenreader-Nutzer: erscheint nur beim Fokussieren. -->
  <a href="#inhalt" class="skip-link">Zum Inhalt springen</a>

  <Kopfzeile />

  <main id="inhalt">
    <RouterView />
  </main>

  <Fusszeile />
</template>
