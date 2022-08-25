import notebookImg from "../../assets/imgs/ultrabook.png";
import phoneImg from "../../assets/imgs/featured-phone.png"
import tabletImg from "../../assets/imgs/featured-tablet.png";
import soundImg from "../../assets/imgs/featured-sound.png";

import FeaturedProduct from "./FeaturedProduct";

const FeatureProductsList = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col mb-20 px-4 md:px-0 ">
      <h1 className="border-b-2 border-secondaryColor w-[max-content] pb-3 font-bold text-xl md:text-[32px] text-left md:text-center">
        Featured Products
      </h1>

      <div className=" w-[90%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-full flex md:border border-[#EEEEEE] rounded-3xl lg:rounded-l-3xl gap-0 lg:gap-10 items-center justify-between  2xl:h-[500px]  flex-wrap xl:flex-nowrap py-10 md:py-0">
        <FeaturedProduct
          type="Phone"
          name="Redmi Note 9c 6GB RAM 248GB Internal Memory "
          image={phoneImg}
          price="769,999"
          dealOfTheDay
          discount="30"
          discountPrice="700,000"
        />
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
      </div>
    </section>
  );
};

export default FeatureProductsList;
