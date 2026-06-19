import { Reveal } from "../ui/Motion";
import { regulatorDetails } from "../../data/siteContent";
import { createWhatsAppUrl } from "../../utils/contact";

const consultation =
  "Hola ElectroSur, quiero consultar por un regulador para una unidad de nuestra flota.";

export function RegulatorDetails({ onClose }) {
  const { eyebrow, title, description, brands, types, symptoms, identification } = regulatorDetails;

  return (
    <section className="regulator-details" aria-label="Información sobre reguladores">
      <button className="regulator-close" type="button" onClick={onClose} aria-label="Cerrar información">
        Cerrar <span>×</span>
      </button>

      <div className="regulator-media">
        <img
          src="/assets/ignition-products-hero.png"
          alt="Regulador de alternador junto a componentes eléctricos automotrices"
        />
        <span>Regulación precisa</span>
      </div>

      <div className="regulator-content">
        <Reveal as="p" className="kicker">{eyebrow}</Reveal>
        <Reveal as="h3">{title}</Reveal>
        <Reveal as="p" className="regulator-description">{description}</Reveal>

        <div className="regulator-columns">
          <Reveal>
            <small>TIPOS Y APLICACIONES</small>
            <ul>{types.map((item) => <li key={item}>{item}</li>)}</ul>
          </Reveal>
          <Reveal>
            <small>SEÑALES DE POSIBLE FALLA</small>
            <ul>{symptoms.map((item) => <li key={item}>{item}</li>)}</ul>
          </Reveal>
        </div>

        <Reveal className="regulator-identification">
          <div>
            <small>PARA IDENTIFICARLO MÁS RÁPIDO</small>
            <p>Si los tenés, podés enviarnos estos datos. No son obligatorios.</p>
          </div>
          <div className="identification-tags">
            {identification.map((item) => <span key={item}>{item}</span>)}
          </div>
        </Reveal>

        <Reveal className="regulator-footer">
          <div>
            <small>MARCAS DESTACADAS</small>
            <p>{brands.join(" · ")}</p>
          </div>
          <a
            className="button button-primary"
            href={createWhatsAppUrl(consultation)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar un regulador <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
