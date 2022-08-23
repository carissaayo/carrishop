import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";
import phoneImg from "../../assets/imgs/featured-phone.png";

import Card from "./Card";
const ItemHeader = ({title,text}) => {
  return (
    <div className="flex  justify-between items-center h-[35px] w-full ">
      <h1 className="font-bold text-2xl capitalize border-b-2 border-secondaryColor">{title}</h1>
      <Link to="/" className=" font-bold flex items-center">
        {text?text :"See All"}
        <span className="ml-2">
          <ChevronRight size={30}/>
        </span>
      </Link>
    </div>
  );
};
const CardList = ({ title, text}) => {
  return (
    <main className="w-full   mb-[80px]">
      <ItemHeader title={title} text={text}/>
      <section className="w-full flex border-y border-[#EEEEEE] rounded-l-3xl gap-10 items-center justify-between ">
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
