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
const E22 = () => {
  return (
    <div className="MainEventCon">
      <EventYear eventYear="2021-22" id="e1" />
      <RightSide
        src="images/samvad.jpeg"
        eventName="SAMVAD"
        desc="On the ocassion of Azaadi ka Amrit Mahostav NSS BIT Sindri organized an event SAMVAD which was speech competition where every participation had to speak for 3 minutes on the topics related to nation."
        desc1="Date: 15 August 2022"
      />
      <LeftSide
        src="images/fact.jpeg"
        eventName="Facts and Furious- Patriotic Quiz 2.0"
        desc="To celebrate the great ocassion of 75 years of Independence, NSS BIT Sindri organized an astonishing event FACTS AND FURIOUS - PATRIOTIC QUIZ 2.0 an online quiz competition. The students were given a platform to share your knowledge and outshine themselves..
   "
        desc1="Date :- 12 Aug 2022."
      />
      <RightSide
        src="images/yoga5.jpeg"
        eventName="International Yoga Day"
        desc=" NSS BIT Sindri organized a webinar on the account of international Yoga Day of yoga, in collaboration with our esteemed guest of honor Ms Debopriya Das. It was organized with aim to spread awareness about the magical benifits of yoga."
        desc1="Date: 20 June 2022"
      />
      <LeftSide
        src="images/think.jpeg"
        eventName="Think Green Be Green"
        desc="NSS BIT Sindri conducted this event which gave students a chance to show their talent and interest through various art forms, in order to convey their thankfulness, admiration and affection for our mother nature..
   "
        desc1="Date :- 5 June 2022."
      />
      <RightSide
        src="images/hul.jpeg"
        eventName="हल FOR कल"
        desc=" On the ocassion of environment day, NSS BIT Sindri came up with a 7 day awareness segment called हल FOR कल. It provided information about the major problems and issues prevailing in our environment and along with their solutions. Students came up with real problems like overpopulation, pollution, Deforestation, micro-plastics and many other."
        desc1="Date: 5 June 2022"
      />
      <LeftSide
        src="images/shirt.webp"
        eventName="T-Shirt Design Contest"
        desc="A most artistic online event for designing cool T-shirt designs for NSS BIT SINDRI.  It was a great opportunity for participants for showcasing their wonderful designing skill as ‘designing’ is an artistic ability and just pure creativity. Participants were  given full freedom for unleashing their creativity with only limitation that the design must contain logo of NSS and BIT SINDRI. And the participants had indeed come up with awesome wonderful designs.
   "
        desc1="Date :- 13th Jan - 17th Feb, 2022."
      />
      <RightSide
        src="images/bdc2.webp"
        eventName="Blood Donation Camp"
        desc=" A blood donation camp was organized by NSS BIT Sindri on 13 March 2022. The director of BIT Sindri Dr D.K Singh graced the event with his presence. Students participated in huge numbers and donated blood and contributed to society. Alumni from batch 1992-1996 also came forward for this noble act. Some of the alumni were Mr.M. Raza, Mr. Lokesh Chaudhary, Mr. Mritunjay Singh, Mr. Zakir Ahmad, Mr. Rajesh Jaiswal. 100+ units of blood were donated in total and it was a huge success for NSS BIT Sindri."
        desc1="Date: 13th March 2022"
      />
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
    </div>
  );
};

export default E22;
