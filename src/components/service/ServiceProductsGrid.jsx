import { serviceProductDetails, serviceProducts } from "../../data/siteContent";
import { ProductGrid } from "../products/ProductGrid";

export function ServiceProductsGrid() {
  return (
    <ProductGrid
      products={serviceProducts}
      productDetails={serviceProductDetails}
      detailsId="service-product-details"
    />
  );
}
