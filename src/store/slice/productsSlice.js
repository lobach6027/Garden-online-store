import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const resp = await fetch('http://localhost:3333/products/all')
    const data = await resp.json()
    const totalData = data.map((item)=>({
      ...item,
      finalPrice: item.discont_price || item.price,
      discountPercentage:item.discont_price?(Math.round((1-item.discont_price/item.price)*100)):0,
      showSearchWorld:true,
      showDiscount:true,
      showPriceFilter:true
    }))
    return totalData
  }
)
export const productsSlice = createSlice({
  name: 'products',
  initialState: { list: [] },
  reducers: {
    searchProduct:(state,{payload}) => {
      state.list = state.list
      .map(item=>({...item, showSearchWorld:item.title.toLowerCase().includes(payload.toLowerCase())}))
    },
    filterByPrice: (state, {payload}) =>{
      state.list = state.list.map((item)=>{
        if(!(item.finalPrice >= payload.min &&item.finalPrice <= payload.max)){
          return {...item, showPriceFilter:false}
        }else{
          return {...item, showPriceFilter:true}
        }
      })
    },
    removeFilterProducts:(state) => {
      state.list = state.list.map(item=>({...item, show:true,showPriceFilter:true, showDiscount:true,showSearchWorld:true}))
    },
    sortProducts:(state, {payload}) => {
      if(payload ==='priceUp'){
        state.list = state.list.sort((a,b)=>a.finalPrice - b.finalPrice)
      }else if(payload ==='priceDown'){
        state.list = state.list.sort((a,b)=>b.finalPrice - a.finalPrice)
      }else if(payload ==='abc'){
        state.list = state.list.sort((a,b)=>a.title > b.title? 1:-1)
      }else if(payload ==='discount'){
        state.list = state.list.sort((a,b)=>b.discountPercentage - a.discountPercentage)
      }
    },
    filterDiscountProducts:(state,{payload})=>{
      if(payload){ 
        state.list = state.list.map(item=> {
        if(!item.discountPercentage){
          return {...item, showDiscount:false}
        }else{
          return {...item}
        }})
      }else{
      state.list = state.list.map(elem=>({...elem,showDiscount:true}))
      }
    }
  },
   extraReducers: (builder) =>{
    builder
    .addCase(fetchProducts.pending, (state)=>{
      state.status = 'loading'
    })
    .addCase(fetchProducts.fulfilled, (state,{payload})=>{
      state.status = 'resolve'
      state.list = payload;
    })
    .addCase(fetchProducts.rejected, (state, {payload})=>{
      state.status = 'rejected'
      state.error = payload;
    })
   }
});

export const {searchProduct, removeFilterProducts,sortProducts,filterDiscountProducts,filterByPrice} = productsSlice.actions;
export default productsSlice.reducer;
