import React from "react";
import s from './style.module.css'
import { Link } from "react-router-dom";
import Button from "../Button";
export default function SaleBanner() {
  return (
    <div className={s.sale_banner}>
      <div className={s.addition_info}>
        <h3>For the true plant lovers</h3>
        <p>Welcome to our online shop full of the plants and accessouries you'd love to have at home.</p>
        <p>Plants are a great addition to any home. They add color, life, and even help improve air quality! </p>
      </div>
      <Link to = '/products/sale'><Button title = 'SALE'/></Link>
    </div>
  );
}
