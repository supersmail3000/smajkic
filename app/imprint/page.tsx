import type { Metadata } from "next";
import ImprintContent from "./content";

export const metadata: Metadata = {
  title: "imprint — smail smajkic",
  robots: { index: false },
};

export default function Imprint() {
  return <ImprintContent />;
}
