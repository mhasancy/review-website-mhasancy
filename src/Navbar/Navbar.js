//imported file
import React from "react";
import { NavLink } from "react-router-dom";
//navbar component
const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between"
        style={{ backgroundColor: "#222222", height: "70px" }}
      >
        <div className="container">
          <nav className="navbar-brand" to="/">
            <span className="text-light fw-bold">
              The Open Source University
            </span>
          </nav>
          {/* nav link */}
          <div className="navbar" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/research">
                  Research
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
