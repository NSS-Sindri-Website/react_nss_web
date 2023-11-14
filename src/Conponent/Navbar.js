import React from "react";
import { Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";
import NavDropdown from "react-bootstrap/NavDropdown";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar sticky-top navbar-expand-sm"
        style={{ borderRight: "0px" }}
      >
        <div className="container-fluid" style={{ marginRight: "0px" }}>
          <Link as={Link} to="/" className="navbar-brand">
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
          </Link>
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
          <div className="collapse navbar-collapse " id="toggleMobileMenu">
            <ul className="navbar-nav text-center ms-auto">
              <li>
                <Link
                  as={Link}
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  Home
                </Link>
              </li>

              <NavDropdown title="Members" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/M17"
                  href="#m1"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2017</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/M18"
                  href="#m2"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2018</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/M19"
                  href="#m3"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2019</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/M20"
                  href="#m4"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2020</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/M21"
                  href="#m5"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2021</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/M22"
                  href="#m5"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2022</p>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/E24"
                  href="#e1"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2023-24</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/E23"
                  href="#e1"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2022-23</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/E22"
                  href="#e1"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2021-22</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/E21"
                  href="#e1"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks"> 2020-21</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/E20"
                  href="#e2"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks">2019-20</p>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/E19"
                  href="#e3"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  <p className="droplinks">2018-19</p>
                </NavDropdown.Item>
              </NavDropdown>
              <li>
                <Link
                  as={Link}
                  to="/GalleryFullPage"
                  className="nav-link"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  as={Link}
                  to="/AboutPage"
                  className="nav-link"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  as={Link}
                  to="/ContactUs"
                  className="nav-link"
                  onClick={() => {
                    ".navbar-collapse".collapse("hide");
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
