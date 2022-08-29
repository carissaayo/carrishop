import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-bootstrap-icons';
import Footer from '../components/HomeComponents/Footer';
import FeaturedProduct from '../components/HomeComponents/FeaturedProduct';

import phoneImg from "../assets/imgs/featured-phone.png"
import tabletImg from "../assets/imgs/featured-tablet.png";
import soundImg from "../assets/imgs/featured-sound.png";
import notebookImg from "../assets/imgs/ultrabook.png";
import sell1 from "../assets/imgs/sell1.png";
import sell2 from "../assets/imgs/sell2.png";
import sell3 from "../assets/imgs/sell3.png";
import sell4 from "../assets/imgs/sell4.png";
import appointment from "../assets/imgs/appointment.png";
import wallet from "../assets/imgs/wallet.png";
import verify from "../assets/imgs/verify.png";
import grid1 from "../assets/imgs/grid1.png";
import grid2 from "../assets/imgs/grid2.png";
import grid3 from "../assets/imgs/grid3.png";
import grid5 from "../assets/imgs/grid5.jfif";
import grid6 from "../assets/imgs/grid6.png";
import grid7 from "../assets/imgs/grid7.jfif";   


const ItemHeader = ({ title, text }) => {
  return (
    <div className="flex  justify-between items-center h-[35px] w-full md:w-[90%] lg:w-[95%] xl:w-full  ">
      <h1 className="font-bold sm:text-2xl capitalize border-b-2 border-secondaryColor ">
        {title}
      </h1>
      <Link to="/" className=" font-bold flex items-center ">
        <p className={`${text ? "hidden sm:block" : ""}  sm:text-base`}>
          {text ? text : "See All"}
        </p>
        <span className="ml-2">
          <ChevronRight size={30} />
        </span>
      </Link>
    </div>
  );
};

const SellToUs = () => {
  return (
    <main className="h-full w-full">
      {/* Banner */}
      <section className="w-full  h-full bg-[#F5F5F5] mb-20 flex  flex-col gap-0 md-gap-5 lg:flex-row items-start md:items-center lg:items-start  justify-between  xl:h-[60vh] 2xl:h-[70vh]  relative ">
        <div className="flex-[2] flex items-start pt-10 md:pt-0 md:items-center h-full xl:h-[70%]  justify-center words order-2 lg:order-1">
          <div className=" w-[90%] lg:w-[80%] px-2 xl:px-6 flex flex-col gap-8 mb-20 lg:mb-0">
            <h1 className=" text-2xl lg:text-4xl ">
              SELLING JUST GOT <span className="text-[#FCA311]">EASIER!</span>
            </h1>
            <p className=" text-lg lg:text-xl">
              Sell your fairly used gadgets and receive payments immediately
            </p>
            <Link
              to="/appointment/book-appointment"
              className="bg-secondaryColor w-[max-content] p-4 rounded-3xl text-lg xl:text-xl"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
        {/* Images Section */}
        <div className=" pt-10  flex-[2] 2xl:flex-[3] flex   items-center lg:items-start order-1 lg:order-2  flex-wrap sm:flex-nowrap m mb-10 gap-8 md:gap-0 md:mb-0">
          <img
            src={sell1}
            alt=""
            className=" w-[40%] sm:w-[150px]  lg:w-[110px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px]  rotate-[30deg] md:rotate-0 z-20 one"
          />
          <img
            src={sell2}
            alt=""
            className="w-[40%] sm:w-[150px] lg:w-[110px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px]  rotate-[30deg] md:rotate-0 z-20 three"
          />
          <img
            src={sell3}
            alt=""
            className="w-[40%] sm:w-[150px] lg:w-[110px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rotate-[30deg] md:rotate-0 two z-10"
          />
          <img
            src={sell4}
            alt=""
            className="w-[40%] sm:w-[150px] lg:w-[100px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rotate-[30deg] md:rotate-0   four"
          />
        </div>
      </section>

      {/* Steps */}
      <section className="w-full  h-full sm:h-[100vh] lg:h-[70vh] mb-20">
        <h1 className="text-center text-lg xs:text-xl sm:text-2xl mb-6">
          SELL FASTER. BUY SMARTER
        </h1>
        <p className="text-center text-base xs:text-lg sm:text-xl mb-10">
          Start selling on FairShop in 3 easy steps
        </p>

        <section className="flex w-full items-center  justify-center lg:justify-between h-full sm:h-[40vh] lg:h-[35vh]  gap-10 lg:gap-0 flex-wrap lg:flex-nowrap">
          {/* Item  */}
          <div className=" w-[90%] xs:w-[70%] sm:w-[40%] lg:w-[30%] flex flex-col items-center justify-center gap-4 h-full lg:h-full">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={appointment} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-center">Book an Appointment</h3>
            <p className="text-center 2xl:w-[80%]">
              Book and Appointment by filling this form, call or whatsApp our
              agent.
            </p>
          </div>

          {/* Item  */}
          <div className=" w-[90%] xs:w-[70%] sm:w-[40%] lg:w-[30%] flex flex-col items-center justify-center gap-4 h-full">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={verify} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-center">Get your device inspected</h3>
            <p className="text-center 2xl:w-[80%]">
              Come with your device to any of our offices or branches for
              inspection.
            </p>
          </div>

          {/* Item  */}
          <div className="w-[90%] xs:w-[70%] sm:w-[40%] lg:w-[30%] flex flex-col items-center justify-center gap-4 h-full">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={wallet} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-center">Get Paid immediately</h3>
            <p className="text-center 2xl:w-[80%]">
              After inspection, we will reach a fair agreement with you and you
              will receive payment immediately.
            </p>
          </div>
        </section>
      </section>

      {/* Card List */}
      <main className="w-full flex flex-col mb-[80px] justify-center items-center h-full  px-4 md:px-0">
        <ItemHeader title="Top Categories" text="View all categories" />
        {/* Cards Container */}
        <section className="w-[90%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-full   lg:border-y border-[#EEEEEE] rounded-l-3xl gap-4 lg:gap-10 items-center pt-10 grid  ">
          <div className="bg-[#F6F6F6] gaming flex  flex-col items-start pl-8">
            {/* item */}
            <div className="justify-self-end relative">
              <img src={grid1} alt="" className=" " />
            </div>
            <div className="justify-self-center mb-10">
              <h4 className="text-[#A5A5A5] text-base mb-5">
                Gaming & Consoles
              </h4>
              <h2 className="text-xl font-bold">NEW GAMING EXPERIENCE</h2>
            </div>
          </div>

          {/* item */}
          <div className="bg-[#F6F6F6] phone flex  flex-col items-start pl-8">
            <div className="justify-self-end relative">
              <img src={grid2} alt="" className=" " />
            </div>
            <div className="justify-self-center mb-10">
              <h4 className="text-[#A5A5A5] text-base mb-5">Phones</h4>
              <h2 className="text-xl font-bold">Iphone 13 Pro Max</h2>
            </div>
          </div>

          {/* item */}
          <div className="bg-[#F6F6F6] audio flex  flex-col items-start pl-8">
            <div className="justify-self-end relative">
              <img src={grid3} alt="" className="" />
            </div>
            <div className="justify-self-center mb-10">
              <h4 className="text-[#A5A5A5] text-base mb-5">Audio</h4>
              <h2 className="text-xl font-bold">BLUETOOTH SPEAKERS</h2>
            </div>
          </div>

          {/* item */}
          <div className="bg-[#F6F6F6] mouse flex  flex-col items-start pl-8">
            <div className="justify-self-end relative">
              <img src={grid5} alt="" className="relative " />
            </div>
            <div className="justify-self-center mb-10">
              <h4 className="text-[#A5A5A5] text-base mb-5">Audio</h4>
              <h2 className="text-xl font-bold">BLUETOOTH SPEAKERS</h2>
            </div>
          </div>

          {/* item */}
          <div className="bg-[#F6F6F6] camera flex  flex-col items-start pl-8">
            <div className="justify-self-end relative">
              <img src={grid6} alt="" className=" " />
            </div>
            <div className="justify-self-center mb-10">
              <h4 className="text-[#A5A5A5] text-base mb-5">Audio</h4>
              <h2 className="text-xl font-bold">BLUETOOTH SPEAKERS</h2>
            </div>
          </div>

          {/* item */}
          <div className="bg-[#F6F6F6] powerbank flex  flex-col items-start pl-8">
            <div className="justify-self-end relative">
              <img src={grid7} alt="" className=" h-[232px]" />
            </div>
            <div className="justify-self-center mb-10">
              <h4 className="text-[#A5A5A5] text-base mb-5">Audio</h4>
              <h2 className="text-xl font-bold">BLUETOOTH SPEAKERS</h2>
            </div>
          </div>
        </section>
      </main>

      {/* Fast Selling */}
      <main className="w-full flex flex-col mb-[80px] justify-center items-center h-full  px-4 md:px-0">
        <ItemHeader
          title="Fast Selling"
          text="View all fast selling products "
        />
        <section className="w-[90%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-full  flex lg:border-y border-[#EEEEEE] rounded-l-3xl gap-4 lg:gap-10 items-center justify-between flex-wrap xl:flex-nowrap pt-10 ">
          <FeaturedProduct
            type="Phone"
            name="Redmi Note 9c"
            image={phoneImg}
            price="769,999"
          />
          <FeaturedProduct
            type="Laptop"
            name="Notebook 360 Flip"
            image={notebookImg}
            price="769,999"
          />

          <FeaturedProduct
            type="Tablet"
            name="Ipad Revolve"
            image={tabletImg}
            price="769,999"
          />
          <FeaturedProduct
            type="Home & Entertainment"
            name="Sound System"
            image={soundImg}
            price="769,999"
            addedToCart
          />
        </section>
      </main>

      <Footer />
    </main>
  );
}

export default SellToUs