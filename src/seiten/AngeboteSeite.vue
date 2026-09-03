<script setup>
// Seite /angebote: alle Angebote aus src/inhalte/angebote.js.
import { angebote } from '@/inhalte/angebote.js'
import AngebotKarte from '@/bausteine/AngebotKarte.vue'
</script>

<template>
  <section class="abschnitt">
    <div class="inhalt">
      <h1>Angebote</h1>
      <p class="einleitung">
        [PLATZHALTER: Ein oder zwei Sätze als Einleitung – z. B. wie man ein Angebot auswählt
        oder dass ein Kennenlerngespräch der einfachste Einstieg ist.]
      </p>

      <div class="raster">
        <AngebotKarte v-for="angebot in angebote" :key="angebot.id" :angebot="angebot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.einleitung {
  max-width: 40rem;
  margin-bottom: var(--abstand-gross);
}
</style>
