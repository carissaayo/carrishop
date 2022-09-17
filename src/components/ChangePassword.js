import { useState } from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword, closeSnap, resetPassword } from "../redux/reducers/userSlice";
import Loading from "./auxComponents/Loading";


const ChangePassword = ({current}) => {
      const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

      const { done, message, error, openSnap, pending } = useSelector(
        (state) => state.user
      );
      const navigate = useNavigate();
    let dispatch = useDispatch();
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(resetPassword(email));
    };

    const handleSubmitB = async (e) => {
      e.preventDefault();
      dispatch(changePassword(password));
    };
    
  return (
    <section
      className={`${
        current === "change-password" ? "flex relative " : "hidden"
      } w-[80%] mx-auto md:mx-0 md:w-full mb-24 items-center justify-center flex-col gap-10`}
    >
      <h1 className="text-xl ">Enter your Email, a link will be send to you</h1>
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
            <p className="mb-4">A mail has been sent to your email</p>
            <p className="">Please go and click on the link sent in the mail</p>
          </div>
        )}
      </div>
      {pending ? (
        <Loading />
      ) : (
        <form
          action=""
          className="w-[90%] sm:w-[70%] md:w-[50%] "
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* Current Password */}
          <div className="mb-10">
            {" "}
            <h1 className="mb-5">Email</h1>
            <input
              type="email"
              className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* New Password */}
          {/* <div className="w-[90%] sm:w-[70%] md:w-[50%]">
        {" "}
        <h1 className="mb-5">New Password</h1>
        <input
          type="text"
          className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
          placeholder=""
        />
      </div>

      <div className="w-[90%] sm:w-[70%] md:w-[50%]">
        {" "}
        <h1 className="mb-5">Confirm Password</h1>
        <input
          type="text"
          className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
          placeholder=""
        />
      </div> */}

          {/* Save Button */}
          <div className="w-[90%] sm:w-[70%] md:w-[50%] mx-auto mb-10 flex items-center justify-center">
            <button
              type="submit"
              className=" w-full bg-[#FCA311] p-4 px-6 text-primaryColor rounded-full text-center "
            >
              SAVE
            </button>
          </div>
        </form>
      )}

      {pending ? (
        <Loading />
      ) : (
        <form
          action=""
          className="w-[90%] sm:w-[70%] md:w-[50%] "
          onSubmit={(e) => handleSubmitB(e)}
        >
          {/* Current Password */}
          <div className="mb-10">
            {" "}
            <h1 className="mb-5">Enter new Password</h1>
            <input
              type="password"
              className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* New Password */}
          {/* <div className="w-[90%] sm:w-[70%] md:w-[50%]">
        {" "}
        <h1 className="mb-5">New Password</h1>
        <input
          type="text"
          className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
          placeholder=""
        />
      </div>

      <div className="w-[90%] sm:w-[70%] md:w-[50%]">
        {" "}
        <h1 className="mb-5">Confirm Password</h1>
        <input
          type="text"
          className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
          placeholder=""
        />
      </div> */}

          {/* Save Button */}
          <div className="w-[90%] sm:w-[70%] md:w-[50%] mx-auto mb-10 flex items-center justify-center">
            <button
              type="submit"
              className=" w-full bg-[#FCA311] p-4 px-6 text-primaryColor rounded-full text-center "
            >
              SAVE
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default ChangePassword