import { StarFill, Star,ChevronDown } from "react-bootstrap-icons";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import p1 from "../../assets/imgs/p1.jfif";
import p2 from "../../assets/imgs/p2.jfif";
import p3 from "../../assets/imgs/p3.jfif";
import CardList from "../../components/HomeComponents/CardList";

import CTA from "../../components/HomeComponents/CTA";
import Footer from "../../components/HomeComponents/Footer";
import ReviewList from "../../components/ReviewList";
import AddReview from "../../components/AddReview";
import { useState } from "react";


const SingleProduct = () => {
    // Mobile 
    const [openDesc, setOpenDesc] = useState(false)
    const [openReview, setOpenReview] = useState(false)
    const [openSpecs, setOpenSpecs] = useState(false)
    const [content, setContent] = useState("Desc")
    // Desktop 



  return (
    <main className="w-full h-full">
      {/* Images and Description */}
      <section className="w-full h-full flex items-start justify-between mb-20 md:mb-40 flex-col lg:flex-row gap-10 lg:gap-0">
        {/* Product Images */}
        <div className="w-[90%] xs:w-[70%] mx-auto lg:flex-[2] ">
          <div className="mb-14">
            <img src={p1} alt="" />
          </div>
          <div className="flex pl-12 w-[70%] xs:w-[90%] sm:w-[70%] lg:w-[90%] justify-between">
            <img
              src={p1}
              alt=""
              className="w-20 h-20  border border-secondaryColor p-1 cursor-pointer"
            />
            <img src={p2} alt="" className="w-20 h-20 cursor-pointer" />
            <img src={p3} alt="" className="w-20 h-20 cursor-pointer" />
          </div>
        </div>
        {/* Product Desc */}
        <div className="w-[90%] xs:w-[80%] mx-auto lg:flex-[2] xl:flex-[3] 2xl:flex-[4]">
          <h2 className="mb-4 text-[#343434] text-lg ">Phones </h2>
          <h1 className="mb-8 text-lg">
            Samsung A21 - 6GB 124 Internal Memory
          </h1>
          <div className="flex gap-2 items-center mb-10 flex-col sm:flex-row">
            {/* Rating */}
            <div className="flex gap-2">
              <StarFill className="text-lg  text-secondaryColor" />
              <StarFill className="text-lg  text-secondaryColor" />
              <StarFill className="text-lg  text-secondaryColor" />
              <StarFill className="text-lg  text-secondaryColor" />
              <StarFill className="text-lg  text-secondaryColor" />
              <p className="text-[#868686]">(4)</p>
            </div>
            {/* Line */}
            <div className="w-[50%] h-2 sm:w-2 sm:h-6  border-b-2 sm:border-b-0 sm:border-r-2 border-[#868686]"></div>

            {/* Availability in Stock */}
            <p className="text-lg text-[#868686]">
              {" "}
              Status:{" "}
              <span className="text-[green] font-bold ml-2">In Stock</span>
            </p>
          </div>

          {/* Specs */}
          <section className="mx-auto w-full lg:mx-0 lg:w-[95%] xl:w-[70%] mb-10">
            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] pb-4  ">
              <h2 className="text-base xs:text-xl font-bold">Display</h2>
              <p className="text-[#777777]">5.5 Retina HD</p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-base xs:text-xl font-bold">Processor</h2>
              <p className="text-[#777777]">Apple A10</p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-base xs:text-xl font-bold">OS</h2>
              <p className="text-[#777777]">IOS 11</p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-base xs:text-xl font-bold">
                Internal Memory
              </h2>
              <p className="text-[#777777]">128GB</p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-base xs:text-xl font-bold">
                Battery Capacity
              </h2>
              <p className="text-[#777777]">1960mAh</p>
            </div>
          </section>

          <h1 className="mb-10 text-2xl"> &#8358; 768,999</h1>
          <div className="flex gap-4 flex-col sm:flex-row ">
            <button className="uppercase py-4 px-6 flex items-center justify-center bg-[#FCA311] rounded-full text-primaryColor cursor-pointer">
              + Add to Cart
            </button>

            <Link
              to="/"
              className="uppercase py-4 px-10 flex items-center justify-center bg-primaryColor border-2 border-[#FCA311] rounded-full text-secondaryColor cursor-pointer "
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* Description Section*/}
      <section className="mx-auto w-[90%] md:w-full h-full mb-20 ">
        {/* Desktop */}
        <div className="md:flex w-full gap-20 text-xl  mb-10 hidden">
          <h2
            className={`cursor-pointer ${
              content === "Desc" ? "text-black" : "text-[#707070]"
            }`}
            onClick={() => setContent("Desc")}
          >
            Description
          </h2>
          <h2
            className={`cursor-pointer ${
              content === "Specs" ? "text-black" : "text-[#707070]"
            }`}
            onClick={() => setContent("Specs")}
          >
            Specifications
          </h2>
          <h2
            className={`cursor-pointer ${
              content === "Review" ? "text-black" : "text-[#707070]"
            }`}
            onClick={() => setContent("Review")}
          >
            Reviews(4)
          </h2>
        </div>
        <p
          className={`w-[95%] lg:w-[80%] text-[#707070]     mb-10 hidden ${
            content === "Desc" && "md:block"
          }`}
        >
          Praesent ornare, ex a interdum consectetur, lectus diam sodales elit,
          vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper
          viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse
          potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit
          facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a
          ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi
          porta diam nisi, id finibus nunc tincidunt eu.
        </p>
        <p
          className={`w-[95%] lg:w-[80%] text-[#707070]     mb-10 hidden ${
            content === "Specs" && "md:block"
          }`}
        >
          Praesent ornare, ex a interdum consectetur, lectus diam sodales elit,
          vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper
          viverra. In lobortis egestas massa. Nam nec massa nisi.
        </p>
        <p
          className={`w-[95%] lg:w-[80%] text-[#707070]     mb-10 hidden ${
            content === "Review" && "md:block"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          expedita accusantium non recusandae, quaerat corporis at rem ipsa
          minus consectetur eum facilis id nam vero, magni dolor illum aliquam
          aperiam?
        </p>

        {/* Mobile */}
        <section className="transiton-display duration-400 ease-in-out">
          {/* Description */}
          <div className="w-full mb-10 border-t border-[#E4E4E4] pt-2 block md:hidden">
            <div
              className="block w-full gap-20 text-xl  mb-10 md:hidden "
              onClick={() => setOpenDesc(!openDesc)}
            >
              <h2 className="cursor-pointer flex w-full items-center justify-between">
                Description{" "}
                <span className="">
                  <ChevronDown />{" "}
                </span>
              </h2>
            </div>
            <p
              className={`w-[95%] lg:w-[80%] text-[#707070] ${
                openDesc ? "block " : "hidden"
              }`}
            >
              Praesent ornare, ex a interdum consectetur, lectus diam sodales
              elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem
              semper viverra. In lobortis egestas massa. Nam nec massa nisi.
              Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat.
              Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices
              dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus,
              non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt
              eu.
            </p>
          </div>

          {/* Specifications */}
          <div className="w-full mb-10 border-t border-[#E4E4E4] pt-2 block md:hidden">
            <div
              className="block w-full gap-20 text-xl  mb-10 md:hidden"
              onClick={() => setOpenSpecs(!openSpecs)}
            >
              <h2 className="cursor-pointer flex w-full items-center justify-between">
                Specifications{" "}
                <span className="">
                  <ChevronDown />{" "}
                </span>
              </h2>
            </div>
            <p
              className={`w-[95%] lg:w-[80%] text-[#707070] ${
                openSpecs ? "block" : "hidden"
              }`}
            >
              Praesent ornare, ex a interdum consectetur, lectus diam sodales
              elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem
              semper viverra. In lobortis egestas massa. Nam nec massa nisi.
              Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat.
              Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices
              dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus,
              non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt
              eu.
            </p>
          </div>

          {/* Review */}
          <div className="w-full mb-10 border-t border-[#E4E4E4] pt-2 block md:hidden">
            <div
              className="block w-full gap-20 text-xl  mb-10 md:hidden"
              onClick={() => setOpenReview(!openReview)}
            >
              <h2 className="cursor-pointer flex w-full items-center justify-between">
                Reviews(2){" "}
                <span className="">
                  <ChevronDown />{" "}
                </span>
              </h2>
            </div>
            <p
              className={`w-[95%] lg:w-[80%] text-[#707070] ${
                openReview ? "block" : "hidden"
              }`}
            >
              Praesent ornare, ex a interdum consectetur, lectus diam sodales
              elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem
              semper viverra. In lobortis egestas massa. Nam nec massa nisi.
              Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat.
              Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices
              dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus,
              non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt
              eu.
            </p>
          </div>
        </section>
        {/* Key Details */}
        <div className="">
          <h2 className="font-bold text-xl mb-5">Key Product Details</h2>
          <ul className="mb-10 text-[#707070] list-circle list pl-3">
            <li className="mb-2">4.5 inch HD Touch Screen (1280 * 720)</li>
            <li className="mb-2">Android 11</li>
            <li className="mb-2">1.4 GHZ Quad Core Proccessor</li>
            <li className="mb-2">
              20 MP front and 18 megapixel CMOS rear camera
            </li>
          </ul>
        </div>
      </section>
      <CardList
        title="More Products for you"
        text="View all fast selling products"
      />
      {/* Rating con */}
      <section className="mb-20 w-full">
        <h1 className="font-bold text-xl mb-10 pl-8 md:pl-0">
          Fair Shop Customer Ratings
        </h1>

        <section className="flex flex-col md:flex-row items-start w-[90%] md:w-full mx-auto md:mx-0 gap-10 md:gap-0">
          <div className=" w-full md:flex-1">
            <h1 className="text-[#FFA000] text-[70px] ">4.4</h1>
            <div className="w-full ">
              <div className="flex gap-2 md:flex-col md:w-[80px] mb-4">
                <div className="flex gap-2">
                  <StarFill className="text-2xl text-secondaryColor" />
                  <StarFill className="text-2xl  text-secondaryColor" />
                  <StarFill className="text-2xl text-secondaryColor" />
                </div>
                <div className="flex gap-2 justify-center">
                  <StarFill className="text-2xl  text-secondaryColor" />
                  <StarFill className="text-2xl  text-secondaryColor" />
                </div>
              </div>
              <p className="text-[#FFA000] text-xl">Our Ratings</p>
            </div>
          </div>
          {/* Rating Progress Bars */}
          <div className="w-full md:flex-[4] ">
            {/* Star 5 */}
            <div className="flex gap-10">
              <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                customLabel=" "
              />
              {/* 5star rating */}
              <div className="flex gap-2">
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <p className="text-[#FFA000] underline">45%</p>
              </div>
            </div>
            {/* Star 4 */}
            <div className="flex gap-10">
              <ProgressBar
                completed={60}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted four"
                customLabel=" "
              />
              {/* 4star rating */}
              <div className="flex gap-2">
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <p className="text-[#FFA000] underline">39%</p>
              </div>
            </div>

            {/* Star 3 */}
            <div className="flex gap-10">
              <ProgressBar
                completed={40}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted three"
                customLabel=" "
              />
              {/* 3star rating */}
              <div className="flex gap-2">
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <p className="text-[#FFA000] underline">13%</p>
              </div>
            </div>
            {/* Star 2 */}
            <div className="flex gap-10">
              <ProgressBar
                completed={30}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted two"
                customLabel=" "
              />
              {/* 2star rating */}
              <div className="flex gap-2">
                <StarFill className="text-lg  text-secondaryColor" />
                <StarFill className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <p className="text-[#FFA000] underline">2%</p>
              </div>
            </div>
            {/* Star1 */}
            <div className="flex gap-10">
              <ProgressBar
                completed={20}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted one"
                customLabel=" "
              />
              {/* 1star rating */}
              <div className="flex gap-2">
                <StarFill className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <Star className="text-lg  text-secondaryColor" />
                <p className="text-[#FFA000] underline">1%</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Comment Section */}
      <section className="w-[90%] md:w-[80%] mb-20 pl-8 md:pl-0 ">
        <h1 className="mb-10 text-xl md:text-2xl font-bold">
          Customer Reviews
        </h1>
        <ReviewList />
        {/* Add new Review */}
        <AddReview />
      </section>
      <CTA />
      <Footer />
    </main>
  );
};

export default SingleProduct;
