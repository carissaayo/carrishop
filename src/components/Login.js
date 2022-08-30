import { X } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  userLogin,
  loading,
  getUserInfo,
} from "../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
const LoginComponent = () => {
let navigate = useNavigate();
let dispatch = useDispatch();
const { done, message, error, user } = useSelector((state) => state.user);

const [email, setEmail] = useState("");
const [saveSession, setSaveSession] = useState(false);
const [password, setPassword] = useState("");
 
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;
        try {
          dispatch(loading);
          dispatch(userLogin({ email, password, saveSession }));
        } catch (error) {
          console.log(error);
        }
      };

      if (user?.fullname) window.history.back();

      useEffect(() => {
        if (done) {
          window.open("/", "_self");
        }
      }, [handleSubmit]);


  return (
    <main className="w-full h-screen bg-black absolute top-0 left-0 z-50">
      {/* <div className="login-overlay"></div> */}
      <section className="w-[40%] bg-primaryColor h-full p-10">
        <div className="flex items-center w-full justify-between mb-20">
          <p className="uppercase text-2xl">Sign in</p>
          <p className="flex items-center cursor-pointer">
            <X className="text-[25px]" />
            <span className="uppercase text-2xl">Close</span>
          </p>
        </div>
        <form action="" className="w-full " onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-4 mb-10">
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              type="email"
              name="username"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
            />
          </div>

          <div className="flex flex-col gap-4 mb-10">
            <label htmlFor="username" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
            />
          </div>

          <div className="flex items-center w-full justify-between">
            <div className=" flex gap-4">
              <input
                type="checkbox"
                name=""
                id="password"
                placeholder="Password"
                value={saveSession}
                onChange={(e) => {
                  setSaveSession(!saveSession);
                }}
              />
              <label htmlFor="password">
                Remember Me <span>*</span>
              </label>
            </div>

            <Link to="/reset-password" className="text-[#FCA311]">
              Lost your password?
            </Link>
          </div>
          {error && (
            <div className="w-[300px]">
              <p className="text-[red]">{message}</p>
            </div>
          )}
          <div className="submit-btn-con flex">
            <button>Submit</button>
          </div>

          <p className="login-link">
            Dont have an account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default LoginComponent;
