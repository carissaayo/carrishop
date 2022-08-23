import { Link, useNavigate } from "react-router-dom";
import {  MenuIcon, XIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon,UserIcon } from "@heroicons/react/outline";
import {  useSelector } from "react-redux";
import { useState } from "react";
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
 
  

  return (
    <header className="w-full h-[150px] flex bg-primaryColor justify-between items-center py-12 px-8 pl-12   gap-[0px] z-30">
      <div className="">
      <MenuIcon className="w-10 " />
      </div>
      <Link to="/" className={` font-bold text-[32px]  `}>
        <img src={logo} alt="Fairshop logo" className="w-[200px]" />
      </Link>
      <div className="text-sm text-secondaryColor flex-1 block md:hidden">
        {openMobile ? (
          <XIcon
            className="w-9 h-9 cursor-pointer"
            onClick={() => setOpenMobile(false)}
          />
        ) : (
          <MenuIcon
            className="w-9 h-9 cursor-pointer"
            onClick={() => setOpenMobile(true)}
          />
        )}
      </div>
      <Search />
      <section className="flex h-full justify-between items-center gap-2">
        <div className="relative cursor-pointer">
          <ShoppingBagIcon className="w-10 " />
          <p className="bg-secondaryColor absolute flex items-center justify-center w-6 rounded-full font-bold bottom-[-5px] right-0">
            0
          </p>
        </div>
        <p className="font-bold">&#8358; 0.00 </p>
      </section>

      <section className="flex h-full justify-between items-center gap-2">
        <UserIcon className="w-9 h-9 cursor-pointer" />
        <p className=" cursor-pointer">Register</p>
        <span>or</span>
        <p className="cursor-pointer">Sign in</p>
      </section>
     
    </header>
  );
};

export default Navbar;
