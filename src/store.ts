import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/product.slice";

export const store = configureStore({
    reducer: {
        product: productReducer
    },
})

export type AppDispatch = typeof store.dispatch;