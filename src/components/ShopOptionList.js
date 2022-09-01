import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import gamepad from "../assets/imgs/shop1.png";
import phoneImg from "../assets/imgs/shop2.png";
import tabletImg from "../assets/imgs/shop4.png";
import tvImg from "../assets/imgs/shop5.png";
import soundImg from "../assets/imgs/sound-system.png";
import laptopImg from "../assets/imgs/shop3.png";

const ShopOptionList = () => {
  return (
    <section className="shop-bg relative w-full  h-[400px]  mb-20 mx-auto md:mx-0 text-primaryColor flex flex-col items-center justify-center  gap-10 ">
      <div className="overlay z-10"></div>
      <h1 className="font-bold text-3xl z-20">Shop</h1>
      <section className="flex items-center justify-between  w-full">
        <div className="flex items-center justify-center xs:flex-1 cursor-pointer z-20">
          <ChevronLeft />
        </div>

        <section className="flex items-center  xs:flex-[14] justify-between gap-2 md:gap-0  z-20 w-[70%] sm:w-full">
          <div className="flex xs:items-center flex-col gap-4 ">
            <img src={gamepad} alt="" className="w-[30px] sm:w-[50px]  " />
            <p className="hidden xs:block xs:text-xs sm:text-base">
              Game consoles
            </p>
          </div>

          <div className="flex xs:items-center flex-col gap-4 ">
            <img
              src={phoneImg}
              alt=""
              className="w-[30px] sm:w-[50px] "
            />
            <p className="hidden xs:block xs:text-xs sm:text-base">
              Mobile Phones
            </p>
          </div>

          <div className="flex xs:items-center flex-col gap-4 ">
            <img
              src={tabletImg}
              alt=""
              className="w-[30px] sm:w-[50px] "
            />
            <p className="hidden xs:block xs:text-xs sm:text-base">Tablets</p>
          </div>

          <div className="flex xs:items-center flex-col gap-4 ">
            <img
              src={laptopImg}
              alt=""
              className="w-[30px] sm:w-[50px]"
            />
            <p className="hidden xs:block xs:text-xs sm:text-base">Laptops</p>
          </div>

          <div className="hidden md:flex items-center flex-col gap-4 ">
            <img src={tvImg} alt="" className="w-[30px] sm:w-[50px]" />
            <p className="hidden xs:block xs:text-xs sm:text-base">TV</p>
          </div>
        </section>
        <div className="flex items-center justify-center xs:flex-1 cursor-pointer z-20">
          <ChevronRight />
        </div>
      </section>
    </section>
  );
};

export default ShopOptionList;
