import { Link } from "react-router-dom";
import { HomeIcon} from "@heroicons/react/solid";
import { HomeIcon as onHomeIcon,ShoppingBagIcon } from "@heroicons/react/outline";
import { Headset,InfoCircle,InfoCircleFill,House,HouseFill } from "react-bootstrap-icons";
import heroImg from "../../assets/imgs/hero.jpg"
const Hero = () => {
  return (
    <main className="w-full h-full  flex pl-1 pr-8  items-start justify-between gap-[45px] mb-12">
      <section className="flex-1 flex flex-col gap-[70px] h-full">
        <div className="flex flex-col gap-2   h-full items-center">
          <HomeIcon className="w-10 " />
          <p>Home</p>
        </div>
        <div className="flex flex-col gap-2  w-full h-full items-center">
          <ShoppingBagIcon className="w-10" />
          <p>Explore</p>
        </div>
        <div className="flex flex-col gap-2  w-full h-full items-center">
          <InfoCircle className="w-10" size={56} />
          <p>About Us</p>
        </div>
        <div className="flex flex-col gap-2  w-full h-full items-center">
          <Headset className="w-10" size={56} />
          <p className="">Contact Us</p>
        </div>
      </section>

      <section className="flex-[11]">
        <img src={heroImg} alt="banner" className="h-[530px] w-full " />
      </section>
    </main>
  );
};

export default Hero;
