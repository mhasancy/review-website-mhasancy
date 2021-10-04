import React from "react";
import { NavLink } from "react-router-dom";

/* const NavCss = `item.current
? "bg-green-900 text-white"
: "text-gray-300 hover:bg-green-700 hover:text-white",
"block px-3 py-2 rounded-md text-base font-medium"`; */

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-50">
      <div className="bg-green-800">
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
    </div>
  );
};

export default Navbar;
