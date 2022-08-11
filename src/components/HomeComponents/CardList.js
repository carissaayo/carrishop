import { Link } from "react-router-dom";
import Card from "./Card";
import FilterAndSearch from "./FilterAndSearch";
const ItemHeader = ({title}) => {
  return (
    <div className="flex bg-whiteBg justify-between items-center h-[60px] w-full px-[30px] mb-[40px]">
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      <Link to="/" className="text-primaryColor font-bold">
        See All
      </Link>
    </div>
  );
};
const CardList = ({ phone ,title}) => {
  return (
    <main className="w-full h-full bg-cardListBg px-[5%] py-[40px] mb-[80px]">
      {phone && <FilterAndSearch />}
      <ItemHeader title={title} />
      <section className=" w-full h-100 flex gap-[10px] justify-evenly items-center flex-wrap sm:px-[14%] md:px-[0%] ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default CardList;
