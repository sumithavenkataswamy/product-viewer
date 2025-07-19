import { useEffect, useState } from "react";
import type { Product } from "../../../services/product/Product";

export const ProductViewPropsLogic = (product: Product | null) => {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setselectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setselectedProduct(product);
    setLoading(false);
  }, [product]);

  return { selectedProduct, loading };
};