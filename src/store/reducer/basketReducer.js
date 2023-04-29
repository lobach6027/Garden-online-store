const defaultState = JSON.parse(localStorage.getItem('basket')) || [];
const writeToLocalStorage= (basket) =>localStorage.setItem('basket',JSON.stringify(basket))
const ICREMENT_BASKET = "ICREMENT_BASKET";
const DEREMENT_BASKET = "DEREMENT_BASKET";
const DELETE_BASKET_ITEM = "DELETE_BASKET_ITEM";
const ADD_TO_BASKET = "ADD_TO_BASKET";
const CLEAR_BASKET = 'CLEAR_BASKET'

export const basketClearAction = () => ({type: CLEAR_BASKET})
export const basketDeleteItemAction = (payload) => ({
  type: DELETE_BASKET_ITEM,
  payload,
});
export const basketIncrementAction = (payload) => ({
  type: ICREMENT_BASKET,
  payload,
});
export const basketDecrementAction = (payload) => ({
  type: DEREMENT_BASKET,
  payload,
});
export const basketAddAction = (payload) => ({ type: ADD_TO_BASKET, payload });

export const basketReducer = (state=defaultState, action) => {
  if (action.type === ADD_TO_BASKET) {
    const product = state.find((item) => item.id === action.payload);
    if (product === undefined) {
      const totalState = [...state, { id: action.payload, count: 1 }];
      writeToLocalStorage(totalState)
      return totalState
    } else {
      product.count++;
      writeToLocalStorage([...state])
      return [...state];
    }
  } else if (action.type === ICREMENT_BASKET) {
    const product = state.find((item) => item.id === action.payload);
    product.count++;
    writeToLocalStorage([...state])
    return [...state];
  } else if (action.type === DEREMENT_BASKET) {
    const product = state.find((item) => item.id === action.payload);
    product.count--;
    if (product.count === 0) {
      const totalBasket = state.filter((item) => item !== product)
      writeToLocalStorage(totalBasket)
      return totalBasket;
    }
    writeToLocalStorage([...state])
    return [...state];
  } else if (action.type === DELETE_BASKET_ITEM) {
    const basket = state.filter((item) => item.id !== action.payload);
    writeToLocalStorage([...basket])
    return [...basket];
  }else if(action.type === CLEAR_BASKET){
    writeToLocalStorage([])
    return []
  } else {
    return state;
  }
};
