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
