import React from "react";
// import React, { useState } from "react";
// import { useEffect } from "react";
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
  // const [openModal, setOpenModal] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpenModal(true);
  //   }, 3000);
  // }, []);
  return (
    <div>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
      <NewCarousel />
      <About />
      {/* <Events /> */}
      <EventsHome />
      <Testimonial />
      <PostBearer />
      <Gallery />
    </div>
  );
}

export default Homecompo;
