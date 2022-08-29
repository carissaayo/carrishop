import { useNavigate, Link } from "react-router-dom";
import {  useState } from "react";
import { registerUser } from "../../redux/reducers/userSlice";
import { useDispatch,useSelector } from "react-redux";

import registerBg from "../../assets/imgs/bg-register.jfif"
import Footer from "../../components/HomeComponents/Footer";

const Register = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
    const {done,message,error} = useSelector((state) => state.user);


  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("Micheal Martial");
  const [invite_code, setInvite_code] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser({email, password,fullname,phone}));
  };

  return (
    <main className="register w-full h-full">
      <div className="w-full register-bg text-primaryColor flex flex-col items-center justify-center h-[20vh] gap-5 relative mb-20">
        <div className="overlay"></div>
        <h1 className="text-2xl font-bold z-20">My Account </h1>
        <h2 className="text-lg z-20">HOME / PRIVACY POLICY</h2>
      </div>

      <section className="w-full h-full flex flex-col md:flex-row gap-4 justify-between mb-40 md:mb-20">
        <div className="w-[90%] mx-[auto] md:mx-0 md:flex-[1.5] ">
          <h1 className="font-bold text-2xl mb-10">REGISTER</h1>
          <form className="w-full h-full" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-4 mb-10">
              <label htmlFor="fullname" className="uppercase">
                Full Name <span className="text-[#E20000]">*</span>
              </label>
              <input
                type="text"
                name=""
                id="fullname"
                placeholder="FUll Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <label htmlFor="inviteCode" className="uppercase">
                Invite Code <span className="text-[#E20000]">*</span>
              </label>
              <input
                type="text"
                name=""
                id="inviteCode"
                placeholder="invite code"
                value={invite_code}
                onChange={(e) => setInvite_code(e.target.value)}
                className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <label htmlFor="email" className="uppercase">
                Email <span className="text-[#E20000]">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <label htmlFor="number" className="uppercase">
                Number <span className="text-[#E20000]">*</span>
              </label>
              <input
                type="text"
                name=""
                id="number"
                placeholder="Your Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <label htmlFor="password" className="uppercase">
                Password <span className="text-[#E20000]">*</span>
              </label>
              <input
                type="text"
                name=""
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-full w-full border-[#EEEEEE] h-[50px] p-4 text-[#A19F9F] outline-[#A19F9F]"
              />
            </div>
            {error && (
              <div className="w-[300px]">
                <p className="text-[red]">{message}</p>
              </div>
            )}
            <div className="flex items-center w-[90%] mx-[auto] rounded-full bg-[#FCA311] justify-center p-5 mb-10">
              <button type="submit" className="uppercase text-primaryColor">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-[10px] md:h-[90%] md:border-r border-[#EEEEEE] flex md:block w-full items-center">
          <div className="flex-[2] h-[10px] border-t border-[#EEEEEE] md:hidden"></div>
          <div className="flex-[0.5] md:hidden relative">
            <p className="relative left-2 xs:left-4 sm:left-8 bottom-1 font-bold">OR</p>
          </div>
          <div className="flex-[2] h-[10px] border-t border-[#EEEEEE] md:hidden"></div>
        </div>
        <div className="w-[90%] mx-[auto] md:mx-0 md:flex-1">
          <h1 className="font-bold text-2xl mb-10 text-center">LOGIN</h1>
          <p className="text-[#707070] text-center w-full lg:w-[90%] md:mx-auto mb-10 text-sm sm:text-lg md:text-sm lg:text-lg">
            Login here by filling you're username and password or use your
            favorite social network account to enter to the site. Site login
            will simplify the purchase process and allows you to manage your
            personal account.
          </p>

          <div className="flex items-center ">
            <Link
              to="/login"
              className="uppercase text-primaryColor w-[150px] mx-[auto] rounded-full bg-[#C4C4C4] text-center p-4"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Register;

