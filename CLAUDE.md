# CLAUDE.md – Steckbrief meiner Webseite

Diese Datei liest Claude automatisch (Claude Code) oder du fügst sie am Anfang
eines Gesprächs ein (claude.ai). Sie sagt Claude, wer du bist, wie du klingst
und welche Regeln in diesem Projekt gelten.

**Alles in [eckigen Klammern] ersetzt du durch deine eigenen Angaben.**
Die Beispiele stammen von einer erfundenen Person („Mira Beispiel“).

---

## 1. Über mich

- **Name:** [Mira Beispiel]
- **Beruf:** [Heilpraktikerin für Psychotherapie]
- **Ort:** [Musterstadt, außerdem online]
- **Was ich anbiete, in einem Satz:** [Ich begleite Erwachsene in belastenden
  Lebensphasen mit Gesprächstherapie und Entspannungsverfahren.]
- **Was mich unterscheidet:** [Ruhige, klare Art; viel Erfahrung mit Menschen
  in helfenden Berufen; Termine auch am Abend.]
- **Webseite (Domain):** [www.mira-beispiel.de]

## 2. Zielgruppe und Tonalität

- **Für wen ist die Seite?** [Erwachsene zwischen 30 und 60, die sich erschöpft
  fühlen und einen ersten Schritt suchen.]
- **Anrede:** [Du] (überall einheitlich – auch in Impressum-nahen Texten, wo es
  passt; Rechtstexte dürfen „Sie“ verwenden, wenn der Generator das vorgibt)
- **Klang:** [warm, ruhig, klar, auf Augenhöhe – nicht esoterisch, nicht klinisch]
- **Lieblingswörter:** [begleiten, Raum, in Ruhe, Schritt für Schritt, ankommen]
- **Verbotene Wörter und Formulierungen:**
  - „heilen“, „Heilung“ (Heilmittelwerbegesetz)
  - „transformierend“, „Transformation“
  - „ganzheitliche Reise“
  - Dringlichkeit („nur noch heute“, „jetzt sofort“, „letzte Chance“)
  - [weitere: …]
- **Beispielsatz, der genau richtig klingt:**
  [„Manchmal reicht ein Gespräch, um wieder klarer zu sehen. Dafür ist hier Raum.“]

## 3. Farben und Schriften

Identisch mit `src/styles/farben.css` – Änderungen immer DORT machen, diese
Tabelle danach anpassen.

| Variable                    | Wert                              | Wofür                            |
| --------------------------- | --------------------------------- | -------------------------------- |
| `--farbe-primaer`           | [#2f6f5e]                         | Knöpfe, Links, Akzente           |
| `--farbe-primaer-dunkel`    | [#24564a]                         | Hover, Fußzeile                  |
| `--farbe-primaer-hell`      | [#e4efeb]                         | ruhige Hintergrundflächen        |
| `--farbe-akzent`            | [#d9a441]                         | kleine Hervorhebungen, Fokus     |
| `--farbe-hintergrund`       | [#faf8f4]                         | Seitenhintergrund                |
| `--farbe-flaeche`           | [#ffffff]                         | Karten, Kopfzeile                |
| `--farbe-linie`             | [#dfd9cf]                         | Rahmen, Trennlinien              |
| `--farbe-text`              | [#23302c]                         | Fließtext, Überschriften         |
| `--farbe-text-leise`        | [#5f6b67]                         | Nebentext                        |
| `--farbe-text-auf-primaer`  | [#ffffff]                         | Text auf Knöpfen                 |
| `--schrift-ueberschrift`    | [Georgia, "Times New Roman", serif] | Überschriften                  |
| `--schrift-text`            | [system-ui, …, sans-serif]        | Fließtext                        |

Stimmung der Gestaltung: [ruhig, hell, viel Weißraum, wenig Dekoration].

## 4. Angebote

Identisch mit `src/inhalte/angebote.js` – Änderungen immer DORT machen.

| Angebot                          | Dauer          | Preis        |
| -------------------------------- | -------------- | ------------ |
| [Kennenlerngespräch]             | [30 Minuten]   | [kostenfrei] |
| [Einzelsitzung]                  | [60 Minuten]   | [90 €]       |
| [Begleitung über fünf Sitzungen] | [5 × 60 Min.]  | [420 €]      |

Hinweise zu den Angeboten: [Preise inkl. MwSt. bzw. umsatzsteuerbefreit nach
§ 4 Nr. 14 UStG – bitte selbst prüfen; Absage bis 24 h vorher kostenfrei.]

## 5. Kontakt- und Impressumsdaten

Identisch mit `src/inhalte/allgemein.js` – Änderungen immer DORT machen.

- **Name:** [Mira Beispiel]
- **Anschrift:** [Musterstraße 1, 12345 Musterstadt]
- **E-Mail:** [hallo@mira-beispiel.de]
- **Telefon:** [+49 123 4567890]
- **Instagram:** [leer oder https://www.instagram.com/…]
- **Aufsichtsbehörde:** [Gesundheitsamt Musterstadt]
- **Berufsrechtliche Regelung:** [Heilpraktikergesetz (HeilprG)]

## 6. Regeln für Claude

1. **Sprache:** Antworte immer auf Deutsch. Erkläre jede Änderung in ein bis
   zwei Sätzen so, dass ein Mensch ohne Programmierkenntnisse sie versteht
   (was wurde geändert, wo sehe ich das).
2. **Farben und Schriften** stehen NUR in `src/styles/farben.css`. Nirgends
   sonst dürfen Hex-Werte (`#…`), `rgb(…)` oder Schriftnamen stehen – überall
   sonst nur `var(--farbe-…)` bzw. `var(--schrift-…)`.
3. **Texte** stehen in `src/inhalte/` (Name, Angebote, Startseite) oder in den
   Seiten unter `src/seiten/`. Texte nicht in Bausteine (`src/bausteine/`)
   hart einbauen.
4. **Keine neuen Abhängigkeiten** (`npm install …`) ohne vorherige Rückfrage.
   Kein TypeScript, kein Tailwind, kein Pinia, keine UI-Bibliothek. Nur
   JavaScript, Vue 3 und normales CSS.
5. **Wenn du Dateien nicht direkt bearbeiten kannst** (z. B. auf claude.ai):
   Gib immer die KOMPLETTE Datei zurück, nie nur einen Ausschnitt. Die erste
   Zeile der Antwort ist der Dateipfad, z. B. `src/inhalte/angebote.js`.
6. **Keine Heilversprechen.** Texte müssen zum Heilmittelwerbegesetz (HWG)
   passen: „kann unterstützen“, „begleite ich“, „viele Menschen erleben“ –
   nie „heilt“, „beseitigt“, „garantiert“. Keine Aussagen über Wirksamkeit bei
   konkreten Krankheiten.
7. **Neue Seite anlegen** = drei Schritte: Datei in `src/seiten/` erstellen,
   Route in `src/router.js` ergänzen, Link in `src/bausteine/Kopfzeile.vue`
   (oder `Fusszeile.vue`) setzen.
8. **[PLATZHALTER: …]** stehen lassen, bis ich ausdrücklich sage, was dort
   hineinkommt. Keine Rechtstexte (Impressum, Datenschutz) erfinden oder
   „vervollständigen“ – nur einfügen, was ich aus einem Generator liefere.
9. **Barrierefreiheit und sauberes HTML:** semantische Elemente (`header`,
   `nav`, `main`, `section`, `article`, `footer`), genau eine `h1` pro Seite,
   Überschriften in Reihenfolge (h1 → h2 → h3), jedes Bild mit `alt`-Text,
   Fokus-Rahmen nicht entfernen.
10. **Kleine Schritte.** Eine Änderung pro Antwort, dann prüfe ich im Browser.

## 7. Projektstruktur

```
webseite-starter/
├── README.md              Schritt-für-Schritt-Anleitung
├── CLAUDE.md              diese Datei
├── index.html             HTML-Hülle (Titel, Favicon) – selten anfassen
├── vite.config.js         Werkzeug-Einstellungen – nicht anfassen
├── package.json           Abhängigkeiten und Befehle – nicht anfassen
├── public/
│   ├── _redirects         sorgt dafür, dass /angebote usw. auf Cloudflare funktioniert
│   ├── favicon.svg        kleines Symbol im Browser-Tab
│   └── bilder/            HIER kommen deine Fotos hinein
└── src/
    ├── main.js            Startpunkt – nicht anfassen
    ├── App.vue            Gerüst: Kopfzeile, Inhalt, Fußzeile
    ├── router.js          Liste aller Seiten (Adressen)
    ├── styles/
    │   ├── farben.css     FARBEN UND SCHRIFTEN – die einzige Stelle dafür
    │   └── main.css       Abstände, Layout, Aussehen der Bausteine
    ├── inhalte/
    │   ├── allgemein.js   Name, Beruf, Kontakt, Adresse
    │   ├── startseite.js  Texte der Startseite
    │   └── angebote.js    deine Angebote (Titel, Text, Dauer, Preis)
    ├── bausteine/
    │   ├── Kopfzeile.vue  Logo/Name + Menü
    │   ├── Fusszeile.vue  Kontakt, Impressum/Datenschutz-Links, Jahr
    │   └── AngebotKarte.vue  ein Angebots-Kästchen
    └── seiten/
        ├── StartSeite.vue
        ├── AngeboteSeite.vue
        ├── ImpressumSeite.vue
        └── DatenschutzSeite.vue
```

## 8. Geplante Erweiterungen

Noch nicht gebaut – bitte nur auf ausdrücklichen Wunsch angehen, jeweils als
eigener Schritt mit Rückfrage zu den Abhängigkeiten:

- **Kontaktformular:** `functions/api/kontakt.js` (Cloudflare Pages Function,
  Versand über Resend, API-Schlüssel als Cloudflare-Umgebungsvariable) +
  `src/bausteine/KontaktFormular.vue`. Danach Datenschutzerklärung ergänzen
  (Markierung `[SPÄTER]` in `src/seiten/DatenschutzSeite.vue`).
- **Terminbuchung:** `src/bausteine/KalenderEinbettung.vue` für Calendly oder
  cal.com – nur nach Klick laden (Zwei-Klick-Lösung), Datenschutz ergänzen.
- **Kontaktseite:** `src/seiten/KontaktSeite.vue` mit Route `/kontakt` und
  Menüpunkt, fasst Formular und Kalender zusammen.
- **Eigene Schriftart:** woff2-Dateien in `public/schriften/`, `@font-face` in
  `src/styles/main.css`, Name in `src/styles/farben.css` eintragen. Keine
  Google-Fonts-Links (Datenschutz).
