import React from 'react'
import { CheckLg, CircleFill } from 'react-bootstrap-icons';
import phoneImg from "../assets/imgs/featured-phone.png";
import Footer from '../components/HomeComponents/Footer';

const HistoryItem = () => {
  return (
    <main className="w-full">
      <section className="w-[90%] mx-auto md:mx-0 md:w-full   gap-8 mb-32 md:mb-10">
      <div className="flex w-full h-[20vh] items-center justify-center border-b border-[#F1F1F1] mb-20">
        <h1 className="font-bold text-3xl">History</h1>
      </div>
        <p className="font-bold border-b border-[#F1F1F1] mb-10">You Bought;</p>

        <div className="w-full mb-10">
          <h1 className="w-[80%] text-xl xs:text-2xl sm:text-3xl sm:max-w-[400px] xs:leading-10">
            Samsung A21 - 6GB 124 Internal Memory
          </h1>
        </div>
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 px-4 mb-10">
        <div className="flex-1">
          <img
            src={phoneImg}
            alt=""
            className="w-[50%] h-[30%] lg:w-full lg:h-[50%] 2xl:w-[90%] mx-auto lg:mx-0 "
          />
        </div>
        <div className=" flex-[2] pt-10">
          <div className="w-full mb-10">
            <h2 className="font-bold text-xl border-b border-[#F1F1F1] mb-10 pb-5">
              Order Details
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">Display</h3>
              <p className="text-[#777777]">4.5 inch HD Touch Screen </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">Processor</h3>
              <p className="text-[#777777]">Apple A10 </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">OS</h3>
              <p className="text-[#777777]">IOS 11 </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">Internal Memory</h3>
              <p className="text-[#777777]">128GB </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">Battery Capacity</h3>
              <p className="text-[#777777]">1960mAh</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">Payment Method</h3>
              <p className="text-[#777777]">Cash</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">Delivery Method</h3>
              <p className="text-[#777777]">Pickup(Fate)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:items-center justify-between mb-10">
              <h3 className="font-bold">Final agreed price</h3>
              <p className="text-[#0E7405] text-2xl font-bold">₦ 769,999</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between  w-full mb-10">
              <h3 className="font-bold text-lg">STATUS</h3>

              <p className="text-[#0E7405] p-2 px-4 bg-[#CFFBCE] rounded-xl w-[max-content] uppercase  ">
                COMPLETED
              </p>
            </div>
          </div>

          {/* Deal Progress */}
          <section className="w-full mb-10">
            <h1 className="font-bold mb-10">Package History</h1>

            <section className="w-full ">
              {/* Order Placed */}
              <div className="flex gap-8">
                <div className="relative">
                  <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#29BFFF] rounded-full">
                    <CheckLg className="text-primaryColor text-xl" />
                  </div>
                  <div className="w-[10px] h-[100px] bg-[#29BFFF] mx-auto relative bottom-1"></div>
                </div>
                <div className="">
                  <p className="text-primaryColor p-2 px-4 bg-[#29BFFF] rounded-xl w-[max-content] uppercase mb-2 ">
                    order placed
                  </p>
                  <p className="font-bold text-xl">monday, 06-06</p>
                </div>
              </div>

              {/* Order In Progreess */}
              <div className="flex gap-8 -mt-5">
                <div className="relative">
                  <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#FBE9CE] rounded-full">
                    <CheckLg className="text-primaryColor text-xl" />
                  </div>
                  <div className="w-[10px] h-[100px] bg-[#FBE9CE] mx-auto relative bottom-1"></div>
                </div>
                <div className="">
                  <p className="text-[#E78B02] p-2 px-4 bg-[#FBE9CE] rounded-xl w-[max-content] uppercase mb-2 flex">
                    <span className="hidden xs:block ">order -</span> in -
                    progress
                  </p>
                  <p className="font-bold text-xl">monday, 06-06</p>
                </div>
              </div>

              {/* Order Cancellation */}
              <div className="flex gap-8 -mt-5">
                <div className="relative">
                  <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#868686] rounded-full">
                    <CircleFill className="text-primaryColor text-base" />
                  </div>
                </div>
                <div className="">
                  <p className="text-primaryColor p-2 px-4 bg-[#848484] rounded-xl w-[max-content] uppercase mb-2 flex">
                    cancelled
                    <span className="hidden sm:block">
                      - payment unsuccessful
                    </span>
                  </p>
                  <p className="font-bold text-xl">monday, 06-06</p>
                </div>
              </div>
            </section>
          </section>
          <p className="">
            Unfortunately, this item has been cancelled because your payment
            could not be completed. If your order was prepaid, we will proceed
            with the refund immediately to the payment origination account and
            keep you updated via your email once processed form our side.
          </p>
        </div>
      </section>
      </section>
      <Footer />
    </main>
  );
}

export default HistoryItem