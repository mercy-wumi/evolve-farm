import { useState } from "react";
import { Link } from "react-router-dom";

import farmland from "../assets/farmland.svg";

const SignUp = () => {
  const [farmerSignIn, setFarmerSignIn] = useState({
    email: "",
    password: "",
  });

  const handleLoginAcc = (e) => {
    e.preventDefault();
    console.log(farmerSignIn);
    setFarmerSignIn({
      email: "",
      password: "",
    });
  };

  const style = {
    input: "block p-2 border-[1px] w-full rounded-lg mt-2 mb-1",
  };
  const handleFarmerAccLogin = (e) => {
    const { name, value } = e.target;
    setFarmerSignIn({
      ...farmerSignIn,
      [name]: value,
    });
  };
  return (
    <div className="h-screen flex">
      <img
        src={farmland}
        alt="farm land"
        className="hidden lg:flex flex-1 object-cover"
      />
      <div className="flex-1 justify-center items-center flex">
        <div className="w-5/6 md:w-3/4">
          <Link to="/">
            <p className="text-4xl font-bold text-center mb-4 text-primary">
              Evolve Farm
            </p>
          </Link>
          <p className="text-2xl text-center">Login</p>
          <form>
            <div className="mb-4">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="shakira@mail.com"
                name="email"
                value={farmerSignIn.email}
                onChange={handleFarmerAccLogin}
                className={style.input}
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                placeholder=""
                name="password"
                value={farmerSignIn.password}
                onChange={handleFarmerAccLogin}
                className={style.input}
              />
            </div>
            <div className="text-sm mt-4">
              <span>
                By agreeing to the Terms of use and Privacy policy of Evolve
              </span>
              <span className="block mt-2">
                Don't have an account,{" "}
                <Link to="/signup" className="text-primary underline">
                  Sign Up
                </Link>
              </span>
            </div>
            <button
              className="rounded-2xl bg-primary text-white px-10 py-2 mx-auto flex justify-center items-center mt-12 shadow-2xl"
              type="submit"
              onClick={handleLoginAcc}
            >
              Signin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
