import { Link } from "react-router-dom";
import ctaImg from "../../assets/imgs/cta.png"
const CTA = () => {
  return (
    <section className="bg-[#FCA311] mb-40  md:mb-20 py-6 px-2 pl-4 xl:px-12  ">
      <h1 className="font-semibold uppercase  text-xl xl:text-2xl text-center md:text-left mb-[30px] md:mb-0">
        Sell to us
      </h1>
      <div className="w-full flex flex-col md:flex-row h-[65vh] md:h-[40vh] items-center gap-8 md:gap-0 xl:gap-4 ">
        <div className=" flex-[1.5] lg:flex-[2] 2xl:flex-[3] flex flex-col h-4/6 gap-[40px]">
          <p className=" text-lg xl:text-xl">
            Want to sell your Phone, Laptop, Accesories or <br className="hidden md:block"/>
            Gadgets?
          </p>
          <p className="">
            We buy at fair price and payments are made immediately
          </p>
        </div>
        <div className=" flex-[1.5] lg:flex-[2]">
          <img src={ctaImg} alt="cta" className="" />
        </div>
        <div className="flex-1 ">
          <Link to="/" className="bg-secondaryColor p-2 lg:p-4 rounded-2xl mb-10">
            Click here to sell
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
