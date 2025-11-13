import React, { use } from "react";

const Latest = ({ latestPromise }) => {
  const latestListing = use(latestPromise);
  console.log(latestListing);
  return (
    <div className=" grid grid-cols-3 gap-5" >
      {latestListing.map((list) => (
        <div className="bg-[#cbcbcb] p-4 rounded-xl" key={list._id}>
          <div>
            <div>
              <img className="rounded-xl" src={list.pet_image}/>
            </div>
            <h3 className="mt-3 font-bold">{list.name}</h3>
            <p className="mt-3">$ {list.price}</p>
            <button className="btn mt-3 text-white bg-[#a64259]">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Latest;
