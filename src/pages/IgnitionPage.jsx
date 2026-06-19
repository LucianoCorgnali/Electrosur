import { Reveal } from "../components/ui/Motion";
import { ignitionBrands } from "../data/siteContent";
import { createWhatsAppUrl } from "../utils/contact";
import { IgnitionProductsGrid } from "../components/ignition/IgnitionProductsGrid";

const quoteMessage =
  "Hola ElectroSur, quiero consultar por productos de encendido y electricidad para nuestra flota.";

export function IgnitionPage() {
  return (
    <main className="ignition-page">
      <section className="ignition-hero">
        <div className="ignition-hero-copy">
          <Reveal as="a" href="/" className="page-back">← Volver a flotas</Reveal>
          <Reveal as="p" className="kicker">ESPECIALISTAS EN ENCENDIDO</Reveal>
          <Reveal as="h1">
            ELECTRICIDAD QUE<br />
            <span>MANTIENE TU FLOTA VIVA.</span>
          </Reveal>
          <Reveal as="p" className="ignition-lead">
            Desde la chispa hasta la carga: componentes eléctricos, encendido e inyección
            para resolver más rápido y comprar correctamente desde el primer contacto.
          </Reveal>
          <Reveal className="ignition-actions">
            <a className="button button-primary" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noopener noreferrer">
              Consultar disponibilidad <span>→</span>
            </a>
            <a className="ignition-text-link" href="#productos">Ver productos <span>↓</span></a>
          </Reveal>
          <Reveal className="cash-discount">
            <strong>10%</strong>
            <span>de descuento<br />abonando en efectivo</span>
          </Reveal>
        </div>
        <div className="ignition-hero-image" aria-label="Componentes de encendido y electricidad automotriz">
          <img src="/assets/ignition-products-hero.png" alt="Bobinas, alternador, reguladores, porta diodos, inyectores, sensores y bujías" />
          <span className="technical-orbit orbit-one" />
          <span className="technical-orbit orbit-two" />
        </div>
      </section>

      <section className="ignition-intro section">
        <Reveal className="section-label"><span>01</span><p>Una especialidad construida<br />durante tres décadas.</p></Reveal>
        <div>
          <Reveal as="p" className="kicker">PRECISIÓN EN CADA COMPONENTE</Reveal>
          <Reveal as="h2" className="display">
            CUANDO FALLA LO ELÉCTRICO,<br /><span>LA OPERACIÓN SE DETIENE.</span>
          </Reveal>
          <Reveal as="p" className="ignition-intro-copy">
            Conocemos las urgencias de una flota. Por eso combinamos variedad, stock y
            asesoramiento técnico para encontrar la aplicación correcta sin hacer perder tiempo.
          </Reveal>
        </div>
      </section>

      <section className="product-universe" id="productos">
        <div className="product-universe-heading">
          <Reveal as="p" className="kicker">NUESTRO UNIVERSO ELÉCTRICO</Reveal>
          <Reveal as="h2" className="display">TODO LO QUE<br /><span>GENERA, ENCIENDE Y CONECTA.</span></Reveal>
          <Reveal as="p">
            Te mostramos el alcance de lo que podemos resolver
            para las unidades de tu empresa.
          </Reveal>
        </div>
        <IgnitionProductsGrid />
      </section>

      <section className="brands-section" id="marcas">
        <div className="brands-heading">
          <Reveal as="p" className="kicker">MARCAS QUE CONOCEMOS</Reveal>
          <Reveal as="h2">RESPALDO PARA<br /><span>CADA APLICACIÓN.</span></Reveal>
          <Reveal as="p">
            Trabajamos con primeras marcas y alternativas confiables para encontrar el equilibrio
            correcto entre disponibilidad, rendimiento y presupuesto.
          </Reveal>
        </div>
        <div className="brand-wall">
          {ignitionBrands.map((brand, index) => (
            <Reveal className={`brand-name brand-style-${(index % 4) + 1}`} key={brand}>
              {brand}
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="brands-note">La disponibilidad y aplicación se confirman al momento de cotizar.</Reveal>
      </section>

      <section className="injector-section" id="inyectores">
        <div className="injector-image">
          <img src="/assets/injector-cleaning.png" alt="Banco profesional para limpieza y prueba de inyectores" />
          <div className="injector-stamp"><strong>TEST</strong><span>+ LIMPIEZA</span></div>
        </div>
        <div className="injector-copy">
          <Reveal as="p" className="kicker">SERVICIO ESPECIALIZADO</Reveal>
          <Reveal as="h2">LIMPIEZA DE<br /><span>INYECTORES.</span></Reveal>
          <Reveal as="p">
            Recuperamos el patrón de pulverización y verificamos el caudal para detectar diferencias
            antes de que se conviertan en consumo excesivo, fallas o unidades detenidas.
          </Reveal>
          <div className="injector-points">
            {["Limpieza por ultrasonido", "Prueba de caudal", "Control de estanqueidad", "Revisión visual"].map((item) => (
              <Reveal key={item}><i>✓</i>{item}</Reveal>
            ))}
          </div>
          <Reveal as="a" className="button button-dark injector-cta" href={createWhatsAppUrl("Hola ElectroSur, quiero consultar por limpieza de inyectores para nuestra flota.")} target="_blank" rel="noopener noreferrer">
            Consultar el servicio <span>→</span>
          </Reveal>
        </div>
      </section>

      <section className="ignition-cta" id="consulta">
        <Reveal as="p" className="kicker">DECINOS QUÉ UNIDAD TENÉS</Reveal>
        <Reveal as="h2">LA PIEZA CORRECTA.<br /><span>SIN PERDER TIEMPO.</span></Reveal>
        <Reveal as="p">
          Mandanos marca, modelo, año y motorización. Nuestro equipo identifica la aplicación
          y te responde con disponibilidad para tu empresa.
        </Reveal>
        <Reveal as="a" className="button button-dark" href={createWhatsAppUrl(quoteMessage)} target="_blank" rel="noopener noreferrer">
          Hablar con ElectroSur <span>→</span>
        </Reveal>
      </section>
    </main>
  );
}
