import React from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-in">
          <div class="text-center">
            <h3>Want to know more about NSS BIT SINDRI</h3>
            <p>Click below Link</p>
            <Link
              class="cta-btn"
              as={Link}
              to="/AboutPage"
              rel="noopener noreferrer"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
