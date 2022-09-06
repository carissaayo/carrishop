import React from 'react'
import { PencilFill } from 'react-bootstrap-icons';
import AddressItem from './AddressItem';

const AddressCon = ({current}) => {
  return (
    <section
      className={`${
        current === "address" ? "flex " : "hidden"
      } w-full  mb-28 flex-col xl:flex-row `}
    >
      <section className="w-[90%] sm:w-[80%] md:w-full mx-auto md:mx-0 md:flex-[4] flex flex-wrap gap-10 order-2 xl:order-1">
        {/* Address Item */}
        <div className="border bg-[#FBE9CE] text-[#343434] border-[#EEEEEE] md:w-[45%]">
          <div className="flex flex-col gap-3 p-6 border-b border-[#EEEEEE]">
            <h2 className="">Mustapha San</h2>
            <p className="">
              No. 9 Okoye street, afromedia, H Close, Amuwo Odofin, Mile 2,
              Lagos
            </p>
            <p className="">+234 7082137552</p>
          </div>
          <div className="flex p-4 justify-between w-full text-[#FCA311]">
            <p className="font-bold text-[#215F11]">DEFAULT ADDRESS</p>
            <div className="">
              <PencilFill className="text-lg cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Address Item */}
        <AddressItem />

        {/* Address Item */}
        <AddressItem />

        {/* Address Item */}
        <AddressItem />
      </section>

      <div className=" w-[90%] md:w-full md:flex-1 mb-10 xl:mb-0  flex xl:block justify-end ">
        <button className="w-[80%] xs:w-[50%] sm:w-[30%] xl:w-[90%] bg-[#FCA311] p-4 px-6 text-primaryColor rounded-full text-center ">
          NEW ADDRESS
        </button>
      </div>
    </section>
  );
}

export default AddressCon