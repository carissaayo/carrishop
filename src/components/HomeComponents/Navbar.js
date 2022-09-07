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
        scrolled ? " top-0 left-0 transition-[all .2s linear] z-40 " : ""
      } fixed md:sticky w-full h-[90px]  flex bg-primaryColor md:justify-between items-center  px-2 sm:px-10   gap-4 sm:gap-8 md:gap-4 2xl:gap-10  `}
    >
      <div
        className={` flex md:hidden flex-col gap-2  items-center ${
          user?.name ? "" : ""
        }`}
      >
        <MenuIcon className="w-10 " />
      </div>

      <Link
        to="/"
        className={`${
          user?.fullname ? "" : "w-[max-content]  md:flex-[5] lg:flex-[3]"
        } font-bold text-[32px]  `}
      >
        <img src={logo} alt="Fairshop logo" className="w-[200px]" />
      </Link>

      <Search user={user?.fullname && user} />
      <section
        className={`${
          user?.fullname
            ? "flex-1 md:flex-none"
            : "  flex-[2] sm:flex-[5] md:flex-[1.5]  2xl:flex-1  "
        } flex h-full items-center justify-end`}
      >
        <Link to="/cart" className="relative cursor-pointer ">
          <ShoppingBagIcon className="w-8 sm:w-10 " />
          <p className="bg-[#FCA311] absolute flex items-center justify-center w-6 rounded-full font-bold bottom-[-5px] right-0">
            0
          </p>
        </Link>
        <p className="font-bold hidden md:block">&#8358; 0.00 </p>
      </section>
      {!user?.fullname && (
        <section className="flex h-full gap-2 items-center flex-[0.4] sm:flex-[1] md:flex-[3] 2xl:flex-[2] justify-end  ">
          <UserIcon
            className="w-8 sm:w-10 cursor-pointer "
            onClick={() => setOpenAvatar(!openAvatar)}
          />
          {/* Desktop */}
          <Link to="/register" className=" cursor-pointer hidden md:block ">
            Register
          </Link>
          <span className=" hidden md:block">or</span>
          <Link to="/login" className="cursor-pointer hidden md:block">
            Sign in
          </Link>

          {/* Mobile */}
          <div
            className={` bg-primaryColor z-70   w-[200px] absolute flex items-center justify-evenly  h-[100px] md:hidden right-2 top-24 rounded-lg transition-translate duration-200 ease-linear ${
              openAvatar ? "translate-y-0" : "translate-y-[-200%]"
            } box-shadow`}
          >
            <Link to="/login" className="cursor-pointer md:hidden block">
              Sign in
            </Link>
            <span className=" md:hidden block">or</span>
            <Link to="/register" className=" cursor-pointer md:hidden block ">
              Register
            </Link>
          </div>
        </section>
      )}
    </header>
  );
};

export default Navbar;
