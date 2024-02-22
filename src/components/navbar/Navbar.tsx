// Css
import "./style.css";

// Import
import React from "react";
import Search from "./section/searchsection/Search";

function Navbar() {
  return (
    <nav>
      <div className="nb-wrapper">
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
