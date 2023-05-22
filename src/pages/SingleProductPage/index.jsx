import React, { useEffect } from "react";
import s from "./style.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../store/slice/basketSlice";
import ProductCard from "../../components/ProductCard";
import { toast } from "react-toastify";

export default function SingleProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const product = products.find((item) => item.id === +id);
  const sameCategoryProducts = products.filter((item)=>+item.categoryId=== +product.categoryId)
  
  useEffect(()=>{
    window.scroll(0,0)
  },[id])
  const addToCartAction = (id) =>{
    toast.success('Successfully added to cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  dispatch(addToBasket(+id))
}
  
  return (  
    <div>
      {product === undefined ? (
        <p>Please wait ...</p>
        ) : (
          <>
          <div className={s.wrapper}>
          <div className={s.image_container}>
            <img src={`http://localhost:3333${product.image}`} alt={product.title}/>
            <span className={((product.discountPercentage !== 0))?(s.discount):('')}>{(product.discountPercentage !== 0)?(` - ${product.discountPercentage} %`):('')}</span>
          </div>
          <div className={s.info_container}>
            <h3>{product.title}</h3>
            <div className={s.price_block}>
              <span className={s.new_price}>{product.finalPrice} $</span>
              <span className={s.old_price}>{product.discont_price ? `${product.price} $` : ""}</span>
            </div>
            <div className={s.descriprion_container}>{product.description}</div>
            <button onClick = {()=>addToCartAction(id)}>Add to cart</button>
          </div>
        </div>
        <div className={s.guarantee}>
          <div className={s.guarantee_shipping}>
            <p>Free shipping from $60</p>
            <img src="/images/guarantee-shipping.png" alt="" />
          </div>
          <div className={s.guarantee_days}>
            <img src="/images/guarantee-days.png" alt="guarantee" />
            <div>
            <p>30 day health guarantee</p>
            <p>For all our plants</p>
            </div>
          </div>
        </div>
        <h4 className={s.title_addendum_products} >You may also like</h4>
        <div className={s.addendum_products}>{sameCategoryProducts.map(item=><ProductCard key={item.id} {...item}/>)}</div>
          </>
          )}

    </div>
      );
    }
