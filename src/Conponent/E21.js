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
const E21 = () => {
  return (
    <div className="MainEventCon">
      <EventYear eventYear="2020-21" id="e1" />
      <LeftSide
        src="images/V.jpg"
        eventName="Vriksharopan"
        desc="Environment day is the most important day to spread worldwide awareness and steps for the protection of our environment. Our planet is a habitat for different species and we all are dependent on environment for air, water and the basic needs. However, we humans often forget that our Earth is home to many other living species as well and we are just a part of it. NSS BIT Sindri came up with a plantation week event named Vriksharopan and the students of BIT Sindri actively participated in the event.
   "
        desc1="Date :- 5th June, 2021."
      />
      <RightSide
        src="images/Event_img2.jpg"
        eventName="Ambiente Quiz Competition"
        desc=" Ambiente, an Environment Quiz Contest was held on 5th June, 2021 on the occasion of World Environment Day. Questions related to environmental facts were asked and received a whooping participation of 150+ candidates, completely in online mode. The event was successfully conducted and later on winners were announced "
        desc1="Date: 5th June, 2021"
      />
      <LeftSide
        src="images/Event_img1.jpg"
        eventName="Webinar on Career Guidance"
        desc="On 7th June, 2021, one of the most awaited webinars was organised on the topic of Women Upliftment which received a huge appreciation. Our alumnus, Ms. Nitya Kumari ma’am of batch 2016, a Femina Miss India contestant 2020, a Software Developer at ZS Associates as well as one of the first volunteers of NSS BIT Sindri shared her experience how she keeps a balance between the two career fields, gave in-depth tips on soft skills. Overall, the session was quite motivating, interactive and engrossing.
        
"
        desc1="Date: 6th June, 2021."
      />
      <RightSide
        src="images/y.jpg"
        eventName="International Yoga Day"
        desc="Yoga offers physical as well as mental health benefits for people of all ages. On International Yoga Day, NSS BIT Sindri organized a webinar to create awareness among people about the benefits of yoga and how it helps us to stay fit and healthy. On this occasion, the guest of honor, Ms. Debopriya Das, a Fitness Trainer shared her experience and guided the participants to do yoga. Participants joined wholeheartedly and enjoyed the session. 
       
"
        desc1=" Date: 21 June 2021"
      />
      <LeftSide
        src="images/l.jpg"
        eventName="Independence Month Celebration: ILLUSTRATE YOUR LEGEND "
        desc="Description: NSS BIT Sindri gave a platform to the students to share their imagination and creativity through posters related to freedom fighters, Indian army or any other personality whom they idealize.
        
"
        desc1="Date :- 1st Aug to 5th Aug, 2021."
      />
      <RightSide
        src="images/r.jpg"
        eventName="Independence Month Celebration:RRR(Reduce Reuse Recycle)"
        desc="The little effort of everyone to save earth may change into a big one”. Reduce Reuse Recycle is a motto used to reduce waste, minimize consumption and ensure the best overall approach for the environment and human health. Participants had to share images or videos of their DIY projects where they have used the 3-R’s.
       
"
        desc1=" Date :- 6th Aug to 10th Aug, 2021"
      />
      <LeftSide
        src="images/w.jpg"
        eventName="Independence Month Celebration:Unsung Warriors"
        desc="Motto of this event was to celebrate the hidden faces of our celebrities. In this event every participant had to submit their local freedom fighter who was not known. 
        
"
        desc1="Date :- 11th Aug to 15th Aug, 2021."
      />
      <RightSide
        src="images/n.webp"
        eventName="52nd NSS Day "
        desc="Every year, NSS Day is observed on September 24 across India. A video was released in which Volunteers explained about National Service Scheme.
        
"
        desc1="Date: 24th Sep 2021"
      />
      <LeftSide
        src="images/Event_img4.jpg"
        eventName="Rapprochement 2.0"
        desc="Rapprochement was a one-week mental health awareness program. It was organized to address the mental health issues which impacted many people due to the ongoing pandemic. We gave a chance to the participants to freely share their problems. A webinar was organized with mental health specialist, Mr. Rajendra Singh Gandhi who is a full-time teacher at “Art of Living” since 2005.He enriched us with his knowledge and experience in the field while discussing the causes and treatments for various mental health problems. He also gave some tips to improve our health and lifestyle.
        A video was released per day during mental health awareness week regarding various type of mental health issues. Motive of this event is to create awareness among people regarding mental health. 
        
"
        desc1="Date: -  4th Oct to 10th Oct, 2021."
      />
    </div>
  );
};

export default E21;
