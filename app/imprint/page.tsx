import type { Metadata } from "next";
import ImprintContent from "./content";

export const metadata: Metadata = {
  title: "Imprint — Smail Smajkic",
  robots: { index: false },
};

export default function Imprint() {
  return <ImprintContent />;
}
