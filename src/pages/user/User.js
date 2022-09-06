import { useNavigate, Link ,useParams} from "react-router-dom";
import { useEffect } from "react";
import { getUserInfo,loading,getUser, updateUserInfo } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { CalendarCheck, PersonFill, PersonLinesFill } from "react-bootstrap-icons";
import Footer from "../../components/HomeComponents/Footer";

const User = () => {
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

if(error) return (
  <div className="flex h-screen w-full items-center justify-center">
    <h1 >Error</h1>
  </div>
);

  return (
    <main className="w-full h-full pt-6">
      <div className="flex w-full h-[20vh] justify-center items-center ">
        <h1 className="font-bold text-3xl">My Account</h1>
      </div>

      {/* Account Headers */}
      <section className="w-full flex border-b border-[#E8E9EB] items-center justify-between mb-10">
        {/* Details */}
        <button className="flex items-center py-4 border-b-2 border-[#FCA311] gap-2">
          <PersonFill className="text-[#FCA311]" />
          <span className="sm:text-lg font-bold text-[#FCA311]">
            Profile Details
          </span>
        </button>

        {/* Change Password */}
        <button className="flex items-center py-4   gap-2">
          <PersonFill className="" />
          <span className="sm:text-lg font-bold ">Change Password</span>
        </button>

        {/* Address Book */}
        <button className="flex items-center py-4   gap-2">
          <PersonLinesFill className="" />
          <span className="sm:text-lg font-bold ">Address Book</span>
        </button>

        {/* Verification */}
        <button className=" hidden md:flex items-center py-4   gap-2">
          <CalendarCheck className="" />
          <span className="sm:text-lg font-bold ">Verification</span>
        </button>
      </section>

      {/* Profile Details */}
      <section className="w-[80%] mx-auto md:mx-0 md:w-full mb-20">
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

      <Footer />
    </main>
  );
};

export default User;
