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
    <div className="box">
      <div className="cardimg">
        <img className="ssi" src={props.src} alt={props.name} />
      </div>

      <div className="detailbox">
        <div className="type1">
          <a href="/">{props.a}</a>
          <span>{props.name}</span>
        </div>
      </div>
    </div>
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
              src="images/2K22/Kumar Anish.jpg"
              a="President"
              name="Anish Kumar Mahato"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/USHA KIRAN.jpg"
              a="Vice President"
              name="Usha Kiran"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Ayush Kumar.jpg"
              a="Vice President"
              name="Ayush Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/PRAKHAR SINGH.jpg"
              a="Secretary"
              name="Prakhar Singh"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Suchitra Sinku.jpg"
              a="Joint Secretary"
              name="Suchitra Sinku"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Suraj Kumar Das.jpg"
              a="Joint Secretary"
              name="Suraj Kumar Das"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/AYUSH MISHRA.jpg"
              a="Treasurer"
              name="Ayush Mishra"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Md Ramiz.jpg"
              a="Joint Treasurer"
              name="Md Ramiz Ansari"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Ravi Kumar Raj.jpg"
              a="Joint Treasurer"
              name="Ravi Kumar Raj"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Nazia Afreen.jpg"
              a="Joint Treasurer"
              name="Nazia Afreen"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Puja Kumari.jpg"
              a="Chief Operational Officer"
              name="Puja Kumari"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Arushi.jpeg"
              a="Chief Operational Officer"
              name="Arushi Lohra"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Aditya Kumar Rajak.jpg"
              a="Chief Operational Officer"
              name="Aditya Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Poonam Sinha.jpg"
              a="Chief Operational Officer"
              name="Poonam Sinha"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Anil Chandra Kisku.jpg"
              a="Technical Head"
              name="Anil Kisku"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/navin.JPG"
              a="Technical Head"
              name="Navin Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Khushi Barnwal.jpg"
              a="Technical Head"
              name="Khushi Barnwal"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Priyesh Tiwari.jpg"
              a="Meeting Head"
              name="Priyesh Tiwari"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Shikha Rani Singh 46.jpg"
              a="Meeting Head"
              name="Shikha Singh"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Mohit.jpg"
              a="Meeting Head"
              name="Mohit Gupta"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Divyanshu Kumar.jpg"
              a="Media Head"
              name="Divyanshu"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Arshi Malka.jpg"
              a="Media Head"
              name="Arshi Malka"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Sujay Chandra.jpg"
              a="Media Head"
              name="Sujay Chandra"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Rahul Kumar (2).jpg"
              a="Program Coordinator"
              name="Rahul Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Rani Saw.jpg"
              a="Program Coordinator"
              name="Rani Kumari"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Kshitiz Indra Guru.jpg"
              a="Program Coordinator"
              name="Kshitiz Indra Guru"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Utsav Kumar.jpg"
              a="Survey Head"
              name="Utsav Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Neha kumari.jpg"
              a="Survey Head"
              name="Neha Kumari"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Anubhav Kumar.jpg"
              a="Survey Head"
              name="Anubhav Singh"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Sourav Kumar.jpg"
              a="Alumni Incharge"
              name="Sourav Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Rahul Kumar Civil.jpg"
              a="Alumni Incharge"
              name="Rahul Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Nishi kant Mandal.png"
              a="Alumni Incharge"
              name="Nishikant Mandal"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Ratna Priya.jpg"
              a="Sponsor Head"
              name="Ratna Priya"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Raj Yadav.jpg"
              a="Sponsor Head"
              name="Raj Yadav"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/deepak kumar rajak.jpg"
              a="Sponsor Head"
              name="Deepak Rajak"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Neelam Kumari.jpg"
              a="PRO"
              name="Neelam Kumari"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Sanket Shashwat.jpg"
              a="PRO"
              name="Sanket Shashwat"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Karan Bhadani.jpg"
              a="PRO"
              name="Karan Kumar Bhadani"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Nayan Sinha.jpg"
              a="PRO"
              name="Nayan Sinha"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Vikram Modi.jpg"
              a="Material Logistics Officer"
              name="Vikram Modi"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Aman Singh.jpeg"
              a="Material Logistics Officer"
              name="Aman Kumar"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Prabhakar Raj.jpg"
              a="Material Logistics Officer"
              name="Prabhakar Raj"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Rounak Kishan.jpg"
              a="Planning and Execution Head"
              name="Raunak Kishan"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Narayan.jpg"
              a="Planning and Execution Head"
              name="Narayan Singh"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Item
              src="images/2K22/Ansh Kumar.jpg"
              a="Planning and Execution Head"
              name="Ansh Gupta"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PostBearer;