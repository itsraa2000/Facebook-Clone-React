// Css
import "./style.css";

// Import
import React from "react";
import Search from "./search/Search.tsx";
import Menu from "./menu/Menu.tsx";

function Navbar() {
  return (
    <nav>
      <div className="nb-wrapper">
        <Search />
        <Menu />
      </div>
    </nav>
  );
}

export default Navbar;
