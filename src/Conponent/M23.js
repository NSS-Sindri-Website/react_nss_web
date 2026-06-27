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

const M23 = () => {
  return (
    <div>
      <h1 className="h1">Meet Our Team</h1>
      <br />
      <br />
      <h1 className="h1" id="m3">
        2K23
      </h1>
      <br />
      <br />

      <div id="" class="team">
        <div class="container">
          <div class="row">
            <MemberInfo src="images/2k23/kabyanshu.png" name="Kabyanshu Kumar" post="President"/>
            
            <MemberInfo src="images/2k23/aastha.png" name="Aastha Kumari" post="Vice President" />
            <MemberInfo
              src="images/2k23/anurag.png"
              name="Anurag Singh" post="Vice President"
            />
            <MemberInfo
              src="images/2k23/sourabh.png"
              name="Sourabh Pandey" post="Secretary"
            />
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k23/shreya.png"
              name="Shreya Tirkey" post="Joint Secretary"
            />
            <MemberInfo
              src="images/2k23/sachin.png"
              name="Sachin Karmali" post="Joint Secretary"
            />
            <MemberInfo src="images/2k23/santanu.png" name="Santanu Dey" post="Treasurer" />
            <MemberInfo
              src="images/2k23/sapna.png"
              name="Sapna Rani" post="Joint Treasurer"
            />

            <br />
            <br />
          </div>
          <div class="row">
            <MemberInfo
              src="images/2k23/sankalp.png"
              name="Sankalp Suman" post="Joint Treasurer"
            />
            <MemberInfo
              src="images/2k23/shruti.png"
              name="Shruti Pandey" post="Chief Opr. Officer"
            />
            <MemberInfo
              src="images/2k23/moly.png"
              name="Moly Sarkar" post="Chief Opr. Officer"
            />
            <MemberInfo
              src="images/2k23/sambhav.png"
              name="Sambhav Pratap Singh" post="Chief Opr. Officer"
            />
             
            <br />
            <br />
          </div>
          <div class="row">
             <MemberInfo
              src="images/2k23/pratima.png"
              name="Pratima Hansda" post="Chief Opr. Officer"
            />
              <MemberInfo
              src="images/2k23/prashant_raj.png"
              name="Prashant Raj" post="Chief Opr. Officer"
            />
            <MemberInfo
              src="images/2k23/sushma.png"
              name="Sushma Kumari" post="Technical Head"
            />
            <MemberInfo
              src="images/2k23/vivek.png"
              name="Vivek Deogam" post="Technical Head"
            />
           
            <br />
            <br />
          </div>
          <div class="row">
            {/* <MemberInfo src="images/2k23/av.jpg" 
            name="Md Afroz" /> */}
             <MemberInfo
              src="images/2k23/rami.png"
              name="Rami Mardi" post="Technical Head"
            />
            <MemberInfo
              src="images/2k23/muskan.png"
              name="Muskan Kumari" post="Alumini Incharge"
            />
            <MemberInfo
              src="images/2k23/vaibhaw.png"
              name="Vaibhaw Anand" post="Alumini Incharge"
            />
            <MemberInfo src="images/2k23/satish.png" name="Satish Kumar Sah" post="Alumini Incharge" />
            {/* <MemberInfo
              src="images/2k23/Pawan Kumar.jpg"
              name="Pawan Kumar Yadav" 
            /> */}
            
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo src="images/2k23/sonam.png" name="Sonam Kumari" post="Sponsor Head" />
            <MemberInfo
              src="images/2k23/yash.png"
              name="Yash Vardhan" post="Sponsor Head"
            />
            
            <MemberInfo src="images/2k23/mohit.png" name="Mohit Kumar" post="Sponsor Head" />
            <MemberInfo src="images/2k23/prashant.png" name="Prashant Kumar" post="Sponsor Head" />
           
          </div>
          <br />
          <br />
          <div class="row">
             <MemberInfo
              src="images/2k23/harsh.png"
              name="Harsh Kumar Anand" post="PRO"
            />
            <MemberInfo
              src="images/2k23/jiya.png"
              name="Jiya Rani" post="PRO"
            />
            <MemberInfo
              src="images/2k23/piyush.png"
              name="Piyush Raj" post="PRO"
            />
            <MemberInfo
              src="images/2k23/kumar_pratham.png"
              name="Kumar Pratham" post="PRO"
            />
            
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k23/somnath.png"
              name="Somnath Pandey" post="Media Head"
            />
            <MemberInfo src="images/2k23/muskan_kumari.png" name="Muskan Kumari" post="Media Head" />
            <MemberInfo
              src="images/2k23/abhishek.png"
              name="Abhishek Pandit" post="Media Head"
            />
            <MemberInfo
              src="images/2k23/rishabh.png"
              name="Rishabh Kumar" post="Media Head"
            />
            
           
          </div>
          <br />
          <br />
          <div class="row">
             <MemberInfo
              src="images/2k23/vishal.png"
              name="Vishal Kumar" post="Meeting Head"
            />
            <MemberInfo
              src="images/2k23/aman_khan.png"
              name="Aman Khan" post="Media Head"
            />
            <MemberInfo
              src="images/2k23/nagraj.png"
              name="Nagraj Sahu" post="Meeting Head"
            />
            <MemberInfo
              src="images/2k23/vishal_yadav.png"
              name="Vishal Yadav" post="Program Coordinator"
            />
           
          </div>
          <br />
          <br />
          <div class="row">
             <MemberInfo
              src="images/2k23/dipak.png"
              name="Dipak Jaiswal" post="Program Coordinator"
            />
            <MemberInfo
              src="images/2k23/ankit.png"
              name="Ankit Kumar" post="Program Coordinator"
            />
            <MemberInfo
              src="images/2k23/nayan.png"
              name="Nayan Raj" post="Survey Head"
            />
            <MemberInfo
              src="images/2k23/kumar_varun.png"
              name="Kumar Varun" post="Survey Head"
            />
            
          </div>
          <br />
          <br />
          <div class="row">
            <MemberInfo
              src="images/2k23/sagar.png"
              name="Sagar Kumar" post="Material Logis. Officer"
            />
            <MemberInfo
              src="images/2k23/nityanand.png"
              name="Nityanand Chourasia" post="Material Logis. Officer"
            />
            <MemberInfo
              src="images/2k23/prem.png"
              name="Prem Kumar" post="Planning & Exe. Head"
            />
            <MemberInfo
              src="images/2k23/sahil.png"
              name="Sahil Pandey" post="Planning & Exe. Head"
            />
            {/* <MemberInfo
              src="images/2k23/Akash Pandey.jpg"
              name="Akash Pandey" 
            />
            <MemberInfo
              src="images/2k23/av.jpg"
              name="Sunil Kisku" 
            /> */}
          </div>
          <br />
          <br />
          {/* <div class="row">
            
            <MemberInfo
              src="images/2k23/Alok Singh NSS.jpg"
              name="Alok Singh" 
            />
            <MemberInfo
              src="images/2k23/MD KAIF ALAM_.jpg"
              name="Md. Kaif Alam" 
            />
            
          </div> */}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default M23;