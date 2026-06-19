import { Counter, Reveal } from "../components/ui/Motion";
import { stats, steps } from "../data/siteContent";

export function CompanySection() {
  return (
    <>
      <section className="numbers section" id="empresa">
        <div className="numbers-copy">
          <Reveal as="p" className="kicker">RESPALDO ELECTROSUR</Reveal>
          <Reveal as="h2" className="display">
            EXPERIENCIA QUE<br /><span>SE NOTA EN CADA ENTREGA.</span>
          </Reveal>
          <Reveal as="p">
            Desde Berazategui acompañamos a empresas de logística, constructoras y servicios
            que necesitan respuestas concretas, sin vueltas.
          </Reveal>
        </div>

        <div className="stats">
          {stats.map(({ value, suffix, label, animated = true }) => (
            <Reveal className="stat" key={label}>
              {animated ? <Counter value={value} /> : <strong>{value}</strong>}
              <b>{suffix}</b>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="route">
        <div className="route-content">
          <Reveal as="p" className="kicker">SIMPLE, RÁPIDO, DIRECTO</Reveal>
          <Reveal as="h2" className="display">
            PEDÍ. RECIBÍ.<br /><span>SEGUÍ EN MOVIMIENTO.</span>
          </Reveal>
          <div className="steps">
            {steps.map(({ title, text }, index) => (
              <Reveal className="step" key={title}>
                <b>0{index + 1}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
