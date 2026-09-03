// ============================================================
//  DEINE ANGEBOTE
// ============================================================
//  Jeder Block zwischen { und } ist EIN Angebot.
//  Die ersten drei Angebote erscheinen auch auf der Startseite,
//  alle Angebote auf der Seite /angebote.
//
//  Neues Angebot:  einen kompletten Block { … }, kopieren, einfügen,
//                  Texte ändern und eine neue, eindeutige id vergeben.
//  Angebot löschen: den Block samt Komma entfernen.
//
//  Regeln:
//  - Alle Werte sind Text zwischen einfachen Anführungszeichen: 'so'.
//  - Auch Preis und Dauer sind Text – so kannst du frei schreiben,
//    z. B. '90 €', 'auf Anfrage' oder 'ca. 60 Minuten'.
//  - Nach jedem Wert und nach jedem } kommt ein Komma.
// ============================================================

export const angebote = [
  {
    id: 'erstgespraech',
    titel: 'Kennenlerngespräch',
    beschreibung:
      '[PLATZHALTER: Zwei bis drei Sätze: Was passiert im Kennenlerngespräch, für wen ist es gedacht?]',
    dauer: '30 Minuten',
    preis: 'kostenfrei',
  },
  {
    id: 'einzelsitzung',
    titel: 'Einzelsitzung',
    beschreibung:
      '[PLATZHALTER: Zwei bis drei Sätze: Wie läuft eine Sitzung ab, was kann sie unterstützen?]',
    dauer: '60 Minuten',
    preis: '90 €',
  },
  {
    id: 'paket-fuenf',
    titel: 'Begleitung über fünf Sitzungen',
    beschreibung:
      '[PLATZHALTER: Zwei bis drei Sätze: Warum ein Paket, wie ist der Zeitraum, was ist enthalten?]',
    dauer: '5 × 60 Minuten',
    preis: '420 €',
  },
]
