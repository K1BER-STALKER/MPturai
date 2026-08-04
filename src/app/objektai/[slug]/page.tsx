import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MatterportEmbed } from "@/components/matterport-embed";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config";
import {
  getProperty,
  getPropertySlugs,
  propertyTypeLabels,
} from "@/lib/properties";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

/** Iš anksto sugeneruoja visų objektų puslapius — greičiau kraunasi. */
export async function generateStaticParams() {
  const slugs = await getPropertySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) return { title: "Objektas nerastas" };

  return {
    title: property.title,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) notFound();

  const details = [
    { label: "Tipas", value: propertyTypeLabels[property.type] },
    { label: "Miestas", value: property.city },
    { label: "Plotas", value: `${property.areaM2} m²` },
    { label: "Kambariai", value: String(property.rooms) },
    { label: "Nuskenuota", value: formatDate(property.scannedAt) },
  ];

  return (
    <Container className="py-14">
      <Link
        href="/objektai"
        className="text-muted hover:text-foreground text-sm transition"
      >
        ← Visi objektai
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        {property.title}
      </h1>
      <p className="text-muted mt-3 max-w-2xl">{property.description}</p>

      <MatterportEmbed
        modelId={property.matterportId}
        title={property.title}
        className="mt-8"
      />

      <dl className="border-border mt-8 grid gap-x-8 gap-y-4 border-t pt-8 sm:grid-cols-3 lg:grid-cols-5">
        {details.map((detail) => (
          <div key={detail.label}>
            <dt className="text-muted text-sm">{detail.label}</dt>
            <dd className="mt-1 font-medium">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className="border-border bg-surface mt-12 rounded-lg border p-6">
        <h2 className="text-lg font-semibold tracking-tight">
          Norite tokio turo savo objektui?
        </h2>
        <p className="text-muted mt-2">
          Parašykite mums {siteConfig.contact.email} arba skambinkite{" "}
          {siteConfig.contact.phone}.
        </p>
        <Link
          href="/kontaktai"
          className={buttonClasses({ className: "mt-5" })}
        >
          Susisiekti
        </Link>
      </div>
    </Container>
  );
}
