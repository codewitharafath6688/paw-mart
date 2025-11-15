import React, { use } from "react";
import { Link } from "react-router";

const Latest = ({ latestPromise }) => {
  const latestListing = use(latestPromise);
  console.log(latestListing);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
      {latestListing.map((list) => (
        <div className="bg-[#cbcbcb] p-4 rounded-xl" key={list._id}>
          <div>
            <div>
              <img className="rounded-xl" src={list.pet_image}/>
            </div>
            <h3 className="mt-3 font-bold">{list.name}</h3>
            <h3 className="mt-3 font-bold text-gray-500 text-[12px]">Category: {list.category}</h3>
            <h3 className="mt-3 font-bold text-gray-500 text-[12px]"> {list.location}</h3>
            <p className="mt-3 font-semibold">$ {list.price}</p>
            <Link to={`/listDetails/${list._id}`} className="btn border-0 mt-3 text-white bg-[#a64259]">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Latest;
