import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import basketReducer from "./slice/basketSlice";
import categoriesReducer from "./slice/categoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
    categories: categoriesReducer,
  },
});
