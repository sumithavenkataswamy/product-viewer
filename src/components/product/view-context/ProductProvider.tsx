// ProductProvider.tsx
import { useState } from 'react';
import { ProductContext } from './ProductContext';
import type { Product } from '../../../services/product/Product';

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
