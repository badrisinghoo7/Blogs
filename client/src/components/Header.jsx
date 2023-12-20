import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Blue Gradient Modern Professional Company Zoom Virtual Background.png";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">
            <img src={logo} alt="nav_logo" />
          </Link>
          <ul className="nav_menu">
            <li>
              <Link to="/profile">Ernest Achiever</Link>
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
          <button className="nav_toggle-btn"></button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
