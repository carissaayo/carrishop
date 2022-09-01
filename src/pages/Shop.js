import { Link } from "react-router-dom";
import {List,ArrowUp,ArrowDown} from "react-bootstrap-icons";



// components
import CTA from "../components/HomeComponents/CTA";
import Footer from "../components/HomeComponents/Footer";
import Search from "../components/HomeComponents/Search";
import Filter from "../components/Filter";
import Colors from "../components/Colors";
import PriceFilter from "./PriceFilter";
import ShopOptionList from "../components/ShopOptionList";
import Categories from "../components/Categories";
import ShopProductsList from "../components/ShopProductsList";

const Shop = ({ values, setValues, sideBar, setSideBar }) => {
  

  return (
    <main className="w-full h-full ">
      <section className="block lg:flex gap-4 relative">
        <section
          className={`hidden md:flex bg-primaryColor    flex-[2]   md:flex  lg:block flex-wrap gap-10  `}
        >
          {/* <div className="flex gap-4 items-center mb-10">
            <Link to="/" className="p-2">
              Home
            </Link>
            <span className="">
              <ChevronRight className="text-base font-bold" />
            </span>
            <Link to="/" className="p-2 px-4 bg-[#F1F1F1]">
              Explore
            </Link>
          </div> */}

          {/* Categories */}
          <Categories />
          {/* Filters */}
          <Filter />
          {/* Colors */}
          <Colors />
          {/* Price Filter */}
          <PriceFilter values={values} setValues={setValues} />
        </section>
        <section className="flex-[6] mb-20">
          <Search mobile />
          <ShopOptionList />
          <div className=" flex  md:hidden w-full justify-between items-center px-8">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSideBar(true)}
            >
              <List className="text-[40px] " />
              <p className="font-mediumbold text-lg">Show sidebar</p>
            </div>
            <div className="flex cursor-pointer">
              <ArrowUp className="text-xl " />
              <ArrowDown className="text-xl" />
            </div>
          </div>

          <ShopProductsList />
          <ShopProductsList />
          <ShopProductsList />
          <ShopProductsList />
        </section>
      </section>
      <CTA />
      <Footer />
    </main>
  );
};

export default Shop;
