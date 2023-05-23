import React, { useState } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../store/slice/basketSlice";
import { toast } from "react-toastify";


export default function OrderCalculation() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  console.log(user)
  const products = useSelector((state) => state.products.list);
  const basket = useSelector((state) => state.basket.list);
  const data = basket.map((item) => {
    const product = products.find((elem) => elem.id === item.id);
    return { ...item, ...product}
  });
  
  
const totalPrice = data.reduce((prev,{count,finalPrice})=>prev+count*finalPrice,0) || 0
const totalCount = data.reduce((prev,{count})=>prev+count,0)|| 0
const priceWithoutDiscont = data.reduce((prev,{count,price})=>prev+count*price,0)|| 0

const onSubmitAction = (e) =>{
  e.preventDefault();
  const {usersData,firstname,address,city,zip} = e.target
  setUser({ userPhone: usersData.value, name:firstname.value, deliveryAddress:address.value, deliveryCity: city.value, zipCode:zip.value})
  asyncOrderSending(usersData.value, data);
  dispatch(clearBasket())
}

const asyncOrderSending = async ( phoneNumber, data) => {
  try {
      const response = await fetch('http://localhost:3333/sale/send', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userPhone: phoneNumber, order: data})});
       const resp = await response.json();
       
       if(resp.status ==='OK'){
        dispatch(clearBasket)
        toast.success('Your order is accepted', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });  
        console.log({userPhone: phoneNumber, order: data})
       }
     } catch(error) {
      toast.error('Failed  to accept order', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        console.log(error)
       } 
  }

return (
    <div>
      {basket.length ? (
        <div className={s.wrapper}>
          <h4>Your order</h4>
          <div className={s.details}>
            <div className={s.order_detail}>
              <span>Total number of items</span>
              <span> {totalCount} </span>
            </div>
            <div className={s.order_detail}>
              <span>Order price without discount</span>
              <span>${priceWithoutDiscont.toFixed(2)}</span>
            </div>
            <div className={s.order_detail}>
              <span>Sales Tax</span>
              <span>${(priceWithoutDiscont-totalPrice).toFixed(2)}</span>
            </div>
            <div className={s.order_detail}>
              <span>Subtotal</span>
              <span> ${totalPrice.toFixed(2)}</span>
            </div>
            <div className={s.order_detail}>
              <span >Shipping (Courier Delivery)</span>
              <span>${totalPrice>60? 0 : 9.99}</span>
            </div>
            <form className={s.discount_form}>
              <input type="text" placeholder="Discount code"/>
              <button className={s.apply_discount_btn}>Apply</button>
            </form>
          </div>
          <div className={s.total_amount}>
            <h4>Total amount</h4>
            <h4>${totalPrice>60? totalPrice.toFixed(2):(totalPrice+9.99).toFixed(2)}</h4>
          </div>
          <form onSubmit={onSubmitAction} className={s.order_confirm}>
            <label>Please enter your contact details:</label>
            <input type="tel" pattern="\+?[0-9\s\-\(\)]+" minLength={10} maxLength={12} placeholder="Phone number ..." name='usersData' required />
            <input type="text" name="firstname"placeholder="Full name ..." required/>
            <input type="text"  name="address" placeholder="Address ..." required/>
            <div className={s.city_info}>
            <input type="text" name="city" placeholder="City ..." required/>
            <input type="num" minLength={5} maxLength={6} name="zip" placeholder="Zip code ..." required></input>
            </div>
            <input  type="submit" value="Order" />
          </form>
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
