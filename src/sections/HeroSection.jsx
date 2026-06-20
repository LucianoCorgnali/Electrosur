import { Reveal } from "../components/ui/Motion";
import { createWhatsAppUrl } from "../utils/contact";
import { HeroCarousel } from "../components/home/HeroCarousel";

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <HeroCarousel />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <Reveal className="eyebrow">
          <span /> Abastecimiento integral para flotas
        </Reveal>
        <Reveal as="h1">
          TU FLOTA<br />
          <em>NO PUEDE PARAR.</em>
        </Reveal>
        <Reveal as="p" className="hero-copy">
          Repuestos, asesoramiento y respuesta rápida en un solo proveedor.
          Hace 30 años mantenemos empresas en movimiento.
        </Reveal>
        <Reveal className="hero-actions">
          <a
            className="button button-primary"
            href={createWhatsAppUrl("Hola ElectroSur, quiero solicitar una cotización para nuestra flota.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar con un asesor <span>→</span>
          </a>
          <a className="text-link" href="#soluciones">
            Conocer beneficios <span>↓</span>
          </a>
        </Reveal>
      </div>

      <Reveal className="hero-proof">
        <strong>30</strong>
        <span>años resolviendo<br />lo que tu flota necesita</span>
      </Reveal>

      <a className="scroll-cue" href="#soluciones" aria-label="Bajar a soluciones">
        <span>SCROLL</span><i />
      </a>
    </section>
  );
}
