import { useEffect, useState } from "react";
import type { Product } from "../../../services/product/Product";
import { useProductContext } from "./ProductContext";

export const ProductViewUsingContextLogic = () => {
  const { selectedProduct } = useProductContext();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProduct(selectedProduct);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, [selectedProduct]);

  return { loading, product };
};
