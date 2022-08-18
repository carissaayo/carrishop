import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  bookAppointment,
  clearAppointment,
} from "../../redux/reducers/appointmentSlice";

import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/HomeComponents/Navbar";
import GoBack from "../../components/HomeComponents/GoBack";

const BookAppointment = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const { done, message, error} = useSelector((state) => state.appointment);
  const {  user } = useSelector(
    (state) => state.user
  );


  const [user_city, setUser_city] = useState("Ilorin");
  const [brand, setBrand] = useState("62c7f63f4e5fe8814f83684d");
  const [date, setDate] = useState("2022-05-21");
  const [product_category, setProduct_category] = useState("62c7f8b342cd37c2a69b3307");
  const [product_list, setProduct_list] = useState("62c83ce3eced899955c0b93a");
  const [location, setLocation] = useState("62c6d7eb8844561b85c84234");
  const [desc, setDesc] = useState("Iphone 12 pro max");
  const [time_slot, setTime_slot] = useState("03:00PM - 04:00PM");
  const [phoneSpec, setPhoneSpec] = useState("64GB ROM and 4GB RAM");

  const phoneData = new FormData()
  let image="";
  const handleIdFile = (e) => {
    image = e.target.files[0];
console.log(image);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
       phoneData.append("location", location);
       phoneData.append("description", desc);
       phoneData.append("time_slot", time_slot);
       phoneData.append("specification", phoneSpec);
       phoneData.append("date", date);
       phoneData.append("user_city", user_city);
       phoneData.append("brand", brand);
       phoneData.append("product_category", product_category);
       phoneData.append("product_list", product_list);
       console.log(phoneData.has("image"));
    dispatch(bookAppointment({phoneData,token:user?.access_token}));
  };
useEffect(()=>{
  dispatch(clearAppointment());
},[])
  return (
    <main className="register w-full h-screen">
       <Navbar />
      <section className="py-4 px-[4%] sm:px-[3%] md:px-[5%]">
        <GoBack />
        <h1 className="text-center text-3xl my-[50px]">Book An Appointment</h1>

        {done ? (
          <div>
            <span class="material-symbols-outlined">task_alt</span>
            <p>Appointment Booked successfully</p>
            <p className="">
              <Link to="/">Go Back Home</Link>
            </p>
          </div>
        ) : (
          <form
            className="register__form flex items-center justify-center flex-col gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="register__title">Book Appointment</h2>
            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="fullname">
                Location <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="inviteCode">
                product category <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                value={product_category}
                onChange={(e) => setProduct_category(e.target.value)}
              />
            </div>

            <div className="register__input_con items-center justify-center gap-4 flex">
              <label htmlFor="inviteCode">
                product list <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id="inviteCode"
                placeholder=""
                value={product_list}
                onChange={(e) => setProduct_list(e.target.value)}
              />
            </div>
            <div className="register__input_con flex  items-center justify-center gap-4">
              <label htmlFor="email">
                Your City <span>*</span>
              </label>
              <input
                type="text"
                placeholder=""
                id="email"
                value={user_city}
                onChange={(e) => setUser_city(e.target.value)}
              />
            </div>
           
            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="password">
                Phone Brand <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="password">
                Phone Desc <span>*</span>
              </label>
              <textarea
                type="text"
                name=""
                id=""
                placeholder=""
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="password">
                Time <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                value={time_slot}
                onChange={(e) => setTime_slot(e.target.value)}
              />
            </div>

            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="password">
                Date <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="password">
                Phone Specification <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="4RAM and 128ROM"
                value={phoneSpec}
                onChange={(e) => setPhoneSpec(e.target.value)}
              />
            </div>

          <div className="flex gap-[20px] items-center">
                <p> Phone image</p>
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

            {error  && (
              <div className="w-[300px]">
                <p className="text-[red]">{message}</p>
              </div>
            )}
            <div className="submit-btn-con flex mt-[30px]">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
};

export default BookAppointment;
