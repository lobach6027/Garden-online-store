import React, { useState } from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { productsSearchActions, productsSortAction } from "../../store/reducer/productsReducer";
import { searchProduct, sortProducts } from "../../store/slice/productsSlice";



export default function FilterSortBar() {
const dispatch = useDispatch()
  
const sortOnChange = e =>{dispatch(sortProducts(e.target.value))}
const searchOnChange = e =>{dispatch(searchProduct(e.target.value))}

const  [checkboxState, setcheckboxState] = useState(false)
const salesHandle = e =>{setcheckboxState(!checkboxState)}

  return (
    <form className={s.filter_bar}>
      <div className={s.sort}>
        <p>Price</p>
        <input className={s.input} type="number" name="priceFrom" placeholder="from" />
        <input className={s.input} type="number" name="priceTo"  placeholder="to"/>
      </div>
      <div className={s.sort}>
        <label>
          <span>{checkboxState}</span>
          <input onChange={salesHandle} type="checkbox" checked = {checkboxState} id="custom" name="sortByPrice" />
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
