import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
  return (
   <Link className={s.wrapper} to = {`/categories/${id}`}>
    <div className={s.card} >
      <div className={s.container}>
        <img   src={`http://localhost:3333${image}`} alt={title} />
      </div>
      <p>{title}</p>
    </div>
   </Link>
  );
}
