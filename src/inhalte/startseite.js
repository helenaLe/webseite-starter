// ============================================================
//  TEXTE DER STARTSEITE
// ============================================================
//  Alles, was auf der Startseite steht, kommt aus dieser Datei.
//  Die Angebote-Kästchen kommen aus angebote.js (die ersten drei).
//
//  Regeln:
//  - Text steht immer zwischen einfachen Anführungszeichen: 'so'.
//  - Ein Apostroph im Text? Dann doppelte Anführungszeichen nehmen: "so geht's".
//  - Alle [PLATZHALTER: …] ersetzen, inklusive der eckigen Klammern.
// ============================================================

export const startseite = {
  // Großer Satz ganz oben (die Hauptüberschrift der Seite).
  heroUeberschrift: '[PLATZHALTER: Ruhe finden. Kraft schöpfen.]',

  // Kleinerer Satz direkt darunter.
  heroUntertitel:
    '[PLATZHALTER: Ich begleite dich mit … dabei, … – in Musterstadt und online.]',

  // Überschrift des Abschnitts „Über mich“.
  vorstellungUeberschrift: '[PLATZHALTER: Schön, dass du hier bist]',

  // Absätze des „Über mich“-Textes. Jeder Eintrag = ein Absatz.
  // Weitere Absätze: einfach eine Zeile kopieren und den Text ändern.
  vorstellungAbsaetze: [
    '[PLATZHALTER: Wer bist du, was hat dich zu deiner Arbeit gebracht?]',
    '[PLATZHALTER: Wie arbeitest du, was erwartet Menschen, die zu dir kommen?]',
    '[PLATZHALTER: Ein persönlicher Satz zum Abschluss.]',
  ],

  // Dein Foto. Lege deine Datei in den Ordner public/bilder/ und
  // trage hier den Namen ein, z. B. '/bilder/portrait.jpg'.
  bild: '/bilder/portrait-platzhalter.svg',

  // Beschreibung des Fotos für Menschen, die es nicht sehen können (Screenreader).
  bildAlt: '[PLATZHALTER: Porträtfoto von Vorname Nachname]',
}
