// ProductContext.ts
import { createContext, useContext } from 'react';
import type { Product } from '../../../services/product/Product';

export const ProductContext = createContext<{
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
}>({
  selectedProduct: null,
  setSelectedProduct: () => {},
});

export const useProductContext = () => useContext(ProductContext);
