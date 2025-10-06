import { HiMiniTrash } from "react-icons/hi2";
import { HiEye } from "react-icons/hi2";
import { HiMiniPencilSquare } from "react-icons/hi2";

import { NavLink } from "react-router";
import Swal from "sweetalert2";

const ProductCard = ({ product, products, setProducts }) => {
  const { _id, photo, name, price, quantity } = product;
  const handleProductDelete = (id: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const remainingProducts = products.filter(
                  (product) => product._id !== _id
                );
                setProducts(remainingProducts);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="hero border-amber-950 border-4 rounded-2xl bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={photo} className="max-w-sm h-96 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="pt-4 ">
            Price :<span className="text-green-400"> {price}/-</span>
          </p>
          <p className="pb-4 ">
            Quantity :<span className="text-blue-400"> {quantity}</span>
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleProductDelete(_id)}
              className="btn btn-error"
            >
              <HiMiniTrash />
            </button>
            <NavLink to={`/products/view-product/${_id}`}>
              <HiEye />
            </NavLink>
            <NavLink to={`/products/edit-product/${_id}`}>
              <HiMiniPencilSquare />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
