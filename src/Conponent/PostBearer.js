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
    src="images/2k23/kabyanshu.png"
    a="President"
    name="Kabyanshu Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/aastha.png"
    a="Vice President"
    name="Aastha Kumari"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/anurag.png"
    a="Vice President"
    name="Anurag Singh"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sourabh.png"
    a="Secretary"
    name="Sourabh Pandey"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/shreya.png"
    a="Joint Secretary"
    name="Shreya Tirkey"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sachin.png"
    a="Joint Secretary"
    name="Sachin Karmali"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/santanu.png"
    a="Treasurer"
    name="Santanu Dey"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sapna.png"
    a="Joint Treasurer"
    name="Sapna Rani"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sankalp.png"
    a="Joint Treasurer"
    name="Sankalp Suman"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/shruti.png"
    a="Chief Opr. Officer"
    name="Shruti Pandey"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/moly.png"
    a="Chief Opr. Officer"
    name="Moly Sarkar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sambhav.png"
    a="Chief Opr. Officer"
    name="Sambhav Pratap Singh"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/pratima.png"
    a="Chief Opr. Officer"
    name="Pratima Hansda"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/prashant_raj.png"
    a="Chief Opr. Officer"
    name="Prashant Raj"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sushma.png"
    a="Technical Head"
    name="Sushma Kumari"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/vivek.png"
    a="Technical Head"
    name="Vivek Deogam"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/rami.png"
    a="Technical Head"
    name="Rami Mardi"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/muskan.png"
    a="Alumini Incharge"
    name="Muskan Kumari"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/vaibhaw.png"
    a="Alumini Incharge"
    name="Vaibhaw Anand"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/satish.png"
    a="Alumini Incharge"
    name="Satish Kumar Sah"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sonam.png"
    a="Sponsor Head"
    name="Sonam Kumari"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/yash.png"
    a="Sponsor Head"
    name="Yash Vardhan"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/mohit.png"
    a="Sponsor Head"
    name="Mohit Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/prashant.png"
    a="Sponsor Head"
    name="Prashant Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/harsh.png"
    a="PRO"
    name="Harsh Kumar Anand"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/jiya.png"
    a="PRO"
    name="Jiya Rani"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/piyush.png"
    a="PRO"
    name="Piyush Raj"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/kumar_pratham.png"
    a="PRO"
    name="Kumar Pratham"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/somnath.png"
    a="Media Head"
    name="Somnath Pandey"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/muskan_kumari.png"
    a="Media Head"
    name="Muskan Kumari"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/abhishek.png"
    a="Media Head"
    name="Abhishek Pandit"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/rishabh.png"
    a="Media Head"
    name="Rishabh Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/vishal.png"
    a="Meeting Head"
    name="Vishal Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/aman_khan.png"
    a="Media Head"
    name="Aman Khan"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/nagraj.png"
    a="Meeting Head"
    name="Nagraj Sahu"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/vishal_yadav.png"
    a="Program Coordinator"
    name="Vishal Yadav"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/dipak.png"
    a="Program Coordinator"
    name="Dipak Jaiswal"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/ankit.png"
    a="Program Coordinator"
    name="Ankit Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/nayan.png"
    a="Survey Head"
    name="Nayan Raj"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/kumar_varun.png"
    a="Survey Head"
    name="Kumar Varun"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sagar.png"
    a="Material Logis. Officer"
    name="Sagar Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/nityanand.png"
    a="Material Logis. Officer"
    name="Nityanand Chourasia"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/prem.png"
    a="Planning & Exe. Head"
    name="Prem Kumar"
  />
</SwiperSlide>

<SwiperSlide>
  <Item
    src="images/2k23/sahil.png"
    a="Planning & Exe. Head"
    name="Sahil Pandey"
  />
</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PostBearer;