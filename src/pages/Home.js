import { useEffect, useState } from "react";

import CardList from "../components/HomeComponents/CardList";
import CTA from "../components/HomeComponents/CTA";
import Footer from "../components/HomeComponents/Footer";
import Hero from "../components/HomeComponents/Hero";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/HomeComponents/Navbar";
import SideNav from "../components/SideNav";
import OptionList from "../components/HomeComponents/OptionList";
import FeatureProductsList from "../components/HomeComponents/FeatureProductsList";
import { ChevronDoubleUp, } from "react-bootstrap-icons";
import Search from "../components/HomeComponents/Search";

const Home = () => {
  const [openMobile, setOpenMobile] = useState(false);


  return (
    <main className="w-full h-full relative ">
      {/* <Navbar openMobile={openMobile} setOpenMobile={setOpenMobile} /> */}
      <Search mobile/>
      <Hero />
      <OptionList />
      <FeatureProductsList />
      <CardList phone title="phones" />
      <CardList title="laptops" />
      <CardList title="Fast Selling" text="View all fast selling products" />
      <CTA />
      <Footer />
   
    </main>
  );
};

export default Home;
