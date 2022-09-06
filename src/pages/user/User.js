import { useNavigate, Link ,useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserInfo,loading,getUser, updateUserInfo } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { CalendarCheck, PencilFill, PersonFill, PersonLinesFill,  ShieldLockFill, } from "react-bootstrap-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// components
import Footer from "../../components/HomeComponents/Footer";
import AddressItem from "../../components/AddressItem";
import ChangePassword from "../../components/ChangePassword";
import AddressCon from "../../components/AddressCon";

const User = () => {
  const [current, setCurrent] = useState("profile")
  const navigate = useNavigate();
  const {userId} = useParams()

  let dispatch = useDispatch();
  const { pending, error, user, userInfo } = useSelector(
    (state) => state.user
  );
  const loadUserInfo =async () => {
let message = "";
let code = 0;
let info = [];

     const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${ user?.access_token}`,
    },
  };
  const url = `https://api-staging-fairshop.herokuapp.com/api/v1/users/info`;

  try {
    const res = await axios.get(url, config);
    console.log(res.data);
    message = res.data.message;
    code = res.data.statusCode;
   info = res.data.data;
   dispatch(loading())
   dispatch(updateUserInfo({ message, code, info }));
    return { message, code, info };
  } catch (error) {
    console.log(error);
    message = error.response.data.message;
    code = error.response.status;
    return { message, code };
  }
  };

//   useEffect(() => {
//      if(user){
// console.log("lo");

//          loadUserInfo()
//      }
//   }, [userId]);



  return (
    <main className="w-full h-full pt-6 ">
      <div className="flex w-full h-[20vh] justify-center items-center ">
        <h1 className="font-bold text-3xl">My Account</h1>
      </div>

      {/* Account Headers Desktop*/}
      <section className=" hidden lg:flex border-b border-[#E8E9EB] mb-10   justify-between w-full">
        {/* Details */}

        <button
          className={`flex items-center py-4  gap-2 ${
            current === "profile"
              ? "border-b-2 border-[#FCA311] text-[#FCA311]"
              : ""
          }`}
          onClick={() => setCurrent("profile")}
        >
          <PersonFill className="" />
          <span className="text-base lg:text-lg font-bold ">
            Profile Details
          </span>
        </button>

        {/* Change Password */}

        <button
          className={`flex items-center py-4  gap-2 ${
            current === "change-password"
              ? "border-b-2 border-[#FCA311] text-[#FCA311]"
              : ""
          }`}
          onClick={() => setCurrent("change-password")}
        >
          <ShieldLockFill className="" />
          <span className="text-base lg:text-lg font-bold ">
            Change Password
          </span>
        </button>

        {/* Address Book */}

        <button
          className={`flex items-center py-4  gap-2 ${
            current === "address"
              ? "border-b-2 border-[#FCA311] text-[#FCA311]"
              : ""
          }`}
          onClick={() => setCurrent("address")}
        >
          <PersonLinesFill className="" />
          <span className="text-base lg:text-lg font-bold ">Address Book</span>
        </button>

        {/* Verification */}
        <button
          className={`hidden md:flex items-center py-4  gap-2 ${
            current === "verification"
              ? "border-b-2 border-[#FCA311] text-[#FCA311]"
              : ""
          }`}
          onClick={() => setCurrent("verification")}
        >
          <CalendarCheck className="" />
          <span className="text-base lg:text-lg font-bold ">Verification</span>
        </button>
      </section>

      {/* Account Headers Mobile till 1098px*/}
      <section className=" hidden border-b border-[#E8E9EB] mb-10  md:flex lg:hidden justify-between max-w-[900px]">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="slider"
        >
          {/* Details */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "profile"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("profile")}
            >
              <PersonFill className="" />
              <span className="text-base lg:text-lg font-bold ">
                Profile Details
              </span>
            </button>
          </SwiperSlide>
          {/* Change Password */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "change-password"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("change-password")}
            >
              <ShieldLockFill className="" />
              <span className="text-base lg:text-lg font-bold ">
                Change Password
              </span>
            </button>
          </SwiperSlide>

          {/* Address Book */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "address"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("address")}
            >
              <PersonLinesFill className="" />
              <span className="text-base lg:text-lg font-bold ">
                Address Book
              </span>
            </button>
          </SwiperSlide>
          {/* Verification */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "verification"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("verification")}
            >
              <CalendarCheck className="" />
              <span className="text-base lg:text-lg font-bold ">
                Verification
              </span>
            </button>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Account Headers Mobile till 840px*/}
      <section className="md:hidden  border-b border-[#E8E9EB] mb-10  flex justify-between max-w-[900px]">
        <Swiper
          spaceBetween={25}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="slider"
        >
          {/* Details */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "profile"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("profile")}
            >
              <PersonFill className="" />
              <span className="text-base lg:text-lg font-bold ">
                Profile Details
              </span>
            </button>
          </SwiperSlide>
          {/* Change Password */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "change-password"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("change-password")}
            >
              <ShieldLockFill className="" />
              <span className="text-base lg:text-lg font-bold ">
                Change Password
              </span>
            </button>
          </SwiperSlide>

          {/* Address Book */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "address"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("address")}
            >
              <PersonLinesFill className="" />
              <span className="text-base lg:text-lg font-bold ">
                Address Book
              </span>
            </button>
          </SwiperSlide>
          {/* Verification */}
          <SwiperSlide className="slide">
            <button
              className={`flex items-center py-4  gap-2 ${
                current === "verification"
                  ? "border-b-2 border-[#FCA311] text-[#FCA311]"
                  : ""
              }`}
              onClick={() => setCurrent("verification")}
            >
              <CalendarCheck className="" />
              <span className="text-base lg:text-lg font-bold ">
                Verification
              </span>
            </button>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Profile Details */}
      <section
        className={`${
          current === "profile" ? "block " : "hidden"
        } w-[80%] mx-auto md:mx-0 md:w-full mb-20`}
      >
        {/* Profile Picture */}
        <div className="w-full mb-10">
          <h1 className="font-bold text-lg">Profile Picture</h1>
        </div>

        <section className="w-full  ">
          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* First Name */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-5 md:mb-0">
              <h1 className="mb-5">First Name</h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* Last Name */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Last Name</h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Email */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Email</h1>
              <input
                type="email"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* Phone Number  */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Phone Number</h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Gender */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Gender</h1>
              <select
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              >
                <option value="" disabled>
                  Select Gender
                </option>

                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Phone Number  */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Phone Number</h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-center mb-20">
            <button className="bg-[#FCA311] w-3/4  md:w-1/2 rounded-full h-[50px] text-primaryColor">
              SAVE
            </button>
          </div>
        </section>
      </section>

      {/* Change Password */}
      <ChangePassword current={current} />

      {/* Address Con */}
      <AddressCon current={current} />

      {/* Verification */}
      <section
        className={`${
          current === "verification" ? "block " : "hidden"
        } w-[80%] mx-auto md:mx-0 md:w-full mb-20`}
      >
        <section className="w-full  ">
          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Date of Birth*/}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-5 md:mb-0">
              <h1 className="mb-5">Date of Birth</h1>
              <input
                type="date"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* User’s Profile Picture */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">User’s Profile Picture</h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Id Type*/}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Id Type</h1>
              <select
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              >
                <option value="" disabled>
                  Select Id Type
                </option>

                <option value="NIN">NIN</option>
                <option value="Driver's License">Driver's License</option>
              </select>
            </div>

            {/* Upload id image  */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Upload id image</h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Next of Kin Full Name */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Next of Kin Full Name</h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* Relationship with next of kin  */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Relationship with next of kin</h1>
              <select
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              >
                <option value="" disabled>
                  Choose Relationship
                </option>

                <option value="Parent">Parent</option>
                <option value="Child">Child</option>
                <option value="Sibling">Sibling</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Next of Kin address  */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Next of Kin address </h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>

            {/* Next of Kin phone number   */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Next of Kin phone number </h1>
              <input
                type="text"
                className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                placeholder=""
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-center mb-20">
            <button className="bg-[#FCA311] w-3/4  md:w-1/2 rounded-full h-[50px] text-primaryColor">
              SAVE
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default User;
