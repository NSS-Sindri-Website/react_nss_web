import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 "></div>
            <div className="row">
              <div className="col-6 col-lg-4 foot ">
                <h2>Links</h2>
                <ul className="lit">
                  <li>
                    <Link className="linkcolor" as={Link} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="linkcolor"
                      as={Link}
                      to="/Eventdiscription"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="linkcolor" as={Link} to="/GalleryFullPage">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg-4 foot">
                <h2>More</h2>
                <ul className="lit">
                  <li>
                    <Link className="linkcolor" as={Link} to="/Members">
                      Members
                    </Link>
                  </li>
                  <li>
                    <Link className="linkcolor" as={Link} to="/ContactUs">
                      contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="linkcolor" as={Link} to="/AboutPage">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-4 foot">
                <h2>Follow</h2>
                <div className="row">
                  <div className="col-3 social ">
                    <a href="https://www.facebook.com/bitsnss/">
                      <FaFacebook size="2.9rem" color="white" />
                    </a>
                  </div>
                  <div className="col-3 social">
                    <a href="https://t.me/nssbitsindri">
                      <FaTelegramPlane size="3rem" color="white" />
                    </a>
                  </div>
                  <div className="col-3 social">
                    <a href="https://www.instagram.com/nss_bitsindri/?hl=en">
                      <FaInstagram size="3rem" color="white" />
                    </a>
                  </div>
                  <div className="col-3 social">
                    <a href="https://www.youtube.com/channel/UC7dOKpb4htlwViLRfHdH8Vw">
                      <FaYoutube size="3rem" color="white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className=" text-center  copy">
                Copyright ©️ NSS BIT SINDRI | All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
