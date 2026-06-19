import { useState } from "react";
import { navigation, tickerItems } from "../../data/siteContent";

const ignitionNavigation = [
  { label: "Productos", id: "productos" },
  { label: "Marcas", id: "marcas" },
  { label: "Inyectores", id: "inyectores" },
  { label: "Contacto", id: "consulta" },
];

export function Header({ innerPage = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = innerPage ? ignitionNavigation : navigation;

  return (
    <>
      <div className="topbar">
        <div className="ticker">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>

      <header className={`site-header ${isMenuOpen ? "menu-open" : ""}`}>
        <a className="brand" href={innerPage ? "/" : "#inicio"} aria-label="ElectroSur, inicio">
          <img src="/assets/electrosur-logo-color.png" alt="ElectroSur" />
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(({ label, id }) => (
            <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={innerPage ? "#consulta" : "#contacto"}>
          Cotizar para mi flota <span>↗</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </header>
    </>
  );
}
