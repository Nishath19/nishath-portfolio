import { useEffect } from "react";

/**
 * Adds the `in` class to every `[data-rv]` element as it scrolls into view.
 * Elements are revealed immediately when the user prefers reduced motion.
 */
export function useReveal(): void {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-rv]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
