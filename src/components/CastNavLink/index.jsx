import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import s from './style.module.css'
export default function CastNavLink() {
    const basket = useSelector((state)=>state.basket.list);
    const basketCount = basket.reduce((prev,{count})=>prev+count,0)
  return (
    <button className={s.shopping_cart_block}>
      <NavLink to="/basket" >
        <img  src="/images/basket-icon.png" alt="basket" />
        <span  className={(basketCount)?(s.count_basket_item):(s.hide_empty_count)}> {basketCount}</span>
      </NavLink>
    </button>
  )
}
