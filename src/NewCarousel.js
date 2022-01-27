import React from "react";
// -----------importing bootstrap files---------------
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// --------------------------------------------------------

const Images = (props) => {
  return (
    <>
      <div className="imgLeft">
        <img
          className="d-block  caroImg"
          id="caroImge"
          src={props.src}
          alt="First slide"
        />
        <div className="lefti">
          <h1 className="heading">{props.heading}</h1>
          <h2 className="quote">{props.quote}</h2>
        </div>
      </div>
    </>
  );
};
const Captions = (props) => {
  return (
    <>
      <div className="capi">
        <h1>Share Your ideas about Social Service work</h1>
        <a href="/">
          <button className="cbtn">
            <span>Click Here</span>
          </button>
        </a>
      </div>
    </>
  );
};
const NewCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Images
            src="images/img1.jpeg"
            heading="NOT ME BUT YOU"
            quote=" “The best way to find yourself is to lose yourself in the service of others.”-
Mahatma Gandhi"
          />

          <Carousel.Caption>
            <Captions />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Images
            src="images/img2.jpg"
            heading="SOCIAL WELFARE IN STUDENTS"
            quote="“Development of the personality of students through community service”."
          />
          <Carousel.Caption>
            <Captions />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Images
            src="images/img3.jpeg"
            heading="YOUTH FOR SUSTAINABLE DEVELOPMENT"
            quote="Creating an awareness for improvement of the status of
our culture."
          />
          <Carousel.Caption>
            <Captions />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default NewCarousel;

// import React from 'react';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../src/Conponent/Carousel.css";

// function NewCarousel(props) {
//   return <div>
//       <div className="imgLeft">
//          <img
//            className="d-block  caroImg"
//            id="caroImge"
//            src={props.src}
//            alt="First slide"
//          />
//          <div className="lefti">
//            <h1 className="heading">{props.heading}</h1>
//            <h2 className="quote">{props.quote}</h2>
//          </div>
//        </div>

//   </div>;
// }

// export default NewCarousel;
