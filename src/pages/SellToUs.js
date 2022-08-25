import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/HomeComponents/Footer';
import sell1 from "../assets/imgs/sell1.png";
import sell2 from "../assets/imgs/sell2.png";
import sell3 from "../assets/imgs/sell3.png";
const SellToUs = () => {
  return (
    <main className="h-full w-full">
      <section className="w-full  bg-[#F5F5F5] mb-20 flex items-center flex-col justify-center h-[80vh]">
        <div className="">
          <h1>
            SELLING JUST GOT <span className="bg-[#FCA311]">EASIER!</span>
          </h1>
          <p>Sell your fairly used gadgets and receive payments immediately</p>
          <Link to="/appointment/book-appointment" className="">
            Book An Appointment
          </Link>
        </div>

        {/* Images Section */}
        <div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

export default SellToUs