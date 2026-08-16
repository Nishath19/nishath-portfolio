import type { CSSProperties } from "react";

type ClassValue = string | false | null | undefined;

/** Joins truthy class names, skipping falsy values. */
export function cx(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Staggered `transitionDelay` for a list of elements revealed in sequence. */
export function stagger(index: number, ms = 90): CSSProperties {
  return { transitionDelay: `${index * ms}ms` };
}
