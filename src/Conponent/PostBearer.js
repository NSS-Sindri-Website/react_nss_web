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
              src="images/2k21/Amit1.jpeg"
              a="President"
              name="Amit Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Ekhlaq Sarwer11.jpg"
              a="Vice President"
              name="Ekhlaq Sarwer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Sheetal Priya.jpg"
              a="Vice President"
              name="Sheetal Priya"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              className="ssi"
              src="images/2k21/Vishnu Vaibhav1.jpg"
              a="Secretary"
              name="Vishnu Vaibhav"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Joint Secretary"
              name="Rishita Dutta"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Mishan .pic.jpg"
              a="Joint Secretary"
              name="Mishan Kr. Mahato"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Afroz.jpeg"
              a="Treasurer"
              name="Md. Afroz"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Kumar Rakshit.jpg"
              a="Joint Treasurer"
              name="Kumar Rakshit"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Vikram Pandey .jpg"
              a="Joint Treasurer"
              name="Vikram Pandey"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/HEMANT THAKUR.png"
              a="Chief Operational Officer"
              name="Hemant Kr. Thakur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Chief Operational Officer"
              name="Sakshi Lakra"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Vikash Hembram(ME)2K21_ImageSaizeReducer.jpg"
              a="Chief Operational Officer"
              name="Vikash Hembram"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/aaron rohi lakra k.jpg"
              a="Technical Head"
              name="Aaron Rohi Lakra"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Mehar.jpg"
              a="Technical Head"
              name="Mehar Talat"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Technical Head"
              name="Akash Barnwal"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item src="images/2k21/av.jpg" 
            a="Meeting Head" 
            name="Marzuqua Siddique" />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Meeting Head"
              name="Raj"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Media Head"
              name="Robin Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Aditya kumar Mahato.jpg"
              a="Media Head"
              name="Aditya Mahato"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/indrani das k.jpg"
              a="Media Head"
              name="Indrani Das"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/anjali kumari k.jpg"
              a="Program Coordinator"
              name="Anjali Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Program Coordinator"
              name="Pankaj Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Program Coordinator"
              name="Sanjeev Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="PRO"
              name="Piyush Ranjan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="PRO"
              name="Siddhi Dubey"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item src="images/2k21/av.jpg" a="PRO" name="Alok Mishra" />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Alumni Incharge"
              name="Kashaf Fateema"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Alumni Incharge"
              name="Piyush Ranjan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/mohit ranjan.jpg"
              a="Alumni Incharge"
              name="Mohit Ranjan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Sponsor Head"
              name="Amarjeet Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Shuvam Banerjee.jpg"
              a="Sponsor Head"
              name="Shuvam Banarjee"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Nandani.jpg"
              a="Sponsor Head"
              name="Nandani Kumari"
            />
          </SwiperSlide>
          

          <SwiperSlide>
            <Item
              src="images/2k21/Anand Raj.jpg"
              a="Planning and Execution Head"
              name="Anand Raj"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Planning and Execution Head"
              name="Saiyam Arya"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/sohel khan_1.jpg"
              a="Planning and Execution Head"
              name="Sohel Khan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/av.jpg"
              a="Survey Head"
              name="Vishal Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Sitamani Hembram_.jpg"
              a="Survey Head"
              name="Sitamani Hembrom"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Manisha Kumari_.jpg"
              a="Survey Head"
              name="Manisha Kumari"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/anoj kumar jpg.jpg"
              a="Material Logistics Officer"
              name="Anoj Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/TEJNARAYANKUMAR.jpg"
              a="Material Logistics Officer"
              name="Tej Narayan Kumar"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              src="images/2k21/Chunnu kumar singhNSS.jpg"
              a="Material Logistics Officer"
              name="Chunnu Kumar Singh"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default PostBearer;
