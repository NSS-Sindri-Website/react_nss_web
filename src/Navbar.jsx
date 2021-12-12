import React from "react";
// -----------importing bootstrap files---------------
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// ------------------------------------------------------
const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm">
          <a href="/" className="navbar-brand">
            <img
              src="images/bitLogo.png"
              alt="logo"
              width="33"
              height="40"
              srcSet=""
            />
            <img
              src="images/nssLogo.png"
              alt="logo"
              width="38"
              height="38"
              srcSet=""
            />
            NSS BIT SINDRI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav text-center ms-auto">
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/weather" className="nav-link">
                  Events
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  About US
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
