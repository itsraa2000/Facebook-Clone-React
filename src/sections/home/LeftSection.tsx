//CSS
import "./style.css";

//Import
import React from "react";
import ProfileMenu from "../../components/profile/Home/ProfileMenu";
import Footer from "../../components/profile/Home/components/Footer";

function LeftSection() {
  return (
    <div role="navigation" className="ls-wrapper height-main">
      <div className="ls-contain">
        <div className="ls-container">
          <ProfileMenu />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
