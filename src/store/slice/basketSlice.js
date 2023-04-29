import { createSlice } from "@reduxjs/toolkit";

export const basketSice = createSlice({
  name: "basket",
  initialState: {
    list: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product === undefined) {
        return [...state, { id: action.payload, count: 1 }];
      } else {
        product.count++;
        return [...state];
      }
    },
    deleteBasketItem: (state, action) => {
      const basket = state.filter((item) => item.id !== action.payload);
      return [...basket];
    },
    incrementBasket: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      product.count++;
      return [...state];
    },
    decrementBasket: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      product.count--;
      if (product.count === 0) {
        return state.filter((item) => item !== product);
      }
      return [...state];
    },
    clearBasket: () => {
      return [];
    },
  },
});
export const {clearBasket,decrementBasket,incrementBasket,addToBasket,deleteBasketItem} = basketSice.actions;
export default basketSice.reducer;
