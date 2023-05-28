import React from "react";
import s from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";

const CardScroll = ({ sameCategoryProducts }) => {
  const renderCards = sameCategoryProducts.map((item) => (
    <div key={item.id}>
      <ProductCard {...item} />
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={s.scroll_container}>
      <Slider {...settings}>{renderCards}</Slider>
    </div>
  );
};

export default CardScroll;
