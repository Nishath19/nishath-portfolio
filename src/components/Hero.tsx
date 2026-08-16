import { Cloud, Code2, Database } from "lucide-react";
import { ME, ROLES } from "@/data/profile";
import { useTyping } from "@/hooks/useTyping";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { DownloadCvButton } from "@/components/common/DownloadCvButton";
import { SocialLinks } from "@/components/common/SocialLinks";

export function Hero() {
  const typed = useTyping(ROLES);
  const scrollTo = useSmoothScroll();
  const initials = `${ME.first[0]}${ME.last[0]}`;

  return (
    <section className="hero" id="home">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="hi">Hello, my name is</p>
          <h1 className="big">
            {ME.first} <span className="grad">{ME.last}</span>
          </h1>
          <h2 className="typed">
            And I'm a <span>{typed}</span>
            <i className="caret" />
          </h2>
          <p className="lede">
            I build the serverless backends behind booking, billing and tracking systems — and the React interfaces
            that sit on top of them. 5+ years across Node.js, AWS and Java.
          </p>

          <div className="socials">
            <SocialLinks size={18} withEmail />
          </div>

          <div className="btns">
            <a className="btn" href="#contact" onClick={scrollTo("contact")}>
              Hire me
            </a>
            <DownloadCvButton className="btn out" />
          </div>
        </div>

        <div className="hero-photo">
          <div className="ring">
            <div className="ring-in">
              {ME.photo ? <img src={ME.photo} alt={ME.name} /> : <div className="initials">{initials}</div>}
            </div>
          </div>
          <span className="orbit o1">
            <Code2 size={16} />
          </span>
          <span className="orbit o2">
            <Database size={16} />
          </span>
          <span className="orbit o3">
            <Cloud size={16} />
          </span>
        </div>
      </div>
    </section>
  );
}
