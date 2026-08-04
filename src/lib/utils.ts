import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Sujungia Tailwind klases saugiai — vėlesnės klasės nugali ankstesnes,
 * todėl komponentai gali priimti `className` ir leisti perrašyti numatytas
 * reikšmes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Data lietuvišku formatu, pvz. „2026 m. liepos 14 d.". */
export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("lt-LT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
