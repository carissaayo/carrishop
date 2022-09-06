import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ mobile,user }) => {
  return (
    <section
      className={` border-2 border-[#FCA311]   items-center justify-center xs:justify-between  rounded-3xl pl-4 xs:pl-3 h-[50px] ${
        user ? "w-[50%]  hidden lg:flex " : " "
      }  ${
        mobile
          ? "w-[80%] xs:w-[90%] mx-auto   flex lg:hidden mb-12 xs:gap-4"
          : "    hidden lg:flex  "
      }`}
    >
      <input
        type="text"
        placeholder="Search for products"
        className={`${
          mobile ? "" : ""
        } bg-transparent  w-[80%]  xs:flex-[8]  border-0 h-[90%] outline-none`}
      />
      <select
        name="search"
        id=""
        className={` font-medium cursor-pointer ${
          mobile ? "hidden sm:block " : "hidden xl:block  xl:flex-[4]"
        } `}
      >
        <option value="All Categories">All Categories</option>
        <option value="phones">Phones</option>
        <option value="laptops">Laptops</option>
      </select>

      <div
        className={`bg-[#FCA311] border-[#FCA311]  h-full   w-[20%]  xs:flex-[2] text-[white] flex  items-center justify-center rounded-r-2xl ${
          mobile ? "" : ""
        }`}
      >
        <SearchIcon className="w-6 cursor-pointer" />
      </div>
    </section>
  );
};

export default Search;
