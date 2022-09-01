import React from "react";
import Card from "./HomeComponents/Card";
import phoneImg from "../assets/imgs/featured-phone.png";
import FeaturedProduct from "./HomeComponents/FeaturedProduct";
import notebookImg from "../assets/imgs/ultrabook.png";

import tabletImg from "../assets/imgs/featured-tablet.png";
import soundImg from "../assets/imgs/featured-sound.png";

const ShopProductsList = () => {
  return (
    <section className="w-[100%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-full  flex lg:border-y border-[#EEEEEE] rounded-l-3xl gap-4 lg:gap-10 items-center justify-between flex-wrap xl:flex-nowrap pt-10 mx-auto md:mx-0 ">
      <FeaturedProduct
        type="Laptop"
        name="Notebook 360 Flip"
        image={notebookImg}
        price="769,999"
      />
      <FeaturedProduct
        type="Tablet"
        name="Ipad Revolve"
        image={tabletImg}
        price="769,999"
      />
      <FeaturedProduct
        type="Home & Entertainment"
        name="Sound System"
        image={soundImg}
        price="769,999"
        addedToCart
      />
     
    </section>
  );
};

export default ShopProductsList;
