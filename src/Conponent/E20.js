import React from "react";

const LeftSide = (props) => {
  return (
    <>
      <div className="LeftInnerCon">
        <img className="EventImg" src={props.src} alt="" />
        <div className="eventCon">
          <h1>{props.eventName}</h1>
          <p>{props.desc}</p>
          <p>{props.desc1}</p>
        </div>
      </div>
    </>
  );
};
const RightSide = (props) => {
  return (
    <>
      <div className="RightInnerCon">
        <div className="eventCon">
          <h1>{props.eventName}</h1>
          <p>{props.desc}</p>
          <p>{props.desc1}</p>
        </div>
        <img className="EventImg" src={props.src} alt="" />
      </div>
    </>
  );
};

const EventYear = (props) => {
  return (
    <>
      <div className="eventYear" id={props.id}>
        <div className="eventHeading">
          <h1>{props.eventYear}</h1>
        </div>
      </div>
    </>
  );
};
const Eventsdiscription = () => {
  return (
    <div className="MainEventCon">
      <EventYear eventYear="2019-20" id="e2" />
      <RightSide
        src="images/scre.jpg"
        eventName="Webinar on Food Production and Animal Rights."
        desc="Food is one of the most essential components which is required for survival. To know more about food and where it comes from, a webinar was organised by NSS BIT Sindri in collaboration with HSI (Humane Society International) India on 7th June 2020, on the topic “From where our food comes from”. It was a great session that encouraged the participants to cut down meat for the welfare of animals.
       
"
        desc1=" Date: 7th June, 2020."
      />
      <LeftSide
        src="images/vote.png"
        eventName="Awareness Video On 15th August, 2020"
        desc="On 15th August 2020, a video was posted by NSS BIT Sindri on social media titled “Be the change”. In the video, NSS volunteers talked about social topics such as gender equality, corruption, using indigenous products and many more. The main objective of the video was to create awareness among people about the same by taking small steps so that we can make India a better place to live.
        
"
        desc1="Date: 15th August, 2020."
      />
      <RightSide
        src="images/r1.jpg"
        eventName="Rapprochement"
        desc="Rapprochement (Mental Health Awareness week). was a one-week mental health awareness program organized from 4th – 10th October, 2020. It was organized to address the mental health issues which impacts people and has increased due to the COVID-19 pandemic. A chance was given to the participants to freely share their problems. A webinar was organized with mental health specialist, Mr. Rajendra Singh Gandhi who is a full-time teacher at “Art of Living” since 2005. Enriching with his knowledge and experience in the field, he also discussed the causes and treatments for various mental health problems and gave tips to improve health and lifestyle.
       
"
        desc1=" Date :- 4th Oct - 10th Oct, 2020."
      />
      <LeftSide
        src="images/Event_img7.jpg"
        eventName="Patriotic quiz competition"
        desc="Patriotic Quiz contest organized on 26th January,2021 on the occasion of Republic Day. It was organized for the batch of 2k19 and 2k20. The quiz contest was conducted successfully and participants were given 15 minutes to fill in their responses in the google form. Questions related to Indian freedom fighters were asked.
        
"
        desc1="Date:-26th Jan 2021
"
      />
      <RightSide
        src="images/rep.png"
        eventName="Online Celebration Of Republic Day"
        desc="An awareness video made by NSS volunteers on Republic Day, 2021.
"
        desc1="Date: 26th Jan, 2021."
      />
      <LeftSide
        src="images/pla.jpg"
        eventName="Plasma Donation Awareness"
        desc="The country was hit by the devastating second wave of Covid-19 and more than 4 lakh cases were being registered per day. Plasma therapy was recommended to critical patients within 10 days of the onset of symptoms. The antibodies transferred from a recovered coronavirus patient can only help generate a faster immune response in a patient. In the view of the situation, a video was the released on 6th May, 2021 to spread awareness among the people regarding plasma donation.  The objective was to encourage recovered patients come forward to donate their plasma to help the suffering patients.

"
      />
      <RightSide
        src="images/Event_img9.jpg"
        eventName="Covid-19 Vaccination Awareness"
        desc="Government of India was taking all the necessary steps to ensure that we were well prepared to face the challenge and threats posed by the growing pandemic of corona virus and Vaccination was the only way to get rid of it. Covaxin and Covishield were already out in the Indian market but people were hesitating to take the vaccine. Hence we considered it was our duty to spread awareness among the people about how, why and when they should take the vaccine and help India to overcome the pandemic and minimize the possibility of any upcoming wave of Covid-19.
        A video was released on our You Tube channel regarding Covid-19 vaccination awareness. 
        
"
        desc1="Date :- 27th May, 2021.
"
      />
    </div>
  );
};

export default Eventsdiscription;
