import React from "react";
import NewCarousel from "../NewCarousel";
// import Carousel from "./Carousel";
import About from "./About";
import Gallery from "./Gallery";
import Events from "./Events";
import PostBearer from "./PostBearer";

function Homecompo() {
  return (
    <div>
      <NewCarousel />
      <About />
      <Events />
      <PostBearer />
      <Gallery />
    </div>
  );
}

export default Homecompo;
