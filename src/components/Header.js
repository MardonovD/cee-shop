import React from "react";

const Header = () => {
  return (
    <div className="ui pointing menu" style={{ padding: "5px 30px" }}>
      <a className="active item">Doston Shoop </a>

      <div className="right menu">
        <div className="ui vertical animated button" >
          <div className="hidden content">Shop</div>
          <div className="visible content">
            <i className="shop icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// /tabindex="0"