import React from "react";
import s from "./style.module.css";
export default function Guarantee() {
  const advanteges = [
    {
      id: 1,
      imgage: "/images/free-shipping.png",
      text: "FREE SHIPPING OVER $60",
    },
    {
      id: 2,
      imgage: "/images/sosial-resp-business.png",
      text: "SOCIALLY RESPONSIBLE BUSINESS",
    },
    {
      id: 3,
      imgage: "/images/sustanible.png",
      text: "SUSTAINABLE PACKAGING",
    },
  ];
  return (
    <div className={s.wrapper_guarantee}>
      <h3>WHY SHOP WITH US ?</h3>
      <div className={s.container_guarantee}>
        {advanteges.map((item)=><div className={s.card_guarantee} key={item.id}>
            <img src={item.imgage} alt={item.text} />
            <p>{item.text}</p>
            </div>)}
      </div>
    </div>
  );
}
