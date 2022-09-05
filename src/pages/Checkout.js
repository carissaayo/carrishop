import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/HomeComponents/Footer';
import StatesSelect from '../components/StatesSelect';

const Checkout = ({ setCheckoutLogin }) => {
  return (
    <main className="w-full h-full z-10">
      <div className="w-full flex items-center justify-center h-[20vh] border-[#F2F2F2] border-b-2  mb-20">
        <h1 className="text-3xl font-bold ">Checkout</h1>
      </div>
      <section className=" h-full sm:w-[90%] mx-auto md:mx-0 md:w-full mb-40 md:mb-20">
        {/* Login Link */}
        <p className="font-bold text-lg mb-10 w-[90%] mx-auto sm:w-full">
          Returning Customer?{" "}
          <button
            className="text-[#FCA311] ml-2"
            onClick={() => setCheckoutLogin(true)}
          >
            Login
          </button>
        </p>

        <h1 className="font-bold text-2xl mb-10 w-[90%] mx-auto sm:w-full">
          Billing Details
        </h1>

        {/* Details  and Order Con */}
        <section className="w-full flex flex-col     2xl:flex-row gap-10 mb-20">
          {/*Details  */}
          <div className="w-[90%] mx-auto sm:w-full lg:flex-1">
            {/* Name  */}
            <div className=" w-full    mb-10 sm:flex gap-4">
              <div className="sm:w-[50%] 2xl:w-[45%]">
                {" "}
                <h1 className="mb-5">
                  First Name
                  <span className="text-[#FF0000] ml-2">*</span>
                </h1>
                <input
                  type="text"
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  placeholder=""
                />
              </div>
              <div className="sm:w-[50%] 2xl:w-[45%]">
                <h1 className="mb-5">
                  Last Name
                  <span className="text-[#FF0000] ml-2">*</span>
                </h1>
                <input
                  type="text"
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  placeholder=""
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="w-full mb-10">
              {" "}
              <h1 className="mb-5">
                Phone Number
                <span className="text-[#FF0000] ml-2">*</span>
              </h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* Email Address */}
            <div className="w-full mb-10">
              {" "}
              <h1 className="mb-5">
                Email Address
                <span className="text-[#FF0000] ml-2">*</span>
              </h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* State */}
            <div className="w-full mb-10">
              <h1 className="mb-5">
                State <span className="text-[#FF0000] ml-2">*</span>
              </h1>

              <StatesSelect />
            </div>

            {/* City */}
            <div className="w-full mb-10">
              {" "}
              <h1 className="mb-5">
                City
                <span className="text-[#FF0000] ml-2">*</span>
              </h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* Street Address */}
            <div className="w-full mb-10">
              {" "}
              <h1 className="mb-5">
                Street Address
                <span className="text-[#FF0000] ml-2">*</span>
              </h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* Create An Account */}
            <div className="flex gap-4 items-center mb-10">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-6 h-6 cursor-pointer"
              />
              <p className="">Create an account</p>
            </div>
          </div>

          {/* Order */}
          <div className=" flex-1 bg-[#F6F6F6] h-full ">
            <h1 className="text-center w-full mb-10 text-xl py-10 ">
              YOUR ORDER
            </h1>
            {/* Order Con */}
            <div className="bg-primaryColor px-4 w-[90%] mb-10 mx-auto">
              {/* Order Title */}
              <div className="flex items-center justify-between  border-b border-[#EEEEEE] p-4">
                <h2 className="font-bold">PRODUCT</h2>
                <h2 className="font-bold">SUBTOTAL</h2>
              </div>

              {/* Order Name and  Total price */}
              <div className="flex items-center justify-between  border-b border-[#EEEEEE] p-4 text-[#878787]">
                <h2 className="text-sm sm:text-base">Iphone Red 128GB * 1</h2>
                <h2 className="text-sm sm:text-base">₦260,000.00</h2>
              </div>

              {/* Order Subtotal price */}
              <div className="flex items-center justify-between  border-b border-[#EEEEEE] p-4">
                <h2 className="font-bold">Subtotal</h2>
                <h2 className="font-bold text-[#FCA311]">₦260,000.00</h2>
              </div>

              {/* DeliveryFee */}
              <div className="flex w-full border-b border-[#F2F2F2] items-center p-4 flex-col sm:flex-row gap-4 sm:gap-0">
                <p className="flex-1 font-bold">Delivery</p>
                <div className="flex-[3] ">
                  <p className="flex justify-end mb-2 items-center text-sm sm:text-base font-bold">
                    Delivery: <span className="text-[#FCA311] ml-4">₦1000</span>
                    <input
                      type="radio"
                      name="delivery"
                      id=""
                      className="rounded-xl w-[20px] h-[20px] ml-2 cursor-pointer checkout-radio"
                    />
                    <div className="checkout-custom-radio   ">
                      <p className=""></p>
                    </div>
                  </p>
                  <p className="flex justify-end mb-2 items-center text-sm sm:text-base font-bold">
                    Local pickup:{" "}
                    <span className="text-[#FCA311] ml-4">₦0</span>
                    <input
                      type="radio"
                      name="delivery"
                      id=""
                      className="rounded-xl w-[20px] h-[20px] ml-2  cursor-pointer checkout-radio"
                    />
                    <div className="checkout-custom-radio   ">
                      <p className=""></p>
                    </div>
                  </p>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between p-4 w-full">
                <h3 className="text-xl">Total</h3>
                <p className="text-[#FCA311] text-xl">₦100,000.00</p>
              </div>
            </div>
            {/* Payment Options */}
            <div className=" w-[90%] mx-auto mb-10">
              <div className="flex mb-5 items-center">
                <input
                  type="radio"
                  name="pay-on-delivery"
                  value="yes-pay-on-delivery"
                  id=""
                  className="rounded-xl w-[20px] h-[20px] ml-2  cursor-pointer checkout-radio "
                />
                <div className="checkout-custom-radio  delivery ">
                  <p className=""></p>
                </div>
                <p className="ml-4">Pay on delivery</p>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="pay-on-delivery"
                  value="pay-with-card"
                  id=""
                  className="rounded-xl w-[20px] h-[20px] ml-2  cursor-pointer checkout-radio "
                />
                <div className="checkout-custom-radio  delivery ">
                  <p className=""></p>
                </div>
                <p className="ml-4">Pay with card</p>
              </div>
            </div>
            {/* Agree to Terms */}
            <div className="flex gap-4 items-center mb-10 w-[90%] mx-auto">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-6 h-6 cursor-pointer"
              />
              <p className="">
                I have read and agreed to this{" "}
                <span className="text-[#FCA311]">
                  website’s terms and conditions{" "}
                  <span className="text-[#FF0000]">*</span>
                </span>
              </p>
            </div>

            {/* Proceed to  */}
            <div className="w-[90%] mx-auto mb-10 flex items-center justify-center">
              <Link
                to="/checkout"
                className=" w-full bg-[#FCA311] p-4 px-6 text-primaryColor rounded-full text-center "
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Checkout