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
      show:true}))
     // console.log(totalData)
    return totalData
  }
)
export const productsSlice = createSlice({
  name: 'products',
  initialState: { list: [] },
  reducers: {
    searchProduct:(state, action) => {
      state.list = state.list.map(item=>({...item, show:item.title.toLowerCase().includes(action.payload.toLowerCase())}))
    },
    removeFilterProducts:(state) => {
      state.list = state.list.map(item=>({...item, show:true}))},
    sortProducts:(state, action) => {
      if(action.payload ==='priceUp'){
        state.list = state.list.sort((a,b)=>a.finalPrice - b.finalPrice)
      }else if(action.payload ==='priceDown'){
        state.list = state.list.sort((a,b)=>b.finalPrice - a.finalPrice)
      }else if(action.payload ==='abc'){
        state.list = state.list.sort((a,b)=>a.title > b.title? 1:-1)
      }else if(action.payload ==='discount'){
        state.list = state.list.sort((a,b)=>b.discountPercentage - a.discountPercentage)
      }
    },
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

export const {searchProduct,removeFilterProducts,sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
