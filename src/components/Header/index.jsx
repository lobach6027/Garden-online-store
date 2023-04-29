import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./style.module.css";
import CastNavLink from '../CastNavLink'

export default function Header() {
  const isActive = ({ isActive }) => (isActive ? s.active : "");
  const links = [
    {id:1, label:'Main Page', to: "/" },
    {id:2, label:'All products', to: "/products/all" },
    {id:3, label:'All sales', to:"/products/sale" }
  ];
  return (
    <header className={s.header}>
      <div className={s.catalog_container}>
        <div>
          <img src="/images/logo.png" alt="logo" /> 
        </div>
        <button>
          <Link to="/categories/all">Catalog</Link>
        </button>
      </div>
      <nav className={s.nav}>
        {links.map(({id,label, to})=><NavLink key={id} to={to} className={isActive}>{label}</NavLink>)}
      </nav>
      <div className={s.basket}>
        <CastNavLink/>
      </div>
    </header>
  );
}
