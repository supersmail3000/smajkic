"use client";

import { useState } from "react";

export function LanguageToggle({
  lang,
  setLang,
}: {
  lang: "en" | "de";
  setLang: (l: "en" | "de") => void;
}) {
  return (
    <div className="flex gap-3 text-sm">
      <button
        onClick={() => setLang("en")}
        className={
          lang === "en"
            ? "text-foreground underline underline-offset-4"
            : "text-muted-foreground hover:text-foreground transition-colors"
        }
      >
        English
      </button>
      <button
        onClick={() => setLang("de")}
        className={
          lang === "de"
            ? "text-foreground underline underline-offset-4"
            : "text-muted-foreground hover:text-foreground transition-colors"
        }
      >
        Deutsch
      </button>
    </div>
  );
}

export default function ImprintContent() {
  const [lang, setLang] = useState<"en" | "de">("en");

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xl font-semibold">
          {lang === "en" ? "Imprint" : "Impressum"}
        </h1>
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>

      {lang === "en" ? (
        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Information in accordance with Section 5 DDG (German Digital
            Services Act)
          </p>
          <p>
            SUPERSMAIL GmbH
            <br />
            Wilhelm-Hertz-Str. 3
            <br />
            80805 Munich
            <br />
            Germany
          </p>
          <p>
            Represented by: Smail Smajkic (Managing Director)
            <br />
            Email: info@supersmail.com
          </p>
          <p>
            Register court: Munich District Court (Amtsgericht München)
            <br />
            Registration number: HRB 278668
            <br />
            VAT ID: DE358738584
          </p>
          <p>Responsible for content: Smail Smajkic</p>
        </div>
      ) : (
        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          <p>Angaben gemäß § 5 DDG</p>
          <p>
            SUPERSMAIL GmbH
            <br />
            Wilhelm-Hertz-Str. 3
            <br />
            80805 München
            <br />
            Deutschland
          </p>
          <p>
            Vertreten durch: Smail Smajkic (Geschäftsführer)
            <br />
            E-Mail: info@supersmail.com
          </p>
          <p>
            Registergericht: Amtsgericht München
            <br />
            Handelsregisternummer: HRB 278668
            <br />
            Umsatzsteuer-ID: DE358738584
          </p>
          <p>Inhaltlich verantwortlich: Smail Smajkic</p>
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
