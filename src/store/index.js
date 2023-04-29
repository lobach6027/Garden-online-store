import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsReducer } from "./reducer/productsReducer";
import { basketReducer } from "./reducer/basketReducer";
import { categoriesReducer } from "./reducer/categoriesReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  categories:categoriesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
