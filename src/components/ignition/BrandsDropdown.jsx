import { useState } from "react";
import { ignitionBrands } from "../../data/siteContent";
import { Reveal } from "../ui/Motion";

export function BrandsDropdown({
  brands = ignitionBrands,
  eyebrow = "NUESTRA RED DE MARCAS",
  summary,
  contentId = "brands-dropdown-list",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const resolvedSummary = summary ?? `${brands.length} marcas para resolver cada aplicación`;

  return (
    <div className={`brands-dropdown ${isOpen ? "is-open" : ""}`}>
      <button
        className="brands-dropdown-trigger"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>
          <small>{eyebrow}</small>
          <strong>{resolvedSummary}</strong>
        </span>
        <i>{isOpen ? "−" : "+"}</i>
      </button>

      <div
        className="brands-dropdown-content"
        id={contentId}
        aria-hidden={!isOpen}
      >
        <div className="brands-dropdown-inner">
          <div className="brand-wall">
            {brands.map((brand, index) => (
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
