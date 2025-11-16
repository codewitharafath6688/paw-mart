import React, { use, useRef } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const ListDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  const singleList = data.find((dat) => dat._id === id);
  // console.log(singleList);
  const orderModalRef = useRef(null);

  const handleModal = () => {
    orderModalRef.current.showModal();
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
      productId: singleList._id,
      buyerEmail: buyerEmail,
      buyerName: buyerName,
      price: price,
      location: location,
      quantity: quantity,
      productName: productName,
      date: date,
    };

    fetch("https://paw-mart-api-server-pi.vercel.app/order", {
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
    <div className="bg-base-200 min-h-screen mt-10">
      <div className="flex flex-col md:flex-row p-3 gap-5">
        <img
          src={singleList.pet_image}
          className="w-[40%] rounded-lg shadow-2xl"
        />
        <div className="*:mt-4">
          <h2 className="text-2xl lg:text-5xl font-bold ">{singleList.name}</h2>
          <h3 className="font-semibold">{singleList.location}</h3>
          <h3 className="font-semibold">Price: $ {singleList.price}</h3>
          <h3 className="font-semibold">Category: {singleList.category}</h3>
          <p className="py-6">{singleList.about}</p>
          <button onClick={handleModal} className="btn bg-[#a64259] text-white">
            Order
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn hidden"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            open modal
          </button>
          <dialog
            ref={orderModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Order</h3>
              <form onSubmit={handleInfo}>
                <fieldset className="fieldset">
                  <label className="label">Buyer Email</label>
                  <input
                    type="email"
                    className="input"
                    name="buyerEmail"
                    defaultValue={user.email}
                    readOnly
                  />

                  <label className="label">Buyer Name</label>
                  <input
                    type="text"
                    className="input"
                    name="buyerName"
                    defaultValue={user.displayName}
                    readOnly
                  />

                  <label className="label">Price</label>
                  <input
                    type="text"
                    className="input"
                    name="price"
                    placeholder="Price" required
                  />

                  <label className="label">Location</label>
                  <input
                    type="text"
                    className="input"
                    name="location"
                    placeholder="Location" required
                  />

                  <label className="label">Product Name</label>
                  <input
                    type="text"
                    className="input"
                    name="productName"
                    placeholder="Product Name" required
                  />

                  <label className="label">Quantity</label>
                  <input
                    type="text"
                    className="input"
                    name="quantity"
                    placeholder="Quantity" required
                  />

                  <label className="label">Date</label>
                  <input type="date" className="input" name="date" required/>

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
      </div>
    </div>
  );
};

export default ListDetails;
