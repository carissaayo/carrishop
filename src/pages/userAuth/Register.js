import { useNavigate, Link } from "react-router-dom";
import {  useState } from "react";
import { registerUser } from "../../redux/reducers/userSlice";
import { useDispatch,useSelector } from "react-redux";


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
    <main className="register w-full h-screen">
      <div className=" flex w-full h-full items-center justify-center">
        {done ? (
          <div>
            <span class="material-symbols-outlined">
               task_alt 
            </span>
            <p>A link has been sent to {email}, kindly click on it to verify your email</p>
            <p className="">
              <Link to="/">Go Back Home</Link>
            </p>
          </div>
        ) : (
          <form className="register__form" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="register__title">Create your account</h2>
            <div className="register__input_con">
              <label htmlFor="fullname">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id="fullname"
                placeholder="FUll Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="register__input_con">
              <label htmlFor="inviteCode">
                Invite Code <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id="inviteCode"
                placeholder="invite code"
                value={invite_code}
                onChange={(e) => setInvite_code(e.target.value)}
              />
            </div>
            <div className="register__input_con">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register__input_con">
              <label htmlFor="number">
                Number <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id="number"
                placeholder="Your Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="register__input_con">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <div className="w-[300px]">
                <p className="text-[red]">{message}</p>
              </div>
            )}
            <div className="submit-btn-con flex">
              <button type="submit">Submit</button>
            </div>

            <p className="login-link">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
};

export default Register;

