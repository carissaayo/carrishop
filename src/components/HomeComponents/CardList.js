import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";
import phoneImg from "../../assets/imgs/featured-phone.png";

import Card from "./Card";
const ItemHeader = ({title,text}) => {
  return (
    <div className="flex  justify-between items-center h-[35px] w-full md:w-[90%] lg:w-[95%] xl:w-full  ">
      <h1 className="font-bold sm:text-2xl capitalize border-b-2 border-secondaryColor ">
        {title}
      </h1>
      <Link to="/" className=" font-bold flex items-center ">
        <p className={`${text ? "hidden sm:block" : ""}  sm:text-base`}>
          {text ? text : ""}
        </p>
        <span className={`${text ? " block " :"hidden"} ml-2`}>
          <ChevronRight size={30} />
        </span>
      </Link>
    </div>
  );
};
const CardList = ({ title, text}) => {
  return (
    <main className="w-full flex flex-col mb-[80px] justify-center items-center   px-4 md:px-0">
      <ItemHeader title={title} text={text} />
      <section className="w-[90%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-full  flex lg:border-y border-[#EEEEEE]  gap-4 lg:gap-10 items-center justify-between flex-wrap xl:flex-nowrap pt-10 ">
        <Card
          type="Phone"
          name="Redmi Note 9c"
          spec="6GB RAM 248GB Internal Memory"
          image={phoneImg}
          price="769,999"
          discount="30"
          discountPrice="700,000"
        />
        <Card
          type="Phone"
          name="Redmi Note 9c"
          spec="6GB RAM 248GB Internal Memory"
          image={phoneImg}
          price="769,999"
        />
        <Card
          type="Phone"
          name="Redmi Note 9c"
          spec="6GB RAM 248GB Internal Memory"
          image={phoneImg}
          price="769,999"
          discount="30"
          discountPrice="700,000"
        />
        <Card
          type="Phone"
          name="Redmi Note 9c"
          spec="6GB RAM 248GB Internal Memory"
          image={phoneImg}
          price="769,999"
          addedToCart
        />
      </section>
    </main>
  );
};

export default CardList;
