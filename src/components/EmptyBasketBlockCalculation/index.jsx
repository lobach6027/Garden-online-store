import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
export default function EmptyBasketBlockCalculation() {
  return (
    <>
      <div className={s.empty_basket_container}>
        <img src="/images/empty-basket.png" alt="empty cart" />
        <p>Your cart is currently empty</p>
        <Link to="/products/all">
          <button><FontAwesomeIcon icon={faShoppingBasket} />  RETURN TO SHOP</button>
        </Link>
      </div>
    </>
  );
}
//
