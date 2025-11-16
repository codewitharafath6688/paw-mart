import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const MyListing = () => {
  const { user } = use(AuthContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch("https://paw-mart-api-server-pi.vercel.app/addList")
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
        fetch(`https://paw-mart-api-server-pi.vercel.app/addList/${_id}`, {
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
            const remainigList = list.filter((list) => list._id !== _id);
            setList(remainigList);
          });
      }
    });
  };
  return (
  <div className="w-11/12 min-h-[309px] mx-auto mt-10">
    {/* Desktop/Table View */}
    <div className="hidden md:block overflow-x-auto">
      <table className="table w-full">
        <thead className=" bg-gray-100">
          <tr>
            <th className="text-[#a64259]">Serial No.</th>
            <th className="text-[#a64259]">User's Name</th>
            <th className="text-[#a64259]">Category</th>
            <th className="text-[#a64259]">User's Email</th>
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
              <td className="font-bold">{listed.ownerName}</td>
              <td>{listed.category}</td>
              <td>{listed.ownerEmail}</td>
              <td>{listed.location}</td>
              <td>{listed.name}</td>
              <td>$ {listed.price}</td>
              <td>
                <div className="flex justify-center gap-4">
                  <Link
                    to={`/edit/${listed._id}`}
                    className="btn btn-sm text-white bg-[#a64259]"
                  >
                    Update
                  </Link>

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
            #{index + 1} — {listed.name}
          </p>

          <p><span className="font-bold">Owner:</span> {listed.ownerName}</p>
          <p><span className="font-bold">Email:</span> {listed.ownerEmail}</p>
          <p><span className="font-bold">Category:</span> {listed.category}</p>
          <p><span className="font-bold">Location:</span> {listed.location}</p>
          <p><span className="font-bold">Price:</span> $ {listed.price}</p>

          <div className="flex justify-between mt-4">
            <Link
              to={`/edit/${listed._id}`}
              className="btn btn-sm text-white bg-[#a64259] w-[48%]"
            >
              Update
            </Link>

            <button
              onClick={() => handleDelete(listed._id)}
              className="btn btn-sm text-white bg-[#a64259] w-[48%]"
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

export default MyListing;
