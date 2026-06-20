import { Reveal } from "../components/ui/Motion";
import { location } from "../data/siteContent";

export function LocationSection() {
  return (
    <section className="location-section" id="ubicacion">
      <div className="location-map">
        <iframe
          src={location.mapEmbedUrl}
          title="Ubicación de ElectroSur en Berazategui"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="location-map-label" aria-hidden="true">
          <span>ElectroSur</span>
          <small>Berazategui · Zona Sur</small>
        </div>
      </div>

      <div className="location-content">
        <Reveal as="p" className="kicker">VENÍ A VISITARNOS</Reveal>
        <Reveal as="h2" className="display">
          ESTAMOS EN<br />
          <span>BERAZATEGUI.</span>
        </Reveal>
        <Reveal as="p" className="location-intro">
          Podés acercarte a nuestro local para retirar pedidos, consultar aplicaciones
          o recibir asesoramiento de nuestro equipo.
        </Reveal>

        <Reveal className="location-address">
          <small>DIRECCIÓN</small>
          <strong>{location.address}</strong>
          <span>{location.city}<br />{location.country}</span>
        </Reveal>

        <Reveal className="location-hours">
          <small>HORARIOS DE ATENCIÓN</small>
          {location.hours.map(({ days, time }) => (
            <div key={days}>
              <span>{days}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </Reveal>

        <Reveal
          as="a"
          className="button button-primary location-button"
          href={location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo llegar <span>↗</span>
        </Reveal>
      </div>
    </section>
  );
}
