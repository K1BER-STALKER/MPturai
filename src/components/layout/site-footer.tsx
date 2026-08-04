import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <Container className="text-muted flex flex-wrap items-center justify-between gap-4 py-8 text-sm">
        <span>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Visos teisės
          saugomos.
        </span>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hover:text-foreground transition"
          >
            {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="hover:text-foreground transition"
          >
            {siteConfig.contact.phone}
          </a>
          <Link href="/kontaktai" className="hover:text-foreground transition">
            Kontaktai
          </Link>
        </div>
      </Container>
    </footer>
  );
}
