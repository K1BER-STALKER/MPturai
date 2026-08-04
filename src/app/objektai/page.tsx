import type { Metadata } from "next";

import { PropertyCard } from "@/components/property-card";
import { Container } from "@/components/ui/container";
import { getProperties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Objektai",
  description: "Mūsų nuskenuotų butų, namų ir komercinių patalpų 3D turai.",
};

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <Container className="py-14">
      <h1 className="text-3xl font-bold tracking-tight">Objektai</h1>
      <p className="text-muted mt-3 max-w-2xl">
        Nuskenuoti butai, namai ir komercinės patalpos. Spustelėkite objektą ir
        apžiūrėkite jį 360°.
      </p>

      {properties.length === 0 ? (
        <p className="text-muted border-border mt-10 rounded-lg border border-dashed p-10 text-center">
          Objektų dar nėra.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      )}
    </Container>
  );
}
