import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface SectionProps {
  id: string;
  alt?: boolean;
  children: ReactNode;
}

/** Standard section shell: `<section id>` wrapping a centered `.wrap` container. */
export function Section({ id, alt, children }: SectionProps) {
  return (
    <section className={cx("sec", alt && "alt")} id={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}
