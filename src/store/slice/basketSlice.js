import { createSlice } from "@reduxjs/toolkit";
const writeToLocalStorage= (basket) =>localStorage.setItem('basket',JSON.stringify(basket))

export const basketSice = createSlice({
  name: "basket",
  initialState: {
    list: JSON.parse(localStorage.getItem('basket')) || [],
  },
  reducers: {
    addToBasket: (state, {payload}) => {
      const product = state.list.find((item) => item.id === payload);
      if (product === undefined) {
        state.list = [...state.list, { id: payload, count: 1 }];
        writeToLocalStorage(state.list);
      } else {
        product.count++;
        state.list = [...state.list];
        writeToLocalStorage(state.list);
      }
    },
    deleteBasketItem: (state, {payload}) => {
      state.list = state.list.filter((item) => item.id !== payload);
      writeToLocalStorage(state.list);
    },
    incrementBasket: (state, {payload}) => {
      const product = state.list.find((item) => item.id === payload);
      product.count++;
      state.list = [...state.list];
      writeToLocalStorage(state.list);
    },
    decrementBasket: (state, {payload}) => {
      const product = state.list.find((item) => item.id === payload);
      product.count--;
      if (product.count === 0) {
        state.list = state.list.filter((item) => item !== product);
        writeToLocalStorage(state.list);
      }
      state.list = [...state.list];
      writeToLocalStorage(state.list);
    },
    clearBasket: (state) => {
      state.list = [];
      writeToLocalStorage(state.list);
    },
  },
});
export const {clearBasket,decrementBasket,incrementBasket,addToBasket,deleteBasketItem} = basketSice.actions;
export default basketSice.reducer;
