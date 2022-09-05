import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloudArrowDown } from 'react-bootstrap-icons';
import Footer from '../components/HomeComponents/Footer';


import sell1 from "../assets/imgs/sell1.png";
import sell2 from "../assets/imgs/sell2.png";
import sell3 from "../assets/imgs/sell3.png";
import sell4 from "../assets/imgs/sell4.png";
import appointment from "../assets/imgs/appointment.png";
import wallet from "../assets/imgs/wallet.png";
import verify from "../assets/imgs/verify.png";

const SellToUs = () => {

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
      const [selectedFile, setSelectedFile] = useState([]);
      const [preview1, setPreview1] = useState("");
      const [preview2, setPreview2] = useState("");
      const [preview3, setPreview3] = useState("");
      const [preview, setPreview] = useState("");
 const files = [];
 let firstImage = "";

 const handleGadgetDetailsSubmit = (e) => {
   const image1 = e.target.files[0];
   const image2 = e.target.files[1];
   const image3 = e.target.files[2];
   if (image1) {
     firstImage = URL.createObjectURL(image1);
     console.log(firstImage);
   }

   console.log(image1);
   console.log(image2);
   console.log(image3);
 };

     const onSelectFile = (e) => {
       if (!e.target.files || e.target.files.length === 0) {
         setSelectedFile(false);
         return;
       }

       // I've kept this example simple by using the first image instead of multiple
       setImage1(e.target.files[0]);
       setImage2(e.target.files[1]);
       setImage3(e.target.files[2]);
     };

     
      // create a preview as a side effect, whenever selected file is changed
      useEffect(() => {
        if (!image1||!image2||!image3) {
          // setPreview(false);
          console.log(preview1);
          return;
        }

        const image1ObjectUrl = URL.createObjectURL(image1);
        const image2ObjectUrl = URL.createObjectURL(image2);
        const image3ObjectUrl = URL.createObjectURL(image3);
        setPreview1(image1ObjectUrl);
        setPreview2(image2ObjectUrl);
        setPreview3(image3ObjectUrl);

        // free memory when ever this component is unmounted
        return () => {
          URL.revokeObjectURL(image1ObjectUrl);
          URL.revokeObjectURL(image2ObjectUrl);
          URL.revokeObjectURL(image3ObjectUrl);
        
        };
      }, [image1,image2,image3]);





  return (
    <main className="h-full w-full">
      {/* Banner */}
      <section className="w-full  h-full bg-[#F5F5F5] mb-20 flex  flex-col gap-0 md-gap-5 lg:flex-row items-start md:items-center lg:items-start  justify-between  xl:h-[60vh] 2xl:h-[70vh]  relative ">
        <div className="flex-[2] flex items-start pt-10 md:pt-0 md:items-center h-full xl:h-[70%]  justify-center words order-2 lg:order-1">
          <div className=" w-[90%] lg:w-[80%] px-2 xl:px-6 flex flex-col gap-8 mb-20 lg:mb-0">
            <h1 className=" text-2xl lg:text-4xl ">
              SELLING JUST GOT <span className="text-[#FCA311]">EASIER!</span>
            </h1>
            <p className=" text-lg lg:text-xl">
              Sell your fairly used gadgets and receive payments immediately
            </p>
            <Link
              to="/appointment/book-appointment"
              className="bg-secondaryColor w-[max-content] p-4 rounded-3xl text-lg xl:text-xl"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
        {/* Images Section */}
        <div className=" pt-10  flex-[2] 2xl:flex-[3] flex  sm:w-[80%] md:w-full items-center lg:items-start order-1 lg:order-2  flex-wrap sm:flex-nowrap mb-10 gap-8 md:gap-0 md:mb-0">
          <img
            src={sell1}
            alt=""
            className="w-[35%] xs:w-[40%] sm:w-[150px]  lg:w-[110px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px]  rotate-[30deg] md:rotate-0 z-20 one"
          />
          <img
            src={sell2}
            alt=""
            className="w-[35%] xs:w-[40%] sm:w-[150px] lg:w-[110px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px]  rotate-[30deg] md:rotate-0 z-20 three"
          />
          <img
            src={sell3}
            alt=""
            className="w-[35%] xs:w-[40%] sm:w-[150px] lg:w-[110px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rotate-[30deg] md:rotate-0 two z-10"
          />
          <img
            src={sell4}
            alt=""
            className="w-[35%] xs:w-[40%] sm:w-[120px] lg:w-[100px] xl:w-[130px] 2xl:w-[auto] 2xl:max-w-[200px] h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rotate-[30deg] md:rotate-0   four"
          />
        </div>
      </section>

      {/* Steps */}
      <section className="w-full  h-full mb-20 lg:mb-0  lg:py-20 ">
        <h1 className="text-center text-lg xs:text-xl sm:text-2xl mb-6">
          SELL FASTER. BUY SMARTER
        </h1>
        <p className="text-center text-base xs:text-lg sm:text-xl mb-10">
          Start selling on FairShop in 3 easy steps
        </p>

        <section className="flex w-full items-center  justify-center lg:justify-between h-full   gap-10 lg:gap-0 flex-wrap lg:flex-nowrap">
          {/* Item  */}
          <div className=" w-[90%] xs:w-[70%] sm:w-[40%] lg:w-[30%] flex flex-col items-center justify-center gap-4 h-full ">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={appointment} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-center">Book an Appointment</h3>
            <p className="text-center 2xl:w-[80%]">
              Book and Appointment by filling this form, call or whatsApp our
              agent.
            </p>
          </div>

          {/* Item  */}
          <div className=" w-[90%] xs:w-[70%] sm:w-[40%] lg:w-[30%] flex flex-col items-center justify-center gap-4 h-full">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={verify} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-center">Get your device inspected</h3>
            <p className="text-center 2xl:w-[80%]">
              Come with your device to any of our offices or branches for
              inspection.
            </p>
          </div>

          {/* Item  */}
          <div className="w-[90%] xs:w-[70%] sm:w-[40%] lg:w-[30%] flex flex-col items-center justify-center gap-4 h-full">
            <div className="bg-[#FCA311] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              <img src={wallet} alt="" className="w-[50px]" />
            </div>
            <h3 className="text-center">Get Paid immediately</h3>
            <p className="text-center 2xl:w-[80%]">
              After inspection, we will reach a fair agreement with you and you
              will receive payment immediately.
            </p>
          </div>
        </section>
      </section>

      {/* Product Details */}
      <main className="w-full h-full bg-[#EEEEEE] mb-20 py-10">
        <h1 className="font-bold sm:text-2xl capitalize text-center mb-10">
          What are you selling?
        </h1>

        {/* Gadget Name */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Gadget Name
            <span className="text-[#FF0000]">*</span>
          </h1>

          <input
            type="text"
            className=" w-full sm:w-[70%] border-b border-[#E0E0E0] outline-none focus:border-b-2 p-2"
            placeholder="Your Answer"
          />
        </div>

        {/* Gadget category */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Select Category <span className="text-[#FF0000]">*</span>
          </h1>
          <section className="w-full ">
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="gadget"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="Phone"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="phone" className="font-bold ">
                Phone
              </label>
            </div>
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="gadget"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="Laptop"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="gadget" className="font-bold ">
                Laptop
              </label>
            </div>
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="gadget"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="Television"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="gadget" className="font-bold ">
                Television
              </label>
            </div>

            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="gadget"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="Tablets"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="gadget" className="font-bold ">
                Tablets
              </label>
            </div>

            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="gadget"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="Games / Consoles"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="gadget" className="font-bold ">
                Games / Consoles
              </label>
            </div>

            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="gadget"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="Home Theatre/ Speakers"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="gadget" className="font-bold ">
                Home Theatre/ Speakers
              </label>
            </div>

            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="gadget"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="Other"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="gadget" className="font-bold ">
                Other
              </label>
            </div>
          </section>
        </div>

        {/* Gadget Brand */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Select Brand <span className="text-[#FF0000]">*</span>
          </h1>

          <select
            className="w-[70%] border border-[#E0E0E0] outline-none focus:border-b-2 p-4"
            name="Brand"
          >
            <option value="" disabled>
              Select Brand
            </option>
            <option value="Apple">Apple</option>
            <option value="Window">Window</option>
            <option value="Android">Android</option>
            <option value="LG">LG </option>
          </select>
        </div>

        {/* Gadget Description */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Enter Description <span className="text-[#FF0000]">*</span>
          </h1>

          <input
            type="text"
            className="w-full sm:w-[70%] border-b border-[#E0E0E0] outline-none focus:border-b-2 p-2"
            placeholder="Your Answer"
            name="description"
          />
        </div>

        {/* Gadget Image */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Add Image <span className="text-[#FF0000]">*</span>
          </h1>
          <div className="mb-5">
            <p className="text-[#505050]">Add at least 3 photos</p>
            <p className="text-[#8E8E8E]">
              First picture - is the title picture. You can change the order of
              photos: just grab your photos and drag
            </p>
          </div>
          <label className="flex h-full w-[max-content]">
            <input
              type="file"
              className="w-0 h-0 "
              placeholder="Your Answer"
              name="description"
              multiple
              onChange={onSelectFile}
              // onChange={(e) => handleGadgetDetailsSubmit(e)}
            />
            <p className="flex bg-primaryColor border border-[#FCA311] px-6 py-4 items-center w-[150px] gap-2 text-[#FCA311]">
              <CloudArrowDown className="text-2xl" />
              <span className="">Add File</span>
            </p>
          </label>
          <div className="w-full flex gap-10 pt-5">
            {preview1 && <img src={preview1} className="w-20 h-10 block" />}
            {preview2 && <img src={preview2} className="w-20 h-10 block" />}{" "}
            {preview3 && <img src={preview3} className="w-20 h-10 block" />}
          </div>
        </div>

        {/* Gadget Receipt */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Reciept ? <span className="text-[#FF0000]">*</span>
          </h1>

          <section className="w-full ">
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="reciept"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="yes-receipt"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="phone" className="font-bold ">
                Yes
              </label>
            </div>
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="reciept"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="no-receipt"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="gadget" className="font-bold ">
                No
              </label>
            </div>
          </section>
        </div>

        {/* Seller Location*/}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Your Location <span className="text-[#FF0000]">*</span>
          </h1>

          <select
            type="text"
            className="w-[70%] sm:w-[30%] border border-[#E0E0E0] outline-none focus:border-b-2 p-4"
            name="Location"
          >
            <option value="Select Location" disabled>
              Select Location
            </option>
            <option value="Ilorin">Ilorin</option>
            <option value="Ibadan">Ibadan</option>
          </select>
        </div>

        {/* Gadget Faults */}
        <div className="sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Faults? <span className="text-[#FF0000]">*</span>
          </h1>

          <section className="w-full ">
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="fault"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="yes-fault"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="fault" className="font-bold ">
                Yes
              </label>
            </div>
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="fault"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="no-fault"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="fault" className="font-bold ">
                No
              </label>
            </div>
          </section>
        </div>

        {/* Gadget Accessories */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Accessories ? <span className="text-[#FF0000]">*</span>
          </h1>

          <section className="w-full ">
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="accessory"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="yes-accessory"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="accessory" className="font-bold ">
                Yes
              </label>
            </div>
            <div className="flex gap-4 mb-5">
              <input
                type="radio"
                name="accessory"
                className="radio cursor-pointer w-[30px] h-[30px]"
                value="no-accessory"
              />
              <div className="custom-radio">
                <p className=""></p>
              </div>
              <label htmlFor="accessory" className="font-bold ">
                No
              </label>
            </div>
          </section>
        </div>

        {/* Appointment Date */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-4 sm:px-8 py-12 mb-10">
          <h1 className="mb-5">
            Appointment Date <span className="text-[#FF0000]">*</span>
          </h1>

          <input
            type="date"
            className="w-full sm:w-[50%] md:w-[30%] border-b border-[#E0E0E0] outline-none focus:border-b-2 p-2"
            placeholder="Your Answer"
            name="description"
          />
        </div>

        {/* Gadget Price */}
        <div className="w-[95%] sm:w-[80%] bg-primaryColor mx-auto  px-8 py-12 mb-10">
          <h1 className="mb-5">
            Selling Price <span className="text-[#FF0000]">*</span>
          </h1>

          <input
            type="text"
            className=" w-full sm:w-[70%] border-b border-[#E0E0E0] outline-none focus:border-b-2 p-2 mb-5"
            placeholder="Your Answer"
            name="description"
          />

          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-6 h-6 cursor-pointer"
            />
            <p className="">Is this price negotiable?</p>
          </div>
        </div>
      </main>

      <Footer />
    </main>
  );
}

export default SellToUs