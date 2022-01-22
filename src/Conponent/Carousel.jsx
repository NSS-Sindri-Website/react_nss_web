import React from "react";
// -----------importing bootstrap files---------------
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// --------------------------------------------------------

const CarouselItem = (props) => {
  return (
    <>
      <div className="carousel-item " style={{backgroundColor:"grey"}}>
        <div className="container" style={{backgroundColor:"black"}}>
        <img src={props.src} className="d-block w-100 img-fluid" alt="img1" />
        </div>
      </div>
    </>
  );
};
const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{backgroundColor:"grey"}}>
            <div className="container" style={{backgroundColor:"black"}}>
            <img
              src="images/img2.jpg"
              className="d-block w-100 img-fluid"
              alt="img2"
            />
            </div>
            </div>
          <CarouselItem src="images/img1.jpg" />
          <CarouselItem src="images/img3.jpg" />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
