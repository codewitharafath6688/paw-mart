import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const MyListing = () => {
  const { user } = use(AuthContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch("http://localhost:3000/addList")
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
        fetch(`http://localhost:3000/addList/${_id}`, {
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
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="border">
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
            {/* row 1 */}
            {list.map((listed, index) => (
              <tr key={listed._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{listed.ownerName}</div>
                    </div>
                  </div>
                </td>
                <td>{listed.category}</td>
                <td>{listed.ownerEmail}</td>
                <td>{listed.location}</td>
                <td>{listed.name}</td>
                <td>$ {listed.price}</td>
                <th className="flex justify-center items-center gap-5">
                  <Link
                    to={`/edit/${listed._id}`}
                    className="btn text-white bg-[#a64259]"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(listed._id)}
                    className="btn text-white bg-[#a64259]"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;
