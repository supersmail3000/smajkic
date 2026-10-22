import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const EMAIL = "info@supersmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Book a call"
)}&body=${encodeURIComponent("Hi Smail, I'd like to talk about a project.")}`;

type Project = {
  name: string;
  url?: string;
  description: string;
};

const projects: Project[] = [
  {
    name: "BISON",
    url: "https://bisonapp.com",
    description:
      "Created the design system and supported product, brand, and visual design for Börse Stuttgart's crypto trading app — making a complex financial product feel secure and approachable.",
  },
  {
    name: "Siemens Healthineers",
    url: "https://www.siemens-healthineers.com",
    description:
      "Contributed to the SHUI Design System, enabling consistent UI standards across the company's medical technology software.",
  },
  {
    name: "The Football Company",
    description:
      "Founding member of the sports-tech startup; shaped product and brand design in early-stage development, then led brand, content, and communication.",
  },
  {
    name: "BMW",
    url: "https://www.bmw.com",
    description:
      "Improved the product design of the BMW car configurator and enhanced the BMW ID profile experience across all digital platforms.",
  },
  {
    name: "Telefónica",
    url: "https://www.telefonica.de",
    description:
      "Senior Designer on the ONE Design System team, helping ensure visual and functional consistency across 15 brands within the Telefónica ecosystem.",
  },
  {
    name: "Personio",
    url: "https://www.personio.com",
    description:
      "As Design System Manager, created and evolved the design system for web components — guidelines and libraries that support product development and reinforce brand coherence.",
  },
  {
    name: "HSE",
    url: "https://www.hse.de",
    description:
      "Led the UX for both the website and native apps for iOS and Android, including the launch of a new live shopping experience.",
  },
  {
    name: "HVB (HypoVereinsbank)",
    url: "https://www.hvb.de",
    description:
      "Redesigned the mobile banking app to improve usability, structure, and visual clarity in day-to-day banking.",
  },
  {
    name: "Vodafone",
    url: "https://www.vodafone.de",
    description:
      "Designed the Smart TV app interface, including a dedicated styleguide, iconography, and a modular design system.",
  },
  {
    name: "Kickbase",
    url: "https://www.kickbase.com",
    description:
      "Delivered product and brand design for the Bundesliga fantasy football platform, including design system, UI, and identity assets.",
  },
];

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-foreground px-3 py-1 text-background">
      {children}
    </span>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground transition-colors"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20 sm:py-28">
        {/* Hero */}
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          <Highlight>Smail Smajkic</Highlight>
        </h1>

        <p className="mt-10 leading-relaxed text-muted-foreground">
          I&apos;m a 0 to 1 Product Designer. I help build digital products
          from scratch — clear, intuitive, and user-centered. With over 15
          years of experience, my focus is product design, design systems,
          brand, and strong visual storytelling. Through my company{" "}
          <a
            href="https://supersmail.com"
            className="text-foreground underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground transition-colors"
          >
            SUPERSMAIL
          </a>
          , I help businesses build and scale digital products people trust —
          from crypto trading and banking to medical software. I work from
          Munich, where I share a creative studio with my longtime
          collaborator, designer, and old friend Ante Kristo.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="rounded-none px-3 text-xl font-semibold sm:text-2xl h-auto py-1"
          >
            <a href={MAILTO}>Book a call</a>
          </Button>
        </div>

        {/* Selected work */}
        <section className="mt-16" aria-labelledby="work-heading">
          <h2 id="work-heading" className="font-semibold">
            Selected brands and projects:
          </h2>

          <ul className="mt-8 space-y-8">
            {projects.map((project) => (
              <li key={project.name}>
                <h3 className="font-medium text-foreground">
                  {project.url ? (
                    <ExternalLink href={project.url}>
                      {project.name}
                    </ExternalLink>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <p className="mt-16 leading-relaxed text-foreground">
          I care. About the details, the people, and the impact good design can
          have.
        </p>

        <p className="mt-8 leading-relaxed text-muted-foreground">
          Want to work together?{" "}
          <a
            href={MAILTO}
            className="text-foreground underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground transition-colors"
          >
            Get in touch
          </a>
          .
        </p>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-2xl px-6 pb-12">
        <Separator className="mb-8" />
        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <a href={MAILTO} className="hover:text-foreground transition-colors">
            {EMAIL}
          </a>
          <div className="flex gap-6">
            <a
              href="https://supersmail.com"
              className="hover:text-foreground transition-colors"
            >
              SUPERSMAIL
            </a>
            <a
              href="/imprint"
              className="hover:text-foreground transition-colors"
            >
              Imprint
            </a>
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
