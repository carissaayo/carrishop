import { NavLink } from "react-router-dom";
import {Headset,InfoCircle,ClockHistory,BagCheck,Bag, PeopleFill, Person} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const SideNav = () => {
    const { user } = useSelector((state) => state.user);
  return (
    <section className="w-full md:w-[150px] md:min-w-[150px] bg-primaryColor md:z-10  fixed md:relative z-30 bottom-0 left-0 h-[10vh] md:h-auto p-6 px-3 sm:px-10 md:px-0">
      <section
        className=" md:fixed flex md:flex-col gap-2 xs:gap-4
       sm:gap-[30px] h-full md:h-[55vh] items-center w-full md:w-[130px]  justify-between bg-primaryColor "
      >
        <NavLink to="/buy">
          {({ isActive }) => (
            <div className="flex flex-col gap-2   h-full items-center">
              <Bag
                className={`text-[20px] sm:text-[30px] md:text-[40px] ${
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
                className={`text-[20px] sm:text-[30px] md:text-[40px] ${
                  isActive ? " text-secondaryColor" : ""
                } `}
              />
              <p className="text-xs sm:text-base">Sell to Us</p>
            </div>
          )}
        </NavLink>

        {user && (
          <NavLink to="/history">
            {({ isActive }) => (
              <div className="flex flex-col gap-2   h-full items-center">
                <ClockHistory
                  className={`text-[20px] sm:text-[30px] md:text-[40px] ${
                    isActive ? " text-secondaryColor" : ""
                  } `}
                />
                <p className="text-xs sm:text-base">History</p>
              </div>
            )}
          </NavLink>
        )}

        {user && (
          <NavLink to="/affiliates">
            {({ isActive }) => (
              <div className="flex flex-col gap-2   h-full items-center">
                <PeopleFill
                  className={` text-[20px] sm:text-[30px] md:text-[40px] ${
                    isActive ? " text-secondaryColor" : ""
                  } `}
                />
                <p className="text-xs sm:text-base">Affiiates</p>
              </div>
            )}
          </NavLink>
        )}
        {!user && (
          <NavLink to="/about-us" className=" ">
            {({ isActive }) => (
              <div className="flex flex-col gap-2   h-full items-center ">
                <InfoCircle
                  className={`text-[20px] sm:text-[30px] md:text-[40px] ${
                    isActive ? "font-bold text-secondaryColor" : ""
                  } `}
                />
                <p className="text-xs sm:text-base">About Us</p>
              </div>
            )}
          </NavLink>
        )}

        {!user && (
          <NavLink to="/contact">
            {({ isActive }) => (
              <div className="flex flex-col gap-2   h-full items-center">
                <Headset
                  className={`text-[30px] md:text-[40px] ${
                    isActive ? "font-bold text-secondaryColor" : ""
                  } `}
                />
                <p className="text-xs sm:text-base">Support</p>
              </div>
            )}
          </NavLink>
        )}
        {user && (
          <NavLink to="/users/name">
            {({ isActive }) => (
              <div className="flex flex-col gap-2   h-full items-center">
                <Person
                  className={`text-[20px] sm:text-[30px] md:text-[40px] ${
                    isActive ? " text-secondaryColor" : ""
                  } `}
                />
                <p className="text-xs sm:text-base">My Account</p>
              </div>
            )}
          </NavLink>
        )}
      </section>
    </section>
  );
};

export default SideNav;
