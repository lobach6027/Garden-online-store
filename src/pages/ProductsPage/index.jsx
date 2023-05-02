import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import s from "./style.module.css";
import FilterSortBar from "../../components/FilterSortBar";
import { removeFilterProducts } from "../../store/slice/productsSlice";

export default function ProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(removeFilterProducts())},[])
  const products = useSelector(state=>{
    if (id === undefined){
      return state.products.list;
    } else {
      return state.products.list.filter((item) => item.categoryId === +id);
    }
  })
const location = useLocation()
console.log(location.pathname === '/products/sale')
  const category = useSelector((state) => state.categories.list.find((item) => +id === item.id));
 console.log(products)
  return (
<>{(location.pathname === '/products/sale')?(
<div className={s.wrapper}>
<div className={s.container}>
  {products
  .filter((item)=>item.discountPercentage)
  .map((item) => <ProductCard key={item.id} {...item} />)
}
</div>
</div>     
):(<div className={s.wrapper}>
        <h2 className={s.products_title}>
          {category === undefined ? "All Products" : category.title}
        </h2>
        <FilterSortBar />
        <div className={s.container}>
          {products
          .filter(({show,showPriceFilter})=>show && showPriceFilter)
          .map((item) => <ProductCard key={item.id} {...item} />)
        }
        </div>
      </div>)}</>
    
  )
}
/*<div className={s.wrapper}>
        <h2 className={s.products_title}>
          {category === undefined ? "All Products" : category.title}
        </h2>
        <FilterSortBar />
        <div className={s.container}>
          {products
          .filter(({show,showPriceFilter})=>show && showPriceFilter)
          .map((item) => <ProductCard key={item.id} {...item} />)
        }
        </div>
      </div>      */