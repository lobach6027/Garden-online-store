import React, { useState, useEffect } from "react";
import s from "./style.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      scrolled >= 200 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <img
        onClick={scrollToTop}
        className={visible === true ? s.back_to_top_btn : s.hide_button}
        src="/images/arrow.png"
        alt="arrow"
      />
    </div>
  );
}
