import { productsLoadAction } from "../reducer/productsReducer"

export const asyncLoadProducltsAction = async (dipatch) =>{
    const response = await fetch('http://localhost:3333/products/all')
    const data = await response.json()
    dipatch(productsLoadAction(data))
}