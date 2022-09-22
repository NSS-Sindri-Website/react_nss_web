import "./Testimonial.css";
import React from "react";
// Import Swiper React components

// Import Swiper styles
//  import { Pagination, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "./Testimonial.css";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonial() {
  return (
    <>
      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-in">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="testimonial-item ">
                <img src="images/dksingh.png" class="testimonial-img" alt="" />
                <h3> Dr. D.K. Singh</h3>
                <h4 className="testh4">Director, B.I.T Sindri</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item">
                <img
                  src="images/ghyanshyam.png"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Prof. Dr. Ghanshyam</h3>
                <h4 className="testh4">
                  Training & Placement Officer,BIT Sindri
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item">
                <img src="images/rag.jpg" class="testimonial-img" alt="" />
                <h3> Prof Raghunandan Kumar</h3>
                <h4 className="testh4">Prof Incharge, NSS BIT SINDRI</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
