import React from "react";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="containerHeader">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;