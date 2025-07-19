import { useEffect, useState } from 'react';
import type { Product } from '../../../services/product/Product';
import { ProductService } from '../../../services/product/Product.Service';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../view-context/ProductContext';

export const ProductListLogic = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedProduct } = useProductContext();

  const navigate = useNavigate();

  useEffect(() => {
    ProductService.getAll()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
        setLoading(false);
      });
  }, []);

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };
 
   const viewProduct = (id: number) => {
    navigate(`/product/${id}`);
  }

  // Using context to view product details
  const viewProductContext = (product: Product) => {
    setSelectedProduct(product);
    navigate('/product-view-context');
  }

  const viewProductProps = (product: Product) => {
    navigate('/product-view-props', { state: { product } });
  }
  
  return {
    products,
    loading,
    deleteProduct,
    viewProduct,
    viewProductContext,
    viewProductProps
  };
};
