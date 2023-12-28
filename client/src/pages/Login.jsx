import React, { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { eraseLocalData, login, saveLocalData } from "../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  // login

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...userData,
    };
    // console.log(payload);
    login(payload)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // SaveLocalData(data);
        saveLocalData(data);
        setError(data.message);
        console.log(data);
        console.log("hi this is error message", data.message);
        if (data.Token) {
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        eraseLocalData();
        console.log(err);
      });
  };

  //

  const changeInputHandler = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <section className="login">
      <div className="container">
        <h2>Log in</h2>
        <form className="form login_form">
          {error && <p className="form_error-message">{error}</p>}

          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="Password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />

          <button className="btn primary" type="submit" onClick={handleSubmit}>
            {" "}
            Log In
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
