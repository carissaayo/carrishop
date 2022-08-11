import React from 'react'
import Hero from '../components/HomeComponents/Hero'
import Navbar from '../components/HomeComponents/Navbar'

const Home = () => {
  return (
    <main className='w-full h-full '>
        <Navbar/>
        <Hero/>
    </main>
  )
}

export default Home