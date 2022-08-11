import { Link } from "react-router-dom";
import {ShoppingCartIcon,MenuIcon} from "@heroicons/react/solid"

const Navbar = () => {
  return (
    <header className="w-full h-[100px] flex bg-primaryColor justify-between items-center py-4 px-[4%] sm:px-[3%] md:px-[5%] gap-[30px]">
      <h1 className="text-secondaryColor font-bold text-[32px]  flex-[9]  md:flex-1 lg:flex-[4] xl:flex-[2]">
        <Link to="/" className="text-inherit">
          Fairshop
        </Link>
      </h1>
      <div className="text-sm text-secondaryColor flex-1 block md:hidden">
        <MenuIcon className="w-9 h-9 cursor-pointer" />
      </div>

      <nav className="hidden md:flex justify-between items-center md:flex-1 lg:flex-[3] xl:flex-1 font-bold gap-[10px] text-sm sm:text-base">
        <Link to="/">Buy</Link>
        <Link to="/">Sell</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>
      <div className="hidden md:flex justify-around items-center  md:flex-1 lg:flex-[3] xl:flex-1 ">
        <Link
          to="/"
          className="border-secondaryColor border-2 flex w-[80px] lg:w-[100px] h-[40px] rounded-3xl items-center justify-center text-sm lg:text-base font-bold"
        >
          Login
        </Link>
        <Link
          to="/"
          className="flex w-[80px] lg:w-[100px] h-[40px] rounded-3xl items-center justify-center bg-black text-whiteBg  text-sm lg:text-base font-bold"
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
    </header>
  );
};

export default Navbar;
