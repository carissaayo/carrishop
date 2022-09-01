import { X } from "react-bootstrap-icons";
import PriceFilter from "../pages/PriceFilter";
import Categories from "./Categories";
import Colors from "./Colors";
import Filter from "./Filter";

const ShopSidebar = ({ values, setValues, sideBar, setSideBar }) => {
  return (
    <main
      className={`md:hidden bg-primaryColor w-[80%] sm:w-[70%] h-full bg-primaryColor pt-10  z-50  transform-translate duration-500 ease-in-out ${
        sideBar ? "translate-x-0" : "translate-x-[-100%] "
      }`}
    >
        <div className="flex items-center justify-end w-[90%] mb-10 ">
          <X
            className=" text-xl sm:text-3xl cursor-pointer"
            onClick={() => setSideBar(false)}
          />
          <p className="uppercase font-bold">close</p>
        </div>

        <section className={` w-full sm:w-[95%] h-full overflow-y-scroll pb-14  `}>
          {/* Categories */}
          <Categories />
          {/* Filters */}
          <Filter />
          {/* Colors */}
          <Colors />
          {/* Price Filter */}
          <PriceFilter values={values} setValues={setValues} />
       
      </section>
    </main>
  );
};

export default ShopSidebar;
