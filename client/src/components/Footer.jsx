import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="footer_categories">
          <li>
            <Link to="/posts/category/:Agriculture">Agrculture</Link>
          </li>
          <li>
            <Link to="/posts/category/:Bussiness">Bussiness</Link>
          </li>
          <li>
            <Link to="/posts/category/:Education">Education</Link>
          </li>
          <li>
            <Link to="/posts/category/:Entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/posts/category/:Art">Art</Link>
          </li>
          <li>
            <Link to="/posts/category/:Investment">Investment</Link>
          </li>
          <li>
            <Link to="/posts/category/:Uncategorized">Uncategorized</Link>
          </li>
          <li>
            <Link to="/posts/category/:Weather">Weather</Link>
          </li>
        </ul>
        <div className="footer_copyright">
          <small> All rights have been taken &copy;Copyright Thakur.</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
