import { Reveal } from "../components/ui/Motion";
import { categories } from "../data/siteContent";
import { createWhatsAppUrl } from "../utils/contact";

export function CatalogSection() {
  return (
    <section className="catalog section-dark" id="repuestos">
      <div className="catalog-heading">
        <div>
          <Reveal as="p" className="kicker">TODO EN UN SOLO LUGAR</Reveal>
          <Reveal as="h2" className="display">
            SI TU FLOTA LO NECESITA,<br /><span>LO CONSEGUIMOS.</span>
          </Reveal>
        </div>
        <Reveal as="p" className="catalog-copy">
          Somos especialistas en encendido, pero nos destacamos por tener una solución
          para prácticamente cada necesidad del vehículo.
        </Reveal>
      </div>

      <div className="category-grid">
        <Reveal as="a" href="/encendido-electricidad" className="category-card category-featured">
          <div className="category-visual visual-ignition">
            <span className="spark one" /><span className="spark two" />
            <span className="spark three" /><div className="coil" />
          </div>
          <span className="category-index">01</span>
          <h3>Encendido<br />y electricidad</h3>
          <p>Bobinas, bujías, cables, fichas importadas, baterías y mucho más.</p>
          <span className="featured-link">
            Explorar especialidad
            <b>→</b>
          </span>
        </Reveal>

        {categories.map(({ title, text }, index) => (
          <Reveal as="article" className="category-card" key={title}>
            <span className="category-index">0{index + 2}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="corner-arrow">↗</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="repair-band">
        <div className="repair-tag">TALLER ESPECIALIZADO</div>
        <div>
          <p>También reparamos</p>
          <h3>ALTERNADORES, ARRANQUES<br />Y BOBINADOS.</h3>
        </div>
        <a
          href={createWhatsAppUrl("Hola ElectroSur, quiero consultar por una reparación.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar reparación <span>→</span>
        </a>
      </Reveal>
    </section>
  );
}
