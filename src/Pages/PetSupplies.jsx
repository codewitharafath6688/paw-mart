import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PetSupplies = () => {
  const [query, setQuery] = useState("");
  const [alllist, setAllList] = useState([]);
  useEffect(() => {
    fetch("https://paw-mart-api-server-pi.vercel.app/allpets")
      .then((res) => res.json())
      .then((data) => setAllList(data));
  }, []);
  console.log(query)
  return (
    <div>
      <div className="w-[287px] mx-auto mt-3">
        <input type="text" onChange={(e) => setQuery(e.target.value)} className="search w-[287px] p-2 rounded-2xl border border-gray-300" placeholder="Search..."/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 w-11/12 mx-auto">
        {alllist.filter(list => list.name.toLowerCase().includes(query.toLowerCase())).map((list) => (
          <div className="bg-[#cbcbcb] p-4 rounded-xl" key={list._id}>
            <div>
              <div>
                <img className="rounded-xl" src={list.pet_image} />
              </div>
              <h3 className="mt-3 font-bold">{list.name}</h3>
              <h3 className="mt-3 font-bold text-gray-500 text-[12px]">
                Category: {list.category}
              </h3>
              <h3 className="mt-3 font-bold text-gray-500 text-[12px]">
                {" "}
                {list.location}
              </h3>
              <p className="mt-3 font-semibold">$ {list.price}</p>
              <Link
                to={`/listDetails/${list._id}`}
                className="btn border-0 mt-3 text-white bg-[#a64259]"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetSupplies;
