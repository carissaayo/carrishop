import React from 'react'
import { ChevronRight, Plus } from "react-bootstrap-icons";

const Colors = () => {
  return (
    <section className="w-[90%] sm:w-[80%] mx-auto md:mx-0 md:w-[45%] lg:w-full mb-10">
      <h2 className="border-b-2  border-[#FCA311] w-[max-content] text-xl">
        Color
      </h2>
      {/* Colors Con */}
      <div className="w-full border border-[#eeeeee]">
        {/* Color Item */}
        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            Black
            <span className="text-[#8D8D8D] ml-2">(10)</span>
          </p>
        </div>

        {/* Color Item */}
        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            White
            <span className="text-[#8D8D8D] ml-2">(12)</span>
          </p>
        </div>

        {/* Color Item */}
        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            Blue
            <span className="text-[#8D8D8D] ml-2">(14)</span>
          </p>
        </div>

        {/* Color Item */}

        <div className="flex gap-4 p-4 items-center">
          <input type="checkbox" name="" className="w-4 h-4" />
          <p className="">
            Grey
            <span className="text-[#8D8D8D] ml-2">(20)</span>
          </p>
        </div>

        {/* Color Show More */}
        <div className="flex gap-4 p-4 items-center">
          <Plus className="text-xl" />
          <p className="">Show more</p>
        </div>
      </div>
    </section>
  );
}

export default Colors