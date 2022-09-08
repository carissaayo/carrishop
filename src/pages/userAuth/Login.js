import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userLogin,loading,getUserInfo, closeSnap, blankDetails, resetDone } from "../../redux/reducers/userSlice";
import { useDispatch,useSelector } from "react-redux";
import Footer from "../../components/HomeComponents/Footer";
import Loading from "../../components/auxComponents/Loading";
import { X } from "react-bootstrap-icons";
const Login = () => {
let navigate =useNavigate()
  let dispatch = useDispatch();
    const { loginDone, message, error,user,pending,openSnap} = useSelector((state) => state.user);
    
  const [email, setEmail] = useState("");
  const [saveSession, setSaveSession] = useState(false);
  const [password, setPassword] = useState("");
  const [snackBar, setSnackBar] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email &&  !password) {
      dispatch(blankDetails(["Email and Password","login"]));
      return;
    }
      if (!email ){
        dispatch(blankDetails(["Email", "login"]));
        return
      }

      if ( !password) {
        dispatch(blankDetails(["Password","login"]));
        return;

      }

    try {
      dispatch(loading)
      dispatch(userLogin({email,password,saveSession}));
   
    } catch (error) {
      console.log(error);
    }

  };

  
  
//   useEffect(()=>{
   
//     const  snack=  error && setTimeout(()=> setSnackBar(true), 1000);

    
// return ()=>clearTimeout(snack);
//   },[handleSubmit])

// if(user?.fullname)window.history.back()

 useEffect(() => {
  if(loginDone){
        window.open("/", "_self");
  }
 }, [handleSubmit]);
 useEffect(() => {
  dispatch(resetDone())
 },[])

 
  return (
    <main className="register w-full h-full">
      <div className="w-full  flex flex-col items-center justify-center h-[20vh]  relative ">
        <h1 className="text-2xl font-bold z-20">My Account </h1>
      </div>

      <div className={`snackbar  ${openSnap ? "show" : ""}`}>
        <div className="flex justify-end ">
          <X
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(closeSnap())}
          />
        </div>
        <p className="mb-5">{error && message[0]}</p>
      </div>

      <section className="w-full h-full flex flex-col md:flex-row gap-4 justify-between mb-40 md:mb-20 relative">
        <div className="w-[90%] mx-[auto] md:mx-0 md:flex-[1.5] ">
          <h1 className="font-bold text-2xl mb-10 uppercase">Login</h1>
          {pending ? (
            <Loading />
          ) : (
            <form className="w-full h-full" onSubmit={(e) => handleSubmit(e)}>
              {/* Email */}
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
              {pending && <Loading />}

              {error && (
                <div className="mb-10">
                  <p className="text-[red]">{message[0]}</p>
                </div>
              )}

              <div className="flex items-center w-[90%] mx-[auto] rounded-full bg-[#FCA311] justify-center py-5 mb-10">
                <button
                  type="submit"
                  className="w-full uppercase text-primaryColor"
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="md:w-[10px] md:h-[90%] md:border-r border-[#EEEEEE] flex md:block w-full items-center">
          <div className="flex-[2] h-[10px] border-t border-[#EEEEEE] md:hidden"></div>
          <div className="flex-[0.5] md:hidden relative">
            <p className="relative left-2 xs:left-4 sm:left-8 bottom-1 font-bold">
              OR
            </p>
          </div>
          <div className="flex-[2] h-[10px] border-t border-[#EEEEEE] md:hidden"></div>
        </div>
        <div className="w-[90%] mx-[auto] md:mx-0 md:flex-1">
          <h1 className="font-bold text-2xl mb-10 text-center">REGISTER</h1>
          <p className="text-[#707070] text-center w-full lg:w-[90%] md:mx-auto mb-10 text-sm sm:text-lg md:text-sm lg:text-lg">
            Register by filling up the form. When you register, you gain access
            to login which in turn simplify the purchase process and allows you
            to manage your personal account.
          </p>

          <div className="flex items-center ">
            <Link
              to="/register"
              className="uppercase text-primaryColor w-[150px] mx-[auto] rounded-full bg-[#C4C4C4] text-center p-4"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Login;
