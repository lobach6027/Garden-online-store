import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export default function OrderCalculation() {
  const { basket, products } = useSelector((state) => state);
  const data = basket.map((item) => {
    const product = products.find((elem) => elem.id === item.id);
    return { ...item, ...product}
  });
  const totalPrice = data.reduce((prev,{count,finalPrice})=>prev+count*finalPrice,0)

  return (
    <div>
      {basket.length ? (
        <form className={s.wrapper}>
          <p>Order details</p>
          <div>
            <span>Total: </span>
            <span>{totalPrice} $</span>
          </div>
          <input type="tel" placeholder="Phone number" required />
          <input type="submit" value="Order" />
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
