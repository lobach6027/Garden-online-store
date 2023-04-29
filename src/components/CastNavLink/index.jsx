import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import s from './style.module.css'
export default function CastNavLink() {
    const basket = useSelector(({basket})=>basket);
    const basketCount = basket.reduce((prev,{count})=>prev+count,0)
  return (
    <button className={s.basket}>
        <NavLink className={s.link} to="/basket" >
                <img  src="/images/basket-icon.png" alt="basket" />
                <span  className={(basketCount)?(s.info):(s.hide)}> {basketCount}</span>
        </NavLink>
    </button>
    
  )
}
