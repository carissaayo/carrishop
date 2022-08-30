import { StarFill, Star } from "react-bootstrap-icons";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import p1 from "../../assets/imgs/p1.jfif";
import p2 from "../../assets/imgs/p2.jfif";
import p3 from "../../assets/imgs/p3.jfif";
import CardList from "../../components/HomeComponents/CardList";

import CTA from "../../components/HomeComponents/CTA";
import Footer from "../../components/HomeComponents/Footer";

const SingleProduct = () => {
  return (
    <main className="w-full h-full">
      {/* Images and Description */}
      <section className="w-full h-full flex items-start justify-between mb-40">
        {/* Product Images */}
        <div className="flex-[2] ">
          <div className="mb-14">
            <img src={p1} alt="" />
          </div>
          <div className="flex pl-12 w-[90%] justify-between">
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
        <div className="flex-[4]">
          <h2 className="mb-4 text-[#343434]">Phones </h2>
          <h1 className="mb-8">Samsung A21 - 6GB 124 Internal Memory</h1>
          <div className="flex gap-2 items-center mb-10">
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
            <div className="w-2 h-6 border-r-2 border-[#868686]"></div>

            {/* Availability in Stock */}
            <p className="text-lg text-[#868686]">
              {" "}
              Status:{" "}
              <span className="text-[green] font-bold ml-2">In Stock</span>
            </p>
          </div>

          {/* Specs */}
          <section className="w-[70%] mb-10">
            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] pb-4">
              <h2 className="text-xl font-bold">Display</h2>
              <p className="text-[#777777]">
                4.5 inch HD Touch Screen (1280 * 720)
              </p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-xl font-bold">Processor</h2>
              <p className="text-[#777777]">Apple A10</p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-xl font-bold">OS</h2>
              <p className="text-[#777777]">IOS 11</p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-xl font-bold">Internal Memory</h2>
              <p className="text-[#777777]">128GB</p>
            </div>

            {/* Spec */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <h2 className="text-xl font-bold">Battery Capacity</h2>
              <p className="text-[#777777]">1960mAh</p>
            </div>
          </section>

          <h1 className="mb-10 text-2xl"> &#8358; 768,999</h1>
          <div className="flex gap-4">
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

      {/* Description */}
      <section className="w-full h-full mb-20 ">
        <div className="flex w-full gap-20 text-xl cursor-pointer mb-10">
          <h2 className="">Description</h2>
          <h2 className="text-[#707070]">Specifications</h2>
          <h2 className="text-[#707070]">Reviews(4)</h2>
        </div>
        <p className="w-[80%] text-[#707070] mb-10">
          Praesent ornare, ex a interdum consectetur, lectus diam sodales elit,
          vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper
          viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse
          potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit
          facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a
          ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi
          porta diam nisi, id finibus nunc tincidunt eu.
        </p>

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
        <h1 className="font-bold text-xl mb-10">Fair Shop Customer Ratings</h1>

        <section className="flex items-start">
          <div className="flex-1">
            <h1 className="text-[#FFA000] text-[70px]">4.4</h1>
            <div className="w-full">
              <div className="flex gap-2 flex-col w-[40%] mb-4">
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
          <div className="flex-[4] ">
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
      <section className="w-full">
        <h1 className="">Customer Reviews</h1>
      </section>
      <CTA />
      <Footer />
    </main>
  );
};

export default SingleProduct;