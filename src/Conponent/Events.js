import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Events() {
  return (
    <div className="tm container">
      <>
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box" data-aos="zoom-in">
              <div class="icon">
                <img
                  src="images/Event_img1.jpg"
                  className="d-block  img-flu"
                  alt="img1"
                />
              </div>
              <h4>
                <Link
                  as={Link}
                  to="/Eventdiscription"
                  className="homeEventYear"
                >
                  2022
                </Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab, exercitationem sit possimus dolorem earum perspiciatis
                ipsum itaque deleniti in nesciunt, alias iste cum?
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon">
                <img
                  src="images/Event_img2.jpg"
                  className="d-block  img-flu"
                  alt="img1"
                />
              </div>
              <h4>
                <Link
                  as={Link}
                  to="/Eventdiscription"
                  className="homeEventYear"
                >
                  2021
                </Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab, exercitationem sit possimus dolorem earum perspiciatis
                ipsum itaque deleniti in nesciunt, alias iste cum?
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon">
                <img
                  src="images/Event_img3.jpg"
                  className="d-block  img-flu"
                  alt="img1"
                />
              </div>
              <h4>
                <Link
                  as={Link}
                  to="/Eventdiscription"
                  className="homeEventYear"
                >
                  2020
                </Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab, exercitationem sit possimus dolorem earum perspiciatis
                ipsum itaque deleniti in nesciunt, alias iste cum?
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon">
                <img
                  src="images/Event_img4.jpg"
                  className="d-block img-flu"
                  alt="img1"
                />
              </div>
              <h4>
                <Link
                  as={Link}
                  to="/Eventdiscription"
                  className="homeEventYear"
                >
                  2019
                </Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab, exercitationem sit possimus dolorem earum perspiciatis
                ipsum itaque deleniti in nesciunt, alias iste cum?
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="400">
              <div class="icon">
                <img
                  src="images/Event_img5.jpg"
                  className="d-block img-flu"
                  alt="img1"
                />
              </div>
              <h4>
                <Link
                  as={Link}
                  to="/Eventdiscription"
                  className="homeEventYear"
                >
                  2018
                </Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab, exercitationem sit possimus dolorem earum perspiciatis
                ipsum itaque deleniti in nesciunt, alias iste cum?
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box" data-aos="zoom-in" data-aos-delay="500">
              <div class="icon">
                <img
                  src="images/Event_img6.jpg"
                  className="d-block  img-flu"
                  alt="img1"
                />
              </div>
              <h4>
                <Link
                  as={Link}
                  to="/Eventdiscription"
                  className="homeEventYear"
                >
                  2017
                </Link>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab, exercitationem sit possimus dolorem earum perspiciatis
                ipsum itaque deleniti in nesciunt, alias iste cum?
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Events;
