import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { logInUser, signInUserGoogle } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleUser = () => {
    signInUserGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-[350px] mx-auto my-20">
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset border-2 border-[#a64259] bg-base-200 rounded-box w-xs p-4">
          <legend className="fieldset-legend text-xl text-[#a64259] font-bold">
            Login
          </legend>

          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />

          <button className="btn bg-[#a64259] text-white mt-4">Login</button>
          <button
            onClick={handleGoogleUser}
            className="btn border-2 border-[#a64259] hover:bg-[#a64259] mt-3 hover:text-white bg-white text-black"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="rounded-full"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-center mt-5">
            Don’t have an account?{" "}
            <NavLink
              to="/register"
              className="underline text-[#a64259] font-semibold"
            >
              Register here
            </NavLink>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
