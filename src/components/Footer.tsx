import { ArrowUp } from "lucide-react";
import { ME } from "@/data/profile";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span>
          © {new Date().getFullYear()} {ME.name}. All rights reserved.
        </span>
        <button
          className="top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={17} />
        </button>
      </div>
    </footer>
  );
}
