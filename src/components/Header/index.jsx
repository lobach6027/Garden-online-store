import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import CastNavLink from '../CastNavLink'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const isActive = ({ isActive }) => (isActive ? s.active : "");
  
  const links = [
    {id:1, label:'HOME', to: "/" },
    {id:2, label:'ALL PRODUCTS', to: "/products/all" },
    {id:3, label:'SALE', to:"/products/sale" },
  ];
  const navigation = useRef()

  const navBtnHandler = ()=>{
    navigation.current.classList.toggle(s.nav_open)
  }
  const relocationHendler = ()=>{
    navigation.current.classList.toggle("")
  }
  return (
    <header className={s.header}>
      <div className={s.catalog_container}>
        <a className={s.logo_container} href="/">
          <img src="/images/logo.png" alt="logo" /> 
          <p>Green Cloud</p>
        </a>
        <NavLink onClick={relocationHendler} className={s.catalog_btn} to="/categories/all"><button>CATALOG</button></NavLink>
      </div>
      <nav ref={navigation} className={s.nav}>
      <button onClick={navBtnHandler}><FontAwesomeIcon icon={faXmark}/></button>
        {links.map(({id,label, to})=><NavLink onClick={relocationHendler} key={id} to={to} className={isActive}>{label}</NavLink>)}
      </nav>
      <button onClick={navBtnHandler} className={s.navBtn}><img src="/images/burger.png" alt="burgermenu" /></button>
      <div className={s.basket}>
        <CastNavLink/>
      </div>
    </header>
  );
}
