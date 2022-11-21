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
const E23 = () => {
  return (
    <div className="MainEventCon">
      <EventYear eventYear="2022-23" id="e1" />
      <RightSide
        src="images/Events/bdp.png"
        eventName="Blood Donation Camp"
        desc="Blood Donation Is A Small Act Of Kindness That Does Great And Big Wonders.”
        Many people regularly need blood transfusion to help treat their medical conditions.
        NSS BIT SINDRI organized BLOOD DONATION CAMP.
        on 20th of NOVEMBER, 2022.
        TIME - 11 A.M to 5 P. M
        VENUE - HEALTH CENTER, BIT SINDRI.
        
        Donating blood is a selfless act that we all can do for society, to help those in need. It is a healthy gesture and we must keep up this attitude at any cost.
        Donate blood, Be a super-hero.
        
        "
        desc1="Date  :-20th November 2022."
      />
      <LeftSide
        src="images/Events/cddp.webp"
        eventName="Cloth Donation Drive"
        desc="NSS BIT SINDRI organized
        the ' COLLECTION PHASE ' for CLOTH DONATION DRIVE on WEDNESDAY the 16th of November, 2022.
        Starting from 3 p.m until 6 p.m.
        Drop off was at the LECTURE HALL PREMISES.
        Our aim was to connect those who don't have enough to those who have plenty & excess.
        Items needed were:- Summer clothes, Winter clothes, Sweaters, Jackets, Thermals, Shawls.
        The clothes was not be torn or damaged in a way that someone could not use them.
        CLEAN & WASHED clothes was meant to be dropped.
   "
        desc1="Date :- 16th November 2022."
      />
      <RightSide
        src="images/Events/cdg.webp"
        eventName="Children's Day Celebration"
        desc=" 'As long as you carry your childhood , in your heart , you'll never grow old. '
        On the occasion of Pt. Jawaharlal Nehru's 132nd Birth anniversary,
        NSS BIT SINDRI celebrated Children's day with the students of RAJKIYA BUNIYADI VIDYALAY , BIT SINDRI.
        NSS organized various events for the students of all age groups & classes. We donated sports equipments to the school.
        Our Professor incharge PROF. RAGHUNANDAN SIR graced the event with his presence & motivated the students. School's Principal ma'am extended her warm thankfulness for the event.
        Students actively participated in all the sports, making the event fun, full of energy & successful.
       "
        desc1="Date :- 14th November 2022."
      />
    </div>
  );
};

export default E23;
