import { STATS } from "@/data/profile";
import { stagger } from "@/lib/utils";

export function Stats() {
  return (
    <section className="stats-band">
      <div className="wrap stats">
        {STATS.map((stat, i) => (
          <div className="stat" key={stat.l} data-rv style={stagger(i, 80)}>
            <strong>{stat.n}</strong>
            <span>{stat.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
