import { NavLink } from "react-router-dom";
// import { HomeIcon} from "@heroicons/react/solid";
import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import {
  Headset,
  InfoCircle,
  InfoCircleFill,
  House,
  HouseFill,
  Bag
} from "react-bootstrap-icons";
const SideNav = () => {
  return (
    <section className="flex-1 flex flex-col gap-[70px] ">
      <NavLink to="/">
        {({ isActive }) => (
          <div className="flex flex-col gap-2   h-full items-center">
            <House
              size={40}
              className={` ${isActive ? "font-bold text-secondaryColor" : ""} `}
            />
            <p>Home</p>
          </div>
        )}
      </NavLink>
      <NavLink to="/market">
        {({ isActive }) => (
          <div className="flex flex-col gap-2   h-full items-center">
            <ShoppingBagIcon
              className={`w-10 ${
                isActive ? "font-bold text-secondaryColor" : ""
              } `}
            />
            <p>Explore</p>
          </div>
        )}
      </NavLink>
      {/* <NavLink to="/market">
        {({ isActive }) => (
          <div className="flex flex-col gap-2   h-full items-center">
            <Bag
              size={40}
              className={`${
                isActive ? "font-bold text-secondaryColor" : ""
              } `}
            />
            <p>Explore</p>
          </div>
        )}
      </NavLink> */}

      <NavLink to="/about-us">
        {({ isActive }) => (
          <div className="flex flex-col gap-2   h-full items-center">
            <InfoCircle
              size={40}
              className={`w-10 ${
                isActive ? "font-bold text-secondaryColor" : ""
              } `}
            />
            <p>About Us</p>
          </div>
        )}
      </NavLink>

      <NavLink to="/about-us">
        {({ isActive }) => (
          <div className="flex flex-col gap-2   h-full items-center">
            <Headset
              size={40}
              className={` ${isActive ? "font-bold text-secondaryColor" : ""} `}
            />
            <p>Contact Us</p>
          </div>
        )}
      </NavLink>
    </section>
  );
};

export default SideNav;
