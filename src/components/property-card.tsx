import Image from "next/image";
import Link from "next/link";

import { propertyTypeLabels } from "@/lib/properties";
import { cn } from "@/lib/utils";
import type { Property } from "@/types";

/**
 * Objekto kortelė sąrašuose. Jei objektas neturi nuotraukos, rodomas
 * spalvinis užpildas — svetainė veikia ir be nuotraukų.
 */
export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/objektai/${property.slug}`}
      className={cn(
        "group border-border bg-surface block overflow-hidden rounded-lg border transition",
        "hover:border-border-strong focus-visible:outline-foreground focus-visible:outline-2 focus-visible:outline-offset-2",
      )}
    >
      <div className="bg-surface-hover relative aspect-[4/3] overflow-hidden">
        {property.image ? (
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="from-accent/20 to-accent/5 flex h-full w-full items-center justify-center bg-gradient-to-br">
            <span className="text-muted text-sm">3D turas</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-accent text-xs font-medium">
          {propertyTypeLabels[property.type]} · {property.city}
        </p>
        <h3 className="mt-1.5 font-semibold tracking-tight">
          {property.title}
        </h3>
        <p className="text-muted mt-1 text-sm">
          {property.areaM2} m² · {property.rooms} kamb.
        </p>
      </div>
    </Link>
  );
}
