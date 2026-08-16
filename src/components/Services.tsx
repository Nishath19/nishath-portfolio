import { SERVICES } from "@/data/services";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { stagger } from "@/lib/utils";

export function Services() {
  return (
    <Section id="services" alt>
      <SectionHeading title="What I" highlight="do" lede="Three things I've been paid to do well." />

      <div className="cards">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <article className="card" key={service.title} data-rv style={stagger(i)}>
              <div className="card-ic">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
