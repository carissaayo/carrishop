import { Link } from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/solid"

const Navbar = () => {
  return (
    <header className="w-full h-full flex bg-primaryColor justify-between items-center py-4 px-[5%] gap-[30px]">
      <h1 className="text-secondaryColor font-bold text-[32px] flex-[2]">
        <Link to="/" className="text-inherit">
          Fairshop
        </Link>
      </h1>
      <nav className="flex justify-between items-center flex-1 font-bold gap-[10px]">
        <Link to="/">Buy</Link>
        <Link to="/">Sell</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>
      <div className="flex justify-around items-center flex-1 ">
        <Link
          to="/"
          className="border-secondaryColor border-2 flex w-[100px] h-[40px] rounded-3xl items-center justify-center"
        >
          Login
        </Link>
        <Link
          to="/"
          className="flex w-[100px] h-[40px] rounded-3xl items-center justify-center bg-black text-white"
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
