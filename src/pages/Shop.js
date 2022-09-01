import { useState } from "react";
import { Link } from "react-router-dom";
import {List} from "react-bootstrap-icons";



// components
import CardList from "../components/HomeComponents/CardList";
import CTA from "../components/HomeComponents/CTA";
import FeatureProductsList from "../components/HomeComponents/FeatureProductsList";
import Footer from "../components/HomeComponents/Footer";
import Search from "../components/HomeComponents/Search";
import Filter from "../components/Filter";
import Colors from "../components/Colors";
import PriceFilter from "./PriceFilter";
import ShopOptionList from "../components/ShopOptionList";
import Categories from "../components/Categories";
import ShopProductsList from "../components/ShopProductsList";

const Shop = () => {
  const [values, setValues] = useState([50]);

  return (
    <main className="w-full h-full ">
      <section className="block lg:flex gap-4">
        <section className="flex-[2] hidden md:flex  lg:block flex-wrap gap-10 ">
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
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <List className="text-xl" />
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
