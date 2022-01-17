import React from "react";
// -----------importing bootstrap files---------------
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
// ------------------------------------------------------
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-sm">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              className="navBit"
              src="images/bitLogo.png"
              alt="logo"
              width="33"
              height="40"
              srcSet=""
            />
            <img
              className="navNss"
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
              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <p className="droplinks"> 2021</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <p className="droplinks"> 2020</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <p className="droplinks"> 2019</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <p className="droplinks"> 2018</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <p className="droplinks"> 2017</p>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <p className="droplinks"> 2021</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <p className="droplinks"> 2020</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <p className="droplinks"> 2019</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <p className="droplinks"> 2018</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <p className="droplinks"> 2017</p>
                </NavDropdown.Item>
              </NavDropdown>

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
        </div>
      </nav>
      {/* --------------------------------------------------------- */}
    </>
  );
};

export default Navbar;
