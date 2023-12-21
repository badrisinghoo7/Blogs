import React, { useState } from "react";
import { Link } from "react-router-dom";
import avt1 from "../images/avatar1.jpg";
import { FaEdit, FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/sdfds`} className="btn">
          My Posts
        </Link>
        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={avt1} alt="image" />
            </div>
            {/* Form to update avatar */}
            <form className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="png,jpg,jpeg"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label htmlFor="avatar">{FaEdit}</label>
            </form>
            <button className="profile_avatar-btn">{FaCheck}</button>
          </div>
          <h1>Ernest Achiever</h1>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
