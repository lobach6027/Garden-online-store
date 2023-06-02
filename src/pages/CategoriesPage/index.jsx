import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard";
import s from "./style.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.categories.list);
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  
  return (
    <div className={s.categories_wrapper}>
      <h2>Categories</h2>
      <div className={s.categories_container}>
        {categories.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
