import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import s from './style.module.css'
import {Link} from 'react-router-dom'

export default function Bestsellers() {
  const products = useSelector((state) => state.products.list.filter(item=>item.discountPercentage));
  return (
    <div className={s.bestsellers_block}>
      <div className={s.bestsellers_title}>
        <h3>BESTSELLERS</h3>
          <Link to="/products/sale"><button>SALE</button></Link>
      </div>
      <div className={s.bestsellers_container}>{
        products
        .map(item=><ProductCard key={item.id} {...item}/>)
        .slice(0,5)}
      </div>
    </div>
  )
}
