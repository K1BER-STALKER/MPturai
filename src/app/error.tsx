"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Kai turėsime klaidų stebėjimo įrankį (pvz. Sentry), siųsime klaidą ten.
    console.error(error);
  }, [error]);

  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight">Įvyko klaida</h1>
      <p className="text-muted mt-3">
        Nepavyko atvaizduoti šio puslapio. Pabandykite dar kartą.
      </p>
      <Button variant="secondary" className="mt-8" onClick={reset}>
        Bandyti dar kartą
      </Button>
    </Container>
  );
}
