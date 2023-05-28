import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className={s.banner}>
      <img src="/images/404(1).jpg" alt="Page not found" />
      <div className={s.info}>
        <div>
          <h2>404</h2>
          <p>page not found</p>
        </div>
        <Link to= '/'><button className={s.btn}>BACK TO STORE</button></Link>
      </div>
    </div>
  );
}
