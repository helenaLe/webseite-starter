# Meine Webseite – Starter

Eine kleine, schnelle Webseite für dein Angebot: Startseite, Angebote,
Impressum, Datenschutz. Ohne Baukasten, ohne monatliche Kosten, mit Claude
als Helfer beim Anpassen.

Dieses Dokument führt dich Schritt für Schritt durch alles. Du musst nicht
programmieren können – du musst nur lesen, kopieren und ausprobieren.

---

## 1. Was du brauchst

Einmalig einrichten (alles kostenlos):

| Was                    | Wofür                                   | Link                              |
| ---------------------- | --------------------------------------- | --------------------------------- |
| GitHub-Konto           | speichert deine Dateien online          | https://github.com/signup         |
| Cloudflare-Konto       | stellt die Webseite ins Internet        | https://dash.cloudflare.com/sign-up |
| Node.js 22 (LTS)       | lässt die Seite auf deinem Rechner laufen | https://nodejs.org (Version „LTS“ wählen) |
| VS Code                | Programm zum Bearbeiten der Dateien     | https://code.visualstudio.com     |
| Git                    | überträgt Änderungen zu GitHub          | https://git-scm.com/downloads (auf dem Mac meist schon da) |

**Test:** Öffne ein Terminal (in VS Code: Menü *Terminal → Neues Terminal*)
und tippe:

```
node -v
```

Es muss eine Version ab `v22.12` erscheinen, z. B. `v22.19.0`. Wenn nicht:
Node.js neu installieren und Terminal neu öffnen.

## 2. Eigene Kopie anlegen

1. Öffne dieses Repository auf GitHub und klicke oben rechts auf
   **Use this template → Create a new repository**.
2. **Repository name:** z. B. `meine-webseite`. Sichtbarkeit: *Public* oder
   *Private* – beides funktioniert. **Create repository**.
3. Auf deiner neuen Seite auf **Code** klicken, die HTTPS-Adresse kopieren.
4. Im Terminal in den Ordner wechseln, in dem deine Projekte liegen sollen,
   und die Kopie herunterladen:

```
git clone https://github.com/DEIN-NAME/meine-webseite.git
cd meine-webseite
code .
```

Der letzte Befehl öffnet den Ordner in VS Code. VS Code fragt, ob du die
empfohlene Erweiterung „Vue – Official“ installieren möchtest – ja.

## 3. Starten

Im Terminal (in VS Code: *Terminal → Neues Terminal*):

```
npm install
npm run dev
```

`npm install` lädt einmalig die Werkzeuge herunter (dauert eine Minute).
`npm run dev` startet die Seite. Öffne dann im Browser:

**http://localhost:5173**

Du siehst die Starter-Seite mit vielen `[PLATZHALTER: …]`. Lass das Terminal
offen: Jede gespeicherte Änderung erscheint sofort im Browser. Beenden mit
`Strg + C` im Terminal.

## 4. Deine Seite machen

Am besten in dieser Reihenfolge – jede Datei hat oben eine Erklärung:

1. **`CLAUDE.md`** – dein Steckbrief. Alles in `[eckigen Klammern]` ersetzen.
   Das ist die Grundlage, damit Claude in deinem Ton schreibt.
2. **`src/inhalte/allgemein.js`** – Name, Beruf, E-Mail, Adresse.
3. **`src/inhalte/angebote.js`** – deine Angebote. Block kopieren = neues
   Angebot.
4. **`src/inhalte/startseite.js`** – Begrüßung und „Über mich“.
5. **`src/styles/farben.css`** – deine Farben. Hex-Wert ersetzen, speichern,
   schauen. Kontrast prüfen: https://webaim.org/resources/contrastchecker/
6. **Foto:** deine Bilddatei (JPG, am besten unter 500 KB, Hochformat) in den
   Ordner `public/bilder/` legen und in `startseite.js` den Namen eintragen,
   z. B. `bild: '/bilder/portrait.jpg'`.
7. **Impressum und Datenschutz:** Texte mit einem Generator erzeugen
   (z. B. https://www.e-recht24.de/impressum-generator.html) und in
   `src/seiten/ImpressumSeite.vue` bzw. `DatenschutzSeite.vue` in die
   vorbereiteten Abschnitte einfügen. Bitte nichts selbst formulieren und
   Claude auch nicht darum bitten.
8. **Kontrolle:** In VS Code `Strg + Umschalt + F` (Mac: `Cmd + Umschalt + F`)
   drücken und nach `PLATZHALTER` suchen. Die Trefferliste muss leer sein.

## 5. Mit Claude arbeiten

Für alles, was über Texte und Farben hinausgeht („mach die Angebote als
Liste“, „füge eine Seite Über mich hinzu“), hilft dir Claude. Zwei Wege:

### Weg A: Claude Code (empfohlen)

Claude Code ist eine Erweiterung in VS Code, die deine Dateien direkt liest
und bearbeitet. Sie liest `CLAUDE.md` automatisch und kennt damit deinen
Ton und die Regeln.

1. In VS Code links auf *Erweiterungen* → „Claude Code“ suchen → installieren
   → mit deinem Anthropic-Konto anmelden.
2. Chat öffnen und in normalen Sätzen schreiben. Beispiele:
   - „Füge ein viertes Angebot ‚Online-Sitzung‘ hinzu, 50 Minuten, 80 €.“
   - „Mach die Hauptfarbe etwas dunkler und wärmer.“
   - „Erstelle eine neue Seite ‚Über mich‘ mit Menüpunkt, nimm den Text aus
     der Startseite als Grundlage.“
   - „Der Text auf der Startseite klingt zu werblich – schreib ihn ruhiger,
     im Ton aus CLAUDE.md.“
3. Claude erklärt, was es geändert hat. Prüfe im Browser. Passt es nicht:
   „Mach das rückgängig“ oder genauer beschreiben.

### Weg B: claude.ai (Browser)

Funktioniert ohne Installation, aber du kopierst selbst hin und her:

1. Neues Gespräch auf https://claude.ai.
2. Als Erstes den **kompletten Inhalt von `CLAUDE.md`** einfügen und
   schreiben: „Das ist der Steckbrief meiner Webseite. Halte dich an die
   Regeln in Abschnitt 6.“
3. Dann die Datei einfügen, die geändert werden soll (in VS Code öffnen,
   `Strg + A`, `Strg + C`), und deinen Wunsch beschreiben.
4. Claude gibt die **komplette Datei** zurück, mit dem Dateipfad in der
   ersten Zeile. Kopieren → in VS Code die Datei öffnen → `Strg + A`,
   `Strg + V`, `Strg + S`. Im Browser prüfen.

## 6. Speichern und hochladen

Deine Änderungen liegen bisher nur auf deinem Rechner. So kommen sie zu
GitHub (und von dort automatisch ins Internet, siehe Schritt 7):

**Im Terminal:**

```
git add -A
git commit -m "Texte und Farben angepasst"
git push
```

**Oder in VS Code:** links das Symbol *Quellcodeverwaltung* (drei
verbundene Punkte) → oben eine kurze Nachricht eintippen, z. B. „Texte
angepasst“ → **Commit** → **Sync Changes** (Änderungen synchronisieren).

Beim ersten Mal fragt Git eventuell nach deinem Namen und deiner E-Mail:

```
git config --global user.name "Dein Name"
git config --global user.email "deine@mail.de"
```

## 7. Veröffentlichen auf Cloudflare Pages

Einmalig einrichten, danach geht jeder `git push` automatisch online:

1. https://dash.cloudflare.com → links **Workers & Pages** → **Create**
   → Reiter **Pages** → **Connect to Git**.
2. GitHub verbinden und dein Repository `meine-webseite` auswählen
   → **Begin setup**.
3. Einstellungen:
   - **Project name:** z. B. `meine-webseite` (ergibt die Adresse
     `meine-webseite.pages.dev`)
   - **Production branch:** `main`
   - **Framework preset:** `Vue` (oder `None` – beides geht)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Deploy command:** LEER lassen (falls das Feld erscheint)
4. **Save and Deploy**. Nach ein bis zwei Minuten ist deine Seite unter
   `https://meine-webseite.pages.dev` erreichbar.

Ab jetzt: jeder `git push` baut die Seite neu und stellt sie online.

**Eigene Domain:** Im Pages-Projekt → **Custom domains** → **Set up a custom
domain** → Domain eintragen und den Anweisungen folgen. Liegt die Domain bei
einem anderen Anbieter, musst du dort einen CNAME-Eintrag setzen, den
Cloudflare dir anzeigt.

## 8. Wenn etwas nicht klappt

| Problem | Lösung |
| --- | --- |
| **Weiße Seite** nach dem Deploy | In Cloudflare unter *Settings → Builds* prüfen: Build output directory muss `dist` sein. Dann *Deployments → Retry deployment*. |
| **`/impressum` liefert 404** auf Cloudflare, lokal geht es | Die Datei `public/_redirects` fehlt oder ist leer. Inhalt muss sein: `/* /index.html 200`. Danach neu pushen. |
| **Build bricht ab wegen Node-Version** | Die Datei `.nvmrc` mit Inhalt `22` muss im Repository liegen. Alternativ in Cloudflare *Settings → Variables and Secrets* die Variable `NODE_VERSION` = `22` anlegen. |
| **`npm install` schlägt fehl** | `node -v` prüfen – mindestens `v22.12`. Node.js LTS neu installieren, Terminal schließen und neu öffnen. |
| **Windows:** „Die Ausführung von Skripts ist auf diesem System deaktiviert“ | In VS Code beim Terminal oben rechts auf das Pluszeichen-Menü → **Command Prompt** wählen. Oder einmalig in PowerShell eingeben: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| **Seite aktualisiert sich nicht** im Browser | Läuft `npm run dev` noch im Terminal? Sonst neu starten. Im Browser `Strg + Umschalt + R` (harter Reload). |
| **Rote Fehlermeldung im Terminal** nach einer Textänderung | Meist ein fehlendes Komma oder Anführungszeichen in einer `.js`-Datei. Die Meldung nennt Datei und Zeile. Oder Claude die Meldung zeigen. |

## 9. Eigene Schriftart

Aus Datenschutzgründen bindet diese Seite keine Google Fonts ein – der
Browser würde sonst bei jedem Besuch die IP-Adresse an Google senden
(Abmahnrisiko). Eigene Schriften lädst du stattdessen selbst mit:

1. Schrift als **woff2**-Datei besorgen, z. B. bei https://fonts.bunny.net
   oder https://gwfh.mranftl.com (Google Fonts zum Herunterladen). Lizenz
   prüfen (z. B. SIL Open Font License = frei nutzbar).
2. Ordner `public/schriften/` anlegen, Dateien hineinlegen.
3. In `src/styles/main.css` ganz oben ergänzen:

```css
@font-face {
  font-family: "MeineSchrift";
  src: url("/schriften/meineschrift-regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
```

4. In `src/styles/farben.css` den Namen eintragen:

```css
--schrift-ueberschrift: "MeineSchrift", Georgia, serif;
```

Der zweite Name (`Georgia`) ist die Ersatzschrift, falls die Datei nicht
lädt.

## 10. Später erweitern

Kontaktformular, Terminbuchung, Kontaktseite, eigene Schrift – was dafür
geplant ist und wie Claude es angehen soll, steht in **`CLAUDE.md`,
Abschnitt 8**. Bitte immer als eigenen Schritt angehen und vorher die
Datenschutzerklärung mitdenken.
