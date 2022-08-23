import { Link, useNavigate } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";

const FeaturedProduct = ({
  name,
  image,
  price,
  type,
  dealOfTheDay,
  discount,
  discountPrice,
  addedToCart
}) => {
  return (
    <Link
      to="/"
      className={`${
        dealOfTheDay
          ? " relative h-full border-secondaryColor border-2 rounded-3xl pb-10"
          : "h-4/5 border-r border-[#eeeeee] "
      } w-2/5 flex flex-col justify-center items-center gap-5`}
    >
      {dealOfTheDay && (
        <section className="flex justify-between w-full">
          <p className=" flex items-center justify-center pl-3">
            {dealOfTheDay && "Deal of the day"}
          </p>
          <div className=" bg-secondaryColor w-[120px] h-[70px] flex items-center justify-center rounded-tr-3xl rounded-bl-3xl relative top-2 right-0">
            <p className="text-primaryColor">{discount && discount}% OFF</p>
          </div>
        </section>
      )}

      {dealOfTheDay ? (
        <>
          <img
            src={image}
            alt="deal of the day"
            className="w-[150px] h-[150px]"
          />
          <h1 className=" text-sm font-semibold text-center">{name}</h1>
          <div className="flex items-center">
            <p className="font-bold  text-secondaryColor text-[18px]">
              &#8358;
              {discountPrice}
            </p>
            <p className="text-[#c4c4c4] ml-4 text-sm ">
              &#8358;
              <span className="ml-1 line-through">{price} </span>
            </p>
          </div>
          <p className="">Limited Time Offer</p>
          <section className="">
            <div className="flex items-center gap-1 ">
              <p className="bg-[#F5F5F5] flex items-center justify-center h-[40px] w-[40px] text-base mb-2 font-bold">
                7
              </p>
              <p>:</p>

              <p className="bg-[#F5F5F5] flex items-center justify-center h-[40px] w-[40px]  text-base mb-2 font-bold">
                28
              </p>
              <p>:</p>

              <p className="bg-[#F5F5F5] flex items-center justify-center h-[40px] w-[40px]  text-base mb-2 font-bold">
                00
              </p>
            </div>
            <div className="flex items-center gap-1 ">
              <p className="uppercase text-[12px] text-center flex-1 font-bold">
                Hours
              </p>
              <p className="uppercase  text-[12px] text-center flex-1 font-bold">
                Min
              </p>
              <p className="uppercase  text-[12px] text-center flex-1 font-bold">
                Secs
              </p>
            </div>
          </section>
        </>
      ) : (
        <>
          <h3 className="text-base font-medium">{type}</h3>
          <h1 className="text-secondaryColor text-base font-semibold">
            {name}
          </h1>
          <img src={image} alt="featured product" className="w-[250px]" />
          <div className="flex items-center justify-between w-4/5">
            <p className="font-bold text-[20px]">&#8358; {price}</p>
            <div
              className={`${
                addedToCart ? "bg-secondaryColor" : "bg-[#eeeeee]"
              }  w-[40px] h-[40px] rounded-full flex items-center justify-center`}
            >
              <Cart size={20} className="text-primaryColor" />
            </div>
          </div>
        </>
      )}
    </Link>
  );
};

export default FeaturedProduct;
