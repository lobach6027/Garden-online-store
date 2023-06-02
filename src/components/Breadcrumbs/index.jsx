import React from "react";
import s from "./style.module.css";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { pathname } = useLocation();
 
  return (
      <div className={s.breadcrumb}>
        <Link to="/"> Home  </Link>  / <Link to="/categories/all"> Catalog </Link> /
        <Link to={pathname}>{props.title}</Link>
      </div>
  );
};

export default Breadcrumbs;
