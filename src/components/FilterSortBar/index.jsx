import React from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { productsSearchActions, productsSortAction } from "../../store/reducer/productsReducer";



export default function FilterSortBar() {
const dispatch = useDispatch()
  
const sortOnChange = e =>{dispatch(productsSortAction(e.target.value))}
const searchOnChange = e =>{dispatch(productsSearchActions(e.target.value))}
const salesHandle = e =>{console.log(e.target.checked)}

  return (
    <form className={s.filter_bar}>
      <div className={s.sort}>
        <p>Price</p>
        <input className={s.input} type="number" name="priceFrom" placeholder="from" />
        <input className={s.input} type="number" name="priceTo"  placeholder="to"/>
      </div>
      <div className={s.sort}>
        <label>
          Discounted items
          <input onClick={salesHandle} type="checkbox" id="custom" name="sortByPrice" />
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
