import { Link, useNavigate } from "react-router-dom";
import {  MenuIcon, XIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon,UserIcon } from "@heroicons/react/outline";
import {  useSelector } from "react-redux";
import { useState ,useEffect} from "react";
import logo from "../../assets/imgs/new-logo.png"
import Search from "./Search";

const Navbar = ({ openMobile, setOpenMobile }) => {
const [openAvatar, setOpenAvatar] = useState(false)
  const {  user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const handleSignOut=()=>{
    navigate("/logout");
  }
 
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
     const onScroll = () => {
       if (window.scrollY > 120) {
    
         setScrolled(true);
       } else {
         setScrolled(false);
       }
     };

     window.addEventListener("scroll", onScroll);

     return () => window.removeEventListener("scroll", onScroll);
   }, []);

  return (
    <header
      className={`${
        scrolled ? " top-0 transition-[all .2s linear] z-40 " : ""
      } sticky w-full h-[120px] sm:h-[150px] flex bg-primaryColor justify-between items-center  px-2 sm:px-10 2xl:pl-4 gap-4 sm:gap-8 md:gap-4 2xl:gap-10 z-30`}
    >
      <div className="flex flex-col gap-2 flex-[0.8] sm:fex-1 items-center">
        <MenuIcon className="w-10 " />
      </div>

      <Link
        to="/"
        className={` font-bold text-[32px] flex-[3] sm:flex-[5] lg:flex-[3] `}
      >
        <img src={logo} alt="Fairshop logo" className="w-[200px]" />
      </Link>

      <Search />
      <section className="flex h-full justify-between items-center gap-2 flex-[3]sm:flex-[3] md:flex-[1.5]  2xl:flex-1">
        <div className="relative cursor-pointer">
          <ShoppingBagIcon className="w-8 sm:w-10 " />
          <p className="bg-[#FCA311] absolute flex items-center justify-center w-6 rounded-full font-bold bottom-[-5px] right-0">
            0
          </p>
        </div>
        <p className="font-bold">&#8358; 0.00 </p>
      </section>

      <section className="flex h-full justify-between items-center gap-2 flex-[1] md:flex-[3] 2xl:flex-[2]">
        <UserIcon className="w-8 sm:w-10 cursor-pointer" />
        <Link to="/register" className=" cursor-pointer hidden md:block ">Register</Link>
        <span className=" hidden md:block">or</span>
        <Link to="/login" className="cursor-pointer hidden md:block">Sign in</Link>
      </section>
    </header>
  );
};

export default Navbar;
