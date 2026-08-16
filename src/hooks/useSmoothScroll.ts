import type { MouseEvent } from "react";

/** Returns a click handler that smooth-scrolls to the element with the given id. */
export function useSmoothScroll(onNavigate?: () => void) {
  return (id: string) =>
    (event: MouseEvent<HTMLAnchorElement>): void => {
      event.preventDefault();
      onNavigate?.();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
}
