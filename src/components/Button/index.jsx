import React from "react";
import s from "./style.module.css";

export default function Button({ title }) {
  return <button className={s.btn}>{title}</button>;
}
