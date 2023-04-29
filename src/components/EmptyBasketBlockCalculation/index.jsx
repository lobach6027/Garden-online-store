import React from "react";
import { Link } from "react-router-dom";
import s from './style.module.css'
export default function EmptyBasketBlockCalculation() {
  return (
    <div className={s.wrapper}>
      <p>Basket is empty...</p>
      <Link to="/products/all">Go to product selection ➢</Link>
    </div>
  );
}
