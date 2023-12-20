import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Login = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <section className="login">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form login_form">
          <p className="form_error-message">This is an error message.</p>

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

          <button className="btn primary" type="submit">
            {" "}
            Submit
          </button>
        </form>
        <small>
          Don't have an account ? <Link to="/register">Signup</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
