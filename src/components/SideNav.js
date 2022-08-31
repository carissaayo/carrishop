import { NavLink } from "react-router-dom";
import {Headset,InfoCircle,House,BagCheck,Bag} from "react-bootstrap-icons";
const SideNav = () => {
  return (
    <section className="w-full md:w-[150px] md:min-w-[150px] bg-primaryColor md:z-10  fixed md:relative z-50 bottom-0 left-0 h-[15vh] md:h-auto p-4 xs:p-3 sm:px-10 md:px-0">
      <section className=" md:fixed flex md:flex-col xs:gap-[30px] h-full md:h-[55vh] items-center w-full md:w-[130px] justify-between bg-primaryColor ">
        {/* <div className="flex flex-col gap-2   items-center">
      <MenuIcon className="w-10 " />
      </div> */}

        <NavLink to="/privacy-policy">
          {({ isActive }) => (
            <div className="flex flex-col gap-2   h-full items-center">
              <Bag
                className={`text-[30px] md:text-[40px] ${
                  isActive ? " text-secondaryColor" : ""
                } `}
              />
              <p className="text-xs sm:text-base">Buy</p>
            </div>
          )}
        </NavLink>

        <NavLink to="/sell-to-us">
          {({ isActive }) => (
            <div className="flex flex-col gap-2   h-full items-center">
              <BagCheck
                className={`text-[30px] md:text-[40px] ${
                  isActive ? " text-secondaryColor" : ""
                } `}
              />
              <p className="text-xs sm:text-base">Sell to Us</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/about-us" className=" ">
          {({ isActive }) => (
            <div className="flex flex-col gap-2   h-full items-center ">
              <InfoCircle
                className={`text-[30px] md:text-[40px] ${
                  isActive ? "font-bold text-secondaryColor" : ""
                } `}
              />
              <p className="text-xs sm:text-base">About Us</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/contact">
          {({ isActive }) => (
            <div className="flex flex-col gap-2   h-full items-center">
              <Headset
                className={`text-[30px] md:text-[40px] ${
                  isActive ? "font-bold text-secondaryColor" : ""
                } `}
              />
              <p className="text-xs sm:text-base">Contact Us</p>
            </div>
          )}
        </NavLink>
      </section>
    </section>
  );
};

export default SideNav;
