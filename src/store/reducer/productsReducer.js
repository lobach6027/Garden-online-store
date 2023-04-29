const defaultState = [];
const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_SEARCH = "PRODUCTS_SEARCH"
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER"
const PRODUCTS_SORT = "PRODUCTS_SORT"
export const productsLoadAction = (payload) => ({type: PRODUCTS_LOAD,payload});
export const productsSearchActions = (payload)=>({type:PRODUCTS_SEARCH,payload})
export const productsRemoveFilterAction = ()=>({type:PRODUCTS_RESET_FILTER})
export const productsSortAction = (payload)=>({type:PRODUCTS_SORT, payload})
export const productsReducer = (state = defaultState, action) => {
  if (action.type === PRODUCTS_LOAD) {
    return action.payload.map((item)=>({
    ...item,
    finalPrice: item.discont_price || item.price,
    discountPercentage:item.discont_price?(Math.round((1-item.discont_price/item.price)*100)):0,
    show:true}));
  }else if(action.type === PRODUCTS_SEARCH){
    return state.map(item=>({...item, show:item.title.toLowerCase().includes(action.payload.toLowerCase())}))
  }else if(action.type === PRODUCTS_RESET_FILTER){
    return state.map(item=>({...item, show:true}))
  }else if(action.type === PRODUCTS_SORT){
      if(action.payload ==='priceUp'){
        return [...state].sort((a,b)=>a.finalPrice - b.finalPrice)
      }else if(action.payload ==='priceDown'){
        return [...state].sort((a,b)=>b.finalPrice - a.finalPrice)
      }else if(action.payload ==='abc'){
        return [...state].sort((a,b)=>a.title > b.title? 1:-1)
      }else if(action.payload ==='discount'){
        return [...state].sort((a,b)=>b.discountPercentage - a.discountPercentage)
      }
    }
    else {
      return state; 
    }
  };
