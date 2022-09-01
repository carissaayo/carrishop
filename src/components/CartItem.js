import { X } from "react-bootstrap-icons";
import cartImg from "../assets/imgs/cart-item.jfif";

const CartItem = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:flex w-full justify-between p-4 border-b border-[#F2F2F2] items-center">
        <div className="flex-1">
          <img src={cartImg} alt="" className="w-[60%]" />
        </div>
        <p className="flex-[2] text-sm">HP Notebook 360 Flip Pro</p>
        <p className="flex-1 text-sm">₦100,000</p>
        <p className="flex-1 text-sm">1</p>
        <p className="flex-1 text-[#FCA311]">₦100,000</p>
      </div>

      {/* Mobile */}
      <div className="cart-item w-full sm:hidden border-b border-[#F2F2F2] pb-10 mb-10">
        <div className="block item-image">
          <img src={cartImg} alt="" className="w-[80%]  h-full" />
        </div>
        <div className="item-name flex  justify-between  sm:items-center w-full  py-2 sm:py-4">
          <p className="text-sm xs:text-base">HP Notebook 360 Flip Pro</p>
          <X className="text-xl" />
        </div>
        <div className="item-price flex  justify-between items-center w-full border-b-2 border-[#E4E4E4] border-dotted py-2 sm:py-4">
          <p className="text-sm xs:text-base">PRICE</p>
          <p className="  text-[#8D8D8D]">₦100,000</p>
        </div>
        <div className="item-quantity flex  justify-between items-center w-full border-b-2 border-[#E4E4E4] border-dotted py-2 sm:py-4">
          <p className="text-sm xs:text-base">QUANTITY</p>
          <p className=" text-[#8D8D8D]">1</p>
        </div>
        <div className="item-subtotal flex  justify-between items-center w-full py-2 sm:py-4">
          <p className="text-sm xs:text-base">SUBTOTAL</p>
          <p className=" text-[#FCA311] ">₦100,000</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
