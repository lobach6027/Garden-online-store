import React, { useEffect } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import OrderCalculation from "../../components/OrderCalculation";
import EmptyBasketBlockCalculation from "../../components/EmptyBasketBlockCalculation";
import { clearBasket } from "../../store/slice/basketSlice";
import ScrollToTop from "../../components/ScrollToTop";

export default function BasketPage() {
  const replace = useNavigate()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const basket = useSelector((state) => state.basket.list);
  
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  
  const data = basket.map((item) => {
    const product = products.find((elem) => +elem.id === +item.id);
    return { ...item, ...product };
  });

 
 
  const clearBasketContainer = () => {
    const result = window.confirm("Are you sure you want to remove all items from your cart?");
    if (result) {
      dispatch(clearBasket());
    } else {
      replace('/basket');
    }
  };
  return (
    <>
      {basket.length ? (
        <div className={s.wrapper_basket}>
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
          <div className={s.clear_basket_block} ><button className={s.clear_basket_btn} onClick={()=>clearBasketContainer()}>Empty shopping cart <FontAwesomeIcon icon={faTrash} /></button></div>
        </div>
      ) : (
        <EmptyBasketBlockCalculation />
      )}
    </>
  );
}
