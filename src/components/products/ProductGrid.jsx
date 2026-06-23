import { useEffect, useRef, useState } from "react";
import { ProductDetails } from "../ignition/ProductDetails";
import { Reveal } from "../ui/Motion";

export function ProductGrid({ products, productDetails, detailsId }) {
  const [openDetailsKey, setOpenDetailsKey] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (!openDetailsKey) return;
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openDetailsKey]);

  return (
    <>
      <div className="ignition-products-grid">
        {products.map(({ number, title, text, detailsKey }) => {
          const isOpen = openDetailsKey === detailsKey;

          return (
            <Reveal
              as="button"
              type="button"
              className="ignition-product ignition-product-active"
              key={title}
              onClick={() => setOpenDetailsKey((current) => current === detailsKey ? null : detailsKey)}
              aria-expanded={isOpen}
              aria-controls={detailsId}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i>{isOpen ? "−" : "↗"}</i>
              <em>{isOpen ? "Ocultar información" : "Ver información"}</em>
            </Reveal>
          );
        })}
      </div>

      <div
        ref={detailsRef}
        id={detailsId}
        className={`regulator-details-wrapper ${openDetailsKey ? "is-open" : ""}`}
      >
        {openDetailsKey && (
          <ProductDetails
            details={productDetails[openDetailsKey]}
            onClose={() => setOpenDetailsKey(null)}
          />
        )}
      </div>
    </>
  );
}
