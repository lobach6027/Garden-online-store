import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
  return (
   <Link className={s.wrapper_category} to = {`/categories/${id}`}>
    <div className={s.category_card} >
      <div className={s.catalog_container}>
        <img   src={`http://localhost:3333${image}`} alt={title} />
      </div>
      <p className={s.category_title}>{title}</p>
    </div>
   </Link>
  );
}
