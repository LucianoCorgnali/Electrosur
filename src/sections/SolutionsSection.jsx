import { Reveal } from "../components/ui/Motion";
import { benefits } from "../data/siteContent";

export function SolutionsSection() {
  return (
    <>
      <section className="intro section" id="soluciones">
        <Reveal className="section-label">
          <span>01</span>
          <p>Una alianza que mantiene<br />tu operación en marcha.</p>
        </Reveal>
        <div className="intro-main">
          <Reveal as="p" className="kicker">MÁS QUE REPUESTOS</Reveal>
          <Reveal as="h2" className="display">
            MENOS TIEMPO PARADOS.<br />
            <span>MÁS NEGOCIO EN MOVIMIENTO.</span>
          </Reveal>
          <Reveal as="p" className="intro-copy">
            Centralizá las necesidades de tu flota con un equipo que entiende la urgencia,
            encuentra la pieza correcta y la hace llegar donde estés.
          </Reveal>
        </div>
      </section>

      <section className="benefits">
        {benefits.map(({ icon, title, text }, index) => (
          <Reveal
            as="article"
            className="benefit-card"
            key={title}
            style={{ "--benefit-index": index }}
          >
            <span className="card-number">0{index + 1}</span>
            <div className="benefit-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="card-line" />
          </Reveal>
        ))}
      </section>
    </>
  );
}
