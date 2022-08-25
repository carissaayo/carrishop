import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import gamepad from "../../assets/imgs/game pad.png";
import phoneImg from "../../assets/imgs/phone.png";
import tabletImg from "../../assets/imgs/tablet.png";
import tvImg from "../../assets/imgs/tv.png";
import soundImg from "../../assets/imgs/sound-system.png";
import laptopImg from "../../assets/imgs/laptops.png";

const OptionList = () => {
  return (
    <section className=" w-full bg-secondaryColor h-[150px] flex items-center justify-between gap-5 mb-20 mx-auto md:m-0">
      <div className="flex items-center justify-center flex-1 cursor-pointer">
        <ChevronLeft />
      </div>

      <section className="flex items-center  xs:flex-[14] justify-between gap-2 md:gap-0">
        <div className="flex xs:items-center flex-col gap-4 ">
          <img
            src={gamepad}
            alt=""
            className="w-[20px] xs:w-[30px] sm:w-[50px]  "
          />
          <p className="text-xs sm:text-base">Game consoles</p>
        </div>

        <div className="flex xs:items-center flex-col gap-4 ">
          <img
            src={phoneImg}
            alt=""
            className="w-[20px] xs:w-[30px] sm:w-[50px] "
          />
          <p className="text-xs sm:text-base">Mobile Phones</p>
        </div>

        <div className="flex xs:items-center flex-col gap-4 ">
          <img
            src={tabletImg}
            alt=""
            className="w-[20px] xs:w-[30px] sm:w-[50px] "
          />
          <p className="text-xs sm:text-base">Tablets</p>
        </div>

        <div className="flex xs:items-center flex-col gap-4 ">
          <img
            src={laptopImg}
            alt=""
            className="w-[20px] xs:w-[30px] sm:w-[50px]"
          />
          <p className="text-xs md:text-base">Laptops</p>
        </div>

        <div className="hidden md:flex items-center flex-col gap-4 ">
          <img src={tvImg} alt="" className=" sm:w-[50px]" />
          <p className="text-sm sm:text-base">TV</p>
        </div>

        <div className=" items-center flex-col gap-4 hidden md:flex  ">
          <img src={soundImg} alt="" className="w-[30px] sm:w-[50px]" />
          <p className=" sm:text-base">Sound System</p>
        </div>
      </section>

      <div className="flex items-center justify-center flex-1 cursor-pointer">
        <ChevronRight />
      </div>
    </section>
  );
};

export default OptionList;
