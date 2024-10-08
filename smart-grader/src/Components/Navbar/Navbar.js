import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdArrowOutward } from "react-icons/md";
import { CgLogIn } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import logo from "../../Images/smart-grader-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="row top-row">
          <div className="col-md-6 right-content">
            <p>Welcome to Smart Grader!</p>
          </div>
          <div className="col-md-6 left-content">
            <p>
              <span className="p-2">info@smartgrader.in</span>{" "}
              <span>+91-8920964502</span>
            </p>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo on the left */}
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Smart Grader Logo"
                style={{ height: "50px" }}
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <RxCross1 className="close-icon" />
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>

            <div
              className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarNav"
            >
              {/* Nav links in the center */}
              <ul className="navbar-nav mx-auto">
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
                    Blog <MdArrowOutward className="arrow-icon" />
                  </Link>
                </li>
              </ul>

              {/* Buttons on the right */}
              <div className="buttons-container">
                <button type="button" className="login-btn">
                  <CgLogIn className="icon" />
                  Login
                </button>
                <button type="button" className="signup-btn">
                  <FaUser className="icon" />
                  Signup
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
