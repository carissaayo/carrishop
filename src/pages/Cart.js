
import { Link } from "react-router-dom";
import cartImg from "../assets/imgs/cart-item.jfif"
import CartItem from "../components/CartItem";
import CardList from "../components/HomeComponents/CardList";
import Footer from "../components/HomeComponents/Footer";

const Cart = () => {
  return (
    <main className="w-full h-full">
      <div className="w-full flex items-center justify-center h-[20vh] border-b-2 border-[#F2F2F2] mb-10">
        <h2 className="font-bold text-3xl">Cart</h2>
      </div>

      {/* Cart */}
      <section className=" w-[95%] sm:w-[90%] mx-auto md:mx-0 md:w-full flex flex-col 2xl:flex-row justify-between gap-8 mb-20">
        <section className="flex-[5]">
          {/* Desktop  */}
          <div className="hidden sm:flex w-full justify-between p-4 border-b border-[#F2F2F2] items-center">
            <h1 className="text-sm md:text-base flex-1 "></h1>
            <h1 className="text-sm md:text-base flex-[2]">PRODUCT</h1>
            <h1 className="text-sm md:text-base flex-1">PRICE</h1>
            <h1 className="text-sm md:text-base flex-1">QUANTITY</h1>
            <h1 className="text-sm md:text-base flex-1">SUBTOTAL</h1>
          </div>
          {/* Cart Items  */}

          <section className="w-full mb-10">
            <CartItem />
            <CartItem />
            <CartItem />
          </section>

          {/* Coupon Con*/}
          <section className="w-full flex flex-col gap-10 md:gap-0 lg:flex-row justify-between mb-10 ">
            {/* Coupon */}
            <div className="flex flex-col sm:flex-row lg:flex-[4] gap-6 order-[2] lg:order-1">
              <input
                type="text"
                className="mx-auto sm:mx-0 w-[80%] sm:w-[60%] md:w-[50%] outline-[#EEEEEE] border-[#EEEEEE] border p-3"
                placeholder="Coupon Code"
              />
              <button className="mx-auto sm:mx-0 sm:w-[50%] lg:w-[45%] bg-[#FCA311] p-4 rounded-full px-6 text-primaryColor">
                APPLY COUPON
              </button>
            </div>

            {/* Update Cart */}
            <div className="w-full flex flex-col items-center justify-center lg:block   lg:flex-1 order-1 lg:order-2">
              <button className="lg:bg-[#FAFAFA] p-4 rounded-full px-6 bg-[#FCA311] text-primaryColor md:text-[#8D8D8D] w-[80%] lg:w-auto mb-5 lg:mb-0 ">
                UPDATE CART
              </button>
            </div>
          </section>
        </section>

        <section className="2xl:flex-[2] border-2 border-[#F2F2F2] w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto 2xl:w-full h-[45vh] mb-20 2xl:mx-0">
          <p className="p-4 text-xl font-bold border-b border-[#F2F2F2]">
            CART TOTAL
          </p>
          {/* Delivery Info */}
          <div className="flex w-full border-b border-[#F2F2F2] items-center p-4 flex-col sm:flex-row gap-4 sm:gap-0">
            <p className="flex-1">Delivery</p>
            <div className="flex-[3] ">
              <p className="flex justify-end mb-2 items-center text-sm sm:text-base">
                Flat rate: <span className="text-[#FCA311] ml-4">???100,000</span>
                <input
                  type="radio"
                  name=""
                  id=""
                  className="rounded-xl w-4 h-4 ml-2"
                />
              </p>
              <p className="flex justify-end mb-2 items-center text-sm sm:text-base">
                Local pickup:{" "}
                <span className="text-[#FCA311] ml-4">???100,000</span>
                <input
                  type="radio"
                  name=""
                  id=""
                  className="rounded-xl w-4 h-4 ml-2"
                />
              </p>
              <p className="text-[#8D8D8D] flex justify-end pr-4 text-sm sm:text-base">
                Shipping to{" "}
                <span className="text-black  ml-2 cursor-pointer">LAGOS</span>
              </p>
            </div>
          </div>
          {/* Total */}
          <div className="w-full flex flex-col items-center justify-center text-sm sm:text-base">
            <div className="flex items-center justify-between p-4 w-full">
              <h3 className="text-xl">Total</h3>
              <p className="text-[#FCA311] text-xl">???100,000</p>
            </div>
            <Link to="/checkout" className="sm:w-[60%] 2xl:w-[90%]  bg-[#FCA311] p-4 px-6 text-primaryColor rounded-full text-center">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </section>
      </section>

      {/* Similar Products */}
      <CardList title="You may be interested in..." text="" />

      <Footer />
    </main>
  );
}

export default Cart