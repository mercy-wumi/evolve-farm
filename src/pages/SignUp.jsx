import { useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../baseUrl";
import axios from "axios";

import farmland from "../assets/farmland.svg";

const SignUp = () => {
  const [farmerSignup, setFarmerSignup] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const handleCreateAcc = (e) => {
    e.preventDefault();

    axios({
      url: `${url}/api/dj-rest-auth/registration`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(farmerSignup),
    })
      .then((resp) => {
        console.log(resp);
        setFarmerSignup({
          name: "",
          email: "",
          phone_number: "",
          password: "",
          confirm_password: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const style = {
    input: "block p-2 border-[1px] w-full rounded-lg mt-2 mb-1",
  };
  const handleFarmerAcc = (e) => {
    const { name, value } = e.target;
    setFarmerSignup({
      ...farmerSignup,
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
      <div className="flex-1 overflow-y-scroll justify-center items-center flex">
        <div className="w-5/6 md:w-3/4">
          <Link to="/">
            <p className="text-4xl font-bold text-center mb-4 text-primary">
              Evolve Farm
            </p>
          </Link>
          <p className="text-2xl text-center">Create Account</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Shakira Adams"
                name="name"
                value={farmerSignup.name}
                onChange={handleFarmerAcc}
                className={style.input}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Email Address</label>
              <input
                type="email"
                placeholder="shakira@mail.com"
                name="email"
                value={farmerSignup.email}
                onChange={handleFarmerAcc}
                className={style.input}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Phone Number</label>
              <input
                type="number"
                placeholder="080********"
                name="phone_number"
                value={farmerSignup.phone_number}
                onChange={handleFarmerAcc}
                className={style.input}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                placeholder=""
                name="password"
                value={farmerSignup.password}
                onChange={handleFarmerAcc}
                className={style.input}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Confirm Password</label>
              <input
                type="password"
                placeholder=""
                name="confirm_password"
                value={farmerSignup.confirm_password}
                onChange={handleFarmerAcc}
                className={style.input}
              />
            </div>
            <div className="text-sm mt-4">
              <span>
                By agreeing to the Terms of use and Privacy policy of Evolve
              </span>
              <span className="block mt-2">
                Already have an account,{" "}
                <Link to="/signin" className="text-primary underline">
                  Sign In
                </Link>
              </span>
            </div>
            <button
              className="rounded-2xl bg-primary text-white px-10 py-2 mx-auto flex justify-center items-center mt-12 shadow-2xl"
              type="submit"
              onClick={handleCreateAcc}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
