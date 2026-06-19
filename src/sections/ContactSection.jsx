import { Reveal } from "../components/ui/Motion";
import { contact } from "../data/siteContent";
import { createWhatsAppUrl } from "../utils/contact";

export function ContactSection() {
  const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola ElectroSur, quiero solicitar contacto para nuestra flota.",
      "",
      `Nombre: ${data.get("nombre")}`,
      `Empresa: ${data.get("empresa")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Cantidad de vehículos: ${data.get("vehiculos") || "No informado"}`,
      `Necesidad: ${data.get("mensaje") || "Quiero recibir asesoramiento"}`,
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact section" id="contacto">
      <div className="contact-copy">
        <Reveal as="p" className="kicker">HABLEMOS DE TU FLOTA</Reveal>
        <Reveal as="h2" className="display">
          ¿LISTOS PARA TENER<br /><span>UN PROVEEDOR QUE RESPONDA?</span>
        </Reveal>
        <Reveal as="p">
          Dejanos tus datos y un asesor se comunica para conocer las necesidades de tu empresa.
        </Reveal>
        <Reveal className="contact-direct">
          <a href={contact.phoneHref}><small>LLAMANOS</small>{contact.phoneLabel}</a>
          <a href={`mailto:${contact.email}`}><small>ESCRIBINOS</small>{contact.email}</a>
        </Reveal>
      </div>

      <Reveal as="form" className="lead-form" onSubmit={submitForm}>
        <label>
          <span>Nombre y apellido</span>
          <input type="text" name="nombre" placeholder="Tu nombre" required />
        </label>
        <label>
          <span>Empresa</span>
          <input type="text" name="empresa" placeholder="Nombre de la empresa" required />
        </label>
        <div className="form-row">
          <label>
            <span>Teléfono</span>
            <input type="tel" name="telefono" placeholder="11 0000 0000" required />
          </label>
          <label>
            <span>Cantidad de vehículos</span>
            <input type="number" name="vehiculos" min="1" placeholder="Ej: 12" />
          </label>
        </div>
        <label>
          <span>¿Qué necesitan?</span>
          <textarea name="mensaje" rows="3" placeholder="Contanos brevemente" />
        </label>
        <button className="button button-dark" type="submit">
          Solicitar contacto <span>→</span>
        </button>
        <p className="form-note">Al enviar, se abrirá WhatsApp con tu consulta lista.</p>
      </Reveal>
    </section>
  );
}
