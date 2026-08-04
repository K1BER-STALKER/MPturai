import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kontaktai",
  description: "Susisiekite dėl 3D skenavimo ir Matterport virtualių turų.",
};

export default function ContactPage() {
  const { email, phone, city } = siteConfig.contact;

  // Rodomos tik tos socialinių tinklų nuorodos, kurios užpildytos config faile.
  const socials = [
    { label: "Facebook", href: siteConfig.social.facebook },
    { label: "Instagram", href: siteConfig.social.instagram },
  ].filter((social) => Boolean(social.href));

  return (
    <Container className="py-14">
      <h1 className="text-3xl font-bold tracking-tight">Susisiekime</h1>
      <p className="text-muted mt-3 max-w-2xl">
        Parašykite, koks objektas ir kur jis yra — atsakysime su kaina ir
        galimais laikais.
      </p>

      <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <dt className="text-muted text-sm">El. paštas</dt>
          <dd className="mt-1">
            <a
              href={`mailto:${email}`}
              className="hover:text-accent font-medium underline-offset-4 transition hover:underline"
            >
              {email}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-muted text-sm">Telefonas</dt>
          <dd className="mt-1">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hover:text-accent font-medium underline-offset-4 transition hover:underline"
            >
              {phone}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-muted text-sm">Veiklos regionas</dt>
          <dd className="mt-1 font-medium">{city} ir apylinkės</dd>
        </div>
      </dl>

      {socials.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight">
            Socialiniai tinklai
          </h2>
          <ul className="mt-4 flex gap-4">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent text-muted underline-offset-4 transition hover:underline"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/*
        Kontaktų forma bus pridėta, kai turėsime serverio dalį — formai reikia
        vietos, kur siųsti žinutę (el. pašto servisas arba duomenų bazė).
        Kol kas naudojame el. pašto ir telefono nuorodas: jos veikia visada.
      */}
    </Container>
  );
}
