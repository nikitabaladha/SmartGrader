import React from "react";
import { Link } from "react-router-dom";

import { MdArrowOutward } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

import logo from "../../Images/smart-grader-logo.png";

const Navbar = () => {
  return (
    <>
      <div>
        <p>
          <span>Welcome to Smart Grader!</span>
          <span>info@smartgrader.in</span> <span>+91-8920964502</span>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Smart Grader Logo"
              style={{ height: "40px" }}
            />
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/docs">
                  Chat with our docs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/discord">
                  Join our Discord
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/demo">
                  Get Demo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog <MdArrowOutward />
                </Link>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-outline-dark">
                  <CgLogIn />
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-primary">
                  <FaUser />
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
