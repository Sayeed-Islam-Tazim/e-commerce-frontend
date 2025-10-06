import Swal from "sweetalert2";
import { formDataConversion } from "../../utulities/utilities";
import { useNavigate } from "react-router";

const ProductAdd = () => {
  const navigate = useNavigate();

  const handleProductAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const productData = formDataConversion(form);

    fetch("http://localhost:3000/products/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.acknowledged) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Product has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <form onSubmit={handleProductAdd}>
      <div className="card  bg-base-100 w-full shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset grid sm:grid-cols-1 md:grid-cols-2">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
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
                placeholder="Price"
              />
            </div>
            <div>
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                className="input"
                placeholder="Category"
              />
            </div>
            <div>
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo Url"
              />
            </div>
          </fieldset>
          <button type="submit" className="btn btn-neutral w-full mt-4">
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductAdd;
