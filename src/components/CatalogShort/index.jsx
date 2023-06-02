import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from './style.module.css'
import CategoryItem from "../CategoryItem";
import Button from "../Button";

export default function CatalogShort() {
  const categories = useSelector((state) => state.categories.list).slice(0, 4);
  return (
    <div className={s.wrapper_favour_categories}>
      <div className={s.title_short_catalog}>
        <h3>OUR FAVOURITE COLLECTIONS</h3>
        <Link to="/categories/all"><Button title = "ALL CATEGORIES"/></Link>
      </div>
      <div className={s.categories_short_container}>
        {categories.map((item) => (
          <CategoryItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}
