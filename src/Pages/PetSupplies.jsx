import React, { useEffect, useState } from "react";

const PetSupplies = () => {
  const [alllist, setAllList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allpets")
      .then((res) => res.json())
      .then((data) => setAllList(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 my-10 w-11/12 mx-auto">
      {alllist.map((list) => (
        <div className="bg-[#cbcbcb] p-4 rounded-xl" key={list._id}>
          <div>
            <div>
              <img className="rounded-xl" src={list.pet_image} />
            </div>
            <h3 className="mt-3 font-bold">{list.name}</h3>
            <p className="mt-3">$ {list.price}</p>
            <button className="btn mt-3 text-white bg-[#a64259]">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetSupplies;
