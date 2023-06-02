import React, { useEffect, useRef, useState} from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch} from "react-redux";
import { filterByPrice, filterDiscountProducts, removeFilterProducts, searchProduct, sortProducts } from "../../store/slice/productsSlice";
import { useLocation } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FilterSortBar() {
const location = useLocation();
const dispatch = useDispatch();
const filterBar = useRef();
const minInputRef = useRef(null);
const maxInputRef = useRef(null);

const sorting = e =>{dispatch(sortProducts(e.target.value))}
const searching = e =>{dispatch(searchProduct(e.target.value))}

useEffect(() => {
  dispatch(removeFilterProducts());
}, [])

const filterFromTo = e => {
  //const formData = new FormData(e.target.parentNode)
  const formData = new FormData(e.target.closest('form'));
  const data  = Object.fromEntries(formData);
  data.min = (data.min === '')? -Infinity:+data.min;
  data.max = (data.max === '')? Infinity:+data.max;
  console.log(data)
  dispatch(filterByPrice(data));
}
const [filterBarActive, setFilterBarActive] = useState(false)
const mobileFilterBar = (e)=>{
  e.preventDefault();
  setFilterBarActive(!filterBarActive)
  filterBar.current.classList.toggle(s.filter_open);
}
filterBarActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

 const removeMinPriceFilter = (e)=>{
  e.preventDefault()
  const formData = new FormData(e.target.closest('form'));
  const data  = Object.fromEntries(formData);
  data.min =  -Infinity;
  data.max = (data.max === '')? Infinity:+data.max;
  minInputRef.current.value = "";
  dispatch(filterByPrice(data))
 
 }
 const removeMaxPriceFilter = (e)=>{
  e.preventDefault()
  const formData = new FormData(e.target.closest('form'));
  const data  = Object.fromEntries(formData);
  data.min = (data.min === '')? -Infinity:+data.min;
  data.max = Infinity;
    maxInputRef.current.value = "";
  dispatch(filterByPrice(data))
 
 }
return (
  <>
    <div className={s.filter_wrapper}> 
      <form ref={filterBar} className={s.filter_bar}>
        <div onChange={filterFromTo} className={s.sort} >
          <p>Price:</p>
          <div className={s.price_input_container}>
            <input className={s.input_price} type="number" name="min" placeholder="from" ref={minInputRef} />
            <button onClick={removeMinPriceFilter}>✕</button>
          </div>
          <div className={s.price_input_container}>
            <input className={s.input_price} type="number" name="max"  placeholder="to" ref={maxInputRef}/>
            <button onClick={removeMaxPriceFilter}>✕</button>
          </div>
        </div>
        
        <div> 
        {location.pathname ==='/products/sale'?"":
          <div className={s.checkbox}>
          <input
            type="checkbox"
            id="discountCheckbox"
            className={s.checkboxInput}
            onChange={(e) => dispatch(filterDiscountProducts(e.target.checked))}
          />
          <label htmlFor="discountCheckbox" className={s.checkboxLabel}>
            <span>Discount items </span>
          </label>
        </div>} 
        </div>
        <div className={s.sort}>
          <p>Sorted by: </p>
          <select  defaultValue="0" onChange={sorting}>
            <option className={s.input} disabled value='0'>select option</option>
            <option className={s.input} value='discount'>discount</option>
            <option className={s.input} value='abc'>title</option>
            <option className={s.input} value='priceUp'>price: low to hight</option>
            <option className={s.input} value='priceDown'>price: hight to low</option>
          </select>
        </div>
        <div className={s.search_container}>
          <input onChange={searching} className={s.input} placeholder="search" type="text" name="word"/>
          <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
        <button onClick={mobileFilterBar} className={s.close_mob_btn}><FontAwesomeIcon icon={faXmark}/></button>
        <button onClick={mobileFilterBar} className={s.apply_filter_btn} >Apply</button>
      </form>
    </div>
    <div className={s.filter_mobile}><button onClick={mobileFilterBar} ><FontAwesomeIcon icon={faFilter} /></button></div>
  </>
  );
}