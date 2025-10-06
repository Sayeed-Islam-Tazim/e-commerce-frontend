import { NavLink, useLoaderData } from "react-router";
import ProductCard from "./product/ProductCard";
import { useState } from "react";

const Home = () => {
  const loadedData = useLoaderData();
  const [products, setProducts] = useState(loadedData);
  return (
    <>
      <div className="flex justify-end w-11/12 mt-4">
        <NavLink to="/products/add-product">
          <button className="btn btn-outline btn-success">Add Product</button>
        </NavLink>
      </div>
      <div className="mt-2 grid md:grid-cols-2 gap-2 sm:grid-cols-1 w-11/12">
        {products.map((product) => (
          <div key={product._id} className="w-full">
            <ProductCard
              setProducts={setProducts}
              products={products}
              product={product}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
