import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
  return (
    <section className="h-full border-2 border-secondaryColor  flex  items-center justify-between gap-5 w-[600px] rounded-3xl pl-3">
      <input
        type="text"
        placeholder="Search for products"
        className="bg-transparent flex-[8] border-0 h-[90%] outline-none"
      />
      <select name="search" id="" className="flex-[4] font-medium cursor-pointer ">
        <option value="All Categories">All Categories</option>
        <option value="phones">Phones</option>
        <option value="laptops">Laptops</option>
      </select>

      <div className="bg-secondaryColor border-secondaryColor  h-full flex-[2] text-[white] flex  items-center justify-center rounded-r-2xl">
        <SearchIcon className="w-6 cursor-pointer" />
      </div>
    </section>
  );
};

export default Search;
