import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ item }) => {
  const { cart } = useSelector((cart) => cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item Added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from cart");
  };

  return (
    <div className=" border-2 border-black hover:scale-105 transition-all duration-300 ease-in  w-full md:w-[50%] lg:w-[30%]  p-4  flex flex-col  rounded-md justify-between">
      <p className="text-green-700 font-bold"> {item.title.length < 30
          ? item.title
          : item.title.substring(0, 70) + "..."} </p>
      <p className=" text-sm ">
        {item.description.length < 100
          ? item.description
          : item.description.substring(0, 70) + "..."}
      </p>
      <div className=" flex  justify-center items-center max-w-[60%] h-auto mx-auto">
      <img
        className="  bg-cover flex  item-center"
        src={item.image}
        alt="img"
        />
        </div>

      <div className="flex font-bold text-green-600">
        <div>{`Price:${item.price} $`}</div>
      </div>
      <div className=" flex justify-center  gap-5 ">
        {cart.some((p) => p.id === item.id) ? (
          <button
            onClick={() => {
              removeFromCart(item.id);
            }}
            className="button text-white border-2 border-black font-bold bg-black rounded-md p-1"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => {
              addToCart(item);
            }}
            className="button text-black border-2 border-black font-bold px-9 bg-green-600 rounded-md p-1"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
