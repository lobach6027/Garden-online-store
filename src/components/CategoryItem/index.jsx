import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
export default function CategoryItem({ id, title, image }) {
  return (
   <Link className={s.card_wrapper} to = {`/categories/${id}`}>
    <div>
        <img   src={`http://localhost:3333${image}`} alt={title} />
        <p className={s.category_title}><span className={s.title_text}>{title}</span></p>
    </div>
   </Link>
  )
}
