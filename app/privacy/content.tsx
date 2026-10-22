"use client";

import { useState } from "react";
import { LanguageToggle } from "../imprint/content";

export default function PrivacyContent() {
  const [lang, setLang] = useState<"en" | "de">("en");

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-semibold">
          {lang === "en" ? "Privacy Policy" : "Datenschutzerklärung"}
        </h1>
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>

      {lang === "en" ? (
        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            This website does not use cookies, analytics tools, or contact
            forms. We do not collect or store any personal data ourselves.
          </p>
          <p>
            The website is hosted by Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA. When you visit the site, Vercel processes
            technically necessary server log data (e.g. IP address, time of
            access, requested page) to deliver and secure the service. The
            legal basis is Art. 6 (1) (f) GDPR — our legitimate interest in
            operating the website securely and reliably. Data transfer to the
            US is based on the EU Standard Contractual Clauses and the EU-US
            Data Privacy Framework. More information:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="underline underline-offset-4"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
          <p>
            If you contact us by email, the data you provide (email address,
            content of your message) is used solely to handle your inquiry
            (Art. 6 (1) (b) GDPR) and is not shared with third parties.
          </p>
          <p>
            Controller: SUPERSMAIL GmbH, Wilhelm-Hertz-Str. 3, 80805 Munich, Germany —
            info@supersmail.com
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Diese Website verwendet keine Cookies, keine Analyse-Tools und
            keine Kontaktformulare. Es werden durch uns keine
            personenbezogenen Daten erhoben oder gespeichert.
          </p>
          <p>
            Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA, gehostet. Beim Aufruf der Seite verarbeitet
            Vercel technisch notwendige Server-Logdaten (z.&nbsp;B.
            IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite) zur
            Bereitstellung und Absicherung des Dienstes. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
            und zuverlässigen Betrieb der Website). Die Übermittlung in die
            USA erfolgt auf Grundlage der EU-Standardvertragsklauseln bzw. des
            EU-US Data Privacy Framework. Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="underline underline-offset-4"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
          <p>
            Bei Kontaktaufnahme per E-Mail werden die übermittelten Daten
            (E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur
            Bearbeitung der Anfrage verwendet (Art. 6 Abs. 1 lit. b DSGVO)
            und nicht an Dritte weitergegeben.
          </p>
          <p>
            Verantwortlich: SUPERSMAIL GmbH, Wilhelm-Hertz-Str. 3, 80805 München —
            info@supersmail.com
          </p>
        </div>
      )}

      <p className="mt-12 text-sm text-muted-foreground">
        <a href="/" className="underline underline-offset-4">
          ← Back
        </a>
      </p>
    </main>
  );
}
