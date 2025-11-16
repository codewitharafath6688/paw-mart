import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Adoption = () => {
  const [adop, setAdop] = useState([]);
  useEffect(() => {
    fetch("https://paw-mart-api-server-pi.vercel.app/allpets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdop(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold text-center mt-5">Pet (Adoption)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
        {adop.map((ad) => (
          <div className="bg-[#cbcbcb] p-4 rounded-xl" key={ad._id}>
            <div>
              <div>
                <img className="rounded-xl" src={ad.pet_image} />
              </div>
              <h3 className="mt-3 font-bold">{ad.name}</h3>
              <h3 className="mt-3 font-bold text-gray-500 text-[12px]">
                Category: {ad.category}
              </h3>
              <h3 className="mt-3 font-bold text-gray-500 text-[12px]">
                {" "}
                {ad.location}
              </h3>
              <p className="mt-3 font-semibold">$ {ad.price}</p>
              <Link
                to={`/listDetails/${ad._id}`}
                className="btn mt-3 text-white bg-[#a64259]"
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

export default Adoption;
