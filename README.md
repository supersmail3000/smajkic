# smailsmajkic.com — One-Pager

Persönliche Seite von Smail Smajkic. Ein Pager, dunkel, textgetrieben — nach dem Muster der Portfolio-Analyse (keine Navigation, Hero → Arbeit → Kontakt).

**Stack:** Next.js (App Router) · Tailwind CSS v4 · shadcn/ui · Geist (Vercel, `geist`-Package)

## Lokal starten

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Deployen (Vercel, empfohlen)

```bash
npm i -g vercel
vercel
```

Danach im Vercel-Dashboard unter **Settings → Domains** die eigene Domain (smailsmajkic.com) hinzufügen und die angezeigten DNS-Einträge beim Domain-Anbieter setzen. Fertig — die Seite ist statisch, kein Server nötig.

Alternativ: Repo auf GitHub pushen und bei vercel.com importieren.

## Offene Punkte (TODO)

- [ ] **Ein Projekt fehlt:** Im Mockup war zwischen Telefónica und HSE ein Projekt abgeschnitten (Beschreibung endet auf „… product development and reinforce brand coherence."). In `app/page.tsx` den Platzhalter `[Projektname ergänzen]` ersetzen.
- [ ] **Impressum** (`app/imprint/page.tsx`): Adresse und Pflichtangaben ergänzen.
- [ ] **Datenschutz** (`app/privacy/page.tsx`): Hosting-Anbieter-Passage vervollständigen.
- [ ] **Projektlinks:** Sobald Case Studies auf supersmail.com stehen, in `app/page.tsx` die Projektnamen verlinken.

## Struktur

```
app/
  page.tsx          # der One-Pager (Inhalte + Projektliste als Array)
  layout.tsx        # Geist Sans/Mono, Metadata
  globals.css       # shadcn-Design-Tokens (dark-only)
  imprint/          # Impressum (Platzhalter)
  privacy/          # Datenschutz (Platzhalter)
components/ui/      # shadcn-Komponenten (Button, Separator)
lib/utils.ts        # cn()-Helper
components.json     # shadcn-Konfiguration
```

Hinweis: Die shadcn-Komponenten wurden manuell angelegt (Registry war aus der Build-Umgebung nicht erreichbar), entsprechen aber dem CLI-Output — `npx shadcn@latest add <component>` funktioniert lokal ganz normal, um weitere Komponenten zu ergänzen.
