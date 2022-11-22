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
            <MemberInfo src="images/2k21/anjali kumari k.jpg" name="Anjali" />
            <MemberInfo src="images/2k21/aditya k.png" name="Aditya" />
            <MemberInfo
              src="images/2k21/indrani das k.jpg"
              name="Indrani Das"
            />
            <MemberInfo
              src="images/2k21/aaron rohi lakra k.jpg"
              name="Aaron Rohi Lakra"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/Aditya kumar Mahato.jpg"
              name="Aditya kumar Mahato"
            />
            <MemberInfo
              src="images/2k21/Alok Singh NSS.jpg"
              name="Alok Singh"
            />
            <MemberInfo src="images/2k21/amit kumar k.jpg" name="Amit kumar" />
            <MemberInfo
              src="images/2k21/Anand Raj_ImageSaizeReducer.jpg"
              name="Anand Raj"
            />

            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo
              src="images/2k21/anoj kumar jpg.jpg"
              name="Anoj Kumar "
            />
            <MemberInfo
              src="images/2k21/Chunnu kumar singhNSS.jpg"
              name="Chunnu kumar singh"
            />
            <MemberInfo
              src="images/2k21/Ekhlaq Sarwer.jpg"
              name="Ekhlaq Sarwer"
            />
            <MemberInfo
              src="images/2k21/Hemant kumar thakur.jpg"
              name="Hemant Kumar Thakur"
            />
            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo
              src="images/2k21/Akash Pandey.jpg"
              name="Akash Pandey"
            />
            <MemberInfo
              src="images/2k21/Kumar Rakshit.jpg"
              name="Kumar Rakshit"
            />
            <MemberInfo
              src="images/2k21/MAHBOOB ALAM.jpg"
              name="Mahboob Alam"
            />
            <MemberInfo
              src="images/2k21/Manisha Kumari_.jpg"
              name="Manisha Kumari"
            />
            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo src="images/2k21/Md Afroz_.jpg" name="Md Afroz" />
            <MemberInfo
              src="images/2k21/MD KAIF ALAM_.jpg"
              name="MD KAIF ALAM"
            />
            <MemberInfo src="images/2k21/Mehar.jpg" name="Mehar" />
            <MemberInfo src="images/2k21/Mishan .pic.jpg" name="Mishan " />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/mohit ranjan.jpg"
              name="Mohit Ranjan"
            />
            <MemberInfo src="images/2k21/Nandani.jpg" name="Nandani" />
            <MemberInfo src="images/2k21/Pawan Kumar.jpg" name="Pawan Kumar" />
            <MemberInfo
              src="images/2k21/Piyush Tiwari.jpg"
              name="Piyush Tiwari"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/Sakshi kumari mishra.jpg"
              name="Sakshi Kumari Mishra"
            />
            <MemberInfo
              src="images/2k21/Sheetal Priya .jpg"
              name="Sheetal Priya "
            />
            <MemberInfo
              src="images/2k21/Sitamani Hembram_.jpg"
              name="Sitamani Hembram"
            />
            <MemberInfo src="images/2k21/sohel khan_1.jpg" name="Sohel Khan" />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/Suraj Kumar_ImageSaizeReducer.jpg"
              name="Suraj Kumar"
            />
            <MemberInfo
              src="images/2k21/TEJNARAYANKUMAR.jpg"
              name="TEJ NARAYAN KUMAR"
            />
            <MemberInfo
              src="images/2k21/Vikash Hembram(ME)2K21_ImageSaizeReducer.jpg"
              name="Vikash Hembram"
            />
            <MemberInfo
              src="images/2k21/Vikram Pandey .jpg"
              name="Vikram Pandey "
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k21/Vishnu Vaibhav.jpg"
              name="Vishnu Vaibhav"
            />
            <MemberInfo
              src="images/2k21/Zaid Ahmad Ansari.png"
              name="Zaid Ahmad Ansari "
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
