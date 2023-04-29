import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard";
import s from "./style.module.css";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.categories);
  return (
    <div className={s.wrapper}>
      <h2>Categories</h2>
      <div className={s.categories_container}>
        {categories.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
