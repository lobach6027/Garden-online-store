import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      const resp = await fetch('http://localhost:3333/categories/all')
      const data = await resp.json()
      return data
    }
  )
export const categoriesSlice = createSlice({
    name:'categories',
    initialState:{
        list:[]
    },
    reducers:{
        loadCategories:(state,action)=>{
            state.list = action.payload}
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchCategories.pending, (state)=>{
          state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state,{payload})=>{
          state.status = 'resolve'
          state.list = payload;
        })
        .addCase(fetchCategories.rejected, (state, {payload})=>{
          state.status = 'rejected'
          state.error = payload;
        })
       }
})
export const {loadCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
