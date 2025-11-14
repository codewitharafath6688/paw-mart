import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch("http://localhost:3000/order")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setList(data);
        });
    }
  }, [user.email]);
   const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Removed");
          fetch(`http://localhost:3000/order/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Successfully Deleted.",
                  icon: "success",
                });
              }
              const remainigOrder = list.filter((list) => list._id !== _id);
              setList(remainigOrder);
            });
        }
      });
    };
  return (
  <div className="w-11/12 min-h-[269px] mx-auto my-10">

    {/* Desktop / Tablet View */}
    <div className="hidden md:block overflow-x-auto">
      <table className="table w-full">
        <thead className=" bg-gray-100">
          <tr>
            <th className="text-[#a64259]">Serial No.</th>
            <th className="text-[#a64259]">Buyer's Name</th>
            <th className="text-[#a64259]">Quantity</th>
            <th className="text-[#a64259]">Buyer's Email</th>
            <th className="text-[#a64259]">Location</th>
            <th className="text-[#a64259]">Pet Name</th>
            <th className="text-[#a64259]">Price</th>
            <th className="text-[#a64259] text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((listed, index) => (
            <tr key={listed._id}>
              <td>{index + 1}</td>
              <td className="font-bold">{listed.buyerName}</td>
              <td>{listed.quantity}</td>
              <td>{listed.buyerEmail}</td>
              <td>{listed.location}</td>
              <td>{listed.productName}</td>
              <td>$ {listed.price * listed.quantity}</td>

              <td>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleDelete(listed._id)}
                    className="btn btn-sm text-white bg-[#a64259]"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile View */}
    <div className="md:hidden flex flex-col gap-5">
      {list.map((listed, index) => (
        <div
          key={listed._id}
          className="border p-4 rounded-xl shadow-sm bg-white"
        >
          <p className="font-semibold text-lg text-[#a64259]">
            #{index + 1} — {listed.productName}
          </p>

          <p><span className="font-bold">Buyer:</span> {listed.buyerName}</p>
          <p><span className="font-bold">Email:</span> {listed.buyerEmail}</p>
          <p><span className="font-bold">Quantity:</span> {listed.quantity}</p>
          <p><span className="font-bold">Location:</span> {listed.location}</p>
          <p><span className="font-bold">Price:</span> 
            $ {listed.price * listed.quantity}
          </p>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleDelete(listed._id)}
              className="btn btn-sm text-white bg-[#a64259] w-full"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default MyOrders;
