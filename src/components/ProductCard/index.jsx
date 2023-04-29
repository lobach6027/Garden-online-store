import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { basketAddAction } from "../../store/reducer/basketReducer";

export default function ProductCard({id, title,price,image,discont_price,finalPrice,discountPercentage
}) {
const link = `/product/${id}`;
const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <button onClick = {()=>dispatch(basketAddAction(+id))}>Add to Cart</button>
      <Link to={link}>
        <div className={s.image_container}>
          <img className={s.image}  src={`http://localhost:3333${image}`}  alt={title}  />
        </div>
        <div className={s.info_block} >
          <div className={s.price_block}>
            <span className={s.new_price}>{finalPrice} $</span>
            <span className={s.old_price}>{discont_price?`${price} $`:''}</span>
            <span className={s.discount}>{(discountPercentage!==0)?(`${discountPercentage} %`):('')}</span>
          </div>
          <p className={s.title_product}>{title}</p>
        </div>
      </Link>
    </div>
  );
}
