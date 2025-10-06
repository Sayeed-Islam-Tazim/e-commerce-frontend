import { HiMiniPencilSquare } from "react-icons/hi2";
import { NavLink, useLoaderData } from "react-router";

const ProductView = () => {
  const product = useLoaderData();
  const { _id, photo, name, description, quantity, price, category } = product;
  return (
    <div className="w-10/12 flex items-center space-x-3">
      <img src={photo} className="w-96 h-96 rounded-xl" alt="" />
      <div>
        <p className="text-2xl text-yellow-200">{name}</p>
        <p className="text-md">Description: {description}</p>
        <p className="text-md">
          Quantity: <span className="text-blue-300">{quantity}</span>
        </p>
        <p className="text-md ">
          Price: <span className="text-green-600">{price}/-</span>
        </p>
        <p className="text-md">Category: {category}</p>
        <div className="mt-8 text-blue-300">
          <NavLink to={`/products/edit-product/${_id}`}>
            <HiMiniPencilSquare />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
