import React from "react";
// import "../modal.css";
// import Modal from "../Modal";

import NewCarousel from "../NewCarousel";
// import Carousel from "./Carousel";

import About from "./About";
import Gallery from "./Gallery";
// import Events from "./Events";

import PostBearer from "./PostBearer";
import EventsHome from "./EventsHome";
import Testimonial from "./Testimonial";

function Homecompo() {
  return (
    <div>
      <NewCarousel />
      <About />
      <EventsHome />
      <Testimonial />
      <PostBearer />
      <Gallery />
    </div>
  );
}

export default Homecompo;