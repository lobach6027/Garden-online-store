import React, { useState } from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice, filterDiscountProducts, searchProduct, sortProducts } from "../../store/slice/productsSlice";



export default function FilterSortBar() {
const dispatch = useDispatch()
const  [checkboxState, setcheckboxState] = useState(false) 
const sortOnChange = e =>{dispatch(sortProducts(e.target.value))}
const searchOnChange = e =>{dispatch(searchProduct(e.target.value))}//{searchWorld:e.target.value,checkbox:checkboxState}

const filterFromTo = e => {
  const formData = new FormData(e.target.parentNode)
  const data  = Object.fromEntries(formData)
  data.min = (data.min === '')? -Infinity:+data.min
  data.max = (data.max === '')? Infinity:+data.max
  dispatch(filterByPrice(data))
}
const showSaleProducts = (e)=>{
  setcheckboxState(e.target.checked)
  dispatch(filterDiscountProducts(e.target.checked))
}
const products = useSelector(state=>state.products.list)
  return (
    <form className={s.filter_bar}>
      <form onChange={filterFromTo} className={s.sort} >
        <p>Price</p>
        <input className={s.input} type="number" name="min" placeholder="from" />
        <input className={s.input} type="number" name="max"  placeholder="to"/>
      </form>
      <div className={s.sort}>
        <label>
          <p>Discount items:{checkboxState?'+':'-'}</p>
          <input type="checkbox" onClick={showSaleProducts} />
        </label>
      </div>
      <div className={s.sort}>
        <p>Sorted</p>
        <select onChange={sortOnChange}>
          <option className={s.input}  value='0'>select option</option>
          <option className={s.input} value='discount'>discount</option>
          <option className={s.input} value='abc'>title</option>
          <option className={s.input} value='priceUp'>price up</option>
          <option className={s.input} value='priceDown'>price down</option>
        </select>
      </div>
      <div>
        <div className={s.search_container}>
          <input onChange={searchOnChange} className={s.input} placeholder="search" type="text" />
          <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
      </div>
    </form>
  );
}
