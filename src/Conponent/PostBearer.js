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
            <img className="ssi" src={props.src} alt="1" />
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
        <h1>POST BEARERS</h1>

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
              src="images/2K19/RHR - Copy.jpg"
              a="President"
              name="Raj Hansh Raj"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Anjalikumari1 - Copy.jpg"
              a="Vice President"
              name="Anjali Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
            className="ssi"
              src="images/2K19/Amit Kumar - Copy.jpg"
              a="Secretary"
              name="Amit Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Nadeem Rehman Alam - Copy.jpg"
              a="Joint Secretary"
              name="Nadeem Rehman Alam"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/SAGAR MISHRA - Copy.jpg"
              a="Treasurer"
              name="Sagar Mishra"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/KHUSHI GROVER - Copy.jpg"
              a="Joint Treasurer"
              name="Khushi Grover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Dhiraj Pandey - Copy.jpg"
              a="Technical Head"
              name="Dhiraj Pandey"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Yogesh Kumar (NSS) - Copy.JPG"
              a="Technical Head"
              name="Yogesh Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Suraj Pramanik - Copy.jpg"
              a="Meeting Head"
              name="Suraj Kumar Pramanik"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Binod Murmu - Copy.jpg"
              a="Meeting Head"
              name="Binod Murmu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Geet Kumar - Copy.jpg"
              a="Program Coordinator"
              name="Geet Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Rohananand - Copy.jpg"
              a="Program Coordinator"
              name="Rohan Anand"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/AJAY KUMAR - Copy.jpg"
              a="Program Coordinator"
              name="Ajay Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Kumar Sanu - Copy.jpg"
              a="Program Coordinator"
              name="Kumar Sanu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/PavitraBhakat - Copy.jpg"
              a="PRO"
              name="Pavitra Kr Bhakat"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Nikki kumari - Copy.jpg"
              a="PRO"
              name="Nikki Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Shubham Kumar  - Copy.png"
              a="Alumni Incharge"
              name="Shubham Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Anjali Kumari - Copy.jpg"
              a="Alumni Incharge"
              name="Anjali Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/_Budhram Hembram - Copy.JPG"
              a="Inventory Head"
              name="Budhram Hembram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/AkashKr - Copy.jpg"
              a="Inventory Head"
              name="Akash Kr Mandal"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Nitish - Copy.jpg"
              a="Media Head"
              name="Nitish Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Piyush kumar - Copy.jpg"
              a="Media Head"
              name="Piyush Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Prahul kumar_ - Copy.jpg"
              a="Planning and Execution Head"
              name="Prahul Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Sunny - Copy.jpg"
              a="Planning and Execution Head"
              name="Sunny Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Vicky Kumar Mandal - Copy.jpg"
              a="Planning and Execution Head"
              name="Vickey Kr Mandal"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/RahulRanjan - Copy.jpg"
              a="Survey Head"
              name="Rahul Ranjn"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Harshit Pallove - Copy.jpg"
              a="Survey Head"
              name="Harshit Pallove"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/Shivnandan  - Copy.jpg"
              a="Survey Head"
              name="Shivnandan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K19/no.jpg"
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
