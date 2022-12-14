import { useEffect, useState } from "react";

import CardList from "../components/HomeComponents/CardList";
import CTA from "../components/HomeComponents/CTA";
import Footer from "../components/HomeComponents/Footer";
import Hero from "../components/HomeComponents/Hero";
import OptionList from "../components/HomeComponents/OptionList";
import FeatureProductsList from "../components/HomeComponents/FeatureProductsList";
import { ChevronDoubleUp, } from "react-bootstrap-icons";
import Search from "../components/HomeComponents/Search";

const Home = () => {
  const [openMobile, setOpenMobile] = useState(false);


  return (
    <main className="w-full h-full pt-10 md:pt-0 ">
      {/* <Navbar openMobile={openMobile} setOpenMobile={setOpenMobile} /> */}
      <Search mobile />
      <Hero />
      <OptionList />
      <FeatureProductsList />
      <CardList phone title="phones" text="View all" />
      <CardList title="laptops" text="View all" />
      <CardList title="Fast Selling" text="View all fast selling products" />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
