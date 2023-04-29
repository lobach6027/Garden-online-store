import React from "react";
import s from "./style.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { basketAddAction } from "../../store/reducer/basketReducer";

export default function SingleProductPage() {
  const { id } = useParams();
  const products = useSelector(({products}) => products);
  const product = products.find((item) => item.id === +id);
  const dispatch = useDispatch();
  return (
    <div>
      {product === undefined ? (
        <p>Please wait ...</p>
      ) : (
        <div className={s.wrapper}>
          <h3>{product.title}</h3>
          <div className={s.product_container}>
            <div className={s.image_container}>
              <img
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
              />
            </div>
            <div className={s.info}>
              <div className={s.price_block}>
                <span className={s.new_price}>{product.finalPrice} $</span>
                <span className={s.old_price}>{product.discont_price ? `${product.price} $` : ""}</span>
                <span className={s.discount}>{(product.discountPercentage !== 0)?(`${product.discountPercentage} %`):('')}</span>
              </div>
              <button onClick={() => dispatch(basketAddAction(+id))}>To cart</button>
              <img src="/images/line.png" alt="line" />
              <div className={s.descriprion_container}>
                <p>Description</p>
                <div>{product.description}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
