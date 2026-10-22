import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smailsmajkic.com"),
  title: "Smail Smajkic — 0 to 1 Product Designer",
  description:
    "0 to 1 Product Designer from Munich. Product design, design systems, brand and visual storytelling — through my company SUPERSMAIL.",
  openGraph: {
    title: "Smail Smajkic — 0 to 1 Product Designer",
    description:
      "0 to 1 Product Designer from Munich. Product design, design systems, brand and visual storytelling.",
    url: "https://smailsmajkic.com",
    siteName: "Smail Smajkic",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
