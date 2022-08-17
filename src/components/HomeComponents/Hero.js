import { Link } from "react-router-dom";
import heroImg from "../../assets/imgs/hero.jpg"
const Hero = () => {
  return (
    <main className="w-full h-[1200px] md:h-[calc(100vh-100px)]  flex flex-col md:flex-row gap-14  xl:gap-0 items-start  xl:items-center justify-between px-[5%]  py-[100px] xl:py-0 ">
      <section className=" order-2 md:order-1">
        <ul className="bg-primaryColor w-[310px] h-[full] font-bold text-sm sm:text-base md:text-2xl mb-[100px]">
          <li className="pl-[40px] py-[10px] w-[300px] border-b border-optionBorderColor">
            Buy
          </li>
          <li className="pl-[40px] py-[10px] w-full border-b border-optionBorderColor">
            <Link to="/" className=" ">
              Phones
            </Link>
          </li>
          <li className="pl-[40px] py-[10px] border-b border-optionBorderColor">
            <Link to="/" className="">
              Laptops
            </Link>
          </li>
          <li className="pl-[40px] py-[10px] border-b border-optionBorderColor">
            <Link to="/" className="">
              Others
            </Link>
          </li>
        </ul>

        <ul className="bg-primaryColor w-[310px]  font-bold text-sm sm:text-base md:text-2xl ">
          <li className="pl-[40px] py-[10px] w-[300px] border-b border-optionBorderColor">
            Sell
          </li>
          <li className="pl-[40px] py-[10px] w-full border-b border-optionBorderColor">
            <Link to="/" className=" ">
              Click here to sell to us
            </Link>
          </li>
        </ul>
      </section>

      <section className="order-1 md:order-2">
        <img src={heroImg} alt="banner" className="h-[418px] " />
      </section>
    </main>
  );
};

export default Hero;
