import { Link } from "react-router-dom";
import { Search, ChevronRight,Check2 } from "react-bootstrap-icons";
import contact1 from "../assets/imgs/contact1.jfif";
import contact2 from "../assets/imgs/contact2.jfif";
import contact3 from "../assets/imgs/contact.3.jfif";
import customerCare from "../assets/imgs/customer-care.jfif";
import whatsappImg from "../assets/imgs/whatsapp.png"
import Footer from "../components/HomeComponents/Footer";


const Contact = () => {
  return (
    <main className="h-full w-full">
      {/* Question Section */}
      <section className="w-full  bg-[#FCA311] mb-20 flex items-center flex-col justify-center h-[80vh]">
        <div className="w-[70%]  flex   items-center justify-center gap-8    flex-col h-[60vh] text-primaryColor  ">
          <h1 className="text-4xl xl:text-[48px]  font-bold leading-[48px]">
            We're happy to help
          </h1>
          <p className="text-center text-xl w-[500px]">
            Need a quick answer? Enter your questions below for instant
            responses
          </p>
          <div className="bg-primaryColor w-full flex items-center justify-center h-[30vh] gap-10 flex-col">
            <p className="text-[black] text-2xl font-bold">
              What would you like to know?
            </p>
            <div className="border border-[#eeeeee] w-[90%] rounded-md flex h-[50px] items-center px-4 gap-4">
              <Search className="text-xl text-[#c4c4c4]" />
              <input
                type="text"
                className="w-[100%] h-[80%] outline-none text-black "
                placeholder="e.g How can I sell my device on Fairshop?"
              />
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Scetion */}
      <section className="w-full h-full mb-20">
        <h1 className="font-bold border-b-2 border-[#FCA311] w-[max-content] pb-4 text-xl">
          Frequently Asked Questions
        </h1>

        {/* FAQS container */}
        <div className="border-t border-[#eeeeee] flex items-center h-[80vh] w-full justify-between gap-12">
          {/* FAQ item */}
          <div className=" border border-[#eeeeee]  h-[60vh] p-8 flex flex-col items-start gap-8 rounded-md">
            <img src={contact1} alt="" className="w-[200px]" />
            <h2 className="text-[22px]">How to buy on Fairshop</h2>
            <p className="text-base">
              Buying on FairShop is fairly easy. Learn more about how to
              purchase on FairShop
            </p>
            <Link
              to="/contact"
              className="flex items-center gap-4 w-[max-content]"
            >
              <div className="w-[40px] h-[40px] rounded-full bg-secondaryColor flex items-center justify-center">
                <ChevronRight className="text-xl text-[white]" />
              </div>
              <p className="text-secondaryColor">Learn More</p>
            </Link>
          </div>

          {/* FAQ item */}
          <div className="border border-[#eeeeee]  h-[60vh] p-8 flex flex-col items-start gap-8 rounded-md">
            <img src={contact2} alt="" className="w-[200px]" />
            <h2 className="text-[22px]">How to buy on Fairshop</h2>
            <p>
              Buying on FairShop is fairly easy. Learn more about how to
              purchase on FairShop
            </p>
            <Link to="/contact" className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] rounded-full bg-secondaryColor flex items-center justify-center">
                <ChevronRight className="text-xl text-[white]" />
              </div>
              <p className="text-secondaryColor">Learn More</p>
            </Link>
          </div>

          {/* FAQ item */}
          <div className=" border border-[#eeeeee]  h-[60vh] p-8 flex flex-col items-start gap-8 rounded-md">
            <img src={contact3} alt="" className="w-[200px]" />
            <h2 className="text-[22px]">How to buy on Fairshop</h2>
            <p>
              Buying on FairShop is fairly easy. Learn more about how to
              purchase on FairShop
            </p>
            <Link to="/contact" className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] rounded-full bg-secondaryColor flex items-center justify-center">
                <ChevronRight className="text-xl text-[white]" />
              </div>
              <p className="text-secondaryColor">Learn More</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Care */}
      <section className="flex w-full h-[70vh] items-center justify-between bg-[#F5F5F5] mb-20 gap-8  px-8">
        <div className="flex-1">
          <img src={customerCare} alt="customer-care" className="rounded-xl" />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-bold text-[30px]">
            Need more detailed
            <br />
            answers?
          </h3>
          <h6 className="text-[22px]">Talk to our agent</h6>
          <div className="flex bg-[#FCA311] w-[max-content] items-center justify-between py-3 px-6 gap-4 rounded-xl text-[white]">
            <Check2 className="text-xl" />
            <p>Superfast response</p>
          </div>

          <div className="flex bg-[#FCA311] w-[max-content] items-center justify-between py-3 px-6 gap-4 rounded-xl text-[white]">
            <Check2 className="text-xl" />
            <p>Detailed guide and instructions</p>
          </div>

          <div className="flex bg-[#FCA311] w-[max-content] items-center justify-between py-3 px-6 gap-4 rounded-xl text-[white]">
            <Check2 className="text-xl" />
            <p>Answer to any questions you may have</p>
          </div>

          <div className="flex  w-[max-content] items-center justify-between py-4  gap-4 rounded-xl text-black font-bold text-2xl">
            <img src={whatsappImg} alt="" className="w-[50px]" />
            <p>+234 815 700 7650</p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default Contact;
