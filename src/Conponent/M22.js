import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./M19.css";

const MemberInfo = (props) => {
  return (
    <>
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <div class="member-img">
            <img src={props.src} class="img-fluid team_img " alt="" />
          </div>
          <div class="member-info">
            <h4>{props.name}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

// ------------------Batch of 2k22----------------------
const M21 = () => {
  return (
    <div>
      <h1 className="h1">Meet Our Team</h1>
      <br />
      <br />
      <h1 className="h1" id="m3">
        2K22
      </h1>
      <br />
      <br />

      <div id="" class="team">
        <div class="container">
          <div class="row">
            <MemberInfo src="images/2K22/Aditya Kumar Rajak.jpg" name="Aditya Kumar" />
            <MemberInfo src="images/2k22/Aman Singh.jpeg" name="Aman Singh" />
            <MemberInfo
              src="images/2K22/Anil Chandra Kisku.jpg"
              name="Anil Chandra Kisku"
            />
            <MemberInfo
              src="images/2K22/Anubhav Kumar.jpg"
              name="Anubhav Kumar"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2K22/Arshi Malka.jpg"
              name="Arshi Malka"
            />
            <MemberInfo
              src="images/2K22/Arushi.jpeg"
              name="Arushi"
            />
            <MemberInfo src="images/2K22/Ayush Kumar.jpg" name="Ayush Kumar" />
            <MemberInfo
              src="images/2K22/AYUSH MISHRA.jpg"
              name="AYUSH MISHRA"
            />

            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo
              src="images/2K22/deepak kumar rajak.jpg"
              name="Deepak Kumar Rajak"
            />
            <MemberInfo
              src="images/2K22/Divyanshu Kumar.jpg"
              name="Divyanshu Kumar"
            />
            <MemberInfo
              src="images/2K22/Karan Bhadani.jpg"
              name="Karan Bhadani"
            />
            <MemberInfo
              src="images/2K22/Khushi Barnwal.jpg"
              name="Khushi Barnwal"
            />
            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo
              src="images/2K22/Kumar Anish.jpg"
              name="Kumar Anish"
            />
            <MemberInfo
              src="images/2K22/Kumar.jpg"
              name="Ansh Kumar"
            />
            <MemberInfo
              src="images/2K22/Kuwar Singh.jpg"
              name="Kuwar Singh"
            />
            <MemberInfo
              src="images/2K22/Md Ramiz.jpg"
              name="Md Ramiz"
            />
            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo src="images/2K22/Mohit.jpg" name="Mohit" />
            <MemberInfo
              src="images/2K22/Narayan.jpg"
              name="Narayan"
            />
            <MemberInfo src="images/2K22/navin.JPG" name="Kumar Navin" />
            <MemberInfo src="images/2K22/Nayan Sinha.jpg" name="Nayan Sinha" />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2K22/Nazia Afreen.jpg"
              name="Nazia Afreen"
            />
            <MemberInfo src="images/2K22/Neelam Kumari.jpg" name="Neelam Kumari" />
            <MemberInfo src="images/2K22/Neha kumari.jpg" name="Neha kumari" />
            <MemberInfo
              src="images/2K22/Nishi kant Mandal.png"
              name="Nishi kant Mandal"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2K22/PRAKHAR SINGH.jpg"
              name="PRAKHAR SINGH"
            />
            <MemberInfo
              src="images/2K22/Rahul Kumar (2).jpg"
              name="Rahul Kumar"
            />
            <MemberInfo
              src="images/2K22/RAHUL KUMAR.jpg"
              name="RAHUL KUMAR"
            />
            <MemberInfo src="images/2K22/Rani Saw.jpg" name="Rani Saw" />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2K22/Ratna Priya.jpg"
              name="Ratna Priya"
            />
            <MemberInfo
              src="images/2K22/Ravi Kumar Raj.jpg"
              name="Ravi Kumar Raj"
            />
            <MemberInfo
              src="images/2K22/Ritu Raj.jpg"
              name="Ritu Raj"
            />
            <MemberInfo
              src="images/2K22/Rounak Kishan.jpg"
              name="Rounak Kishan"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2K22/Sanket Shashwat.jpg"
              name="Sanket Shashwat"
            />
            <MemberInfo
              src="images/2K22/Saurav Raj.jpg"
              name="Saurav Raj"
            />
            <MemberInfo
              src="images/2K22/Shikha Rani Singh 46.jpg"
              name="Shikha Rani Singh"
            />
            <MemberInfo
              src="images/2K22/Sourav Kumar.jpg"
              name="Sourav Kumar"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2K22/Suchitra Sinku.jpg"
              name="Suchitra Sinku"
            />
            <MemberInfo
              src="images/2K22/Sujay Chandra.jpg"
              name="Sujay Chandra"
            />
            <MemberInfo
              src="images/2K22/USHA KIRAN.jpg"
              name="USHA KIRAN"
            />
            <MemberInfo
              src="images/2K22/Utsav Kumar.jpg"
              name="Utsav Kumar"
            />
          </div>
          
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default M21;
