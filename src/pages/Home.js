import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../redux/reducers/userSlice";

import CardList from "../components/HomeComponents/CardList";
import CTA from "../components/HomeComponents/CTA";
import Footer from "../components/HomeComponents/Footer";
import Hero from "../components/HomeComponents/Hero";
import MobileNav from "../components/HomeComponents/MobileNav";
import Navbar from "../components/HomeComponents/Navbar";
import Login from "./userAuth/Login";

const getUserFromLocalStorage = () => {
  let userToken = localStorage.getItem("user");
  userToken = userToken ? JSON.parse(userToken) : {};
  console.log(userToken);
  return userToken;
};
const Home = () => {
    const { user } = useSelector((state) => state.user);
  const [openMobile, setOpenMobile] = useState(false);

  // let dispatch = useDispatch();
  // const { done, message, error, code, user, pending } = useSelector(
  //   (state) => state.user
  // );
  // useEffect(() => {
  //   let userToken = localStorage.getItem("user");
  //   userToken = userToken ? JSON.parse(userToken) : {};
  //   console.log(userToken);

  //   dispatch(getUser(userToken));
  // }, []);
  if (!user) return <Login />;
  return (
    <main className="w-full h-full relative ">
      <Navbar openMobile={openMobile} setOpenMobile={setOpenMobile} />
      <MobileNav openMobile={openMobile} setOpenMobile={setOpenMobile} />
      <Hero />
      <CardList phone title="phones" />
      <CardList title="laptops" />
      <CardList title="others" />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
