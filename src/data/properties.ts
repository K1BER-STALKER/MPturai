import type { Property } from "@/types";

/**
 * ⚠️ ČIA YRA PAVYZDINIAI DUOMENYS — pakeiskite juos tikrais objektais
 * prieš rodydami svetainę klientams. Pavadinimuose palikta žyma
 * „PAVYZDYS", kad netyčia nepaskelbtumėte netikro portfolio.
 *
 * KAIP PRIDĖTI NAUJĄ OBJEKTĄ
 * 1. Matterport'e atidarykite turą -> Share -> nukopijuokite nuorodą.
 *    https://my.matterport.com/show/?m=SxQL3iGyoDo
 *                                      ^^^^^^^^^^^ tai ir yra matterportId
 * 2. Nukopijuokite žemiau esantį įrašą ir užpildykite laukus.
 * 3. Nuotrauką (nebūtina) įdėkite į /public/objektai/ ir nurodykite kelią.
 * 4. Viskas — /objektai/<slug> puslapis sukuriamas automatiškai.
 *
 * Daugiau nieko keisti nereikia: sąrašas, filtrai ir atskiri puslapiai
 * generuojami iš šio masyvo.
 */
export const properties: Property[] = [
  {
    slug: "zirmunai-2k",
    title: "PAVYZDYS: 2 kambarių butas Žirmūnuose",
    city: "Vilnius",
    type: "butas",
    areaM2: 54,
    rooms: 2,
    matterportId: "SxQL3iGyoDo",
    scannedAt: "2026-07-14",
    description:
      "Renovuotas dviejų kambarių butas su erdvia svetaine ir atskiru miegamuoju. Turas apima visas patalpas, balkoną ir sandėliuką.",
    featured: true,
  },
  {
    slug: "pilaite-namas",
    title: "PAVYZDYS: Namas Pilaitėje",
    city: "Vilnius",
    type: "namas",
    areaM2: 168,
    rooms: 5,
    matterportId: "SxQL3iGyoDo",
    scannedAt: "2026-06-28",
    description:
      "Dviejų aukštų namas su rūsiu ir garažu. Nuskenuoti abu aukštai, laiptinė ir kiemo įėjimas.",
    featured: true,
  },
  {
    slug: "senamiestis-biuras",
    title: "PAVYZDYS: Biuro patalpos senamiestyje",
    city: "Vilnius",
    type: "komercinis",
    areaM2: 92,
    rooms: 4,
    matterportId: "SxQL3iGyoDo",
    scannedAt: "2026-05-09",
    description:
      "Atviro plano biuras su dviem posėdžių kambariais. Turas paruoštas nuomos skelbimui.",
  },
];
