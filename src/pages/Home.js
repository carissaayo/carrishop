import React from 'react'
import CardList from '../components/HomeComponents/CardList'
import CTA from '../components/HomeComponents/CTA'
import Footer from '../components/HomeComponents/Footer'
import Hero from '../components/HomeComponents/Hero'
import Navbar from '../components/HomeComponents/Navbar'

const Home = () => {
  return (
    <main className="w-full h-full ">
      <Navbar />
      <Hero />
      <CardList phone title="phones" />
      <CardList title="laptops" />
      <CardList title="others" />
      <CTA/>
      <Footer/>
    </main>
  );
}

export default Home