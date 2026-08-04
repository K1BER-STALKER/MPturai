import { properties } from "@/data/properties";
import type { Property, PropertyType } from "@/types";

/**
 * Prieiga prie objektų duomenų.
 *
 * Funkcijos yra `async`, nors dabar duomenys yra faile — kai perkelsime juos
 * į duomenų bazę arba CMS, pasikeis tik šis failas, o puslapių keisti
 * nereikės.
 */

const byNewest = (a: Property, b: Property) =>
  b.scannedAt.localeCompare(a.scannedAt);

export async function getProperties(): Promise<Property[]> {
  return [...properties].sort(byNewest);
}

export async function getFeaturedProperties(limit = 3): Promise<Property[]> {
  const featured = properties.filter((p) => p.featured).sort(byNewest);
  return (
    featured.length > 0 ? featured : [...properties].sort(byNewest)
  ).slice(0, limit);
}

export async function getProperty(slug: string): Promise<Property | undefined> {
  return properties.find((p) => p.slug === slug);
}

export async function getPropertySlugs(): Promise<string[]> {
  return properties.map((p) => p.slug);
}

export const propertyTypeLabels: Record<PropertyType, string> = {
  butas: "Butas",
  namas: "Namas",
  komercinis: "Komercinės patalpos",
};
