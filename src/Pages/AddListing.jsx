import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const AddListing = () => {
  const {_id} = useLoaderData();
  const {user} = use(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const buyerMail = e.target.email.value;
    const buyerName = e.target.buyerName.value;
    const quantity = e.target.quantity.value;

    const newAdd = {
        productId : _id,
        name: name,
        image: image,
        price: price,
        category: category,
        quantity: quantity,
        buyerMail: buyerMail,
        buyerName: buyerName
    }

    fetch("http://localhost:3000/addList",{
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newAdd)
    })
     .then(res => res.json())
     .then(data => console.log(data));

  }

  return (
    <div className="w-[350px] mx-auto my-5">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-2 border-[#a64259] rounded-box w-xs p-4">
          <legend className="fieldset-legend text-xl text-[#a64259]">Add Listing</legend>

          <label className="label">Pet Name</label>
          <input type="text" className="input" name="name" placeholder="Pet Name" />

          <label className="label">Pet Image URL</label>
          <input type="text" className="input"  name="image" placeholder="Pet Image URL" />

          <label className="label">Price</label>
          <input type="text" className="input"  name="price" placeholder="Price" />

          <label className="label">Category</label>
          <input type="text" className="input" name="category" placeholder="Type your Category" />

          <label className="label">Buyer Gmail</label>
          <input type="email" className="input" defaultValue={user.email} readOnly/>

          <label className="label">Buyer Name</label>
          <input type="text" className="input" defaultValue={user.displayName} readOnly/>

          <label className="label">Quantity</label>
          <input type="text" className="input" name="quantity" placeholder="Quantity" />

          <button className="btn bg-[#a64259] text-white">Add</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddListing;
