import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
    <header className="w-full h-[100px] flex bg-primaryColor justify-between items-center py-4 px-[4%] sm:px-[3%] md:px-[5%] gap-[30px] z-30">
      <h1
        className={`text-secondaryColor font-bold text-[32px]  flex-[9]   ${
          user?.fullname
            ? "md:flex-[10] lg:flex-[3] xl:flex-[4]"
            : " md:flex-1 lg:flex-[4] xl:flex-[3] "
        }`}
      >
        <Link to="/" className="text-inherit">
          Fairshop
        </Link>
      </h1>
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

      <nav
        className={`hidden md:flex justify-between items-center  font-bold gap-[10px] text-sm sm:text-base ${
          user?.fullname
            ? "md:flex-[4] lg:flex-[2] xl:flex-[2] "
            : "md:flex-1 lg:flex-[3] xl:flex-[2]"
        }`}
      >
        <Link to="/">Buy</Link>
        <Link to="/">Sell</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </nav>
      <div
        className={`hidden md:flex justify-around items-center  ${
          user?.fullname
            ? "md:flex-1 ml-8 lg:flex-[1] xl:flex-1"
            : "md:flex-1 lg:flex-[3] xl:flex-1 gap-[20px] "
        }`}
      >
        {user?.fullname ? (
          <>
            <div className="flex w-[80px] h-auto flex-col items-between justify-center relative">
              <p
                className="flex w-[40px] h-[40px] rounded-full items-center justify-center border-secondaryColor border-2 cursor-pointer"
                onClick={() => setOpenAvatar(!openAvatar)}
              >
                <span class="material-symbols-outlined">account_circle</span>
              </p>
              <nav
                className={` flex-col top-[50px] left-[-200px] bg-[white] w-[400px] justify-between items-start  font-bold gap-[10px] text-base text-secondaryColor absolute ${
                  openAvatar ? "flex" : "hidden"
                }`}
              >
                <Link
                  to={`/users/${user?.fullname}`}
                  className="py-4 px-8 border-b border-mobileNavBorder w-full"
                >
                  Account
                </Link>
                <Link
                  to="/appointment/get-appointment"
                  className="py-4 px-8 border-b border-mobileNavBorder w-full"
                >
                  Check Appointment Time
                </Link>

                <Link
                  to="/appointment/book-appointment"
                  className="py-4 px-8 border-b border-mobileNavBorder w-full"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/appointment/get-appointment"
                  className="py-4 px-8 border-b border-mobileNavBorder w-full"
                >
                  Get Appointment
                </Link>
                <Link
                  to="/logout"
                  className="py-4 px-8 border-b w-full border-mobileNavBorder"
                  onClick={handleSignOut}
                >
                  Signout
                </Link>
              </nav>
            </div>
            <Link
              to="/"
              className="flex w-[40px] h-[40px] rounded-full items-center justify-center border-secondaryColor border-2"
            >
              <ShoppingCartIcon className="h-[20px] w-[20px]" />
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="border-secondaryColor border-2 flex w-[80px] lg:w-[100px] h-[40px] rounded-3xl items-center justify-center text-sm lg:text-base font-bold"
            >
              Login
            </Link>
            <Link
              to="/register"
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
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
