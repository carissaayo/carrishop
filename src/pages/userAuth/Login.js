import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { userLogin } from "../../redux/reducers/userSlice";
import { useDispatch,useSelector } from "react-redux";
const Login = () => {
  const navigate= useNavigate();
  let dispatch = useDispatch();
    const { done, message, error,user} = useSelector((state) => state.user);
    
  const [email, setEmail] = useState("");
  const [saveSession, setSaveSession] = useState(false);
  const [password, setPassword] = useState("");
  console.log(done);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password)return
    try {
      dispatch(userLogin({email,password,saveSession}));
      console.log(done);
      if(done){
        navigate("/");
        console.log("hehe");
      }
    } catch (error) {
      console.log(error);
    }

  };
  

 useEffect(() => {
  if(done){
        console.log(window.history.back());
  }
 }, [handleSubmit]);
  return (
    <main className="w-full h-screen">
      <div className="flex w-full h-full items-center justify-center">
        <form action="" className="" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="">Sign In</h2>

          <div className="">
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

          <div className="">
            <label htmlFor="">
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

          <div className="">
            <button type="checkbox"></button>
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
          <div className="reset-password">
            <Link to="/reset-password">Fogotten Password?</Link>
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
      </div>
    </main>
  );
};

export default Login;
