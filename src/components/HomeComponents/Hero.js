import { Link } from "react-router-dom";
import heroImg from "../../assets/imgs/hero.jpg"
const Hero = () => {
  return (
    <main className="w-full h-[calc(100vh-80px)] flex items-center justify-between px-[5%]">
      <section className=" ">
        <ul className="bg-primaryColor w-[400px] h-[full] font-bold text-2xl mb-[100px]">
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

        <ul className="bg-primaryColor w-[400px] h-full font-bold text-2xl">
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

      <section>
        <img src={heroImg} alt="banner" className="h-[418px]" />
      </section>
    </main>
  );
};

export default Hero;
