import type { Metadata } from "next";
import PrivacyContent from "./content";

export const metadata: Metadata = {
  title: "privacy — smail smajkic",
  robots: { index: false },
};

export default function Privacy() {
  return <PrivacyContent />;
}
