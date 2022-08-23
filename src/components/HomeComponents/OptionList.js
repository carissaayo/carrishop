import {ChevronLeft,ChevronRight} from "react-bootstrap-icons";

import gamepad from "../../assets/imgs/game pad.png";
import phoneImg from "../../assets/imgs/phone.png";
import tabletImg from "../../assets/imgs/tablet.png";
import tvImg from "../../assets/imgs/tv.png";
import soundImg from "../../assets/imgs/sound-system.png";
import laptopImg from "../../assets/imgs/laptops.png";

const OptionList = () => {
  return (
    <section className="w-full bg-secondaryColor h-[150px] flex items-center justify-between gap-5 mb-20">
      <div className="flex items-center justify-center flex-1 cursor-pointer">
        <ChevronLeft />
      </div>

      <section className="flex items-center  flex-[14] justify-between">
        <div className="flex items-center flex-col gap-4">
          <img src={gamepad} alt="" className="w-[50px] " />
          <p>Game consoles</p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <img src={phoneImg} alt="" className="w-[50px] " />
          <p>Mobile Phones</p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <img src={tabletImg} alt="" className="w-[50px] " />
          <p>Tablets</p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <img src={laptopImg} alt="" className="w-[50px] " />
          <p>Laptops</p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <img src={tvImg} alt="" className="w-[50px] " />
          <p>TV</p>
        </div>

        <div className="flex items-center flex-col gap-4">
          <img src={soundImg} alt="" className="w-[50px] " />
          <p>Sound System</p>
        </div>
      </section>

      <div className="flex items-center justify-center flex-1 cursor-pointer">
        <ChevronRight />
      </div>
    </section>
  );
};

export default OptionList;
