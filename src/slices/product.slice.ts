import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../services/product/Product";
import { ProductService } from "../services/product/Product.Service";

const initialState = {
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  };

  // Async thunk to fetch products
  // This will handle the API call and dispatch actions based on the result
  export const fetchProducts = createAsyncThunk<Product[]>(
  'product/fetchAll',
  async () => {
    const response = await ProductService.getAll(); // API call
    return response; // This becomes action.payload
  }
);

const productSlice = createSlice({
   name: 'product',
   initialState: initialState,
    reducers: {
        addProduct:(state,action) => {
           state.products.push(action.payload);
        },
        deleteProduct:(state,action) => {
           state.products =  state.products.filter((product) => product.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error.message || 'Failed to fetch products';
      state.loading = false;
    });
}
})

export const { addProduct, deleteProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;