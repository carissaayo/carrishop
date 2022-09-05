import React from 'react'
import { X,Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import googleLogo from "../assets/imgs/google-icon.png"
const CheckoutLogin = ({ setCheckoutLogin, checkoutLogin }) => {
  return (
    <main
      className={`w-[90%] xs:w-[80%]   sm:w-[60%] 2xl:w-[40%] h-full bg-primaryColor pt-10  z-50  transform-translate duration-500 ease-in-out  ${
        checkoutLogin ? "translate-x-0 " : "translate-x-[100%] "
      }`}
    >
      <div className="flex items-center justify-between w-[90%] mb-5 mx-auto">
        <h1 className="font-bold">SIGN IN</h1>
        <div className="flex items-center"><X
          className=" text-xl sm:text-3xl cursor-pointer"
          onClick={() => setCheckoutLogin(false)}
        />
        <p
          className="uppercase font-bold cursor-pointer"
          onClick={() => setCheckoutLogin(false)}
        >
          close
        </p></div>
      </div>

      <section
        className={` w-full sm:w-[95%]  pb-14  bg-primaryColor relative`}
      >
        <form
          className="w-[90%] mx-auto h-full mb-5"
          // onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col gap-4 mb-10">
            <label htmlFor="email" className="">
              Username <span className="text-[#E20000]">*</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              id="email"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
            />
          </div>

          <div className="flex flex-col gap-4 mb-10">
            <label htmlFor="password" className="">
              Password <span className="text-[#E20000]">*</span>
            </label>
            <input
              type="text"
              name=""
              id="password"
              placeholder="Password"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
            />
          </div>

          {/* {error && (
            <div className="w-[300px]">
              <p className="text-[red]">{message}</p>
            </div>
          )} */}
          <div className="flex items-center w-[90%] mx-[auto] rounded-full bg-[#FCA311] justify-center p-5 mb-10">
            <button type="submit" className="uppercase text-primaryColor">
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center gap-2 mb-5 w-[95%] lg:w-[80%] mx-auto">
          <div className="flex-[2] h-[10px] border-t border-[#EEEEEE] "></div>
          <div className=" flex-[4] sm:flex-[3] md:flex-[1.5]  relative ">
            <p className="relative left-2 xs:left-4 sm:left-2 bottom-1 font-bold uppercase">
              OR Login with
            </p>
          </div>
          <div className="flex-[2] h-[10px] border-t border-[#EEEEEE] "></div>
        </div>
        {/* Login with Google */}
        <div className="w-[90%] sm:w-[80%] mx-auto mb-5 md:mb-10">
          <button className="w-full border-[#EEEEEE] border p-4 rounded-full sm:text-xl font-bold flex items-center justify-center gap-2 sm:gap-4">
            <img src={googleLogo} alt="" className="w-8 h-8" />
            Continue with Google
          </button>
        </div>

        <div className="w-[80%] mx-auto border-t border-[#EEEEEE] flex items-center justify-center flex-col py-6">
          <Person className="text-[90px]" />
          <p className="mb-5">No account yet?</p>
          
            <Link to="/register" className="p-2 border-b border-[#FCA311] mb-10">
              CREATE AN ACCOUNT
            </Link>
        
        </div>
      </section>
    </main>
  );
};

export default CheckoutLogin