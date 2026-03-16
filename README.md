# Matcha Mori - Demo Webseite

Eine moderne, schnelle und "Mobile-First" statische Landingpage für "Matcha Mori" - ein trendiges Matcha-Café in Berlin.
Komplett mit HTML, Tailwind CSS (via CDN) und Vanilla JavaScript erstellt. Kein Build-Schritt erforderlich!

## 🚀 Projektstruktur

```text
MoriMatcha/
 ├ index.html       # Der Haupteinstiegspunkt mit Struktur und Stilen
 ├ content.json     # Alle Webseiteninhalte, Speisekarte und Einstellungen
 ├ images/          # Bilder-Ressourcen
 ├ menu.pdf         # Herunterladbare PDF-Speisekarte
 └ README.md        # Dokumentation
```

## ✨ Features

- **Keine Build-Tools**: Kein Webpack, Vite oder npm erforderlich. Einfach öffnen und ausführen.
- **Dynamisches Laden von Inhalten**: Die gesamte Seite (Held-Text, Über uns, Speisekarte, Fotos, Öffnungszeiten) wird dynamisch aus der `content.json` generiert.
- **Responsive & Mobile First**: Optimiert für alle Geräte durch Tailwind CSS Hilfsklassen.
- **Modernes minimalistisches Design**: Sanfte Grüntöne, viel Weißraum, weiche Einblend-Animationen (Fade-in).

## 🛠 Wie man die Seite lokal startet

Da das Projekt dynamisch die `content.json` mit JavaScript abruft, führt das direkte Öffnen der `index.html` über das Dateisystem (mit dem `file://` Protokoll) in modernen Browsern zu einem **CORS-Fehler**.

Um die Webseite korrekt anzuzeigen, musst du das Verzeichnis über einen lokalen Webserver bereitstellen.

**Option 1: Mit Python (Empfohlen)**
```bash
python3 -m http.server 8000
# oder unter Windows:
py -m http.server 8000
```
Öffne anschließend: http://localhost:8000

**Option 2: Mit Node.js**
```bash
npx serve
```

**Option 3: VS Code**
Installiere die Erweiterung "Live Server", mache einen Rechtsklick auf `index.html` und wähle "Open with Live Server" aus.

## 📝 Wie man Inhalte ändert

Du musst den HTML-Code nicht anfassen, um Webseitentexte, Preise oder Bilder zu ändern!
Öffne einfach die `content.json` Datei und ändere die Werte dort. Lade die Seite neu und die Änderungen sind sofort sichtbar.

## 🎨 Design-Spezifikationen

- **Schriftarten**: Inter (Sans-Serif für UI/Fließtext) & Noto Serif JP (Serif für Überschriften/Branding)
- **Farben**: Eine speziell definierte `matcha` Farbpalette in der Tailwind-Konfiguration (reicht von `#f2f7f4` für Hintergründe bis `#253b2d` für dunkle Akzente).
