import { useState } from "react";
import { ME, NAV } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { cx } from "@/lib/utils";

const IDS = NAV.map(([id]) => id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(IDS);
  const scrolled = useScrolled();
  const scrollTo = useSmoothScroll(() => setMenuOpen(false));

  return (
    <header className={cx("nav", scrolled && "solid")}>
      <div className="nav-in">
        <a className="logo" href="#home" onClick={scrollTo("home")}>
          {ME.first}
          <span>.</span>
        </a>

        <nav className={cx("links", menuOpen && "open")} aria-label="Sections">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={scrollTo(id)} className={cx(active === id && "on")}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="burger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
