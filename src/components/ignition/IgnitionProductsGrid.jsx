import { useEffect, useRef, useState } from "react";
import { ignitionProductDetails, ignitionProducts } from "../../data/siteContent";
import { Reveal } from "../ui/Motion";
import { ProductDetails } from "./ProductDetails";

export function IgnitionProductsGrid() {
  const [openDetailsKey, setOpenDetailsKey] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (!openDetailsKey) return;
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openDetailsKey]);

  const toggleDetails = (detailsKey) => {
    setOpenDetailsKey((current) => (current === detailsKey ? null : detailsKey));
  };

  return (
    <>
      <div className="ignition-products-grid">
        {ignitionProducts.map(({ number, title, text, detailsKey }) => {
          const hasDetails = Boolean(detailsKey);
          const isOpen = openDetailsKey === detailsKey;

          return (
            <Reveal
              as={hasDetails ? "button" : "article"}
              type={hasDetails ? "button" : undefined}
              className={`ignition-product ${hasDetails ? "ignition-product-active" : ""}`}
              key={title}
              onClick={hasDetails ? () => toggleDetails(detailsKey) : undefined}
              aria-expanded={hasDetails ? isOpen : undefined}
              aria-controls={hasDetails ? "ignition-product-details" : undefined}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i>{isOpen ? "−" : "↗"}</i>
              {hasDetails && <em>{isOpen ? "Ocultar información" : "Ver información"}</em>}
            </Reveal>
          );
        })}
      </div>

      <div
        ref={detailsRef}
        id="ignition-product-details"
        className={`regulator-details-wrapper ${openDetailsKey ? "is-open" : ""}`}
      >
        {openDetailsKey && (
          <ProductDetails
            details={ignitionProductDetails[openDetailsKey]}
            onClose={() => setOpenDetailsKey(null)}
          />
        )}
      </div>
    </>
  );
}
