import React from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import OrderCalculation from "../../components/OrderCalculation";
import EmptyBasketBlockCalculation from "../../components/EmptyBasketBlockCalculation";
import { clearBasket } from "../../store/slice/basketSlice";
import ScrollToTop from "../../components/ScrollToTop";

export default function BasketPage() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const basket = useSelector((state) => state.basket.list);
  const data = basket.map((item) => {
    const product = products.find((elem) => +elem.id === +item.id);
    return { ...item, ...product };
  });
  return (
    <>
      {basket.length ? (
        <div className={s.wrapper}>
          <div className={s.basket_title}>
            <h2>Shopping cart</h2>
            <div className={s.link_to_store}>
              <Link to="/products/all">Back to store
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
              </Link>
            </div>
          </div>

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
          <ScrollToTop/>
          <div className={s.clear_basket_block} ><button className={s.clear_basket_btn} onClick={() => {dispatch(clearBasket())}}>Empty shopping cart <FontAwesomeIcon icon={faTrash} /></button></div>
        </div>
      ) : (
        <EmptyBasketBlockCalculation />
      )}
    </>
  );
}
