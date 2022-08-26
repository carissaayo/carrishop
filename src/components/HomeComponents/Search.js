import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ mobile }) => {
  return (
    <section
      className={` border-2 border-[#FCA311]   items-center justify-center xs:justify-between  rounded-3xl xs:pl-3 h-[50px] ${
        mobile
          ? "w-[80%] xs:w-[90%] mx-auto   flex lg:hidden mb-12 xs:gap-4"
          : "  w-2/5  hidden lg:flex lg:flex-[5] "
      } `}
    >
      <input
        type="text"
        placeholder="Search for products"
        className={`${
          mobile ? "" : ""
        } bg-transparent  flex-[4] xs:flex-[8]  border-0 h-[90%] outline-none`}
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
        className={`bg-[#FCA311] border-[#FCA311]  h-full flex-[4]  xs:flex-[2] text-[white] flex  items-center justify-center rounded-r-2xl ${
          mobile ? "" : ""
        }`}
      >
        <SearchIcon className="w-6 cursor-pointer" />
      </div>
    </section>
  );
};

export default Search;
