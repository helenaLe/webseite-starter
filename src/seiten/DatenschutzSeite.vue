<!--
  DATENSCHUTZERKLÄRUNG
  Rechtstexte bitte NICHT selbst erfinden. Erzeuge deinen Text mit einem
  Datenschutz-Generator (z. B. e-recht24.de), gleiche ihn mit den Abschnitten
  unten ab und entferne danach ALLE [PLATZHALTER: …].
  Die Abschnitte passen zum Ausgangszustand dieser Seite:
  Hosting bei Cloudflare Pages, keine Cookies, kein Tracking, Kontakt nur per E-Mail.
  Sobald du etwas hinzufügst (Kontaktformular, Kalender, Videos …), muss diese
  Seite erweitert werden – siehe die [SPÄTER]-Markierungen unten.
-->
<script setup>
import { allgemein } from '@/inhalte/allgemein.js'
</script>

<template>
  <section class="abschnitt">
    <div class="inhalt rechtstext">
      <h1>Datenschutzerklärung</h1>

      <h2>Verantwortliche</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:</p>
      <address>
        {{ allgemein.name }}<br />
        {{ allgemein.adresse.strasse }}<br />
        {{ allgemein.adresse.plzOrt }}<br />
        E-Mail: <a :href="`mailto:${allgemein.email}`">{{ allgemein.email }}</a>
      </address>

      <h2>Hosting</h2>
      <p>
        Diese Webseite wird bei Cloudflare Pages gehostet (Cloudflare, Inc., USA, mit
        europäischer Niederlassung Cloudflare Germany GmbH). Beim Aufruf der Seite verarbeitet
        Cloudflare technisch notwendige Daten in Server-Logs, insbesondere die IP-Adresse,
        Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp und Betriebssystem.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
        sicheren und stabilen Betrieb der Webseite).
      </p>
      <p>
        [PLATZHALTER: Hinweis auf den Auftragsverarbeitungsvertrag mit Cloudflare und die
        Übermittlung in Drittländer (EU-US Data Privacy Framework / Standardvertragsklauseln)
        aus dem Generator einfügen.]
      </p>

      <h2>Cookies und Speicherung</h2>
      <p>
        Diese Webseite setzt keine Cookies und verwendet kein Tracking. Es werden keine
        Analyse-Werkzeuge, keine Werbenetzwerke und keine Social-Media-Plugins eingebunden.
      </p>

      <h2>Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn du mir per E-Mail schreibst, werden deine Angaben (E-Mail-Adresse, Name, Inhalt
        der Nachricht) zur Bearbeitung der Anfrage und für mögliche Anschlussfragen bei mir
        gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertrags)
        bzw. Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck
        nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten bestehen.
      </p>

      <!-- [SPÄTER] Kontaktformular über Resend: Abschnitt hier ergänzen -->

      <!-- [SPÄTER] Kalender-Einbettung (Calendly/cal.com): Abschnitt hier ergänzen -->

      <h2>Deine Rechte</h2>
      <p>Du hast gegenüber mir folgende Rechte hinsichtlich deiner personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
        [PLATZHALTER: Zuständige Aufsichtsbehörde deines Bundeslandes aus dem Generator
        einfügen.]
      </p>

      <h2>Externe Links</h2>
      <p>
        Diese Webseite kann Links zu Webseiten anderer Anbieter enthalten. Für deren Inhalte und
        den Umgang mit deinen Daten sind die jeweiligen Anbieter verantwortlich; beim Anklicken
        eines Links gilt deren Datenschutzerklärung.
      </p>

      <p class="leise">Stand: [PLATZHALTER: Datum, z. B. 1. Januar 2027]</p>
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
