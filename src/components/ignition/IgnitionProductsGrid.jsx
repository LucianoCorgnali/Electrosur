import { ignitionProductDetails, ignitionProducts } from "../../data/siteContent";
import { ProductGrid } from "../products/ProductGrid";

export function IgnitionProductsGrid() {
  return (
    <ProductGrid
      products={ignitionProducts}
      productDetails={ignitionProductDetails}
      detailsId="ignition-product-details"
    />
  );
}
