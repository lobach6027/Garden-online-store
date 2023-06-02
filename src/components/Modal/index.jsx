import React from "react";
import s from "./style.module.css";

export default function Modal({children}) {
  return (
    <div className={s.modal_wrapper}>
      <div className={s.window}>{children}</div>
    </div>
  );
}
