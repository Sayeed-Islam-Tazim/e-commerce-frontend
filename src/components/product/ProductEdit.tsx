import { useLoaderData, useNavigate } from "react-router";
import { formDataConversion } from "../../utulities/utilities";
import Swal from "sweetalert2";

const ProductEdit = () => {
  const navigate = useNavigate();

  const product = useLoaderData();
  const { _id, photo, name, description, quantity, price, category } = product;
  console.log("product", product);

  const handleEditProduct = (e) => {
    console.log("first");
    e.preventDefault();
    const form = e.target;
    const productData = formDataConversion(form);

    fetch(`http://localhost:3000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Product has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <form onSubmit={handleEditProduct}>
      <div className="card  bg-base-100 w-full shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset grid sm:grid-cols-1 md:grid-cols-2">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                className="input"
                placeholder="Description"
              ></textarea>
            </div>
            <div>
              <label className="label">Quantity</label>
              <input
                type="number"
                className="input"
                required
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                min="1"
                title="Must be greater than 1"
              />
            </div>
            <div>
              <label className="label">Price</label>
              <input
                type="number"
                className="input"
                required
                name="price"
                defaultValue={price}
                placeholder="Price"
              />
            </div>
            <div>
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input"
                placeholder="Category"
              />
            </div>
            <div>
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input"
                placeholder="Photo Url"
              />
            </div>
          </fieldset>
          <button type="submit" className="btn btn-neutral w-full mt-4">
            Edit Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductEdit;
