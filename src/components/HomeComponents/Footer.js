import { Link } from "react-router-dom";
import { Facebook,Twitter, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="hidden md:block bg-black text-primaryColor  h-full md:h-[50vh] py-auto py-8">
      <section className="flex  justify-center md:justify-between   px-10 py-5 pb-[60px] flex-wrap md:gap-[30px] items-center">
        <div className="  mb-[20px] md:mb-0 w-[80%] md:w-auto">
          <h1 className=" font-bold text-[32px] flex-[2]">
            <Link to="/" className="text-primaryColor ">
              Fairshop
            </Link>
          </h1>
          <p className="text-primaryColor ">Fair prices you can trust</p>
        </div>
        <ul className="font-bold mb-[20px] md:mb-0   w-[80%] md:w-auto  ">
          <li className=" text-xl mb-[20px]">Quick Links</li>
          <li className="text-base mb-[20px]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-base mb-[20px]">
            <Link to="/">About Us</Link>
          </li>
          <li className="text-base mb-[20px]">
            <Link to="/">Contact Us</Link>
          </li>
        </ul>

        <ul className="font-bold mb-[20px] md:mb-0  w-[80%] md:w-auto ">
          <li className=" text-xl mb-[20px]">Products</li>
          <li className="text-base mb-[20px]">
            <Link to="/">Phones</Link>
          </li>
          <li className="text-base mb-[20px]">
            <Link to="/">Laptops</Link>
          </li>

          <li className="text-base">
            <Link to="/">Accessories</Link>
          </li>
        </ul>

        <ul className="font-bold  w-[80%] md:w-auto  ">
          <li className=" text-xl mb-[20px]">Categories</li>
          <li className="text-base mb-[20px]">
            <Link to="/">Mobile Phones</Link>
          </li>
          <li className="text-base mb-[20px]">
            <Link to="/">Home & Entertainment</Link>
          </li>

          <li className="text-base mb-[20px]">
            <Link to="/">Gadgets</Link>
          </li>
        </ul>

        <ul className="font-bold ">
          <li className=" text-xl mb-[20px]">Let's Socialize</li>
          <div className="flex justify-between text-2xl ">
            <Link to="/">
              <Instagram size={22} />
            </Link>
            <Link to="/">
              <Twitter size={22} />
            </Link>
            <Link to="/">
              <Facebook size={22} />
            </Link>
          </div>
        </ul>
      </section>
      {/* <div className="flex w-full justify-center items-center h-[70px] font-bold">
        <Link to="/">&copy;2022 Fairshop</Link>
      </div> */}
    </footer>
  );
};

export default Footer;
