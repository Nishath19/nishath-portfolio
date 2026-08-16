import { Github, Linkedin, Mail } from "lucide-react";
import { ME } from "@/data/profile";

interface SocialLinksProps {
  size?: number;
  withEmail?: boolean;
}

/** LinkedIn + GitHub (and optionally email) icon links, pointed at the profile data. */
export function SocialLinks({ size = 17, withEmail = false }: SocialLinksProps) {
  return (
    <>
      <a href={ME.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin size={size} />
      </a>
      <a href={ME.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <Github size={size} />
      </a>
      {withEmail ? (
        <a href={`mailto:${ME.email}`} aria-label="Email">
          <Mail size={size} />
        </a>
      ) : null}
    </>
  );
}
