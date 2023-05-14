import React from "react";
import SaleBanner from "../../components/SaleBanner";
import SaleOrderBanner from "../../components/SaleOrderBanner";
import CatalogShort from "../../components/CatalogShort";
import Guarantee from "../../components/Guarantee";
import Bestsellers from "../../components/Bestsellers";
import ScrollToTop from "../../components/ScrollToTop";
export default function MainPage() {
  return (
    <div>
      <SaleBanner />
      <Guarantee />
      <CatalogShort />
      <SaleOrderBanner />
      <Bestsellers />
      <ScrollToTop />
    </div>
  );
}
