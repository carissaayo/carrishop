import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-primaryColor  h-full md:h-[50vh]  py-8">
      <section className="flex justify-between border-b border-footerborderColor  px-[5%] py-5 pb-[60px] flex-wrap md:gap-[30px]">
        <div className="flex flex-col justify-between mb-[20px] md:mb-0 w-[40%] sm:w-auto">
          <h1 className="text-secondaryColor font-bold text-[32px] flex-[2]">
            <Link to="/" className="text-inherit">
              Fairshop
            </Link>
          </h1>
          <div className="flex justify-between text-2xl">
            <Link to="/">
              <i class="bi bi-facebook"></i>
            </Link>
            <Link to="/">
              <i class="bi bi-twitter" width="32"></i>
            </Link>
            <Link to="/">
              <i class="bi bi-instagram" width="32"></i>
            </Link>
          </div>
        </div>
        <ul className="font-bold mb-[20px] md:mb-0 w-[40%]  md:w-[20%] lg:w-auto   ">
          <li className=" text-2xl mb-[20px]">Services</li>
          <li className="text-lg mb-[20px]">
            <Link to="/">Buy From Us</Link>
          </li>
          <li className="text-lg mb-[20px]">
            <Link to="/">Sell To Us</Link>
          </li>
        </ul>

        <ul className="font-bold mb-[20px] md:mb-0 w-[40%]  md:w-[20%] lg:w-auto ">
          <li className=" text-2xl mb-[20px]">Company</li>
          <li className="text-lg mb-[20px]">
            <Link to="/">About Us</Link>
          </li>
          <li className="text-lg mb-[20px]">
            <Link to="/">Careers</Link>
          </li>

          <li className="text-lg">
            <Link to="/">FAQs</Link>
          </li>
        </ul>

        <ul className="font-bold w-[40%]  md:w-[20%] lg:w-auto  ">
          <li className=" text-2xl mb-[20px]">Legal</li>
          <li className="text-lg mb-[20px]">
            <Link to="/">Terms</Link>
          </li>
          <li className="text-lg mb-[20px]">
            <Link to="/">Privacy Policy</Link>
          </li>

          <li className="text-lg mb-[20px]">
            <Link to="/">Cookies Policy</Link>
          </li>
        </ul>

        <ul className="font-bold ">
          <li className=" text-2xl mb-[20px]">Contact</li>
          <li className="text-lg ">
            <Link to="/">hello@fairshop.com</Link>
          </li>
        </ul>
      </section>
      <div className="flex w-full justify-center items-center h-[70px] font-bold">
        <Link to="/">&copy;2022 Fairshop</Link>
      </div>
    </footer>
  );
};

export default Footer;
