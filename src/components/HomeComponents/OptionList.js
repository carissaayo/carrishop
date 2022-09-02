import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import gamepad from "../../assets/imgs/game pad.png";
import phoneImg from "../../assets/imgs/phone.png";
import tabletImg from "../../assets/imgs/tablet.png";
import tvImg from "../../assets/imgs/tv.png";
import soundImg from "../../assets/imgs/sound-system.png";
import laptopImg from "../../assets/imgs/laptops.png";

const OptionList = () => {
  return (
    <section className=" w-full bg-secondaryColor h-full lg:h-[150px] flex items-center justify-between gap-5 mb-20 mx-auto md:mx-0">
      <div className="hidden lg:flex items-center justify-center flex-1 cursor-pointer">
        <ChevronLeft />
      </div>

      <section className="flex items-center xs:flex-[14] justify-center lg:justify-between gap-2  flex-wrap lg:flex-nowrap py-10 lg:py-0">
        <div className="flex items-center flex-col gap-4  w-[40%] mb-10 lg:mb-0">
          <img
            src={gamepad}
            alt=""
            className="w-[50%] md:w-[30%] lg:w-[50px]   "
          />
          <p className="text-base">Game consoles</p>
        </div>

        <div className="flex items-center flex-col gap-4 w-[40%] mb-10 lg:mb-0">
          <img
            src={phoneImg}
            alt=""
            className="w-[50%] md:w-[30%] lg:w-[50px] "
          />
          <p className="text-base">Mobile Phones</p>
        </div>

        <div className="flex items-center flex-col gap-4 w-[40%] mb-10 lg:mb-0">
          <img
            src={tabletImg}
            alt=""
            className="w-[50%] md:w-[30%] lg:w-[50px] "
          />
          <p className="text-base">Tablets</p>
        </div>

        <div className="flex items-center flex-col gap-4 w-[40%] mb-10 lg:mb-0">
          <img
            src={laptopImg}
            alt=""
            className="w-[50%] md:w-[30%] lg:w-[50px]"
          />
          <p className="text-base">Laptops</p>
        </div>

        <div className="flex items-center flex-col gap-4 w-[40%] mb-10 lg:mb-0">
          <img src={tvImg} alt="" className="w-[50%] md:w-[30%] lg:w-[50px]" />
          <p className="text-base">TV</p>
        </div>

        <div className=" items-center flex flex-col gap-4 w-[40%]  mb-10 lg:mb-0">
          <img
            src={soundImg}
            alt=""
            className="w-[50%] md:w-[30%] lg:w-[50px]"
          />
          <p className=" text-base">Sound System</p>
        </div>
      </section>

      <div className="hidden lg:flex items-center justify-center flex-1 cursor-pointer">
        <ChevronRight />
      </div>
    </section>
  );
};

export default OptionList;
