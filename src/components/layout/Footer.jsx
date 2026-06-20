import { contact } from "../../data/siteContent";

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/assets/electrosur-logo-color.png" alt="ElectroSur" />
          <p>Todo para que tu flota siga.</p>
        </div>
        <div>
          <small>UBICACIÓN</small>
          <p>Av. 7 N.º 1502<br />Berazategui, Buenos Aires</p>
        </div>
        <div>
          <small>CONTACTO</small>
          <a href={contact.phoneHref}>{contact.phoneLabel}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div>
          <small>SEGUINOS</small>
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
            {contact.instagram} ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ElectroSur</span>
        <span>Repuestos y soluciones para flotas</span>
      </div>
    </footer>
  );
}
