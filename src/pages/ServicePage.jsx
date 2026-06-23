import { BrandsDropdown } from "../components/ignition/BrandsDropdown";
import { ServiceProductsGrid } from "../components/service/ServiceProductsGrid";
import { Reveal } from "../components/ui/Motion";
import { serviceBrands } from "../data/siteContent";
import { createWhatsAppUrl } from "../utils/contact";

const quoteMessage =
  "Hola ElectroSur, quiero consultar por productos de service y mantenimiento para nuestra flota.";

export function ServicePage() {
  return (
    <main className="ignition-page service-page">
      <section className="ignition-hero service-hero">
        <div className="ignition-hero-copy">
          <Reveal as="a" href="/" className="page-back">← Volver a flotas</Reveal>
          <Reveal as="p" className="kicker">SERVICE Y MANTENIMIENTO</Reveal>
          <Reveal as="h1">
            MANTENIMIENTO QUE<br />
            <span>EVITA PARADAS.</span>
          </Reveal>
          <Reveal as="p" className="ignition-lead">
            Todo lo necesario para sostener el mantenimiento preventivo de autos y utilitarios:
            variedad, asesoramiento y respuesta rápida para cada unidad de la flota.
          </Reveal>
          <Reveal className="ignition-actions">
            <a className="button button-primary" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noopener noreferrer">
              Pedir cotización <span>→</span>
            </a>
            <a className="ignition-text-link" href="#productos">Ver productos <span>↓</span></a>
          </Reveal>
        </div>

        <div className="ignition-hero-image" aria-label="Productos de service y mantenimiento automotriz">
          <img
            src="/assets/service-maintenance-hero-v2.png"
            alt="Filtros, aceites, correas, tensores, bomba de agua, bomba de combustible y consumibles"
          />
          <span className="technical-orbit orbit-one" />
          <span className="technical-orbit orbit-two" />
        </div>
      </section>

      <section className="ignition-intro section">
        <Reveal className="section-label"><span>01</span><p>Prevenir es mantener<br />la flota disponible.</p></Reveal>
        <div>
          <Reveal as="p" className="kicker">PLANIFICACIÓN SIN COMPLICACIONES</Reveal>
          <Reveal as="h2" className="display">
            CADA SERVICE A TIEMPO.<br /><span>CADA UNIDAD EN MOVIMIENTO.</span>
          </Reveal>
          <Reveal as="p" className="ignition-intro-copy">
            Centralizamos los productos de mantenimiento para que tu empresa pueda identificar,
            cotizar y recibir lo necesario sin repartir la compra entre distintos proveedores.
          </Reveal>
        </div>
      </section>

      <section className="product-universe" id="productos">
        <div className="product-universe-heading">
          <Reveal as="p" className="kicker">NUESTRO UNIVERSO DE MANTENIMIENTO</Reveal>
          <Reveal as="h2" className="display">TODO PARA<br /><span>PREVENIR, CUIDAR Y CONTINUAR.</span></Reveal>
          <Reveal as="p">
            Abrí cada categoría para conocer aplicaciones, señales de desgaste y la información
            que nos ayuda a cotizar correctamente.
          </Reveal>
        </div>
        <ServiceProductsGrid />
      </section>

      <section className="brands-section" id="marcas">
        <div className="brands-heading">
          <Reveal as="p" className="kicker">MARCAS PARA EL MANTENIMIENTO</Reveal>
          <Reveal as="h2">RESPALDO PARA<br /><span>CADA SERVICE.</span></Reveal>
          <Reveal as="p">
            Trabajamos con marcas reconocidas y opciones para distintas necesidades de uso,
            disponibilidad y presupuesto.
          </Reveal>
        </div>
        <BrandsDropdown
          brands={serviceBrands}
          summary={`${serviceBrands.length} marcas para cubrir el mantenimiento de tu flota`}
          contentId="service-brands-dropdown"
        />
      </section>

      <section className="ignition-cta service-cta" id="consulta">
        <Reveal as="p" className="kicker">DECINOS QUÉ UNIDAD TENÉS</Reveal>
        <Reveal as="h2">ARMAMOS TU PEDIDO.<br /><span>SIN PERDER TIEMPO.</span></Reveal>
        <Reveal as="p">
          Mandanos marca, modelo, año, motorización y los productos que necesitás. Nuestro equipo
          confirma aplicaciones y disponibilidad para simplificar la compra de tu empresa.
        </Reveal>
        <Reveal as="a" className="button button-dark" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noopener noreferrer">
          Cotizar mantenimiento <span>→</span>
        </Reveal>
      </section>
    </main>
  );
}
