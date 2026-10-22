# Deploy-Anleitung (für die lokale Claude-Session)

Fertige One-Pager-Website für smailsmajkic.com. Next.js + Tailwind v4 + shadcn/ui + Geist.
Build ist getestet (`npm install && npm run build` läuft fehlerfrei, alle Routen statisch).

## Ziel
1. `npm install` im Projektordner
2. Deploy auf Vercel (Konto des Nutzers): `npx vercel login` (Bestätigung im Browser), dann `npx vercel --prod`
3. Domain **smailsmajkic.com** im Vercel-Projekt hinterlegen (Settings → Domains). Domain liegt bei **GoDaddy** — dem Nutzer die nötigen DNS-Einträge nennen (A 76.76.21.21 / CNAME cname.vercel-dns.com) oder direkt helfen.
4. Optional: Code zu GitHub pushen — Repo existiert schon (leer): https://github.com/supersmail3000/smajkic.git (Auth: Token vom Nutzer erfragen, er hat einen erstellt)

## Offene Inhalte (nicht blockierend)
- In app/page.tsx: Platzhalter "[Projektname ergänzen]" — ein Projekt zwischen Telefónica und HSE fehlt noch
- app/imprint/page.tsx + app/privacy/page.tsx: Adresse/Pflichtangaben ergänzen
