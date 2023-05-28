import React from "react";
import { useDispatch } from "react-redux";
import s from './style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { decrementBasket, deleteBasketItem, incrementBasket } from "../../store/slice/basketSlice";
import { Link } from "react-router-dom";

export default function BasketItem({id, image, price, discont_price, count, title,finalPrice,discountPercentage }) {
  const dispatch = useDispatch();

  return (
    <div className={s.basket_item_container}>
      <Link to = {`/product/${id}`}>
        <div className={s.link_block}>
          <div className={(discountPercentage)?(s.discount_label):(s.hide_discount)}> - {discountPercentage} %</div>
          <img src={`http://localhost:3333${image}`} alt={title} />
        </div>
        <div className={s.product_info}><p>{title}</p></div>
      </Link>
      <div className={s.count_container}>
        <button className={s.count_btn} onClick={() => dispatch(decrementBasket(id))}>-</button>
        <div>{count}</div>
        <button className={s.count_btn} onClick={() => dispatch(incrementBasket(id))}>+</button>
      </div>
      <div className={s.price_block}>
        <span className={s.new_price}>${finalPrice?`${finalPrice.toFixed(2)}`:''}</span>
        <span className={s.old_price}>{discont_price?`$${price.toFixed(2)}`:''}</span>
      </div>
      <button className={s.delete_btn} onClick={() => dispatch(deleteBasketItem(id))}><FontAwesomeIcon icon={faTrashAlt}/></button>
    </div>
  );
}
