import type { Metadata } from "next";
import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Paslaugos",
  description:
    "3D skenavimas, Matterport virtualūs turai, patalpų planai ir nuotraukos nekilnojamojo turto objektams.",
};

const services = [
  {
    title: "3D skenavimas",
    description:
      "Nuskenuojame visą objektą Insta360 kamera ir sukuriame tikslų Matterport modelį su visomis patalpomis.",
  },
  {
    title: "Virtualus turas",
    description:
      "Interaktyvus 360° turas, kurį galima įterpti į NT skelbimą, savo svetainę arba tiesiog nusiųsti klientui nuoroda.",
  },
  {
    title: "Patalpų planai",
    description:
      "Iš 3D modelio sugeneruojame aukštų planus su matmenimis — patogu klientams, kurie nori suprasti išplanavimą.",
  },
  {
    title: "Nuotraukos iš modelio",
    description:
      "Aukštos kokybės kadrai, paimti iš 3D modelio. Tinka skelbimams ir socialiniams tinklams be atskiros fotosesijos.",
  },
];

const useCases = [
  "NT agentūroms — skelbimai, kuriuos peržiūri ilgiau",
  "Savininkams, parduodantiems ar nuomojantiems patalpas",
  "Nuomojamiems būstams ir svečių namams",
  "Biurams ir komercinėms patalpoms",
];

export default function ServicesPage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-bold tracking-tight">Paslaugos</h1>
      <p className="text-muted mt-3 max-w-2xl">
        Nuo skenavimo objekte iki paruoštos nuorodos, kurią galite įdėti į
        skelbimą.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title}>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Kam tai tinka</h2>
        <ul className="mt-6 space-y-3">
          {useCases.map((useCase) => (
            <li key={useCase} className="flex gap-3">
              <span className="text-accent" aria-hidden="true">
                •
              </span>
              <span className="text-muted">{useCase}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-border bg-surface mt-16 rounded-lg border p-6">
        <h2 className="text-lg font-semibold tracking-tight">Kiek kainuoja?</h2>
        <p className="text-muted mt-2 max-w-2xl">
          Kaina priklauso nuo objekto ploto ir patalpų skaičiaus. Parašykite,
          koks objektas — atsakysime su tikslia kaina.
        </p>
        <Link
          href="/kontaktai"
          className={buttonClasses({ className: "mt-5" })}
        >
          Gauti pasiūlymą
        </Link>
      </div>
    </Container>
  );
}
