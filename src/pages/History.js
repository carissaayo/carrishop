import { useState } from "react";
import { Check, CheckLg, CircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import phoneImg from "../assets/imgs/featured-phone.png";
import Footer from "../components/HomeComponents/Footer";

const History = () => {
  const [type, setType] = useState("Bought");
const [details, setDetails] = useState(false)
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
        <section className={`"w-[90%] mx-auto md:mx-0 md:w-full pt-10 mb-20"`}>
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
              <Link
                to="/history/item"
                className="capitalize text-[#FCA311] font-bold"
              >
                see details
              </Link>
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
              <Link
                to="/history/item"
                className="capitalize text-[#FCA311] font-bold"
              >
                see details
              </Link>
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
              <Link
                to="/history/item"
                className="capitalize text-[#FCA311] font-bold"
              >
                see details
              </Link>
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
              <Link
                to="/history/item"
                className="capitalize text-[#FCA311] font-bold"
              >
                see details
              </Link>
            </div>
          </div>
        </section>

        {/* Ttem Detail */}
       
      </section>

      <Footer />
    </main>
  );
};

export default History;
