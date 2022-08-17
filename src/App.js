import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/reducers/userSlice";

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
const getUserFromLocalStorage = () => {
  let userToken = localStorage.getItem("user");
  userToken = userToken ? JSON.parse(userToken) : {};
  console.log(userToken);
  return userToken;
};

function App() {


    let dispatch = useDispatch();
    const { done, message, error, code, user } = useSelector(
      (state) => state.user
    );

useEffect(()=>{
  let userToken = localStorage.getItem("user");
  userToken = userToken ? JSON.parse(userToken) : {};
  console.log(userToken);
 
dispatch(getUser(userToken));
},[])
  return (
    <div className="App bg-[#F4F4F9]">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="recover-email" element={<EmailRecovery />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="verify-reset" element={<ChangePassword />} />
            <Route
              path="account-verification"
              element={<AccountVerification />}
            />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="/user">
            <Route path="means-of-identity" element={<UserInformation />} />
            <Route path="verify-invite-code" element={<InviteCodeValidity />} />
            <Route path="info" element={<User />} />
          </Route>

          <Route path="/appointment">
            <Route path="book-appointment" element={<BookAppointment />} />
            <Route path="get-appointment" element={<GetAppointment />} />
          </Route>
          <Route path="/gadgets">
            <Route path="all" element={<AllGadgets />} />
            <Route path=":gadgetID" element={<SearchGadget />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
