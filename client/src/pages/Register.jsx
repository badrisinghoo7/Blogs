import React, { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { register } from "../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState(null);

  const changeInputHandler = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      ...userData,
    };
    register(payload)
      .then((res) => {
        console.log("data is here", res.message);
        if (res.status === 201) {
          navigate("/login");
        } else {
          return res.json();
        }
        // navigate("/login");
      })
      .then((data) => {
        console.log(data.message);
        setError(data.message);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(userData);
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form">
          {error && <p className="form_error-message">{error}</p>}

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
          <button
            className="btn primary"
            type="submit"
            onClick={handleRegister}
          >
            {" "}
            Register
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
