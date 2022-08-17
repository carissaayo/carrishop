import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { bookAppointment } from "../../redux/reducers/appointmentSlice";

import { useDispatch, useSelector } from "react-redux";

const BookAppointment = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const { done, message, error ,user} = useSelector((state) => state.user);


  const [user_city, setUser_city] = useState("ilroin");
  const [brand, setBrand] = useState("Apple");
  const [date, setDate] = useState("10-10-2022");
  const [product_category, setProduct_category] = useState("25674889905");
  const [product_list, setProduct_list] = useState("366474488559");
  const [location, setLocation] = useState("Ibadan");
  const [desc, setDesc] = useState("Iphone 12 pro max");
  const [time_slot, setTime_slot] = useState("10AM-11AM");
  const [phoneSpec, setPhoneSpec] = useState("64GB ROM and 4GB RAM");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
const data={
       location, 
       desc,
       time_slot,
       phoneSpec,
       date,
       user_city,
       brand,
       product_category,
       product_list,
       
       }
    dispatch(bookAppointment({data,token:user?.access_token}));
  };

  return (
    <main className="register w-full h-screen">
      <div className=" flex w-full h-full items-center justify-center">
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

            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="password">
                Phone Image <span>*</span>
              </label>
              <input
                type="file"
                name=""
                id=""
                placeholder="4RAM and 128ROM"
                value={image}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            {error && (
              <div className="w-[300px]">
                <p className="text-[red]">{message}</p>
              </div>
            )}
            <div className="submit-btn-con flex mt-[30px]">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default BookAppointment;
