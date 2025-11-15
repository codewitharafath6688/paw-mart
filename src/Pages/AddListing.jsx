import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddListing = () => {
  const { _id } = useLoaderData();
  const { user } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const describe = e.target.describe.value;
    const ownerEmail = e.target.ownerEmail.value;
    const ownerName = e.target.ownerName.value;

    const newAdd = {
      productId: _id,
      name: name,
      image: image,
      price: price,
      category: category,
      location: location,
      describe: describe,
      ownerEmail: ownerEmail,
      ownerName: ownerName,
    };

    fetch("http://localhost:3000/addList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You successfully added in list",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-base-200 border-2 border-[#a64259] rounded-2xl p-6 shadow"
      >
        <h2 className="text-2xl font-semibold text-[#a64259] mb-4 text-center">
          Add Listing
        </h2>

        <label className="label">Pet Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          name="name"
          placeholder="Pet Name"
        />

        <label className="label">Pet Image URL</label>
        <input
          type="text"
          className="input input-bordered w-full"
          name="image"
          placeholder="Pet Image URL"
        />

        <label className="label">Price</label>
        <input
          type="text"
          className="input input-bordered w-full"
          name="price"
          placeholder="Price"
        />

        <label className="label">Category</label>
        <input
          type="text"
          className="input input-bordered w-full"
          name="category"
          placeholder="Category"
        />

        <label className="label">Location</label>
        <input
          type="text"
          className="input input-bordered w-full"
          name="location"
          placeholder="Location"
        />

        <label className="label">Description</label>
        <textarea
          className="textarea textarea-bordered w-full"
          name="describe"
          placeholder="Write details..."
          rows={4}
        ></textarea>

        <label className="label">Owner's Email</label>
        <input
          type="email"
          className="input input-bordered w-full bg-gray-100"
          name="ownerEmail"
          defaultValue={user.email}
          readOnly
        />

        <label className="label">Owner's Name</label>
        <input
          type="text"
          className="input input-bordered w-full bg-gray-100"
          name="ownerName"
          defaultValue={user.displayName}
          readOnly
        />

        <button className="btn bg-[#a64259] text-white w-full mt-4">Add</button>
      </form>
    </div>
  );
};

export default AddListing;
