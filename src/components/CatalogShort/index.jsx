import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCard from "../CategoryCard";
import s from './style.module.css'

export default function CatalogShort() {
  const categories = useSelector((state) => state.categories).slice(0, 4);
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <h3>Catalog</h3>
        <button>
          <Link to="/categories/all">All categories</Link>
        </button>
      </div>
      <div className={s.categories_container}>
        {categories.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
