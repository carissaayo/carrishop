import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-black w-full  flex flex-col items-center  justify-center text-whiteBg  h-[60vh] px-[2%]">
      
      <h1 className="uppercase   text-lg sm:text-2xl md:text-4xl font-bold mb-[20px]">
        Get best deals from us
      </h1>
      <p className=" text-base sm:text-lg md:text-2xl mb-[20px] text-center">
        Promotions, new products and sales. Directly to your inbox.
      </p>
      <div className="bg-whiteBg  w-full sm:w-3/4 md:w-2/5 h-[65px] flex justify-between items-center pr-[15px] rounded-3xl">
        <input
          type="text"
          placeholder="Email address"
          className="w-full  h-full rounded-3xl pl-[15px]  text-black outline-none "
        />
        <Link
          to="/"
          className="flex w-[130px] h-[40px] rounded-3xl items-center justify-center bg-black text-white"
        >
          Register
        </Link>
      </div>
    </section>
  );
};

export default CTA;
