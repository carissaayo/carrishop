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
import AccountVerification from "../userAuth/AccountVerification";

const User = () => {
  let dispatch = useDispatch();
  const { pending, error, user, userInfo } = useSelector(
    (state) => state.user
  );
  const [current, setCurrent] = useState("profile");
  
  const navigate = useNavigate();
  const {userId} = useParams()

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

  useEffect(() => {
     if(user){
console.log("lo");

         loadUserInfo()
     }
  }, [userId ]);



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
      <section className="hidden sm:flex  md:hidden  border-b border-[#E8E9EB] mb-10  justify-between max-w-[900px]">
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

      {/* Account Headers Mobile till 400px*/}
      <section className=" flex sm:hidden    border-b border-[#E8E9EB] mb-10  justify-between max-w-[900px]">
        <Swiper
          spaceBetween={5}
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
        } w-[80%] mx-auto md:mx-0 md:w-full mb-24`}
      >
        {/* Profile Picture */}
        <div className="w-full mb-10">
          <h1 className="font-bold text-lg mb-3">Profile Picture</h1>
          {userInfo?.profile_picture && (
            <img
              src={userInfo?.profile_picture}
              alt=""
              className="rounded-full h-[200px] w-[200px]"
            />
          )}
        </div>

        <section className="w-full  ">
          {/* Name */}
          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* First Name */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-5 md:mb-0">
              <h1 className="mb-5">First Name</h1>
              <p
                type="text"
                className=" w-full  border border-[#E0E0E0]  p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.fullname?.split(" ")[0]}
              </p>
            </div>

            {/* Last Name */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Last Name</h1>
              <p
                type="text"
                className=" w-full  border border-[#E0E0E0]  p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.fullname?.split(" ")[1]}
              </p>
            </div>
          </div>

          {/* Email and Phone */}
          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Email */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Email</h1>
              <p
                type="email"
                className=" w-full  border border-[#E0E0E0] p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.email}
              </p>
            </div>

            {/* Phone Number  */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Phone Number</h1>
              <p
                type="text"
                className=" w-full  border border-[#E0E0E0]  p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.phone}
              </p>
            </div>
          </div>

          {/* Gender and DOB */}
          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Gender */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Gender</h1>
              <p
                type="text"
                className=" w-full  border border-[#E0E0E0]  p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.gender}
              </p>
            </div>

            {/* DOB  */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">Birthday</h1>
              <p
                type="text"
                className=" w-full  border border-[#E0E0E0] p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.date_of_birth?.slice(0, 10)}
              </p>
            </div>
          </div>

          {/* Address and City */}
          <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
            {/* Address */}
            <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
              <h1 className="mb-5">Addres</h1>
              <p
                type="text"
                className=" w-full  border border-[#E0E0E0]  p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.address}
              </p>
            </div>

            {/* City  */}
            <div className="w-full sm:w-[80%] md:w-[45%] ">
              <h1 className="mb-5">City</h1>
              <p
                type="text"
                className=" w-full  border border-[#E0E0E0] p-2 rounded-xl h-[50px]"
              >
                {userInfo && userInfo?.city}
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Change Password */}
      <ChangePassword current={current} />

      {/* Address Con */}
      <AddressCon current={current} />

      {/* Verification */}

      <AccountVerification current={current} />
      <Footer />
    </main>
  );
};

export default User;
