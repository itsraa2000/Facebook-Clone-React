// Css
import "./style.css";

// Import
import React from "react";
import Search from "./search/Search.tsx";
import Menu from "./menu/Menu.tsx";
import Profile from "./profile/Profile.tsx";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nb-wrapper">
        <Search />
        <Menu />
        <Profile />
      </div>
    </nav>
  );
}

export default Navbar;
