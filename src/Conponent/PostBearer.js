import React from "react";
import "./PostBearer.css";

import { Pagination, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/free-mode/free-mode.min.css";

const Item = (props) => {
  return (
    <>
      <div className="swiper-slide">
        <div className="box">
          <div className="cardimg">
            <img src={props.src} alt="1" />
          </div>
          <div className="detailbox">
            <div className="type1">
              <a href="/">{props.a}</a>
              <span>{props.name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PostBearer = () => {
  return (
    <>
      <div className="post">
        <h1>Post Bearers</h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Item
              src="images/2k19/RHR.jpg"
              a="President"
              name="Raj Hansh Raj"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Anjalikumari1.jpg"
              a="Vice President"
              name="Anjali Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/SAGAR MISHRA.jpg"
              a="Treasurer"
              name="Sagar Mishra"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/KHUSHI GROVER.jpg"
              a="Joint Treasurer"
              name="Khushi Grover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Yogesh Kumar (NSS).JPG"
              a="Technical Head"
              name="Yogesh Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Dhiraj Pandey.jpg"
              a="Technical Head"
              name="Dhiraj Pandey"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Suraj Pramanik.jpg"
              a="Meeting Head"
              name="Suraj Kumar Pramanik"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Binod Murmu.jpg"
              a="Meeting Head"
              name="Binod Murmu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Geet Kumar.jpg"
              a="Program Coordinator"
              name="Geet Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Rohananand.jpg"
              a="Program Coordinator"
              name="Rohan Anand"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/AJAY KUMAR.jpg"
              a="Program Coordinator"
              name="Ajay Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Kumar Sanu.jpg"
              a="Program Coordinator"
              name="Kumar Sanu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/PavitraBhakat.jpg"
              a="PRO"
              name="Pavitra Kr Bhakat"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Nikki kumari.jpg"
              a="PRO"
              name="Nikki Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Shubham Kumar .png"
              a="Alumni Incharge"
              name="Shubham Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Anjali Kumari.jpg"
              a="Alumni Incharge"
              name="Anjali Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/_Budhram Hembram.JPG"
              a="Inventory Head"
              name="Budhram Hembram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/AkashKr.jpg"
              a="Inventory Head"
              name="Akash Kr Mandal"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Nitish.jpg"
              a="Media Head"
              name="Nitish Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Piyush kumar.jpg"
              a="Media Head"
              name="Piyush Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Prahul kumar_.jpg"
              a="Planning and Execution Head"
              name="Prahul Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Sunny.jpg"
              a="Planning and Execution Head"
              name="Sunny Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Vicky Kumar Mandal.jpg"
              a="Planning and Execution Head"
              name="Vickey Kr Mandal"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/RahulRanjan.jpg"
              a="Survey Head"
              name="Rahul Ranjn"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Harshit Pallove.jpg"
              a="Survey Head"
              name="Harshit Pallove"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/Shivnandan .jpg"
              a="Survey Head"
              name="Shivnandan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k19/no.jpg"
              a="Survey Head"
              name="Shivam Kumar"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default PostBearer;
