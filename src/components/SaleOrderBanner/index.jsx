import React, { useState } from "react";
import s from "./style.module.css";

export default function SaleOrderBanner() {
const [phone, setPhone] = useState('');
const writeToLocalStorage = (data) =>localStorage.setItem('userPhone',JSON.stringify(data))
  const onSubmitAction = (e) =>{
    e.preventDefault();
    const {usersData} = e.target
    setPhone(usersData.value)
    writeToLocalStorage(usersData.value)
    asyncSending(phone);
    usersData.value = ''
  }
  
console.log(JSON.parse(localStorage.getItem('userPhone')))

  const asyncSending = async ( userData) => {
    try {
        const response = await fetch('http://localhost:3333/sale/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userPhone: userData})});
         const data = await response.json();
         
         if(data.status ==='OK'){
          console.log(data)
          
         }
       } catch(error) {
          console.log(error)
         } 
    }

  return (
    <div className={s.get_discoutn_container}>
      {(JSON.parse(localStorage.getItem('userPhone')))?(
        <div className={s.succes_discount}>
          <h2>Congratulations!</h2>
          <p>The discount coupon has been sent to your phone.</p>
          <p>Happy shopping!</p>
        </div>
      ):(<div className={s.order_block}>
        <div>
          <h2>5% off on the first order</h2>
          
        </div>
        <form onSubmit={onSubmitAction} className={s.discount_form}>
          <input type="tel" placeholder="+49" name='usersData'/>
          <input type="submit" value="Get a discount" />
        </form>
      </div>)}
    </div>
  );
}
