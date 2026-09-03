<script setup>
// Startseite: Begrüßung (Hero), „Über mich“, die ersten drei Angebote.
// Die Texte stehen in src/inhalte/startseite.js – hier nur der Aufbau.
import { allgemein } from '@/inhalte/allgemein.js'
import { startseite } from '@/inhalte/startseite.js'
import { angebote } from '@/inhalte/angebote.js'
import AngebotKarte from '@/bausteine/AngebotKarte.vue'

// Nur die ersten drei Angebote als Vorschau.
const angeboteVorschau = angebote.slice(0, 3)
</script>

<template>
  <!-- Begrüßung -->
  <section class="abschnitt hero">
    <div class="inhalt">
      <p class="hero__beruf leise">{{ allgemein.beruf }}</p>
      <h1>{{ startseite.heroUeberschrift }}</h1>
      <p class="hero__untertitel">{{ startseite.heroUntertitel }}</p>
      <RouterLink to="/angebote" class="knopf">Angebote ansehen</RouterLink>
    </div>
  </section>

  <!-- Über mich -->
  <section class="abschnitt abschnitt--hell" aria-labelledby="vorstellung-titel">
    <div class="inhalt vorstellung">
      <img
        :src="startseite.bild"
        :alt="startseite.bildAlt"
        class="vorstellung__bild"
        width="600"
        height="750"
      />
      <div>
        <h2 id="vorstellung-titel">{{ startseite.vorstellungUeberschrift }}</h2>
        <p v-for="(absatz, index) in startseite.vorstellungAbsaetze" :key="index">
          {{ absatz }}
        </p>
      </div>
    </div>
  </section>

  <!-- Angebote (Vorschau) -->
  <section class="abschnitt" aria-labelledby="angebote-titel">
    <div class="inhalt">
      <h2 id="angebote-titel">Angebote</h2>
      <div class="raster">
        <AngebotKarte v-for="angebot in angeboteVorschau" :key="angebot.id" :angebot="angebot" />
      </div>
      <p class="angebote__mehr">
        <RouterLink to="/angebote">Alle Angebote ansehen</RouterLink>
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: var(--abstand-riesig);
}

.hero__beruf {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  margin-bottom: var(--abstand-klein);
}

.hero__untertitel {
  max-width: 38rem;
  font-size: 1.2rem;
  margin-bottom: var(--abstand-mittel);
}

.vorstellung {
  display: grid;
  gap: var(--abstand-gross);
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
}

.vorstellung__bild {
  max-width: 22rem;
  border-radius: var(--radius-gross);
}

.angebote__mehr {
  margin-top: var(--abstand-mittel);
}
</style>
