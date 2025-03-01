import React from "react";

export const Header = ({ title = "To do list" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
