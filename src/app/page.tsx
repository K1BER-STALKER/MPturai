import Link from "next/link";

import { PropertyCard } from "@/components/property-card";
import { buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config";
import { getFeaturedProperties } from "@/lib/properties";

const steps = [
  {
    title: "1. Skenuojame",
    description:
      "Atvykstame su Insta360 kamera ir nufilmuojame visą objektą. Vidutiniškai užtrunka 1–2 valandas.",
  },
  {
    title: "2. Apdorojame",
    description:
      "Sukuriame tikslų Matterport 3D modelį su patalpų planu ir matmenimis.",
  },
  {
    title: "3. Pateikiame",
    description:
      "Gaunate nuorodą, kurią galite įdėti į skelbimą, svetainę ar išsiųsti klientui.",
  },
];

export default async function HomePage() {
  const featured = await getFeaturedProperties();

  return (
    <>
      <section className="border-border border-b">
        <Container className="py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-medium">
              Matterport 3D turai
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="text-muted mt-5 text-lg">{siteConfig.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/objektai" className={buttonClasses({ size: "lg" })}>
                Peržiūrėti objektus
              </Link>
              <Link
                href="/kontaktai"
                className={buttonClasses({ variant: "secondary", size: "lg" })}
              >
                Susisiekti
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <h2 className="text-2xl font-bold tracking-tight">Kaip tai vyksta</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.title}>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-border border-t">
        <Container className="py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Nuskenuoti objektai
              </h2>
              <p className="text-muted mt-2">
                Spustelėkite objektą ir apžiūrėkite jį 360°.
              </p>
            </div>
            <Link
              href="/objektai"
              className={buttonClasses({ variant: "secondary" })}
            >
              Visi objektai
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
