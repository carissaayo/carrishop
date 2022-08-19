import { Link } from "react-router-dom";
import { getAppointmentTime,getUserAppointment,getUserAppointments,getAppointment } from "../../redux/reducers/appointmentSlice";
import { loading} from "../../redux/reducers/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import GoBack from "../../components/HomeComponents/GoBack";
import Navbar from "../../components/HomeComponents/Navbar";

const GetAppointment = () => {
   
     let dispatch = useDispatch();
     const {  user } = useSelector((state) => state.user);

      const { done, message, error,appointmentTime,userAppointment } = useSelector((state) => state.appointment);



       const handleSubmit = async (e) => {
        //  e.preventDefault();
        //  dispatch(getAppointmentTime({ token: user?.access_token }));
        //     dispatch(getUserAppointment({ token: user?.access_token }));

         let message = "";
    let code = 0;
    let user = [];
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${user.access_token}`,
      },
    };
    const url = `https://api-staging-fairshop.herokuapp.com/api/v1/appointments/time-slots?location=62c6d7eb8844561b85c84234&date=2022-05-21`;

    try {
      dispatch(loading)
      const res = await axios.get(url, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;
      user = res.data.data;
dispatch(getAppointment({user,message,code}))
      return { message, code, user };

    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code,user };
    }
  }

       const handleSubmit2 = async (e) => {
         //  e.preventDefault();
         //  dispatch(getAppointmentTime({ token: user?.access_token }));
         //     dispatch(getUserAppointment({ token: user?.access_token }));

         let message = "";
         let code = 0;
         let user = [];
         const config = {
           headers: {
             "Access-Control-Allow-Origin": "*",
             Authorization: `Bearer ${user.access_token}`,
           },
         };
         const url = `https://api-staging-fairshop.herokuapp.com/api/v1/appointments/user`;
;

         try {
           dispatch(loading);
           const res = await axios.get(url, config);
           console.log(res.data);
           message = res.data.message;
           code = res.data.statusCode;
           user = res.data.data;
           dispatch(getUserAppointments({ user, message, code }));
           return { message, code, user };
         } catch (error) {
           console.log(error);
           message = error.response.data.message;
           code = error.response.status;

           return { message, code, user };
         }
       };
       

       useEffect(() => {
        handleSubmit();
        handleSubmit2()

       }, [])
       
  return (
    <main className="w-full h-full">
      <Navbar />
      <section className="py-4 px-[4%] sm:px-[3%] md:px-[5%]">
        <GoBack />
        <h1 className="text-center text-3xl my-[50px]">Check Appointment</h1>
        {done ? (
          <div className="text-center w-full">
           
            <div className="my-[20px]">
              {appointmentTime.map((time, i) => (
                <p key={i} className="my-[10px]">
                  {time.name}
                </p>
              ))}
            </div>
            <div>
              {userAppointment ? (
                <div>
                  {" "}
                  {userAppointment.map((time, i) => (
                    <p key={i}>{time}</p>
                  ))}
                </div>
              ) : (
                <p>You have no appointment yet</p>
              )}
            </div>
            <div className="w-full text-center mt-[20px] flex items-center justify-center">
              <Link
                to="/appointment/book-appointment"
                className="flex w-[max-content] p-4  h-[40px] rounded-3xl items-center justify-center bg-black text-whiteBg  text-sm lg:text-base font-bold "
              >
                Book Appointment
              </Link>
            </div>
          </div>
        ) : (
          <form
            action=""
            className="text-center w-full"
            // onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="">Get Appointment Time slots</h2>

            {error && (
              <div className="w-[300px]">
                <p className="text-[red]">{message}</p>
              </div>
            )}
            <div className="submit-btn-con flex">
              <button>Submit</button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
};

export default GetAppointment;
