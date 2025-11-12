import React from "react";
import ErrorImg from "../assets/Gemini_Generated_Image_f6byuhf6byuhf6by.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="w-[50%] h-full flex flex-col justify-center items-center">
        <div className="w-[45%]">
          <img className="my-5 w-full h-full object-cover rounded-2xl" src={ErrorImg} />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="font-bold text-xl text-center">Looks like this page has gone <br/> walkies...</h2>
          <p className="text-center text-[13px] font-semibold">
            We can't seem to find the page you're looking for it might have been <br/> moved, renamed, or is temporarily unavailable.
          </p>
          <Link to='/' className="btn text-white bg-[#a64259] rounded-xl">Back to go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
