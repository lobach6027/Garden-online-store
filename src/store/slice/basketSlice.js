import { createSlice } from "@reduxjs/toolkit";

export const basketSice = createSlice({
  name: "basket",
  initialState: {
    list: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const product = state.list.find((item) => item.id === action.payload);
      if (product === undefined) {
        state.list = [...state.list, { id: action.payload, count: 1 }];
      } else {
        product.count++;
        state.list = [...state.list];
      }
    },
    deleteBasketItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
     
    },
    incrementBasket: (state, action) => {
      const product = state.list.find((item) => item.id === action.payload);
      product.count++;
      state.list = [...state.list];
    },
    decrementBasket: (state, action) => {
      const product = state.list.find((item) => item.id === action.payload);
      product.count--;
      if (product.count === 0) {
        state.list = state.list.filter((item) => item !== product);
      }
      state.list = [...state.list];
    },
    clearBasket: (state) => {
      state.list = [];
    },
  },
});
export const {clearBasket,decrementBasket,incrementBasket,addToBasket,deleteBasketItem} = basketSice.actions;
export default basketSice.reducer;
