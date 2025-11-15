import React, { use, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const PetFood = () => {
  const { user } = use(AuthContext);
  console.log(user);
  //   const {_id} = useLoaderData()
  const [adop, setAdop] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/allpets")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAdop(data);
      });
  }, []);
  const foodModal = useRef(null);
  const handleModal = (id) => {
    setSelectedId(id);
    foodModal.current.showModal();
  };
  const handleInfo = (e) => {
    e.preventDefault();
    const buyerEmail = e.target.buyerEmail.value;
    const buyerName = e.target.buyerName.value;
    const price = e.target.price.value;
    const location = e.target.location.value;
    const quantity = e.target.quantity.value;
    const productName = e.target.productName.value;
    const date = e.target.date.value;

    const orderData = {
      productId: selectedId,
      buyerEmail: buyerEmail,
      buyerName: buyerName,
      price: price,
      location: location,
      quantity: quantity,
      productName: productName,
      date: date,
    };

    fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-center mt-5">Pet Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
        {adop.map((ad) => (
          <div className="bg-[#cbcbcb] p-4 rounded-xl" key={ad._id}>
            <div>
              <div>
                <img
                  className="rounded-xl w-full h-48 object-cover"
                  src={ad.pet_food.image}
                />
              </div>
              <h3 className="mt-3 font-bold">{ad.pet_food.name}</h3>
              <p className="mt-3 font-semibold">$ {ad.pet_food.price}</p>
              <button
                onClick={() => handleModal(ad._id)}
                className="btn mt-3 text-white bg-[#a64259]"
              >
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog ref={foodModal} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Order</h3>
          <form onSubmit={handleInfo}>
            <fieldset className="fieldset">
              <label className="label">Buyer Email</label>
              <input
                type="email"
                className="input"
                name="buyerEmail"
                defaultValue={user?.email || ""}
                readOnly
              />

              <label className="label">Buyer Name</label>
              <input
                type="text"
                className="input"
                name="buyerName"
                defaultValue={user?.displayName || ""}
                readOnly
              />

              <label className="label">Price</label>
              <input
                type="text"
                className="input"
                name="price"
                placeholder="Price"
                required
              />

              <label className="label">Location</label>
              <input
                type="text"
                className="input"
                name="location"
                placeholder="Location"
                required
              />

              <label className="label">Product Name</label>
              <input
                type="text"
                className="input"
                name="productName"
                placeholder="Product Name"
                required
              />

              <label className="label">Quantity</label>
              <input
                type="text"
                className="input"
                name="quantity"
                placeholder="Quantity"
                required
              />

              <label className="label">Date</label>
              <input type="date" className="input" name="date" required />

              <button className="btn btn-neutral mt-4">Order</button>
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PetFood;
