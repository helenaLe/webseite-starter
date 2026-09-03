<script setup>
// Kopfzeile: Name links, Navigation rechts. Erscheint auf jeder Seite.
// Neuer Menüpunkt: eine <li>-Zeile kopieren und „to“ + Text anpassen.
import { allgemein } from '@/inhalte/allgemein.js'
</script>

<template>
  <header class="kopfzeile">
    <div class="inhalt kopfzeile__innen">
      <RouterLink to="/" class="kopfzeile__marke">{{ allgemein.name }}</RouterLink>

      <nav aria-label="Hauptnavigation">
        <ul class="kopfzeile__liste">
          <li><RouterLink to="/" active-class="aktiv">Start</RouterLink></li>
          <li><RouterLink to="/angebote" active-class="aktiv">Angebote</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.kopfzeile {
  background: var(--farbe-flaeche);
  border-bottom: 1px solid var(--farbe-linie);
}

.kopfzeile__innen {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--abstand-klein) var(--abstand-mittel);
  padding-block: var(--abstand-klein);
}

.kopfzeile__marke {
  font-family: var(--schrift-ueberschrift);
  font-size: 1.35rem;
  color: var(--farbe-text);
  text-decoration: none;
}

.kopfzeile__liste {
  display: flex;
  gap: var(--abstand-mittel);
  list-style: none;
  margin: 0;
  padding: 0;
}

.kopfzeile__liste a {
  display: inline-block;
  padding: 0.25rem 0;
  color: var(--farbe-text);
  text-decoration: none;
  border-bottom: 2px solid transparent;
}

.kopfzeile__liste a:hover {
  color: var(--farbe-primaer);
}

/* Aktuelle Seite: farbige Linie unter dem Menüpunkt */
.kopfzeile__liste a.aktiv {
  color: var(--farbe-primaer);
  border-bottom-color: var(--farbe-akzent);
}
</style>
