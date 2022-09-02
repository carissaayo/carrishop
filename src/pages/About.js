import { Link } from "react-router-dom";
import aboutBg from "../assets/imgs/about-bg.jfif";
import Footer from "../components/HomeComponents/Footer";
const About = () => {
  return (
    <main className="w-full h-full">
      {/* Hero */}
      <div className="w-full h-[55vh] relative mb-20">
        <img
          src={aboutBg}
          alt=""
          className="absolute top-0  about-img w-full h-full "
        />
        <div className="about-overlay top-0 "></div>

        <div className="z-10 absolute top-0   text-primaryColor h-full py-12 px-4 sm:p-12 sm:px-20 w-[90%] sm:w-[400px] md:w-[500px]">
          <h1 className="text-2xl md:text-[40px] mb-10">BUY & SELL ON FAIRSHOP</h1>
          <p className="text-base md:text-lg mb-5">
            We make it convenient and faster to buy and sell high fairly used
            devices.
          </p>
          <button className="bg-[#FDCD1B] p-4 px-8 rounded-2xl text-black cursor-pointer">
            Get in Touch
          </button>
        </div>
      </div>

      <section className="w-full mb-40 md:mb-20">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-10">WELCOME TO FAIRSHOP</h2>
        <p className="w-[90%] mx-auto text-center sm:text-lg">
          When visitors leave comments on the site we collect the data shown in
          the comments form, and also the visitor’s IP address and browser user
          agent string to help spam detection. An anonymized string created from
          your email address (also called a hash) may be provided to the
          Gravatar service to see if you are using it. The Gravatar service
          privacy policy is available here: https://automattic.com/privacy/.
          After approval of your comment, your profile picture is visible to the
          public in the context of your comment.
        </p>
      </section>

      <Footer/>
    </main>
  );
};

export default About;
