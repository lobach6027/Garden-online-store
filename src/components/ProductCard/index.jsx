import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/slice/basketSlice";
import { toast } from "react-toastify";

export default function ProductCard({id, title,price,image,discont_price,finalPrice,discountPercentage
}) {
const link = `/product/${id}`;
const dispatch = useDispatch();
const addToCartAction = (id)=>{
  dispatch(addToBasket(+id))
  toast.success('Successfully added to cart', {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
  return (
    <div className={s.wrapper_card}>
      <div className={(discountPercentage?(s.sale_label):(s.hide_sale_label))}>{(discountPercentage!==0)?(`- ${discountPercentage} %  `):('')}</div>
      <button className={s.basket_btn} onClick={()=>addToCartAction(id)}>Add to Cart</button>
      <NavLink className={s.content} to={link}>
        <div className={s.img_block}>
          <img className={s.image}  src={`http://localhost:3333${image}`}  alt={title}  />
        </div>
        <div className={s.card_info_block} >
          <p className={s.product_title}>{title}</p>
          <div className={s.price_block}>
            <span className={s.new_price}><span className={s.price_title}></span> ${finalPrice.toFixed(2)}</span>
            <span className={s.old_price}>{discont_price?`$${price.toFixed(2)}`:''}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
