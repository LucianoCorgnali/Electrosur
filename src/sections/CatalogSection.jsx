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

        <Reveal
          as="a"
          className="repair-band"
          href={createWhatsAppUrl("Hola ElectroSur, quiero consultar por una reparación con garantía de 30 días.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar por reparaciones con garantía de 30 días"
        >
          <div className="repair-intro">
            <span className="category-index">06</span>
            <div>
              <p>Servicio técnico</p>
              <h3>También<br />reparamos</h3>
            </div>
          </div>

          <div className="repair-services" aria-label="Reparaciones disponibles">
            <span>Alternadores</span>
            <span>Arranques</span>
            <span>Bobinados</span>
            <span>Motores de limpiaparabrisas</span>
            <span>Motores de electroventilador</span>
          </div>

          <div className="repair-action">
            <span className="repair-guarantee">
              <strong>30 días</strong>
              de garantía
            </span>
            <span className="repair-consultation">
              Consultar reparación
            </span>
            <b aria-hidden="true">↗</b>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
