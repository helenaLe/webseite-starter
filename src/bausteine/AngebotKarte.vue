<script setup>
// Ein einzelnes Angebots-Kästchen. Wird auf der Startseite und
// auf /angebote für jedes Angebot aus src/inhalte/angebote.js benutzt.
import { computed } from 'vue'
import { allgemein } from '@/inhalte/allgemein.js'

const props = defineProps({
  angebot: { type: Object, required: true },
})

// E-Mail-Link mit vorbelegtem Betreff, z. B. „Anfrage: Einzelsitzung“.
const anfrageLink = computed(() => {
  const betreff = encodeURIComponent(`Anfrage: ${props.angebot.titel}`)
  return `mailto:${allgemein.email}?subject=${betreff}`
})
</script>

<template>
  <article class="karte angebot">
    <h3>{{ angebot.titel }}</h3>
    <p>{{ angebot.beschreibung }}</p>

    <dl class="angebot__details">
      <div>
        <dt>Dauer</dt>
        <dd>{{ angebot.dauer }}</dd>
      </div>
      <div>
        <dt>Preis</dt>
        <dd>{{ angebot.preis }}</dd>
      </div>
    </dl>

    <a :href="anfrageLink" class="knopf knopf--sekundaer">Anfragen</a>
  </article>
</template>

<style scoped>
.angebot {
  display: flex;
  flex-direction: column;
}

/* Der Knopf rutscht ans untere Ende, damit alle Karten gleich aussehen. */
.angebot .knopf {
  margin-top: auto;
  align-self: flex-start;
}

.angebot__details {
  display: flex;
  gap: var(--abstand-mittel);
  margin-bottom: var(--abstand-mittel);
  padding-top: var(--abstand-klein);
  border-top: 1px solid var(--farbe-linie);
}

.angebot__details dt {
  font-size: 0.85rem;
  color: var(--farbe-text-leise);
}

.angebot__details dd {
  margin: 0;
  font-weight: 600;
}
</style>
