import React, { useState } from 'react'
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

const AddressItem = () => {
      const [defaultAddress, setDefaultAddress] = useState(true);

  return (
    <div className="border border-[#EEEEEE]  md:w-[45%]">
      <div className="flex flex-col gap-3 p-6 border-b border-[#EEEEEE]">
        <h2 className="">Mustapha San</h2>
        <p className="">
          No. 9 Okoye street, afromedia, H Close, Amuwo Odofin, Mile 2, Lagos
        </p>
        <p className="">+234 7082137552</p>
      </div>
      <div className="flex p-4 justify-between w-full text-[#FCA311]">
        <p className="font-bold cursor-pointer">SET AS DEFAULT</p>
        <div className="flex gap-4">
          <PencilFill className="text-lg cursor-pointer" />
          <TrashFill className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AddressItem