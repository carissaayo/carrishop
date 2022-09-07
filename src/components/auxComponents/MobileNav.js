import { Link } from "react-router-dom";
import { ShoppingCartIcon, MenuIcon } from "@heroicons/react/solid";

const MobileNav = ({ openMobile, setOpenMobile }) => {
  return (
    <div
      className={`bg-whiteBg w-[95%] mx-auto h-[50vh]  rounded-b-lg z-10 absolute top-20 left-2 transititon-translate duration-200 ease-linear ${
        openMobile ? "translate-y-[0%]" : "translate-y-[-200%]"
      }`}
    >
      <nav className="flex flex-col justify-between items-start  font-bold gap-[10px] text-base text-secondaryColor">
        <Link
          to="/"
          className="py-4 px-8 border-b border-mobileNavBorder w-full"
        >
          Buy
        </Link>
        <Link
          to="/"
          className="py-4 px-8 border-b w-full border-mobileNavBorder"
        >
          Sell
        </Link>
        <Link
          to="/"
          className="py-4 px-8 border-b w-full border-mobileNavBorder"
        >
          About
        </Link>
        <Link
          to="/"
          className="py-4 px-8 border-b w-full border-mobileNavBorder"
        >
          Contact
        </Link>
      </nav>
      <div className="flex justify-evenly items-center  py-[20px] ">
        <Link
          to="/login"
          className="border-secondaryColor border-2 flex w-[100px] h-[40px] rounded-3xl items-center justify-center text-base font-bold"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="flex w-[100px] h-[40px] rounded-3xl items-center justify-center bg-black text-whiteBg text-base font-bold"
        >
          Register
        </Link>
        <Link
          to="/"
          className="flex w-[40px] h-[40px] rounded-full items-center justify-center border-secondaryColor border-2"
        >
          <ShoppingCartIcon className="h-[20px] w-[20px]" />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav