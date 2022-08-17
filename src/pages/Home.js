import { useState } from 'react'
import CardList from '../components/HomeComponents/CardList'
import CTA from '../components/HomeComponents/CTA'
import Footer from '../components/HomeComponents/Footer'
import Hero from '../components/HomeComponents/Hero'
import MobileNav from '../components/HomeComponents/MobileNav'
import Navbar from '../components/HomeComponents/Navbar'

const Home = () => {
    const [openMobile, setOpenMobile] = useState(false);

  return (
    <main className="w-full h-full relative ">
      <Navbar openMobile={openMobile} setOpenMobile={setOpenMobile} />
      <MobileNav openMobile={openMobile} setOpenMobile={setOpenMobile} />
      <Hero />
      <CardList phone title="phones" />
      <CardList title="laptops" />
      <CardList title="others" />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home