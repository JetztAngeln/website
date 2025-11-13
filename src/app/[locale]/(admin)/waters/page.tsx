import type { Metadata } from "next";
import WatersPage from "./_page_client";


export const metadata: Metadata = {
  title: "Gewässerkarte - JetztAngeln",
  description: "Bearbeite und verwalte die Gewässerkarte für deinen Verein.",
};

export default function WatersPageMetadata() {
  return (
    <WatersPage></WatersPage>
  );
}
