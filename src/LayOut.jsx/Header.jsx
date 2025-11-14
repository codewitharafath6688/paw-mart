import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { user, logOutUser } = use(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOutUser()
      .then(window.location.reload())
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/petSupplies" className="font-semibold">
          Pets & Supplies
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addListing" className="font-semibold">
              Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="/myListing" className="font-semibold">
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink to="/myOrders" className="font-semibold">
              My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar  bg-[#f9f9f9] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100  z-1000 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-[22%] md:w-[9%]" src={Logo} />
          <a href="/" className="font-bold text-2xl text-[#a64259]">
            PawMart
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-5">{links}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        {user ? (
          <>
            <img className="w-8 h-8 rounded-full -mr-4 lg:mr-0" src={user.photoURL}/>
            <button
              onClick={handleSignOut}
              className="btn bg-[#a64259] text-white"
              type="button"
            >
              SignOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn bg-[#a64259] text-white">
              Login
            </Link>
            <Link to="/register" className="btn  bg-[#a64259] text-white">
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
