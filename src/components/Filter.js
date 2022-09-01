import { ChevronRight, Plus } from "react-bootstrap-icons";

const Filter = () => {
  return (
    <section className="w-[80%] mx-auto md:mx-0 md:w-[45%] lg:w-full mb-10">
      <h2 className="border-b-2  border-[#FCA311] w-[max-content] text-xl">
        Filters
      </h2>
      {/* Types Con */}
      <div className="w-full border border-[#eeeeee]">
        <h2 className="font-bold p-4 ">Brands</h2>
        {/* Type Item */}
        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            Acer
            <span className="text-[#8D8D8D] ml-2">(10)</span>
          </p>
        </div>

        {/* Type Item */}
        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            Asus
            <span className="text-[#8D8D8D] ml-2">(12)</span>
          </p>
        </div>

        {/* Type Item */}
        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            Apple
            <span className="text-[#8D8D8D] ml-2">(14)</span>
          </p>
        </div>

        {/* Type Item */}
        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            HP
            <span className="text-[#8D8D8D] ml-2">(20)</span>
          </p>
        </div>

        {/* Type Show More */}
        <div className="flex gap-4 p-4 items-center">
          <Plus className="text-xl" />
          <p className="">Show more</p>
        </div>
      </div>
    </section>
  );
};

export default Filter;
