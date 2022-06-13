import React from "react";
// import "./Members.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./M19.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
function M19() {
  return (
    <div>
      <h1 className="h1">Meet Our Team</h1>
      <br />
      <br />
      <h1 className="h1" id="m3">
        2K19
      </h1>
      <br />
      <br />

      <div id="" class="team">
        <div class="container">
          {/* <div class="section-title">
            <h2>Team</h2>
            <h3>
              Our <span>Office-Bearers</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div> */}

          <div class="row">
            <div class="col-lg-2 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/Event_img2.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                  <div class="social">
                    <a
                      href="https://www.facebook.com/shanu.anand.5249"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF size="2.9rem" color="white" />
                    </a>
                    <a
                      href="https://www.instagram.com/callous_lad/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size="2.9rem" color="white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shanu-anand-06262916b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size="2.9rem" color="white" />
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>SHANU ANAND</h4>
                  <span>Founder & Spokesperson</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default M19;
