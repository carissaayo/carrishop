import { Link } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";

const Card = ({
  name,
  image,
  price,
  type,
  discount,
  discountPrice,
  addedToCart,
  spec
}) => {
  return (
    <Link
      to="/"
      className={`h-[450px] md:h-[90%] border-2 border-[#eeeeee] 
     w-[100%] md:w-[45%] lg:w-[30%] xl:w-2/5  flex flex-col justify-center items-center  gap-5 rounded-3xl p-4 relative mb-[40px] lg:mb-0`}
    >
      {discount && (
        <div className=" bg-secondaryColor w-[120px] h-[70px] flex items-center justify-center rounded-tr-3xl rounded-bl-3xl absolute top-0 right-0">
          <p className="text-primaryColor">{discount && discount}% OFF</p>
        </div>
      )}
      <img src={image} alt="product" className="w-[200px] h-[200px]" />
      <h1 className=" text-base font-semibold ">{name}</h1>
      <h1 className="text-sm font-semibold">{spec}</h1>
      <div className="flex items-center justify-between  w-full sm:w-[80%] md:w-[90%]">
        {discount && (
          <p className="font-bold   text-[18px]">
            &#8358;
            {discountPrice}
          </p>
        )}
        <p
          className={`${
            discount ? "text-[#c4c4c4] ml-4 text-sm " : "text-[18px] font-bold"
          } `}
        >
          &#8358;
          <span className={`${discount ? "ml-1 line-through" : ""}`}>
            {price}{" "}
          </span>
        </p>
        <div
          className={`${
            addedToCart ? "bg-secondaryColor" : "bg-[#eeeeee]"
          }  w-[40px] h-[40px] rounded-full flex items-center justify-center`}
        >
          <Cart size={20} className="text-primaryColor" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
