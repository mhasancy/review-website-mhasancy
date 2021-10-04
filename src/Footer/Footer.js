import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-white mt-5  py-5 text-start">
      <div className="row">
        <div className="col-5">
          <h1 className="font-bold fs-2 text-start ms-3 ps-4">
            Open Source University
          </h1>
          <br />
          <h3 className="font-normal fs-6 text-left ms-4 ps-3 lh-base w-75">
            This initiative has been taken to make the generation much more
            educative and informative and most of all practically strong. This
            is not just a university, rather than it is an open platform for
            preparing oneself for the uncertain future thorough our updated
            curriculum.
          </h3>
          <div className="flex g-4 d-flex justify-content-start ms-4 ps-3 pt-4">
            <i className="fab fa-twitter-square fs-2 mr-5"></i>
            <i className="fab fa-facebook-square fs-2 mr-5"></i>
            <i className="fab fa-linkedin fs-2 mr-5"></i>
            <i className="fab fa-youtube fs-2"></i>
          </div>
        </div>
        <div className="col-4">
          <h1 className="font-bold fs-2 text-start ms-3 ps-4">Contact</h1>
          <br />
          <h3 className="font-normal fs-6 text-left ms-4 ps-3 lh-base w-75">
            23/2, Concord Tower, <br />
            Banani, Dhaka Bangladesh. <br />
            <br />
            Tel: +88 01234 567890 <br /> Fax: +88 025 7689 <br />
            <br />
            Email: opensourceeducation@ac.bd
            <br />
            visit:{" "}
            <a
              className="link-light"
              href="http://www.opensourceeducation.ac.bd"
              target="_blank"
              rel="noreferrer"
            >
              www.opensourceeducation.ac.bd
            </a>
          </h3>
        </div>
        <div className="col-3 text-white">
          <h1 className="font-bold fs-2 text-start ms-3 ps-4">Pages</h1>
          <br />
          <ul className=" text-white font-normal fs-6 text-left ms-4 ps-3 lh-base w-75 ">
            <li className="">
              <NavLink className="active link-light" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link-light" to="/courses">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink className="link-light" to="/research">
                Research
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="link-light">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
