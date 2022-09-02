import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CookiesProvider, useCookies } from "react-cookie";
import { ChevronDoubleUp } from "react-bootstrap-icons";
import { getUser, loading } from "./redux/reducers/userSlice";
import "./App.css";

// pages
import AccountVerification from "./pages/userAuth/AccountVerification";
import ChangePassword from "./pages/userAuth/ChangePassword";
import EmailRecovery from "./pages/userAuth/EmailRecovery";
import Home from "./pages/Home";
import Login from "./pages/userAuth/Login";
import Logout from "./pages/userAuth/Logout";
import Contact from "./pages/Contact";
import Register from "./pages/userAuth/Register";
import ResetPassword from "./pages/userAuth/ResetPassword";
import UserInformation from "./pages/general/UserInformation";
import InviteCodeValidity from "./pages/general/InviteCodeValidity";
import BookAppointment from "./pages/Appointment/BookAppointment";
import GetAppointment from "./pages/Appointment/GetAppointment";
import User from "./pages/user/User";
import AllGadgets from "./pages/gadget/AllGadgets";
import SearchGadget from "./pages/gadget/SearchGadget";
import SingleProduct from "./pages/gadget/SingleProduct";
import ProtectedRoute from "./pages/ProtectedRoute";
import Error from "./pages/Error";
import Cart from "./pages/Cart";




// Components
import Loading from "./components/Loading";
import SideNav from "./components/SideNav";
import Navbar from "./components/HomeComponents/Navbar";
import SellToUs from "./pages/SellToUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LoginComponent from "./components/Login";
import Shop from "./pages/Shop";
import ShopSidebar from "./components/ShopSidebar";
import About from "./pages/About";

function App() {
  const [cookies, setCookie] = useCookies(["cookie-name"]);
  let dispatch = useDispatch();
  const { user, pending } = useSelector((state) => state.user);
  const { pending: appointmentPending } = useSelector(
    (state) => state.appointment
  );
  const [showScroll, setShowScroll] = useState(false);
  
  
  // For the price filter functionality
const [values, setValues] = useState([50]);
 const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    const scrollUp = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", scrollUp);

    return () => window.removeEventListener("scroll", scrollUp);
  }, []);

 
  // Setting Cookies
  useEffect(() => {
    user && setCookie("access_token", user?.access_token);
    let userToken = localStorage.getItem("user");
    userToken = userToken ? JSON.parse(userToken) : {};

    if (!user) {
      dispatch(loading);
      dispatch(getUser(userToken));
    }
  }, [user]);

  useEffect(() => {}, []);
  if (pending || appointmentPending) return <Loading />;

  return (
    <CookiesProvider>
      <BrowserRouter>
        <main
          className={`${
            sideBar && window.innerWidth < 840
              ? "h-screen md:h-full overflow-hidden "
              : "h-full "
          } relative`}
        >
          <div
            className={`${
              sideBar
                ? "fixed md:relative flex w-full top-0 left-0 md:hidden z-50 md:z-10 h-full "
                : "hidden"
            } `}
          >
            {/* Mobilr SIdebar when onn Shop page */}
            <ShopSidebar
              values={values}
              setValues={setValues}
              sideBar={sideBar}
              setSideBar={setSideBar}
            />
            <div
              className={`w-[20%] sm:w-[30%] bg-[black] opacity-75 transform-display duration-500 ease-linear ${
                sideBar ? "block" : "hidden "
              }`}
              onClick={() => setSideBar(false)}
            ></div>
          </div>

          {/* <LoginComponent/> */}
          <Navbar />
          <main className="w-full h-full  md:flex justify-between gap-4 ">
            <SideNav />
            <section className="lg:flex-[5] xl:flex-[11] h-full   md:px-0 md:pr-4 xl:pr-8 ">
              <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/">
                  <Route
                    index
                    element={
                      <Home
                        showScroll={showScroll}
                        setShowScroll={setShowScroll}
                      />
                    }
                  />
                  <Route path="contact" element={<Contact />} />
                  <Route path="sell-to-us" element={<SellToUs />} />
                  <Route path="cart" element={<Cart />} />

                  <Route path="about-us" element={<About />} />
                  <Route
                    path="buy"
                    element={
                      <Shop
                        values={values}
                        setValues={setValues}
                        sideBar={sideBar}
                        setSideBar={setSideBar}
                      />
                    }
                  />

                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="register" element={<Register />} />
                  <Route
                    path="recover-email"
                    element={
                      <ProtectedRoute user={user && user}>
                        <EmailRecovery />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="reset-password" element={<ResetPassword />} />
                  <Route
                    path="verify-reset"
                    element={
                      <ProtectedRoute user={user && user}>
                        <ChangePassword />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="account-verification"
                    element={
                      <ProtectedRoute user={user && user}>
                        <AccountVerification />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="login" element={<Login />} />
                  <Route
                    path="logout"
                    element={
                      <ProtectedRoute user={user && user}>
                        <Logout />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                <Route path="/users">
                  <Route
                    path="means-of-identity"
                    element={
                      <ProtectedRoute user={user && user}>
                        <UserInformation />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="verify-invite-code"
                    element={
                      <ProtectedRoute user={user && user}>
                        <InviteCodeValidity />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path=":userId"
                    element={
                      <ProtectedRoute user={user && user}>
                        <User />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                <Route path="/appointment">
                  <Route
                    path="book-appointment"
                    element={
                      <ProtectedRoute user={user}>
                        <BookAppointment />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="get-appointment"
                    element={
                      <ProtectedRoute user={user && user}>
                        <GetAppointment />
                      </ProtectedRoute>
                    }
                  />
                </Route>
                <Route path="/gadgets">
                  <Route path="all" element={<AllGadgets />} />
                  <Route path=":gadgetID" element={<SearchGadget />} />
                  <Route path="name" element={<SingleProduct />} />
                </Route>
              </Routes>
              <a
                href="#"
                className={`${
                  showScroll ? "bottom-40" : " bottom-[-30%]"
                } fixed  right-[2rem] z-30 transition-translate duration-300 w-[50px] h-[50px] rounded-full hover:[transform:translateY(-.25rem)] bg-primaryColor flex items-center justify-center`}
              >
                <ChevronDoubleUp size={30} />
              </a>
            </section>
          </main>
        </main>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
