import { useState } from "react";
import { Check, CheckLg, CircleFill } from "react-bootstrap-icons";
import phoneImg from "../assets/imgs/featured-phone.png"
import Footer from "../components/HomeComponents/Footer";

const History = () => {
    const [type, setType] = useState("Bought")

  return (
    <main className="w-full h-full">
      <div className="flex w-full h-[20vh] items-center justify-center border-b border-[#F1F1F1] mb-20">
        <h1 className="font-bold text-3xl">History</h1>
      </div>

      <section className="">
        <div className="flex w-full border-b border-[#F1F1F1] items-center gap-8 mb-10">
          <button
            className={`${
              type === "Bought"
                ? "text-[#FCA311] border-b-2 border-[#FCA311]"
                : "text-[#999999]  border-[#999999]"
            }  p-3 text-xl`}
            onClick={() => setType("Bought")}
          >
            Bought(0)
          </button>
          <button
            className={`${
              type === "Sold"
                ? "text-[#FCA311] border-b-2 border-[#FCA311]"
                : "text-[#999999]  border-[#999999]"
            }  p-3 text-xl`}
            onClick={() => setType("Sold")}
          >
            Sold (9)
          </button>
        </div>

        {/* Items Con */}
        <section className="w-[90%] mx-auto md:mx-0 md:w-full pt-10 mb-20">
          {/* Item */}
          <div className="border border-[#EEEEEE] p-4 px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center xs:items-start gap-4 sm:gap-0 mb-10">
            <div className="flex  flex-col sm:flex-row gap-2 xs:gap-8 items-center sm:items-start ">
              <img
                src={phoneImg}
                alt=""
                className="w-20 xs:w-32 h-20 xs:h-32"
              />
              <div className="flex flex-col xs:flex-row sm:flex-col gap-4 sm:gap-2 flex-wrap :sm-flex-nowrap items-center justify-center sm:items-start sm:justify-start w-full">
                <p className="xs:w-[40%] sm:w-auto">Redmi Note 9s</p>
                <p className="font-bold xs:text-sm  sm:text-base  xs:w-[40%] sm:w-auto">
                  #b245689TX
                </p>
                <div className="xs:w-[60%] sm:w-auto">
                  <p className="text-[#0E7405] p-2 px-4 bg-[#CFFBCE] rounded-xl w-[max-content] uppercase text-sm sm:text-base ">
                    COMPLETED
                  </p>
                </div>
                <p className="font-bold text-base xs:text-xl sm:text-2xl xs:w-[40%] sm:w-auto">
                  Mon, 06-06
                </p>
              </div>
            </div>
            <div className="w-full sm:w-auto flex items-center justify-center sm:block">
              <button className="capitalize text-[#FCA311] font-bold">
                see details
              </button>
            </div>
          </div>

          {/* Item */}
          <div className="border border-[#EEEEEE] p-4 px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center xs:items-start gap-4 sm:gap-0 mb-10">
            <div className="flex  flex-col sm:flex-row gap-2 xs:gap-8 items-center sm:items-start">
              <img
                src={phoneImg}
                alt=""
                className="w-20 xs:w-32 h-20 xs:h-32"
              />
              <div className="flex flex-col xs:flex-row sm:flex-col gap-4 sm:gap-2 flex-wrap :sm-flex-nowrap items-center justify-center sm:items-start sm:justify-start w-full">
                <p className="xs:w-[45%] sm:w-auto">Redmi Note 9s</p>
                <p className="font-bold xs:text-sm  sm:text-base  xs:w-[45%] sm:w-auto ">
                  #b245689TX
                </p>

                <div className="xs:w-[60%] sm:w-auto">
                  <p className="text-[#E78B02] p-2 px-4 bg-[#FBE9CE] rounded-xl w-[max-content] uppercase text-sm sm:text-base ">
                    delivery in progress
                  </p>
                </div>

                <p className="font-bold text-base xs:text-xl sm:text-2xl xs:w-[45%] sm:w-auto">
                  Mon, 06-06
                </p>
              </div>
            </div>
            <div className="w-full sm:w-auto flex items-center justify-center sm:block">
              <button className="capitalize text-[#FCA311] font-bold">
                see details
              </button>
            </div>
          </div>

          {/* Item */}
          <div className="border border-[#EEEEEE] p-4 px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center xs:items-start gap-4 sm:gap-0 mb-10">
            <div className="flex  flex-col sm:flex-row gap-2 xs:gap-8 items-center sm:items-start ">
              <img
                src={phoneImg}
                alt=""
                className="w-20 xs:w-32 h-20 xs:h-32"
              />
              <div className="flex flex-col xs:flex-row sm:flex-col gap-4 sm:gap-2 flex-wrap :sm-flex-nowrap items-center justify-center sm:items-start sm:justify-start w-full">
                <p className="xs:w-[40%] sm:w-auto">Redmi Note 9s</p>
                <p className="font-bold xs:text-sm  sm:text-base  xs:w-[40%] sm:w-auto">
                  #b245689TX
                </p>
                <div className="xs:w-[40%] sm:w-auto">
                  <p className="text-[#0E7405] p-2 px-4 bg-[#CFFBCE] rounded-xl w-[max-content] uppercase text-sm sm:text-base ">
                    COMPLETED
                  </p>
                </div>
                <p className="font-bold text-base xs:text-xl sm:text-2xl xs:w-[40%] sm:w-auto">
                  Mon, 06-06
                </p>
              </div>
            </div>
            <div className="w-full sm:w-auto flex items-center justify-center sm:block">
              <button className="capitalize text-[#FCA311] font-bold">
                see details
              </button>
            </div>
          </div>

          {/* Item */}
          <div className="border border-[#EEEEEE] p-4 px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center xs:items-start gap-4 sm:gap-0 mb-10">
            <div className="flex  flex-col sm:flex-row gap-2 xs:gap-8 items-center sm:items-start">
              <img
                src={phoneImg}
                alt=""
                className="w-20 xs:w-32 h-20 xs:h-32"
              />
              <div className="flex flex-col xs:flex-row sm:flex-col gap-4 sm:gap-2 flex-wrap :sm-flex-nowrap items-center justify-center sm:items-start sm:justify-start w-full">
                <p className="xs:w-[45%] sm:w-auto">Redmi Note 9s</p>
                <p className="font-bold xs:text-sm  sm:text-base  xs:w-[45%] sm:w-auto ">
                  #b245689TX
                </p>

                <div className="xs:w-[60%] sm:w-auto">
                  <p className="text-[#E78B02] p-2 px-4 bg-[#FBE9CE] rounded-xl w-[max-content] uppercase text-sm sm:text-base ">
                    delivery in progress
                  </p>
                </div>

                <p className="font-bold text-base xs:text-xl sm:text-2xl xs:w-[45%] sm:w-auto">
                  Mon, 06-06
                </p>
              </div>
            </div>
            <div className="w-full sm:w-auto flex items-center justify-center sm:block">
              <button className="capitalize text-[#FCA311] font-bold">
                see details
              </button>
            </div>
          </div>
        </section>

        {/* Ttem Detail */}
        <section className="w-[90%] mx-auto md:mx-0 md:w-full   gap-8 mb-32 md:mb-10">
          <p className="font-bold border-b border-[#F1F1F1] mb-10">
            You Bought;
          </p>

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

              <section className="w-full">
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
                      <p className="text-[#E78B02] p-2 px-4 bg-[#FBE9CE] rounded-xl w-[max-content] uppercase mb-2 ">
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
                      <p className="text-primaryColor p-2 px-4 bg-[#848484] rounded-xl w-[max-content] uppercase mb-2 ">
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
            </div>
          </section>
        </section>
      </section>

      <Footer />
    </main>
  );
};

export default History;
