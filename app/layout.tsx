import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const description = "find the problem. shape the product. build the brand.";

// same values as the head of public/home.html, so imprint and privacy preview the same way
export const metadata: Metadata = {
  metadataBase: new URL("https://smailsmajkic.com"),
  title: "smail smajkic",
  description,
  openGraph: {
    title: "smail smajkic",
    description,
    url: "https://smailsmajkic.com",
    siteName: "smail smajkic",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "a black chrome cube floating on black" }],
  },
  twitter: { card: "summary_large_image" },
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
