import React, { useState } from "react";
import "../Topbar.css";
import { FaSearch, FaBell, FaSun, FaMoon } from "react-icons/fa";

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2 className="logo">💰</h2>
      </div>

      <div className="topbar-center">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search transactions, users..." />
        </div>
      </div>

      {/* <div className="topbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button> */}

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        {/* <div className="profile-avatar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt="User Avatar"
          />
        </div> */}
      </div>
    // </div>
  );
};

export default Topbar;

