import React from "react";
import s from "./style.module.css";

export default function SaleOrderBanner() {
  return (
    <div className={s.container}>
      <div className={s.img}>
        <img src="/images/sale-order-img.png" alt="sale order img" />
      </div>
      <div className={s.order_block}>
        <div>
          <h2>5% off</h2>
          <h4>on the first order</h4>
        </div>
        <form className={s.form}>
          <input type="tel" placeholder="+49" />
          <input type="submit" value="Get a discount" />
        </form>
      </div>
    </div>
  );
}
