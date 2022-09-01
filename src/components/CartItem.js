import cartImg from "../assets/imgs/cart-item.jfif";

const CartItem = () => {
  return (
    <div className="flex w-full justify-between p-4 border-b border-[#F2F2F2] items-center">
      <div className="flex-1">
        <img src={cartImg} alt="" className="w-[60%]" />
      </div>
      <p className="flex-[2] text-sm">HP Notebook 360 Flip Pro</p>
      <p className="flex-1 text-sm">₦100,000</p>
      <p className="flex-1 text-sm">1</p>
      <p className="flex-1 text-[#FCA311]">₦100,000</p>
    </div>
  );
};

export default CartItem;
