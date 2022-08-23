import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loading } from "./redux/reducers/userSlice";

import "./App.css";

// pages
import AccountVerification from "./pages/userAuth/AccountVerification";
import ChangePassword from "./pages/userAuth/ChangePassword";
import EmailRecovery from "./pages/userAuth/EmailRecovery";
import Home from "./pages/Home";
import Login from "./pages/userAuth/Login";
import Logout from "./pages/userAuth/Logout";
import Register from "./pages/userAuth/Register";
import ResetPassword from "./pages/userAuth/ResetPassword";
import UserInformation from "./pages/general/UserInformation";
import InviteCodeValidity from "./pages/general/InviteCodeValidity";
import BookAppointment from "./pages/Appointment/BookAppointment";
import GetAppointment from "./pages/Appointment/GetAppointment";
import User from "./pages/user/User";
import AllGadgets from "./pages/gadget/AllGadgets";
import SearchGadget from "./pages/gadget/SearchGadget";
import Loading from "./components/Loading";
import { CookiesProvider, useCookies } from "react-cookie";
import ProtectedRoute from "./pages/ProtectedRoute";
import Error from "./pages/Error";


function App() {
  const [cookies, setCookie] = useCookies(["cookie-name"]);
  

    let dispatch = useDispatch();
    const {  user ,pending} = useSelector(
      (state) => state.user
    );

       const { pending: appointmentPending } = useSelector(
         (state) => state.appointment
       );

useEffect(()=>{
  user && setCookie("access_token", user?.access_token);
  let userToken = localStorage.getItem("user");
  userToken = userToken ? JSON.parse(userToken) : {};
  
if(!user){
  dispatch(loading)
  dispatch(getUser(userToken));
}

},[user])

if (pending || appointmentPending) return <Loading />;


  return (
    <CookiesProvider>
      <div className="]">
        <BrowserRouter>

          <Routes>
            <Route path="*" element={
              <Error/>
            }/>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route
                path="recover-email"
                element={
                  <ProtectedRoute user={user&&user}>
                    <EmailRecovery />
                  </ProtectedRoute>
                }
              />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="verify-reset" element={
              <ProtectedRoute user={user&&user}>
                <ChangePassword />
              </ProtectedRoute>
                } />
              <Route
                path="account-verification"
                element={
              <ProtectedRoute user={user&&user}>
                <AccountVerification />
              </ProtectedRoute>
              
              }
              />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={
              <ProtectedRoute user={user&&user}>
              <Logout />
              </ProtectedRoute>    
              } />
            </Route>

            <Route path="/users">
              <Route path="means-of-identity" element=
              {
                <ProtectedRoute user={user&&user}>

                  <UserInformation />
                </ProtectedRoute>
              
              } />
              <Route
                path="verify-invite-code"
                element={
              <ProtectedRoute user={user&&user}>

                  <InviteCodeValidity />
              </ProtectedRoute>
              
              }
              />
              <Route path=":userId" element={
              <ProtectedRoute user={user&&user}>

              <User />
              </ProtectedRoute>
              } />
            </Route>

            <Route path="/appointment">
              <Route path="book-appointment" element={
              <ProtectedRoute user={user}>

              <BookAppointment />
              </ProtectedRoute>
              } />
              <Route path="get-appointment" element={
              <ProtectedRoute user={user&&user}>

              <GetAppointment />
              </ProtectedRoute>
              } />
            </Route>
            <Route path="/gadgets">
              <Route path="all" element={<AllGadgets />} />
              <Route path=":gadgetID" element={<SearchGadget />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CookiesProvider>
  );
}

export default App;
