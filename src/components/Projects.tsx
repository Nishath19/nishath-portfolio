import { PROJECTS } from "@/data/projects";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { cx, stagger } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="projects" alt>
      <SectionHeading title="My" highlight="projects" lede="Products in production, plus what I build on weekends." />

      <div className="projs">
        {PROJECTS.map((project, i) => {
          const Icon = project.icon;
          return (
            <article className={cx("proj", `hue-${project.hue}`)} key={project.title} data-rv style={stagger(i % 2)}>
              <div className="proj-thumb">
                <Icon size={40} strokeWidth={1.3} />
                <span className="proj-kind">{project.kind}</span>
              </div>
              <div className="proj-body">
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <ul className="tags">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
