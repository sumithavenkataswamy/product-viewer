import type { Product } from '../../../services/product/Product';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useProductContext } from '../view-context/ProductContext';
import { fetchProducts } from '../../../slices/product.slice';
import { deleteProduct } from '../../../slices/product.slice';
import type { AppDispatch } from '../../../store';

export const ProductStoreListLogic = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { setSelectedProduct } = useProductContext();

  const products = useSelector((state: { product: { products: Product[] } }) => state.product.products);
  const loading = useSelector((state: { product: { loading: boolean } }) => state.product.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const removeProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const viewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  const viewProductContext = (product: Product) => {
    setSelectedProduct(product);
    navigate('/product-view-context');
  };

  const viewProductProps = (product: Product) => {
    navigate('/product-view-props', { state: { product } });
  };

  return {
    products,
    loading,
    removeProduct,
    viewProduct,
    viewProductContext,
    viewProductProps,
  };
};
