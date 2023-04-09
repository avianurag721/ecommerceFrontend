import React from "react";

import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const { cart } = useSelector((cart) => cart);

  return (
    <div className="navbar bg-green-700 text-white flex h-[3rem] py-8 justify-center items-center  ">
      <div className="nav flex justify-between w-[80%]">
        <div className="logo flex justify-center items-center gap-2">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.RYwKPeMKqUiHa5B7emHvYQHaHa&pid=Api&P=0"
            className=" rounded-full w-[3rem]"
            alt=""
          />
          <span className=" hidden lg:block " >E-Com</span>
        </div>
        <div className="  right flex justify-center items-center gap-4">
          <NavLink to='/'>Home</NavLink>
          <div className="relative">
            <NavLink to="/cart">
              <HiShoppingCart fontSize="large" />
              <div className="absolute top-[-17px] right-1">{cart.length}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
