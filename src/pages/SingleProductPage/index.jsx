import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../store/slice/basketSlice";
import ProductCard from "../../components/ProductCard";
import { toast } from "react-toastify";
import CardScroll from "../../components/CardScroll";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function SingleProductPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth)
  const { id } = useParams();
  const replace = useNavigate()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const basket =  useSelector((state) => state.basket.list);
  console.log(basket.find(item=>item.id===+id))
  const product = products.find((item) => item.id === +id);
  const sameCategoryProducts =(!products.find(item=>item.categoryId === id))? products.filter((item)=>+item.categoryId=== +product.categoryId): [];
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
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
        replace("/*")
        ) : (
          <div>
          <div className={s.breadcrumbs}>
          <Breadcrumbs title = {product.title}/>
          </div>
            <div className={s.wrapper}>
              <div className={s.image_container}>
                <img src={`http://localhost:3333${product.image}`} alt={product.title}/>
                <span className={((product.discountPercentage !== 0))?(s.discount):('')}>{(product.discountPercentage !== 0)?(` - ${product.discountPercentage} %`):('')}</span>
              </div>
              <div className={s.info_container}>
                <h3>{product.title}</h3>
                <div className={s.price_block}>
                  <span className={s.new_price}>{product.finalPrice.toFixed(2)} $</span>
                  <span className={s.old_price}>{product.discont_price ? `${product.price} $` : ""}</span>
                </div>
                {basket.find(item=>item.id===+id) ? ( <p className={s.addend_info}>✓ The product has already been added to the card!</p>) : (<p className={s.addend_info}> </p>)}
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
            {windowWidth>1300?(<CardScroll sameCategoryProducts ={sameCategoryProducts}/>):(<div className={s.addendum_products}>{sameCategoryProducts.map(item=><ProductCard key={item.id} {...item}/>)}</div>)}
          </div>
          )}
    </div>
      );
    }
