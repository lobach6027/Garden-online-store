import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: { list: [] },
  reducers: {
    loadProducts: (state, action) => {action.payload;},
  },
});

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer;
