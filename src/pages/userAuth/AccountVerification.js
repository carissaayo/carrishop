import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  accountVerification,
  loading,
  closeSnap,
} from "../../redux/reducers/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { CloudArrowUp, X } from "react-bootstrap-icons";
import Loading from "../../components/auxComponents/Loading";

const AccountVerification = ({current}) => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const { done, message, error,  user,pending,openSnap,userInfo } = useSelector(
    (state) => state.user
  );

  const [address, setAddress] = useState(" 33,Sango Otta");
  const [city, setCity] = useState("Ilorin");
  const [gender, setGender] = useState("Male");
  const [date_of_birth, setDate_of_birth] = useState("2022-05-16");
  const [stateOfOrigin, setStateOfOrigin] = useState(
    "62c6c68d45d91f9350d17fbb"
  );
  const [id_type, setId_type] = useState("NIN");
  let profile = null;
  let id_file = null;
  const [next_of_kin_address, setNext_of_kin_address] = useState(
    "22, james paul avenue"
  );
  const [next_of_kin_name, setNext_of_kin_name] = useState("James Paul");
  const [next_of_kin_phone, setNext_of_kin_phone] = useState("08055625421");
  const newdata = new FormData();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    newdata.append("address", address);
    newdata.append("city", city);
    newdata.append("state", stateOfOrigin);
    newdata.append("gender", gender);
    newdata.append("date_of_birth", date_of_birth);
    newdata.append("id_type", id_type);
    newdata.append("next_of_kin_name", next_of_kin_name);
    newdata.append("next_of_kin_phone", next_of_kin_phone);
    newdata.append("next_of_kin_address", next_of_kin_address);
    console.log(newdata.has("id_file"));
    console.log(newdata.has("profile"));

    dispatch(loading);
    dispatch(accountVerification({ newdata, token: user?.access_token }));
  };

  const handleProfile = (e) => {
    profile = e.target.files[0];
    newdata.append("profile", profile);
    console.log(newdata.get("profile"));
  };

  const handleIdFile = (e) => {
    id_file = e.target.files[0];

    newdata.append("id_file", id_file);
    console.log(newdata.get("id_file"));
  };


  return (
    <section
      className={`${
        current === "verification" ? "block relative " : "hidden"
      } w-[80%] mx-auto md:mx-0 md:w-full mb-20 `}
    >
   
      {/* SnackBar */}
      <div className={`snackbar  ${openSnap ? "show" : ""}`}>
        <div className="flex justify-end ">
          <X
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(closeSnap())}
          />
        </div>
        {error && (
          <p className="mb-5">
            {Array.isArray(message) ? message[0] : message}
          </p>
        )}
        {done && (
          <div className="h-[10vh]">
            <p className="mb-4">Your infomation has been sent</p>
            <p className="">
              Please go to details section snd refresh to see your updated
              details
            </p>
          </div>
        )}
      </div>
      {pending ? (
        <Loading />
      ) : (
        <form className="my-[30px] w-full" onSubmit={(e) => handleSubmit(e)}>
          <section className="w-full  ">
            <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
              {/* Date of Birth*/}
              <div className="w-full sm:w-[80%] md:w-[45%] mb-5 md:mb-0">
                <h1 className="mb-5">Date of Birth</h1>
                <input
                  type="date"
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  disabled={userInfo?.date_of_birth}
                  value={date_of_birth}
                  onChange={(e) => setDate_of_birth(e.target.value)}
                />
              </div>

              {/* User’s Profile Picture */}
              <div className="w-full sm:w-[80%] md:w-[45%] ">
                <h1 className="mb-5">User’s Profile Picture</h1>
                <label className="w-full h-[50px] flex items-center justify-between border border-[#EEEEEE] rounded-xl">
                  <p className=" bg-[#F6F6F6] p-3 cursor-pointer">
                    <CloudArrowUp className="text-2xl text-[#CECECE]" />
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleProfile(e)}
                    className="h-0 w-0"
                    disabled={userInfo?.profile_picture}
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
              {/* Id Type*/}
              <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
                <h1 className="mb-5">Id Type</h1>
                <select
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  disabled={userInfo?.id_type}
                  value={id_type}
                  onChange={(e) => setId_type(e.target.value)}
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
                <label className="w-full h-[50px] flex items-center justify-between border border-[#EEEEEE] rounded-xl">
                  <p className="bg-[#F6F6F6] p-3 cursor-pointer">
                    <CloudArrowUp className="text-2xl text-[#CECECE]" />
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleIdFile(e)}
                    className="h-0 w-0"
                    disabled={userInfo?.profile_picture}
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
              {/* Next of Kin Full Name */}
              <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
                <h1 className="mb-5">Next of Kin Full Name</h1>
                <input
                  type="text"
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  disabled={userInfo?.next_of_kin?.name}
                  placeholder=""
                  value={next_of_kin_name}
                  onChange={(e) => setNext_of_kin_name(e.target.value)}
                />
              </div>

              {/*Gender  */}
              <div className="w-full sm:w-[80%] md:w-[45%] ">
                <h1 className="mb-5">Gender</h1>
                <select
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  placeholder=""
                  disabled={userInfo?.gender}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>

                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            {/* Address and City */}
            <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
              {/* Address */}
              <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
                <h1 className="mb-5">Addres</h1>
                <input
                  type="text"
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  disabled={userInfo?.address}
                  placeholder=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {/* City  */}
              <div className="w-full sm:w-[80%] md:w-[45%] ">
                <h1 className="mb-5">City</h1>
                <input
                  type="text"
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  disabled={userInfo?.city}
                  placeholder=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between mb-10 flex-col md:flex-row">
              {/* Next of Kin address  */}
              <div className="w-full sm:w-[80%] md:w-[45%] mb-10 md:mb-0">
                <h1 className="mb-5">Next of Kin address </h1>
                <input
                  type="text"
                  disabled={userInfo?.next_of_kin?.address}
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  placeholder=""
                  value={next_of_kin_address}
                  onChange={(e) => setNext_of_kin_address(e.target.value)}
                />
              </div>

              {/* Next of Kin phone number   */}
              <div className="w-full sm:w-[80%] md:w-[45%] ">
                <h1 className="mb-5">Next of Kin phone number </h1>
                <input
                  type="text"
                  className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
                  disabled={userInfo?.next_of_kin?.phone}
                  placeholder=""
                  value={next_of_kin_phone}
                  onChange={(e) => setNext_of_kin_phone(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex items-center justify-center mb-20">
              <button
                disabled={userInfo?.is_registration_complete}
                type="submit"
                className={`disabled:bg-[grey] disabled:pointer-events-none bg-[#FCA311] w-3/4  md:w-1/2 rounded-full h-[50px] text-primaryColor`}
              >
                SAVE
              </button>
            </div>
          </section>
        </form>
      )}
    </section>
  );
};

export default AccountVerification;
