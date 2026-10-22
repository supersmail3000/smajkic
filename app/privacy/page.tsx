import type { Metadata } from "next";
import PrivacyContent from "./content";

export const metadata: Metadata = {
  title: "Privacy — Smail Smajkic",
  robots: { index: false },
};

export default function Privacy() {
  return <PrivacyContent />;
}
