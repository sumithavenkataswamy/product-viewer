import axios from 'axios';
import type { Product } from './Product';
import { API_URL } from '../constants/Product.Constants';

export const ProductService = {
  async getAll(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('ProductService Error:', error);
      throw error;
    }
  },
  async getById(id: string): Promise<Product> {
    try {
      const response = await axios.get<Product>(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('ProductService Error:', error);
      throw error;
    }
  },
  async create(product: Omit<Product, 'id' | 'rating'>): Promise<Product> {
    try {
      const response = await axios.post<Product>(API_URL, product);
      return response.data;
    } catch (error) {
      console.error('ProductService Error:', error);
      throw error;
    }
  }
};
