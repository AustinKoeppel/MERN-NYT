import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Search
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/search"
        className={
          window.location.pathname === "/search" ? "nav-link active" : "nav-link"
        }
      >
      Saved
      </Link>
    </li>
  </ul>
);

export default NavTabs;
