import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch} from "react-redux";
import { filterByPrice, filterDiscountProducts, searchProduct, sortProducts } from "../../store/slice/productsSlice";
import { removeFilterProducts } from "../../store/slice/productsSlice";
import { useLocation } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export default function FilterSortBar() {
const location = useLocation();
const dispatch = useDispatch();
const filterBar = useRef();
const  [checkboxState, setCheckboxState] = useState(false);

const sortOnChange = e =>{dispatch(sortProducts(e.target.value))}
const searchOnChange = e =>{
  dispatch(searchProduct(e.target.value))}

useEffect(() => {
  dispatch(removeFilterProducts());
}, [])

const filterFromTo = e => {
  //const formData = new FormData(e.target.parentNode)
  const formData = new FormData(e.target.closest('form'));
  const data  = Object.fromEntries(formData);
  data.min = (data.min === '')? -Infinity:+data.min;
  data.max = (data.max === '')? Infinity:+data.max;
  dispatch(filterByPrice(data));
}
const showSaleProducts = (e)=>{
  setCheckboxState(e.target.checked);
  dispatch(filterDiscountProducts(e.target.checked));
}

const changeFilterBar = (e)=>{
  //console.log(filterBar.classList.contains('s.filter_open'))
  e.preventDefault();
  filterBar.current.classList.toggle(s.filter_open);
}

  return (
  <>
    <div className={s.filter_wrapper}> 
      <form ref={filterBar} className={s.filter_bar}>
        <div onChange={filterFromTo} className={s.sort} >
          <p>Price:</p>
          <input className={s.input_price} type="number" name="min" placeholder="from" />
          <input className={s.input_price} type="number" name="max"  placeholder="to"/>
        </div>
        <div> 
        {location.pathname ==='/products/sale'?"":
          <div className={[s.sort, s.checkbox].join(' ')}>
            <span>Discount items: </span>
            <input value={checkboxState}  type="checkbox" onClick={showSaleProducts} />
          </div>} 
        </div>
        <div className={s.sort}>
          <p>Sorted by: </p>
          <select defaultValue="0" onChange={sortOnChange}>
            <option className={s.input} disabled value='0'>select option</option>
            <option className={s.input} value='discount'>discount</option>
            <option className={s.input} value='abc'>title</option>
            <option className={s.input} value='priceUp'>price: low to hight</option>
            <option className={s.input} value='priceDown'>price: hight to low</option>
          </select>
        </div>
        <div className={s.search_container}>
          <input onChange={searchOnChange} className={s.input} placeholder="search" type="text" name="word"/>
          <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
        <button onClick={changeFilterBar} className={s.close_mob_btn}><FontAwesomeIcon icon={faXmark}/></button>
        <button onClick={changeFilterBar} className={s.apply_filter_btn} >Apply</button>
        </form>
      </div>
    
      <div className={s.filter_mobile}><button onClick={changeFilterBar} ><FontAwesomeIcon icon={faFilter} /></button></div>
  </>
  );
}
