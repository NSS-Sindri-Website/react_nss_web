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
            <span>{props.post}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const M21 = () => {
  return (
    <div>
      <h1 className="h1">Meet Our Team</h1>
      <br />
      <br />
      <h1 className="h1" id="m3">
        2K21
      </h1>
      <br />
      <br />

      <div id="" class="team">
        <div class="container">
          <div class="row">
            <MemberInfo src="images/2k21/Amit1 - Copy.jpeg" name="Amit Kumar" post="President"/>
            
            <MemberInfo src="images/2k21/Ekhlaq Sarwer11.jpg" name="Ekhlaq Sarwer" post="Vice President" />
            <MemberInfo
              src="images/2k21/Sheetal Priya .jpg"
              name="Sheetal Priya" post="Vice President"
            />
            <MemberInfo
              src="images/2k21/Vishnu Vaibhav1.jpg"
              name="Vishnu Mishra" post="Secretary"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Rishita Dutta" post="Joint Secretary"
            />
            <MemberInfo
              src="images/2k21/Mishan .pic.jpg"
              name="Mishan Kumar" post="Joint Secretary"
            />
            <MemberInfo src="images/2k21/Afroz - Md Afroz.jpg" name="Md. Afroz" post="Treasurer" />
            <MemberInfo
              src="images/2k21/Kumar Rakshit.jpg"
              name="Kumar Rakshit" post="Joint Treasurer"
            />

            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo
              src="images/2k21/Vikram Pandey .jpg"
              name="Vikram Pandey" post="Joint Treasurer"
            />
            <MemberInfo
              src="images/2k21/HEMANT THAKUR.png"
              name="Hemant Thakur" post="Chief Opr. Officer"
            />
            <MemberInfo
              src="images/2k21/Sakshi kumari mishra.jpg"
              name="Sakshi Mishra" post="Chief Opr. Officer"
            />
            <MemberInfo
              src="images/2k21/Vikash Hembram(ME)2K21_ImageSaizeReducer.jpg"
              name="Vikash Hembram" post="Chief Opr. Officer"
            />
            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo
              src="images/2k21/aaron rohi lakra k.jpg"
              name="Aaron Rohi" post="Technical Head"
            />
            <MemberInfo
              src="images/2k21/Mehar.jpg"
              name="Mehar Talat" post="Technical Head"
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Akash Barnwal" post="Technical Head"
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Kashaf Fateema" post="Alumini Incharge"
            />
            <br />
            <br />
          </div>
          <div class="row">
            {/* <MemberInfo src="images/2k21/av.jpg" 
            name="Md Afroz" /> */}
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Piyush Ranjan" post="Alumini Incharge"
            />
            <MemberInfo src="images/2k21/mohit ranjan.jpg" name="Mohit Ranjan" post="Alumini Incharge" />
            <MemberInfo
              src="images/2k21/Pawan Kumar.jpg"
              name="Pawan Kumar Yadav" 
            />
            <MemberInfo src="images/2k21/av.jpg" name="Amarjeet Kumar" post="Sponsor Head" />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/Shuvam Banerjee.jpg"
              name="Shuvam Banarjee" post="Sponsor Head"
            />
            <MemberInfo src="images/2k21/Nandani.jpg" name="Nandani Kumari" post="Sponsor Head" />
            <MemberInfo src="images/2k21/av.jpg" name="Piyush Ranjan" post="PRO" />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Siddhi Dubey" post="PRO"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Alok Mishra" post="PRO"
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Robin Kumar" post="Media Head"
            />
            <MemberInfo
              src="images/2k21/Aditya kumar Mahato.jpg"
              name="Aditya Mahato" post="Media Head"
            />
            <MemberInfo src="images/2k21/indrani das k.jpg" name="Indrani Das" post="Media Head" />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Marzuqua Siddique" post="Meeting Head"
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Raj" post="Meeting Head"
            />
            <MemberInfo
              src="images/2k21/anjali kumari k.jpg"
              name="Anjali Kumari" post="Program Coordinator"
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Pankaj Kumar" post="Program Coordinator"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Sanjeev Kumar" post="Program Coordinator"
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Vishal Kumar" post="Survey Head"
            />
            <MemberInfo
              src="images/2k21/Sitamani Hembram_.jpg"
              name="Sitamani Hembrom" post="Survey Head"
            />
            <MemberInfo
              src="images/2k21/Manisha Kumari_.jpg"
              name="Manisha Kumari" post="Survey Head"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Anoj Kumar" post="Material Logis. Officer"
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Tej Narayan Kumar" post="Material Logis. Officer"
            />
            <MemberInfo
              src="images/2k21/Chunnu kumar singhNSS.jpg"
              name="Chunnu Kumar Singh" post="Material Logis. Officer"
            />
            <MemberInfo
              src="images/2k21/Anand Raj_ImageSaizeReducer.jpg"
              name="Anand Raj" post="Planning & Exe. Head"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Saiyam Arya" post="Planning & Exe. Head"
            />
            <MemberInfo
              src="images/2k21/sohel khan_1.jpg"
              name="Sohel Khan" post="Planning & Exe. Head"
            />
            <MemberInfo
              src="images/2k21/Akash Pandey.jpg"
              name="Akash Pandey" 
            />
            <MemberInfo
              src="images/2k21/av.jpg"
              name="Sunil Kisku" 
            />
          </div>
          <br />
          <br />
          <div class="row">
            
            <MemberInfo
              src="images/2k21/Alok Singh NSS.jpg"
              name="Alok Singh" 
            />
            <MemberInfo
              src="images/2k21/MD KAIF ALAM_.jpg"
              name="Md. Kaif Alam" 
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
