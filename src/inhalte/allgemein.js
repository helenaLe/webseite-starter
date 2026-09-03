// ============================================================
//  ALLGEMEINE ANGABEN – Name, Beruf, Kontakt
// ============================================================
//  Diese Werte werden überall auf der Seite verwendet:
//  Kopfzeile, Fußzeile, Impressum, Datenschutz, Anfrage-Mails.
//  Du änderst sie also nur HIER, an einer Stelle.
//
//  Regeln:
//  - Text steht immer zwischen einfachen Anführungszeichen: 'so'.
//  - Nach jedem Wert kommt ein Komma.
//  - Alle [PLATZHALTER: …] ersetzen, inklusive der eckigen Klammern.
// ============================================================

export const allgemein = {
  // Dein voller Name, so wie er in Kopf- und Fußzeile stehen soll.
  name: '[PLATZHALTER: Vorname Nachname]',

  // Deine Berufsbezeichnung (bitte nur Bezeichnungen, die du führen darfst).
  beruf: '[PLATZHALTER: z. B. Heilpraktikerin für Psychotherapie]',

  // Ein kurzer Satz, der unter deinem Namen steht.
  slogan: '[PLATZHALTER: Ein kurzer Satz, was du anbietest.]',

  // Kontakt – wird für „Anfragen“-Knöpfe und das Impressum benutzt.
  email: '[PLATZHALTER: hallo@deine-domain.de]',
  telefon: '[PLATZHALTER: +49 123 4567890]',

  // Anschrift – Pflicht im Impressum.
  adresse: {
    strasse: '[PLATZHALTER: Musterstraße 1]',
    plzOrt: '[PLATZHALTER: 12345 Musterstadt]',
  },

  // Optional: Adresse deines Instagram-Profils.
  // Leer lassen (''), wenn du keins hast – dann wird nichts angezeigt.
  instagram: '',
}
