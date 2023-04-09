import React from "react";
import Product from "../components/Product";

const Home = (props) => {
  const products = props.products;
  

  return (
    <div className="flex   py-8 justify-center">
      <div className="sm:w-[80%] lg:w-[80%] justify-center mx-2  flex flex-wrap gap-8 ">
        {products.map((data) => (
          <Product key={data.id} item={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
