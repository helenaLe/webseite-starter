<script setup>
// Fußzeile: Name, E-Mail, Links zu Impressum/Datenschutz, Jahr.
// Das Jahr wird automatisch berechnet – nie von Hand ändern.
import { computed } from 'vue'
import { allgemein } from '@/inhalte/allgemein.js'

const jahr = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="fusszeile">
    <div class="inhalt fusszeile__innen">
      <div>
        <p class="fusszeile__name">{{ allgemein.name }}</p>
        <p class="fusszeile__slogan">{{ allgemein.slogan }}</p>
        <p>
          <a :href="`mailto:${allgemein.email}`">{{ allgemein.email }}</a>
        </p>
        <p v-if="allgemein.instagram">
          <a :href="allgemein.instagram" rel="noopener" target="_blank">Instagram</a>
        </p>
      </div>

      <nav aria-label="Rechtliches">
        <ul class="fusszeile__liste">
          <li><RouterLink to="/impressum">Impressum</RouterLink></li>
          <li><RouterLink to="/datenschutz">Datenschutz</RouterLink></li>
        </ul>
      </nav>
    </div>

    <div class="inhalt">
      <p class="fusszeile__copyright">© {{ jahr }} {{ allgemein.name }}</p>
    </div>
  </footer>
</template>

<style scoped>
.fusszeile {
  margin-top: var(--abstand-riesig);
  padding-block: var(--abstand-gross) var(--abstand-mittel);
  background: var(--farbe-primaer-dunkel);
  color: var(--farbe-text-auf-primaer);
}

.fusszeile a {
  color: inherit;
}

.fusszeile__innen {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--abstand-mittel);
}

.fusszeile p {
  margin-bottom: 0.25rem;
}

.fusszeile__name {
  font-family: var(--schrift-ueberschrift);
  font-size: 1.25rem;
}

.fusszeile__slogan {
  opacity: 0.8;
}

.fusszeile__liste {
  display: flex;
  gap: var(--abstand-mittel);
  list-style: none;
  margin: 0;
  padding: 0;
}

.fusszeile__copyright {
  margin-top: var(--abstand-mittel);
  padding-top: var(--abstand-klein);
  border-top: 1px solid var(--farbe-primaer);
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
