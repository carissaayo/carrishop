import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userLogin,loading,getUserInfo } from "../../redux/reducers/userSlice";
import { useDispatch,useSelector } from "react-redux";
const Login = () => {
let navigate =useNavigate()
  let dispatch = useDispatch();
    const { done, message, error,user} = useSelector((state) => state.user);
    
  const [email, setEmail] = useState("");
  const [saveSession, setSaveSession] = useState(false);
  const [password, setPassword] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
      if (!email || !password)return
    try {
      dispatch(loading)
      dispatch(userLogin({email,password,saveSession}));
   
    } catch (error) {
      console.log(error);
    }

  };
  
if(user?.fullname)window.history.back()

 useEffect(() => {
  if(done){
        window.open("/", "_self");
  }
 }, [handleSubmit]);

  return (
    <main className="w-full h-full">
      <div className="w-full bg-black text-primaryColor flex flex-col items-center justify-center h-[20vh] gap-5">
        <h1 className="text-2xl font-bold ">My Account </h1>
        <h2 className="text-lg">HOME / PRIVACY POLICY</h2>
      </div>

      <div className="flex w-full items-center justify-center">
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
