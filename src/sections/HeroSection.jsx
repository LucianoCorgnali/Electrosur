import { useState } from "react";
import { HeroCarousel } from "../components/home/HeroCarousel";
import { Reveal } from "../components/ui/Motion";
import { createWhatsAppUrl } from "../utils/contact";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isStoreSlide = activeSlide === 0;

  return (
    <section className="hero" id="inicio">
      <HeroCarousel activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content hero-content-slide" key={isStoreSlide ? "store" : "fleet"}>
        <Reveal className="eyebrow">
          <span /> {isStoreSlide ? "30 años en Berazategui" : "Abastecimiento integral para flotas"}
        </Reveal>

        <Reveal as="h1">
          {isStoreSlide ? (
            <>
              CONOCÉ<br />
              <em>ELECTROSUR.</em>
            </>
          ) : (
            <>
              TU FLOTA<br />
              <em>NO PUEDE PARAR.</em>
            </>
          )}
        </Reveal>

        <Reveal as="p" className="hero-copy">
          {isStoreSlide
            ? "Desde nuestro local en Berazategui abastecemos empresas con stock, asesoramiento y soluciones para mantener cada unidad en movimiento."
            : "Repuestos, asesoramiento y respuesta rápida en un solo proveedor. Hace 30 años mantenemos empresas en movimiento."}
        </Reveal>

        <Reveal className="hero-actions">
          {isStoreSlide ? (
            <>
              <a className="button button-primary" href="#empresa">
                Conocer nuestra empresa <span>→</span>
              </a>
              <a className="text-link" href="#ubicacion">
                Ver ubicación <span>↓</span>
              </a>
            </>
          ) : (
            <>
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
            </>
          )}
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
