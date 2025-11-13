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
      ownerName: ownerName
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
    <div className="w-[350px] mx-auto my-5">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-2 border-[#a64259] rounded-box w-xs p-4">
          <legend className="fieldset-legend text-xl text-[#a64259]">
            Add Listing
          </legend>

          <label className="label">Pet Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Pet Name"
          />

          <label className="label">Pet Image URL</label>
          <input
            type="text"
            className="input"
            name="image"
            placeholder="Pet Image URL"
          />

          <label className="label">Price</label>
          <input
            type="text"
            className="input"
            name="price"
            placeholder="Price"
          />

          <label className="label">Category</label>
          <input
            type="text"
            className="input"
            name="category"
            placeholder="Type your Category"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            placeholder="Location"
          />

          <label className="label">Description</label>
          <textarea className="border p-3 border-gray-300" name="describe"></textarea>

          <label className="label">Owner's Email</label>
          <input
            type="email"
            className="input"
            name="ownerEmail"
            defaultValue={user.email}
            readOnly
          />

          <label className="label">Owner's Name</label>
          <input
            type="text"
            className="input"
            name="ownerName"
            defaultValue={user.displayName}
            readOnly
          />

          <button className="btn bg-[#a64259] text-white">Add</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddListing;
