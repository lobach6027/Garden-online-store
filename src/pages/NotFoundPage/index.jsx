import React from "react";
import s from './style.module.css'
export default function NotFoundPage() {
  return (
    <div className={s.banner}>
      <img src="/images/page-not-found.png" alt="Page not found" />
    </div>
  );
}
