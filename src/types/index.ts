/** Objekto tipas — naudojamas filtravimui ir etiketėms. */
export type PropertyType = "butas" | "namas" | "komercinis";

export type Property = {
  /** URL dalis: /objektai/<slug>. Tik mažosios raidės, be lietuviškų raidžių. */
  slug: string;
  title: string;
  city: string;
  type: PropertyType;
  /** Plotas kvadratiniais metrais. */
  areaM2: number;
  rooms: number;
  /**
   * Matterport modelio ID — tai `m=` reikšmė dalinimosi nuorodoje.
   * Pvz. https://my.matterport.com/show/?m=SxQL3iGyoDo  ->  "SxQL3iGyoDo"
   */
  matterportId: string;
  /** ISO data, pvz. "2026-07-14". */
  scannedAt: string;
  description: string;
  /**
   * Nuotrauka iš /public, pvz. "/objektai/zirmunai.jpg".
   * Jei nenurodyta, rodomas spalvinis užpildas.
   */
  image?: string;
  /** Ar rodyti pradiniame puslapyje. */
  featured?: boolean;
};
