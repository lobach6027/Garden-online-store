import React from "react";
import s from './style.module.css'
export default function SaleBanner() {
  return (
    <div className={s.sale_container}>
      <div className={s.sale_info}>
        <div>
            <h2>Sale</h2>
            <h3>New season</h3>
        </div>
        <button>Sale</button>
      </div>
      <div className={s.sale_img}>
        <img src="/images/sale-banner-img.png" alt="banner-flower" />
      </div>
    </div>
  );
}
