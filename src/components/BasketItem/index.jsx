import React from "react";
import { useDispatch } from "react-redux";
import { basketDecrementAction, basketDeleteItemAction, basketIncrementAction,} from "../../store/reducer/basketReducer";
import s from './style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function BasketItem({id, image, price, discont_price, count, title,finalPrice,discountPercentage }) {
  const dispatch = useDispatch();

  return (
<>
  <div className={s.container}>
      <div className={s.img}>
        <img src={`http://localhost:3333${image}`} alt={title} />
      </div>
      <div className={s.info}>
        <p>{title}</p>
        <div className={s.price_block}>
          <span className={s.new_price}>{finalPrice}$</span>
          <span className={s.old_price}>{discont_price?`${price} $`:''}</span>
        </div>
        <div className={s.count_container}>
          <button onClick={() => dispatch(basketDecrementAction(id))}>-</button>
          <div>{count}</div>
          <button onClick={() => dispatch(basketIncrementAction(id))}>+</button>
        </div>
        <button className={s.delete_btn} onClick={() => dispatch(basketDeleteItemAction(id))}><FontAwesomeIcon icon={faXmark}/></button>
      </div>
  </div>
  <img src="/images/long-line.png" alt="line" />
</>
  );
}
