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
      <EventYear eventYear="2021-22" id="e1" />
      <LeftSide
        src="images/shirt.webp"
        eventName="T-Shirt Design Contest"
        desc="A most artistic online event for designing cool T-shirt designs for NSS BIT SINDRI.  It was a great opportunity for participants for showcasing their wonderful designing skill as ‘designing’ is an artistic ability and just pure creativity. Participants were  given full freedom for unleashing their creativity with only limitation that the design must contain logo of NSS and BIT SINDRI. And the participants had indeed come up with awesome wonderful designs.
   "
        desc1="Date :- 13th Jan - 17th Feb, 2022."
      />
      <RightSide
        src="images/wow.webp"
        eventName="W.O.W(War of Words)"
        desc="(W. 0. W) WAR OF WORDS :
 a live online debate competition was organised by NSS BIT SINDRI, with the motive to share and gain knowledge.
50 participants from BIT SINDRI and other institutes from all over INDIA participated in WOW.All the participants came up with enthusiastic and informative speeches. And they heat the meet with their rebuttals, their questions and with their befitting answers to them.And WAR OF WORDS with the tag line LET'S DEBATE IT! turned out to be one of the most successful of event of NSS BIT SINDRI."
        desc1="Date: ROUND DEBATE COMPETITION
QUALIFICATION HEAT (25th January, 2022) &
FINAL CHAPTER 
(26th JANUARY, 2022)."
      />
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
        desc=": Every year, NSS Day is observed on September 24 across India. A video is released in which Volunteers explains about National Service Scheme
        
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
      <EventYear eventYear="2018-2019" id="e3" />
      <LeftSide
        src="images/e.jpg"
        eventName="Hindi Essay Competition"
        desc="An essay competition was organized wherein participants had to write an essay on Hindi and express their views on different topics. The event concluded with a number of participants from all the batches and endorsed the use of Hindi among youth. 

"
        desc1="Date:- 21/09/2018 - 28/09/2018 . Essay competition result:-
        1st  Manas Kumar Sah, 2017, Mechanical
        2nd  Anjali Kumari, 2018, IT
        3rd  Vivek Chandra Singh, 2018, Civil
        4th  Sankha Adhya, 2017, Electrical
        5th  Sanju Kumari, 2018, Chemical"
      />
      <RightSide
        src="images/b.jpg"
        eventName="Republic Day Celebration"
        desc="NSS BIT Sindri celebrated 70th Republic Day in the arena of Administration block. Respected Director sir, Dr. D.K. Singh, respected professors, first year students and NSS members gathered to celebrated this auspicious day. Homage was paid to the father of our nation, Mahatma Gandhiji. With scouts parading and band performing, there was a wave of patriotism in the surroundings. At 8 o' clock, esteemed Director sir hoisted the flag which was followed by the National Anthem. The celebration concluded with a soulful song by first year students, under the guidance of NSS members.
       

"
        desc1=" Date :- 26th  Jan 2018"
      />
      <LeftSide
        src="images/Event_img10.jpg"
        eventName="Blood Donation Camp collaborated with the Leo Club, BIT Sindri

"
        desc="Blood donation is considered to be one of the most significant contributions towards the society. It is a voluntary practice that helps those in need of blood transfusion. Donated blood helps individual to regain new life and its significance has increased considering the COVID-19 pandemic. It symbolizes a helpful and responsible gesture not only to the person in need, but also towards society at large. NSS BIT Sindri and LEO Club of BIT Sindri organised the Blood Donation Camp on 16th September, 2019.
        


"
        desc1="Date :- 16th  September, 2019."
      />
    </div>
  );
};

export default Eventsdiscription;
