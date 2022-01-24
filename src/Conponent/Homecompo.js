import React from 'react';
import NewCarousel from "../NewCarousel";
// import Carousel from "./Carousel";
import About from './About';
import Gallery from './Gallery';
import Events from './Events';


function Homecompo() {
  return <div>
    
    <NewCarousel />
    <About />
    <Events />
    <Gallery />
    
    
  </div>;
}

export default Homecompo;
