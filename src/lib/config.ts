/**
 * Įmonės duomenys ir navigacija — vienintelė vieta, kur tai keičiama.
 *
 * TODO: pakeiskite laukus, pažymėtus „TODO", tikrais duomenimis.
 */
export const siteConfig = {
  name: "MPturai",
  tagline: "3D virtualūs turai nekilnojamajam turtui",
  description:
    "Skenuojame butus, namus ir komercines patalpas Insta360 kamera ir kuriame Matterport 3D turus, kuriuos klientai gali apžiūrėti bet kada ir iš bet kur.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://m-pturai.vercel.app",

  contact: {
    email: "info@mpturai.lt", // TODO: tikras el. paštas
    phone: "+370 600 00000", // TODO: tikras telefonas
    city: "Vilnius", // TODO: miestas / veiklos regionas
  },

  social: {
    facebook: "", // TODO: nuoroda arba palikite tuščią, kad nebūtų rodoma
    instagram: "", // TODO
  },

  nav: [
    { title: "Pradžia", href: "/" },
    { title: "Objektai", href: "/objektai" },
    { title: "Paslaugos", href: "/paslaugos" },
    { title: "Kontaktai", href: "/kontaktai" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
