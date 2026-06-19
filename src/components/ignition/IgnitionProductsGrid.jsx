import { useEffect, useRef, useState } from "react";
import { ignitionProducts } from "../../data/siteContent";
import { Reveal } from "../ui/Motion";
import { RegulatorDetails } from "./RegulatorDetails";

export function IgnitionProductsGrid() {
  const [isRegulatorOpen, setIsRegulatorOpen] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (!isRegulatorOpen) return;
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [isRegulatorOpen]);

  const toggleRegulator = () => setIsRegulatorOpen((current) => !current);

  return (
    <>
      <div className="ignition-products-grid">
        {ignitionProducts.map(({ number, title, text }) => {
          const isRegulator = title === "Reguladores";

          return (
            <Reveal
              as={isRegulator ? "button" : "article"}
              type={isRegulator ? "button" : undefined}
              className={`ignition-product ${isRegulator ? "ignition-product-active" : ""}`}
              key={title}
              onClick={isRegulator ? toggleRegulator : undefined}
              aria-expanded={isRegulator ? isRegulatorOpen : undefined}
              aria-controls={isRegulator ? "regulator-details" : undefined}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i>{isRegulator && isRegulatorOpen ? "−" : "↗"}</i>
              {isRegulator && <em>{isRegulatorOpen ? "Ocultar información" : "Ver información"}</em>}
            </Reveal>
          );
        })}
      </div>

      <div
        ref={detailsRef}
        id="regulator-details"
        className={`regulator-details-wrapper ${isRegulatorOpen ? "is-open" : ""}`}
      >
        {isRegulatorOpen && <RegulatorDetails onClose={() => setIsRegulatorOpen(false)} />}
      </div>
    </>
  );
}
