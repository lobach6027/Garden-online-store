import { useEffect } from "react";
import CategoriesPage from "../../pages/CategoriesPage";
import MainPage from "../../pages/MainPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../Footer";
import Header from "../Header";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductsPage from "../../pages/ProductsPage";
import SingleProductPage from "../../pages/SingleProductPage";
import BasketPage from "../../pages/BasketPage";
import { fetchProducts } from "../../store/slice/productsSlice";
import { fetchCategories } from "../../store/slice/categoriesSlice";
import './style.css'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Header />
      
      <Routes>
        <Route element={<CategoriesPage />} path="/categories/all" />
        <Route element={<ProductsPage />} path="/products/all" />
        <Route element={<ProductsPage />} path="/products/sale" />
        <Route element={<MainPage />} path="/" />
        <Route element={<NotFoundPage />} path="/*" />
        <Route element={<ProductsPage/>} path="/categories/:id"/>
        <Route element={<SingleProductPage/>} path="/product/:id" />
        <Route element={<BasketPage/>} path="/basket" />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
