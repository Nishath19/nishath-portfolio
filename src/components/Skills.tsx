import type { CSSProperties } from "react";
import { Award } from "lucide-react";
import { SKILLS, TOOLBOX } from "@/data/skills";
import { CERTS, TIMELINE } from "@/data/timeline";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { stagger } from "@/lib/utils";

/** Lets the bar width come from a CSS custom property so the fill can animate on reveal. */
type BarStyle = CSSProperties & { "--w": string };

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="My" highlight="skills" lede="What I reach for day to day." />

      <div className="skills-grid">
        <div className="bars" data-rv>
          {SKILLS.map((skill, i) => (
            <div className="bar-row" key={skill.name}>
              <div className="bar-top">
                <span>{skill.name}</span>
                <span className="pct">{skill.pct}%</span>
              </div>
              <div className="track">
                <i className="fill" style={{ "--w": `${skill.pct}%`, ...stagger(i) } as BarStyle} />
              </div>
            </div>
          ))}

          <div className="toolbox">
            <h4>Also working with</h4>
            <ul>
              {TOOLBOX.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="time" data-rv>
          {TIMELINE.map((entry) => (
            <div className="tl" key={entry.what}>
              <span className="tl-when">{entry.when}</span>
              <h3>{entry.what}</h3>
              <p className="tl-where">{entry.where}</p>
              <ul>
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="tl">
            <span className="tl-when">Certifications</span>
            <ul className="certs">
              {CERTS.map((cert) => (
                <li key={cert}>
                  <Award size={13} /> {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
