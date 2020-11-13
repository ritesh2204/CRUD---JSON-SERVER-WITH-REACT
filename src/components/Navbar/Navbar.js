import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          SastaBlogger
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink exact className="nav-link" to="/">
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
         
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
