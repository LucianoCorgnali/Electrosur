import { coolingProductDetails, coolingProducts } from "../../data/siteContent";
import { ProductGrid } from "../products/ProductGrid";

export function CoolingProductsGrid() {
  return (
    <ProductGrid
      products={coolingProducts}
      productDetails={coolingProductDetails}
      detailsId="cooling-product-details"
    />
  );
}
