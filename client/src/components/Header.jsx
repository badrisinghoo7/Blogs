import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/avatar13.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
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
  return (
    <div>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">
            <img src={logo} alt="nav_logo" />
          </Link>
          <ul className="nav_menu">
            <li>
              <Link to="/profile/stdh">Ernest Achiever</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
          <button className="nav_toggle-btn">
            {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
