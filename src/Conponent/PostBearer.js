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
              src="images/2K20/VIVEKKUMAR.jpg"
              a="President"
              name="Naveen kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/adarsh.webp"
              a="Vice President"
              name="Adarsh Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Sneha.jpg"
              a="Vice President"
              name="Sneha Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              className="ssi"
              src="images/2K20/Pranshu .jpg"
              a="Secretary"
              name="Priyanshu Kumar Kesri"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/GaYetri .jpg"
              a="Joint Secretary"
              name="Gayetri Murmu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/ankit Kashyap.jpg"
              a="Treasurer"
              name="Ankit Kashyap"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Gauravswansi.jpg"
              a="Joint Treasurer"
              name="Gaurav Swansi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/ak.jpg"
              a="Technical Head"
              name="Ankit Kishore Khalkho"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/DanishHussain.jpg"
              a="Technical Head"
              name="Danish Hussain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Shubham.jpg"
              a="Technical Head"
              name="Shubham
              Baranwal"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item src="images/2K20/Om.jpg" a="Meeting Head" name="Om Prakash" />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Manishakumari.jpg"
              a="Meeting Head"
              name="Manisha Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Ankit Sharma.jpg"
              a="Meeting Head"
              name="Ankit Sharma"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Saumodeep.jpg"
              a="Media Head"
              name="Saumodeep Banrjee"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/shiv1.jpg"
              a="Media Head"
              name="Shiv Prasad Shaw"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/rahul kumar.jpg"
              a="Media Head"
              name="Rahul Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Ashmi.jpg"
              a="Program Coordinator"
              name="Ashmi Singh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Mukund.jpg"
              a="Program Coordinator"
              name="Mukund Parasher"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Akshat.jpg"
              a="Program Coordinator"
              name="Akshat Ashish"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Medha Singh.jpg"
              a="PRO"
              name="Medha Singh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/AbhishekKumarShukla_.jpg"
              a="PRO"
              name="Abhishek Shukla"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item src="images/2K20/Tejaswi.jpg" a="PRO" name="Tejaswi Pandey" />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/pratyush_kumar.jpg"
              a="Alumni Incharge"
              name="Pratyush Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Abhishek Kumar.jpg"
              a="Alumni Incharge"
              name="Abhishek Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Manish.jpg"
              a="Alumni Incharge"
              name="Manish kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/sammi.jpg"
              a="Inventory Head"
              name="Sammi Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Abhishek Choudhary.jpg"
              a="Inventory Head"
              name="Abhishek Choudhary"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K20/NikitaKumari.jpg"
              a="Planning and Execution Head"
              name="Nikita Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/AnupriyaKumari.jpg"
              a="Planning and Execution Head"
              name="Anupriya Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/Abhishekkumar.jpg"
              a="Survey Head"
              name="Abhishek Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2K20/sumit.jpg"
              a="Survey Head"
              name="Sumit Pradhan"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default PostBearer;
