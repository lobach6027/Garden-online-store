import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import s from "./style.module.css";
import FilterSortBar from "../../components/FilterSortBar";
import { productsRemoveFilterAction } from "../../store/reducer/productsReducer";

export default function ProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(productsRemoveFilterAction())},[])
  const products = useSelector(({ products }) => {
    if (id === undefined) {
      return products;
    } else {
      return products.filter((item) => item.categoryId === +id);
    }
  });
  const category = useSelector(({ categories }) => categories.find((item) => +id === item.id));
 
  return (
      <div className={s.wrapper}>
        <h2 className={s.products_title}>
          {category === undefined ? "All Products" : category.title}
        </h2>
        <FilterSortBar />
        <div className={s.container}>
          {products
          .filter(({show})=>show)
          .map((item) => <ProductCard key={item.id} {...item} />)}
        </div>
      </div>
  );
}
