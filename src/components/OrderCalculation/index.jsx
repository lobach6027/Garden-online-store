import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export default function OrderCalculation() {
  const products = useSelector((state) => state.products.list);
  const basket = useSelector((state) => state.basket.list);
  const data = basket.map((item) => {
    const product = products.find((elem) => elem.id === item.id);
    return { ...item, ...product}
  });
  console.log(data)
  
const totalPrice = data.reduce((prev,{count,finalPrice})=>prev+count*finalPrice,0) || 0
const totalCount = data.reduce((prev,{count})=>prev+count,0)|| 0
const priceWithoutDiscont = data.reduce((prev,{count,price})=>prev+count*price,0)|| 0
  console.log(totalPrice)
  console.log(totalCount)
  console.log(priceWithoutDiscont)

return (
    <div>
      {basket.length ? (
        <div className={s.wrapper}>
          <h4>Your order</h4>
          <div className={s.details}>
            <div className={s.order_detail}>
              <span>Total number of items</span>
              <span> {totalCount} </span>
            </div>
            <div className={s.order_detail}>
              <span>Order price without discount</span>
              <span>${priceWithoutDiscont.toFixed(2)}</span>
            </div>
            <div className={s.order_detail}>
              <span>Sales Tax</span>
              <span>${(priceWithoutDiscont-totalPrice).toFixed(2)}</span>
            </div>
            <div className={s.order_detail}>
              <span>Subtotal</span>
              <span> ${totalPrice.toFixed(2)}</span>
            </div>
            <div className={s.order_detail}>
              <span >Shipping (Courier Delivery)</span>
              <span>${totalPrice>60? 0 : 9.99}</span>
            </div>
          </div>
          <div className={s.total_amount}>
            <h4>Total amount</h4>
            <h4>${totalPrice>60? totalPrice.toFixed(2):totalPrice+9.99}</h4>
          </div>
          <form className={s.order_confirm}>
            <p>Enter your phone number</p>
            <input type="tel" placeholder="+49" required />
            <input type="submit" value="Order" />
          </form>
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
