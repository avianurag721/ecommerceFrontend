import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const { cart } = useSelector((cart) => cart);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="  " >
      <div >
        <p className=" text-2xl text-green-600 ">Your Cart</p>
        <h1 className="text-2xl font-bold text-green-600 ">Summary</h1>
        <p>Total item :{cart.length} </p>
        <div className="top flex">
          <span className="text-xl   ">Total Amount:</span>
          <h1 className="text-2xl  text-green-600 "> {totalAmount} $ </h1>
        </div>
        <div className="btm">
          <button className="btm bg-green-400 text-black font-bold  rounded-md  py-2 px-8">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
