import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Edit = () => {
  const { name, category, price, _id, location, image, describe } =
    useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const describe = e.target.describe.value;
    const updateList = {
      _id,
      name,
      image,
      price,
      location,
      describe,
      category,
    };
    fetch(`https://paw-mart-api-server-pi.vercel.app/addList/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your update has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-[300px] mx-auto my-5">
      <form onSubmit={handleUpdate}>
        <fieldset className="fieldset bg-base-200 border-2 border-[#a64259] rounded-box w-xs p-4">
          <legend className="fieldset-legend text-xl text-[#a64259]">
            Update Listing
          </legend>

          <label className="label">Pet Name</label>
          <input
            type="text"
            className="input"
            name="name"
            defaultValue={name}
          />

          <label className="label">Pet Image URL</label>
          <input
            type="text"
            className="input"
            name="image"
            defaultValue={image}
          />

          <label className="label">Price</label>
          <input
            type="text"
            className="input"
            name="price"
            defaultValue={price}
          />

          <label className="label">Category</label>
          <input
            type="text"
            className="input"
            name="category"
            defaultValue={category}
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            defaultValue={location}
          />

          <label className="label">Description</label>
          <textarea
            className="border p-3 border-gray-300"
            name="describe"
            defaultValue={describe}
          ></textarea>

          <button className="btn bg-[#a64259] text-white">Update</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Edit;
