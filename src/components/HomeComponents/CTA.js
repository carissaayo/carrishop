import { Link } from "react-router-dom";
import ctaImg from "../../assets/imgs/cta.png"
const CTA = () => {
  return (
    <section className="bg-[#FCA311] w-full flex h-[40vh] px-12 items-center gap-4">
      <div className="flex-[3] flex flex-col h-4/6 gap-[40px]">
        <h1 className="font-semibold uppercase text-2xl ">Sell to us</h1>
        <p className="text-xl">
          Want to sell your Phone, Laptop, Accesories or <br />
          Gadgets?
        </p>
        <p className="">
          We buy at fair price and payments are made immediately
        </p>
      </div>
      <div className="flex-[2]">
        <img src={ctaImg} alt="cta" className="" />
      </div>
      <div className="flex-1 ">
        <Link to="/" className="bg-secondaryColor p-4 rounded-2xl ">
          Click here to sell
        </Link>
      </div>
    </section>
  );
};

export default CTA;
