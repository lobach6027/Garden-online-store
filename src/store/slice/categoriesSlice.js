import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name:'categories',
    initialState:{
        list:[]
    },
    reducers:{
        loadCategories:(state,action)=>{action.payload}
    }
})
export const {loadCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
