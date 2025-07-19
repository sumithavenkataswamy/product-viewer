import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../../services/product/Product";
import { ProductService } from "../../../services/product/Product.Service";

export const ProductViewLogic = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      ProductService.getById(id)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
          setLoading(false);
        });
    }
  }, [id]);

  return { product, loading };
};