import { ChevronRight } from "react-bootstrap-icons";

const Categories = () => {
  return (
    <div className="border hidden sm:block w-[90%] sm:w-[80%] mx-auto md:mx-0 md:w-[45%] lg:w-full border-[#EEEEEE] mb-10 text-[#343434]">
      <h2 className="font-bold p-4 border-b border-[#EEEEEE] text-black">
        Browse Categories
      </h2>
      <p className=" p-4 border-b border-[#EEEEEE] flex items-center gap-2 cursor-pointer w-[max-content] ">
        <span className="">
          <ChevronRight className="text-xs font-bold" />
        </span>{" "}
        Phones
        <span className="text-[#8D8D8D] ml-2">(111)</span>
      </p>
      <p className=" p-4 border-b border-[#EEEEEE] flex items-center gap-2 cursor-pointer w-[max-content]">
        <span className="">
          <ChevronRight className="text-xs font-bold" />
        </span>{" "}
        Laptops
        <span className="text-[#8D8D8D] ml-2">(45)</span>
      </p>

      <div className=" p-4 border-b border-[#EEEEEE] flex items-center gap-2 cursor-pointer w-[max-content]">
        <span className="">
          <ChevronRight className="text-xs font-bold" />
        </span>{" "}
        <div className="">
          <p>
            Home & Entertainment
            <span className="text-[#8D8D8D] ml-2">(10)</span>
          </p>
          <p>
            TVs
            <span className="text-[#8D8D8D] ml-2">(1)</span>
          </p>
        </div>
      </div>

      <p className=" p-4 border-b border-[#EEEEEE] flex items-center gap-2 cursor-pointer w-[max-content]">
        <span className="">
          <ChevronRight className="text-xs font-bold" />
        </span>{" "}
        Game & Consoles
        <span className="text-[#8D8D8D] ml-2">(10)</span>
      </p>

      <p className=" p-4 border-b border-[#EEEEEE] flex items-center gap-2 cursor-pointer w-[max-content]">
        <span className="">
          <ChevronRight className="text-xs font-bold" />
        </span>{" "}
        Accessories
        <span className="text-[#8D8D8D] ml-2">(16)</span>
      </p>
    </div>
  );
};

export default Categories;
