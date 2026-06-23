import { BrandsDropdown } from "../components/ignition/BrandsDropdown";
import { CoolingProductsGrid } from "../components/cooling/CoolingProductsGrid";
import { Reveal } from "../components/ui/Motion";
import { coolingBrands } from "../data/siteContent";
import { createWhatsAppUrl } from "../utils/contact";

const quoteMessage =
  "Hola ElectroSur, quiero consultar por productos de refrigeración para nuestra flota.";

export function CoolingPage() {
  return (
    <main className="ignition-page cooling-page">
      <section className="ignition-hero cooling-hero">
        <div className="ignition-hero-copy">
          <Reveal as="a" href="/" className="page-back">← Volver a flotas</Reveal>
          <Reveal as="p" className="kicker">SISTEMA DE REFRIGERACIÓN</Reveal>
          <Reveal as="h1">
            TEMPERATURA ESTABLE.<br />
            <span>FLOTA EN MOVIMIENTO.</span>
          </Reveal>
          <Reveal as="p" className="ignition-lead">
            Radiadores, electroventiladores, mangueras y componentes para evitar
            recalentamientos y mantener cada unidad trabajando con seguridad.
          </Reveal>
          <Reveal className="ignition-actions">
            <a className="button button-primary" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noopener noreferrer">
              Pedir cotización <span>→</span>
            </a>
            <a className="ignition-text-link" href="#productos">Ver productos <span>↓</span></a>
          </Reveal>
        </div>

        <div className="ignition-hero-image" aria-label="Componentes del sistema de refrigeración automotriz">
          <img
            src="/assets/cooling-hero.png"
            alt="Radiadores, electroventilador, mangueras, termostatos y sensores"
          />
          <span className="technical-orbit orbit-one" />
          <span className="technical-orbit orbit-two" />
        </div>
      </section>

      <section className="ignition-intro section">
        <Reveal className="section-label"><span>01</span><p>Controlar la temperatura<br />evita unidades detenidas.</p></Reveal>
        <div>
          <Reveal as="p" className="kicker">REFRIGERACIÓN SIN IMPROVISACIONES</Reveal>
          <Reveal as="h2" className="display">
            CUANDO SUBE LA TEMPERATURA,<br /><span>LA OPERACIÓN CORRE RIESGO.</span>
          </Reveal>
          <Reveal as="p" className="ignition-intro-copy">
            Identificamos medidas, conexiones, fijaciones y aplicaciones para resolver
            correctamente cada parte del circuito y reducir tiempos fuera de servicio.
          </Reveal>
        </div>
      </section>

      <section className="product-universe" id="productos">
        <div className="product-universe-heading">
          <Reveal as="p" className="kicker">NUESTRO UNIVERSO DE REFRIGERACIÓN</Reveal>
          <Reveal as="h2" className="display">TODO PARA<br /><span>CIRCULAR, ENFRIAR Y PROTEGER.</span></Reveal>
          <Reveal as="p">
            Abrí cada categoría para conocer aplicaciones, señales de falla y los datos
            que necesitamos para identificar la pieza correcta.
          </Reveal>
        </div>
        <CoolingProductsGrid />
      </section>

      <section className="brands-section" id="marcas">
        <div className="brands-heading">
          <Reveal as="p" className="kicker">MARCAS DE REFRIGERACIÓN</Reveal>
          <Reveal as="h2">RESPALDO PARA<br /><span>CADA CIRCUITO.</span></Reveal>
          <Reveal as="p">
            Trabajamos con las marcas principales de cada familia y opciones originales
            para resolver aplicaciones de autos y utilitarios.
          </Reveal>
        </div>
        <BrandsDropdown
          brands={coolingBrands}
          summary={`${coolingBrands.length} marcas y líneas para cuidar la temperatura de tu flota`}
          contentId="cooling-brands-dropdown"
        />
      </section>

      <section className="ignition-cta cooling-cta" id="consulta">
        <Reveal as="p" className="kicker">DECINOS QUÉ UNIDAD TENÉS</Reveal>
        <Reveal as="h2">ENCONTRAMOS LA PIEZA.<br /><span>ANTES DE QUE SE RECALIENTE.</span></Reveal>
        <Reveal as="p">
          Mandanos marca, modelo, año, motorización y una foto del componente. Nuestro equipo
          confirma aplicación y disponibilidad para responder a tu empresa sin demoras.
        </Reveal>
        <Reveal as="a" className="button button-dark" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noopener noreferrer">
          Cotizar refrigeración <span>→</span>
        </Reveal>
      </section>
    </main>
  );
}
