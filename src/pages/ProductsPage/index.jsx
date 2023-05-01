import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

  const category = useSelector((state) => state.categories.list.find((item) => +id === item.id));
 
  return (
      <div className={s.wrapper}>
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
      </div>
  );
}
