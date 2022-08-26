import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/HomeComponents/Footer';
import sell1 from "../assets/imgs/sell1.png";
import sell2 from "../assets/imgs/sell2.png";
import sell3 from "../assets/imgs/sell3.png";
import sell4 from "../assets/imgs/sell4.png";
import appointment from "../assets/imgs/appointment.png";
import wallet from "../assets/imgs/wallet.png";
import verify from "../assets/imgs/verify.png";


const SellToUs = () => {
  return (
    <main className="h-full w-full">
      <section className="w-full  bg-[#F5F5F5] mb-20 flex items-start justify-between h-[70vh]">
        <div className="flex-[2] flex items-center h-[70%] justify-center ">
          <div className="w-[80%] px-6 flex flex-col gap-8">
            <h1 className="text-4xl  ">
              SELLING JUST GOT <span className="text-[#FCA311]">EASIER!</span>
            </h1>
            <p className="text-xl">
              Sell your fairly used gadgets and receive payments immediately
            </p>
            <Link
              to="/appointment/book-appointment"
              className="bg-secondaryColor w-[max-content] p-4 rounded-3xl text-xl"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
        {/* Images Section */}
        <div className="flex-[3] flex items-start justify-end">
          <img src={sell1} alt="" className="max-w-[200px] h-[500px]" />
          <img src={sell2} alt="" className="max-w-[200px] h-[500px]" />
          <img src={sell3} alt="" className="max-w-[200px] h-[500px]" />
          <img src={sell4} alt="" className="max-w-[200px] h-[500px]" />
        </div>
      </section>

      <section className="w-full h-[70vh]">
        <h1 className="text-center text-2xl mb-6">SELL FASTER. BUY SMARTER</h1>
        <p className="text-center text-xl mb-10">
          Start selling on FairShop in 3 easy steps
        </p>

        <section className="flex w-full items-center justify-between h-[30vh] gap-0 ">
          {/* Item  */}
          <div className="w-[30%] flex flex-col items-center justify-center gap-4">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={appointment} alt="" className="w-[50px]" />
            </div>
            <h3 className="">Book an Appointment</h3>
            <p className="text-center 2xl:w-[80%]">
              Book and Appointment by filling this form, call or whatsApp our
              agent.
            </p>
          </div>

          {/* Item  */}
          <div className=" w-[30%] flex flex-col items-center justify-center gap-4">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={verify} alt="" className="w-[50px]" />
            </div>
            <h3 className="">Get your device inspected</h3>
            <p className="text-center 2xl:w-[80%]">
              Come with your device to any of our offices or branches for
              inspection.
            </p>
          </div>

          {/* Item  */}
          <div className="w-[30%] flex flex-col items-center justify-center gap-4">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={wallet} alt="" className="w-[50px]" />
            </div>
            <h3 className="">Get Paid immediately</h3>
            <p className="text-center 2xl:w-[80%]">
              After inspection, we will reach a fair agreement with you and you
              will receive payment immediately.
            </p>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}

export default SellToUs