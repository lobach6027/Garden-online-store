import { categoriesLoadAction } from "../reducer/categoriesReducer";

export const asyncLoadCategoriesAction = async (dispatch) =>{
const response = await fetch('http://localhost:3333/categories/all');
const data = await response.json()
dispatch(categoriesLoadAction(data))
}