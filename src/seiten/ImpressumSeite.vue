<!--
  IMPRESSUM
  Rechtstexte bitte NICHT selbst erfinden. Erzeuge deinen Text mit einem
  Impressum-Generator (z. B. e-recht24.de), füge ihn in die passenden
  Abschnitte unten ein und entferne danach ALLE [PLATZHALTER: …].
  Name, Adresse, E-Mail und Telefon kommen automatisch aus
  src/inhalte/allgemein.js.
-->
<script setup>
import { allgemein } from '@/inhalte/allgemein.js'
</script>

<template>
  <section class="abschnitt">
    <div class="inhalt rechtstext">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 DDG</h2>
      <address>
        {{ allgemein.name }}<br />
        {{ allgemein.beruf }}<br />
        {{ allgemein.adresse.strasse }}<br />
        {{ allgemein.adresse.plzOrt }}
      </address>
      <p>
        Telefon: {{ allgemein.telefon }}<br />
        E-Mail: <a :href="`mailto:${allgemein.email}`">{{ allgemein.email }}</a>
      </p>

      <h2>Berufsbezeichnung und Aufsichtsbehörde</h2>
      <p>
        Berufsbezeichnung: {{ allgemein.beruf }}<br />
        Verliehen in: [PLATZHALTER: Land, z. B. Deutschland]
      </p>
      <p>
        Zuständige Aufsichtsbehörde:<br />
        [PLATZHALTER: Name und Anschrift der Behörde, z. B. Gesundheitsamt Musterstadt]
      </p>
      <p>
        Berufsrechtliche Regelungen:<br />
        [PLATZHALTER: z. B. Heilpraktikergesetz (HeilprG) – einsehbar unter www.gesetze-im-internet.de]
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <address>
        {{ allgemein.name }}<br />
        {{ allgemein.adresse.strasse }}<br />
        {{ allgemein.adresse.plzOrt }}
      </address>

      <h2>Haftungshinweis</h2>
      <p>
        [PLATZHALTER: Haftungsausschluss für Inhalte und Links aus dem Impressum-Generator hier
        einfügen.]
      </p>
    </div>
  </section>
</template>

<style scoped>
.rechtstext {
  max-width: 44rem;
}

.rechtstext h2 {
  font-size: 1.35rem;
  margin-top: var(--abstand-gross);
}
</style>
