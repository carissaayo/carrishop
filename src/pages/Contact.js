import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, CaretUpFill,Check2, CaretDownFill } from "react-bootstrap-icons";
import customerCare from "../assets/imgs/customer-care.jfif";
import whatsappImg from "../assets/imgs/whatsapp.png"
import Footer from "../components/HomeComponents/Footer";


const Contact = () => {
  const [openContent1, setOpenContent1] = useState(false);
  const [openContent2, setOpenContent2] = useState(false);
  const [openContent3, setOpenContent3] = useState(false)
  const [openContent4, setOpenContent4] = useState(false);
  const [openContent5, setOpenContent5] = useState(false);
  return (
    <main className="h-full w-full">
      {/* Question Section */}
      <section className="w-full  bg-[#FCA311] mb-20 flex items-center flex-col justify-center h-[50vh]">
        <div className="w-[90%] md:w-[70%]  flex   items-center justify-center gap-8    flex-col h-[60vh] text-primaryColor  ">
          <h1 className="text-2xl sm:text-4xl lg:text-[48px]  font-bold leading-[48px]">
            We're happy to help
          </h1>
          <p className="text-center text-base sm:text-lg lg:text-xl w-full sm:w-[500px]   xs:px-6 sm:px-4 md:px-0">
            Go through our frequently asked questions to find answers to
            questions you might have
          </p>
         
        </div>
      </section>

      <section className="h-full w-full pt-10 mb-40">
        <h1 className="font-bold text-sm sm:text-lg md:text-xl text-center mb-10 w-[90%] md:w-full mx-[auto] md:mx-0">
          Frequently Asked Questions
        </h1>

        {/* FAQ 1*/}
        <div
          className={`${
            openContent1
              ? "border-2 border-[#EEEEEE]"
              : "border-2 border-[#EEEEEE] border-b-0"
          } w-[90%] md:w-full   mb-10 mx-[auto] md:mx-0`}
        >
          <h2
            className="font-bold mb-5 text-sm sm:text-base md:text-lg flex w-full justify-between faq-header border-b-2 border-[#EEEEEE] p-6 cursor-pointer"
            onClick={() => setOpenContent1(!openContent1)}
          >
            How does it work?
            <span className="relative">
              <CaretDownFill
                className={`${openContent1 && "rotate-180"}  text-xl icon `}
              />
            </span>
          </h2>
          <p
            className={`${
              !openContent1 && "hidden"
            } text-xs sm:text-sm md:text-base  p-6`}
          >
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* FAQ 2*/}
        <div
          className={`${
            openContent2
              ? "border-2 border-[#EEEEEE]"
              : "border-2 border-[#EEEEEE] border-b-0"
          } w-[90%] md:w-full   mb-10 mx-[auto] md:mx-0`}
        >
          <h2
            className="font-bold mb-5 text-sm sm:text-base md:text-lg flex w-full justify-between faq-header border-b-2 border-[#EEEEEE] p-6  cursor-pointer"
            onClick={() => setOpenContent2(!openContent2)}
          >
            How does my account settings work?
            <span className="relative">
              <CaretDownFill
                className={`${openContent2 && "rotate-180"}  text-xl icon `}
              />
            </span>
          </h2>
          <p
            className={`${
              !openContent2 && "hidden"
            } text-xs sm:text-sm md:text-base  p-6`}
          >
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* FAQ 3*/}
        <div
          className={`${
            openContent3
              ? "border-2 border-[#EEEEEE]"
              : "border-2 border-[#EEEEEE] border-b-0"
          } w-[90%] md:w-full   mb-10 mx-[auto] md:mx-0`}
        >
          <h2
            className="font-bold mb-5 text-sm sm:text-base md:text-lg flex w-full justify-between faq-header border-b-2 border-[#EEEEEE] p-6  cursor-pointer"
            onClick={() => setOpenContent3(!openContent3)}
          >
            How can i sell my device?
            <span className="relative">
              <CaretDownFill
                className={`${
                  openContent3 && "rotate-180"
                }  text-xl icon cursor-pointer`}
              />
            </span>
          </h2>
          <p
            className={`${
              !openContent3 && "hidden"
            } text-xs sm:text-sm md:text-base  p-6`}
          >
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* FAQ 4*/}
        <div
          className={`${
            openContent4
              ? "border-2 border-[#EEEEEE]"
              : "border-2 border-[#EEEEEE] border-b-0"
          } w-[90%] md:w-full   mb-10 mx-[auto] md:mx-0`}
        >
          <h2
            className="font-bold mb-5 text-sm sm:text-base md:text-lg flex w-full justify-between faq-header border-b-2 border-[#EEEEEE] p-6 cursor-pointer "
            onClick={() => setOpenContent4(!openContent4)}
          >
            Can i visit your office without an appointment?
            <span className="relative">
              <CaretDownFill
                className={`${openContent4 && "rotate-180"}  text-xl icon `}
              />
            </span>
          </h2>
          <p
            className={`${
              !openContent4 && "hidden"
            } text-xs sm:text-sm md:text-base  p-6`}
          >
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* FAQ 5*/}
        <div
          className={`${
            openContent5
              ? "border-2 border-[#EEEEEE]"
              : "border-2 border-[#EEEEEE] border-b-0"
          } w-[90%] md:w-full   mb-10 mx-[auto] md:mx-0`}
        >
          <h2
            className="font-bold mb-5 text-sm sm:text-base md:text-lg flex w-full justify-between faq-header border-b-2 border-[#EEEEEE] p-6 cursor-pointer "
            onClick={() => setOpenContent5(!openContent5)}
          >
            How do i change my default shipping address?
            <span className="relative">
              <CaretDownFill
                className={`${
                  openContent5 && "rotate-180"
                }  text-xl icon cursor-pointer`}
              />
            </span>
          </h2>
          <p
            className={`${
              !openContent5 && "hidden"
            } text-xs sm:text-sm md:text-base  p-6`}
          >
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>
      </section>

      {/* Customer Care */}
      <section 
      className="flex w-full h-full 2xl:h-[70vh] items-center flex-col 2xl:flex-row justify-center bg-[#F5F5F5] mb-40 sm:mb-20 gap-8 pl-4 xs:px-8 py-8 2xl-py-0">
        <div className=" 2xl:flex-1 order-[2] md:order-1">
          <img
            src={customerCare}
            alt="customer-care"
            className="rounded-xl sm:w-[500px] sm:h-[400px]"
          />
        </div>

        <div className=" 2xl:flex-1 flex flex-col gap-3 order-1 md:order-[2]">
          <h3 className="font-bold text-2xl sm:text-[30px]">
            Need more detailed
            <br />
            answers?
          </h3>
          <h6 className=" text-lg sm:text-[22px]">Talk to our agent</h6>
          <div className="flex bg-[#FCA311] w-[max-content] items-center justify-between py-3 px-1 xs:px-3 sm:px-6 gap-2 sm:gap-4 rounded-xl text-[white]">
            <Check2 className="text-xl" />
            <p className="text-xs xs:text-base">Superfast response</p>
          </div>

          <div className="flex bg-[#FCA311] w-[max-content] items-center justify-between py-3 px-1 xs:px-3 sm:px-6 gap-4 rounded-xl text-[white]">
            <Check2 className="text-xl" />
            <p className="text-xs xs:text-base">
              Detailed guide and instructions
            </p>
          </div>

          <div className="flex bg-[#FCA311] w-[max-content] items-center justify-between py-3 px-1 xs:px-3 sm:px-6 gap-2 sm:gap-4 rounded-xl text-[white]">
            <Check2 className="text-xl" />
            <p className="text-xs xs:text-base">
              Answer to any questions you may have
            </p>
          </div>

          <div className="flex  w-[max-content] items-center justify-between py-4  px-3 sm:px-6 gap-2 sm:gap-4 rounded-xl text-black font-bold text-2xl">
            <img src={whatsappImg} alt="" className="w-[50px]" />
            <p>+234 815 700 7650</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
