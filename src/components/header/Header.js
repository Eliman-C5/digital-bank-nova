import React from "react";

function Header({info, img}) {
  return (
     <header className="header">
        <h1 className="header-title">{info}</h1>
        <div className="header-pic">
          <img src={img} alt="svg-pic" />
        </div>
      </header>
  );
}

export default Header;