import { useEffect } from "react";
import CategoriesPage from "../../pages/CategoriesPage";
import MainPage from "../../pages/MainPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../Footer";
import Header from "../Header";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncLoadProducltsAction } from "../../store/asyncAction/products";
import ProductsPage from "../../pages/ProductsPage";
import SingleProductPage from "../../pages/SingleProductPage";
import BasketPage from "../../pages/BasketPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadCategoriesAction);
    dispatch(asyncLoadProducltsAction);
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
