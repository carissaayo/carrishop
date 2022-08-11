import {MenuAlt2Icon,SearchIcon } from '@heroicons/react/solid'
import React from 'react'

const FilterAndSearch = () => {
  return (
    <div className="flex md:items-center justify-between gap-[20px] md:gap-[100px] xl:gap-[250px] mb-[40px] flex-col md:flex-row ">
      <section className=" sm:w-[310px] h-[40px] bg-whiteBg flex items-center justify-between px-[10px]  ">
        <MenuAlt2Icon className="h-[20px] w-[20px] " />
        <select
          name="locations"
          id="locations"
          className="cursor-pointer outline-none font-bold w-[200px]"
        >
          <option value="All Locations" defaultValue>
            All Locations
          </option>
          <option value="Ibadan">Ibadan</option>
          <option value="Ilorin">Ilorin</option>
        </select>
      </section>
      <section className="h-[40px] md:w-[780px]  bg-whiteBg flex items-center justify-between px-[20px] ">
        <input
          type="text"
          placeholder="search for phones,laptops ..."
          className="w-4/5 h-full outline-none"
        />
        <SearchIcon className="h-[20px] w-[20px] " />
      </section>
    </div>
  );
}

export default FilterAndSearch