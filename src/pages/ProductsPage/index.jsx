import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import s from "./style.module.css";
import FilterSortBar from "../../components/FilterSortBar";
import { removeFilterProducts } from "../../store/slice/productsSlice";
import ScrollToTop from "../../components/ScrollToTop";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function ProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const replace = useNavigate()

  useEffect(() => {
    dispatch(removeFilterProducts());
  }, []);

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const categories = useSelector((state) => state.categories.list);
  const category = useSelector((state) =>
  state.categories.list.find((item) => +id === item.id)
);
  const products = useSelector((state) => {
    if (id === undefined) {
      return state.products.list;
    }else if(!categories.find(item=>item.id === +id)){
      replace("/*")
    return []
    } else {
      return state.products.list.filter((item) => item.categoryId === +id);
    }
  });
 const readyToShow = products.filter(({showPriceFilter,showDiscount,showSearchWorld}) => showPriceFilter&&showDiscount&&showSearchWorld)
  
  return (
    <>
      {location.pathname === "/products/sale"?
       (<div className={s.wrapper}>
          <h2 className={s.products_title}>Products with sale</h2>
          <Breadcrumbs title = "Sale"/>
          <FilterSortBar />
          <div className={s.container}>
            {(readyToShow.length)?(products
              .filter((item) => item.discountPercentage)
              .filter(({showPriceFilter,showDiscount,showSearchWorld}) => showPriceFilter&&showDiscount&&showSearchWorld)
              .map((item) => (
                <ProductCard key={item.id} {...item} />
              ))):(<p className={s.empty_products_container}>Sorry, no matches...</p>)}
          </div>
          <ScrollToTop />
        </div>
      ) : (
        <div className={s.wrapper}>
          <h2 className={s.products_title}>
            {category === undefined ? "All Products" : category.title}
          </h2>
          <Breadcrumbs title = {category === undefined ? "All Products" : category.title}/>
          <FilterSortBar/>
          <div className={s.container}>
            {(readyToShow.length)?(products
              .filter(({showPriceFilter,showDiscount,showSearchWorld}) => showPriceFilter&&showDiscount&&showSearchWorld)
              .map((item) => (
                <ProductCard key={item.id} {...item} />
              ))):(<p className={s.empty_products_container}>Sorry, no matches...</p>)}
          </div>
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

