import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="containerNav">
      <ul className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navActive" : "")}
        >
          <li className="listLink">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "navActive" : "")}
        >
          <li className="listLink">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;