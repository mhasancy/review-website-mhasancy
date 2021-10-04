import React from "react";
import { NavLink } from "react-router-dom";

/* const NavCss = `item.current
? "bg-green-900 text-white"
: "text-gray-300 hover:bg-green-700 hover:text-white",
"block px-3 py-2 rounded-md text-base font-medium"`; */

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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
/* <div className="sticky top-0 w-full z-50">
      <div className="bg-indigo-700 text-white font-bold">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className=" h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="sm:ml-6">
                <div className="flex space-x-4">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/courses">Courses</NavLink>
                  <NavLink to="/research">Research</NavLink>
                  <NavLink to="/about">About</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
