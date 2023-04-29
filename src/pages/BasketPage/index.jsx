import React from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import OrderCalculation from "../../components/OrderCalculation";
import EmptyBasketBlockCalculation from "../../components/EmptyBasketBlockCalculation";
import { basketClearAction } from "../../store/reducer/basketReducer";

export default function BasketPage() {
  const dispatch = useDispatch()
  const { basket, products } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find((elem) => elem.id === item.id);
    return { ...item, ...product };
  });
  return (
    <>
      {basket.length ? (
        <div className={s.wrapper}>
            <h2>Shopping cart</h2>
            <div className={s.link_to_store}>
              <Link to="/products/all"> Back to store <span><FontAwesomeIcon icon={faGreaterThan}/></span></Link>
            </div>
            <img src="/images/long-line.png" alt="line" />
            <div className={s.order_list}>
              <div className={s.order}>
                {data.map((item) => (
                  <BasketItem key={item.id} {...item} />
                ))}
              </div>
              <div className={s.calculation}>
                <OrderCalculation />
              </div>
            </div>
            <button onClick = {()=>{dispatch(basketClearAction())}}>Empty shopping cart</button>
        </div>
      ) : (
        <EmptyBasketBlockCalculation />
      )}
    </>
  );
}
