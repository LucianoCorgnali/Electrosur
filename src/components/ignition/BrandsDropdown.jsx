import { useState } from "react";
import { ignitionBrands } from "../../data/siteContent";
import { Reveal } from "../ui/Motion";

export function BrandsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`brands-dropdown ${isOpen ? "is-open" : ""}`}>
      <button
        className="brands-dropdown-trigger"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="brands-dropdown-list"
      >
        <span>
          <small>NUESTRA RED DE MARCAS</small>
          <strong>{ignitionBrands.length} marcas para resolver cada aplicación</strong>
        </span>
        <i>{isOpen ? "−" : "+"}</i>
      </button>

      <div
        className="brands-dropdown-content"
        id="brands-dropdown-list"
        aria-hidden={!isOpen}
      >
        <div className="brands-dropdown-inner">
          <div className="brand-wall">
            {ignitionBrands.map((brand, index) => (
              <Reveal className={`brand-name brand-style-${(index % 4) + 1}`} key={brand}>
                {brand}
              </Reveal>
            ))}
          </div>
          <p className="brands-note">La disponibilidad y aplicación se confirman al momento de cotizar.</p>
        </div>
      </div>
    </div>
  );
}
