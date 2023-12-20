import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Register = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandler = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form">
          <p className="form_error-message">This is an error message.</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="Password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button className="btn primary" type="submit">
            {" "}
            Submit
          </button>
        </form>
        <small>
          Already have an account ? <Link to="/login">Login</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
