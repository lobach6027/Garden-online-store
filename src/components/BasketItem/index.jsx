import React from "react";
import { useDispatch } from "react-redux";
import s from './style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { decrementBasket, deleteBasketItem, incrementBasket } from "../../store/slice/basketSlice";
import { Link } from "react-router-dom";

export default function BasketItem({id, image, price, discont_price, count, title,finalPrice,discountPercentage }) {
  const dispatch = useDispatch();

  return (
<>
  <div className={s.container}>
      <div className={s.img}>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </div>
      <div className={s.info}>
       <Link to = {`/product/${id}`}> <p>{title}</p></Link>
        <div className={s.price_block}>
          <span className={s.new_price}>{finalPrice}$</span>
          <span className={s.old_price}>{discont_price?`${price} $`:''}</span>
        </div>
        <div className={s.count_container}>
          <button onClick={() => dispatch(decrementBasket(id))}>-</button>
          <div>{count}</div>
          <button onClick={() => dispatch(incrementBasket(id))}>+</button>
        </div>
        <button className={s.delete_btn} onClick={() => dispatch(deleteBasketItem(id))}><FontAwesomeIcon icon={faXmark}/></button>
      </div>
  </div>
  <img src="/images/long-line.png" alt="line" />
</>
  );
}
