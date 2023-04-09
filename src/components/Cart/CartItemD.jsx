import React from "react";
import { ImBin } from "react-icons/im";
import { remove } from "../../redux/Slices/cartSlice";
import  {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";

const CartItemD = ({ item }) => {
    const { title, price, description, image,id } = item;
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(remove(id));
        toast.error("Item Removed from cart");
    }
    


  return (
    <div>
      <div className=" border-2 rounded-md gap-2  border-black p-3 flex flex-col lg:flex-row ">
        <div className=" mx-1 lg:mx-auto w-[50%] lg:max-w-[20%] ">
          <img src={image} alt="Carttt" />
        </div>
        <div className=" flex flex-col justify-around gap-2 ">
          <div className=" flex flex-col  ">
            <h1 className=" text-green-600 font-bold ">
              {title.length > 40 ? title.slice(0, 50) + "..." : title}{" "}
            </h1>
            <p className=" text-sm " >
              {description.length > 60
                ? description.slice(0, 80) + "..."
                : description}
            </p>
          </div>
          <div className=" flex justify-around  ">
                      <h1 className=" text-green-600 font-bold"> Price {price} $ </h1>
                      <div onClick={()=>{removeItem(id)}} className="bg-red-300  flex justify-center items-center p-3 rounded-full">
                          
                      <ImBin />
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemD;
