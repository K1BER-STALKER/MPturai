import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight">Puslapis nerastas</h1>
      <p className="text-muted mt-3">
        Tokio puslapio nėra arba jis pašalintas.
      </p>
      <Link
        href="/"
        className={buttonClasses({ variant: "secondary", className: "mt-8" })}
      >
        Į pradžią
      </Link>
    </Container>
  );
}
