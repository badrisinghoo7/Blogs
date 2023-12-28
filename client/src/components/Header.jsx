import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/avatar13.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { eraseLocalData, getLocalData } from "../utils/api";

const Header = () => {
  const navigate = useNavigate();
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNavHeader = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  const handleLogout = () => {
    closeNavHeader();
    eraseLocalData();
    console.log("logged out");
  };
  const name = getLocalData("Name");
  return (
    <div>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="nav_logo" onClick={closeNavHeader}>
            <img src={logo} alt="nav_logo" />
          </Link>
          {isNavShowing && (
            <ul className="nav_menu">
              <li>
                <Link to="/profile/stdh" onClick={closeNavHeader}>
                  {name}
                </Link>
              </li>
              <li>
                <Link to="/create" onClick={closeNavHeader}>
                  Create Post
                </Link>
              </li>
              <li>
                <Link to="/authors" onClick={closeNavHeader}>
                  Authors
                </Link>
              </li>
              <li>
                {getLocalData("token") ? (
                  <Link to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login" onClick={closeNavHeader}>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          )}
          <button
            className="nav_toggle-btn"
            onClick={() => setIsNavShowing(!isNavShowing)}
          >
            {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
