import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  accountVerification,
  loading,
  clearAccounDetails,
} from "../../redux/reducers/userSlice";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/HomeComponents/Navbar";
import GoBack from "../../components/HomeComponents/GoBack";

const AccountVerification = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const { done, message, error, code, user } = useSelector(
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


  useEffect(()=>{
dispatch(clearAccounDetails());
  },[])
  return (
    <main className="w-full h-full">
      <Navbar />
      <section className="py-4 px-[4%] sm:px-[3%] md:px-[5%]">
        <GoBack />
        <h1 className="text-center text-3xl my-[50px]">Account Verification</h1>

        {done ? (
          <div className="w-full text-center">
            <span class="material-symbols-outlined mb-[20px]">task_alt</span>
            <p className="mb-[20px]">Your account information has been sent </p>
          </div>
        ) : (
          <form className="my-[30px] w-full" onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-2 gap-[30px] mb-[10px]">
              <div className="">
                <label htmlFor="address">
                  Address <span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="address"
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="">
                <label htmlFor="city">
                  City <span>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="">
                <label htmlFor="gender">
                  Gender<span>*</span>
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option defaultValue="true" value="male">
                    Male
                  </option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="state">
                  State <span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="state"
                  placeholder="Your Number"
                  value={stateOfOrigin}
                  onChange={(e) => setStateOfOrigin(e.target.value)}
                />
              </div>

              <div className="">
                <label htmlFor="number">
                  Type of ID <span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="id_type"
                  placeholder="id_type"
                  value={id_type}
                  onChange={(e) => setId_type(e.target.value)}
                />
              </div>

              <div className="flex gap-[20px] items-center">
                <p> id_file</p>
                <label className="w-[max-content] h-full flex items-center justify-between border">
                  <p className=" bg-[gray] border p-2 cursor-pointer">
                    Choose File
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleIdFile(e)}
                    className="h-0 w-0"
                  />
                </label>
              </div>

              <div className="flex gap-[20px] items-center ">
                <p>Profile</p>
                <label className="w-[max-content] h-full flex items-center justify-between border">
                  <p className=" bg-[gray] border p-2 cursor-pointer">
                    Choose File
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleProfile(e)}
                    className="h-0 w-0"
                  />
                </label>
              </div>
              <div className="">
                <label htmlFor="date_of_birth">
                  date of birth<span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="date_of_birth"
                  placeholder="date_of_birth"
                  value={date_of_birth}
                  onChange={(e) => setDate_of_birth(e.target.value)}
                />
              </div>

              <div className="">
                <label htmlFor="next_of_kin_name">
                  next of kin name <span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="next_of_kin_name"
                  placeholder="date_of_birth"
                  value={next_of_kin_name}
                  onChange={(e) => setNext_of_kin_name(e.target.value)}
                />
              </div>

              <div className="">
                <label htmlFor="next_of_kin_address">
                  next of kin address <span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="next_of_kin_address"
                  placeholder="next_of_kin_address"
                  value={next_of_kin_address}
                  onChange={(e) => setNext_of_kin_address(e.target.value)}
                />
              </div>

              <div className="">
                <label htmlFor="next_of_kin_phone">
                  next of kin phone <span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id="next_of_kin_phone"
                  placeholder="next_of_kin_phone"
                  value={next_of_kin_phone}
                  onChange={(e) => setNext_of_kin_phone(e.target.value)}
                />
              </div>
            </div>
            {error && (
              <div className="w-[300px]">
                <p className="text-[red]">{message}</p>
              </div>
            )}

            <div className="  w-full text-center ">
              <button type="submit" className="cursor-pointer border p-2">
                Submit
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
};

export default AccountVerification;
