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
const E26 = () => {
  return (
    <div className="MainEventCon">
      <EventYear eventYear="2025-26" id="e1" />

       <LeftSide
        src="images/Events/2k26/yogaDay.jpg"
        eventName="International Yoga Day"
        desc="NSS BIT Sindri enthusiastically celebrated International Yoga Day, encouraging students and volunteers to embrace a healthier and more balanced lifestyle. The event aimed to spread awareness about the significance of yoga in enhancing physical fitness, mental clarity and emotional well-being.

Participants actively engaged in various yoga asanas, pranayama and meditation practices under expert guidance. The session highlighted the importance of incorporating yoga into daily life to reduce stress, improve concentration and promote overall wellness. The energy and enthusiasm displayed by the attendees made the celebration truly inspiring.

The event concluded on a positive note, leaving everyone motivated to continue their yoga journey. NSS BIT Sindri extends its gratitude to all participants and organizers for making the celebration a success and reaffirming the message of living a healthy, mindful and disciplined life through yoga.



   "
        desc1="Date  :-21st June 2026."
      />
      <RightSide
        src="images/Events/2k26/environmentDay.jpg"
        eventName="World Environment Day"
        desc="NSS BIT Sindri successfully organized a webinar on the occasion of World Environment Day to spread awareness about environmental conservation and sustainable living. The session was graced by Chief Guest Pooja Jha, who shared valuable insights on the importance of protecting our environment.

The webinar covered key topics including climate change, sustainable agriculture, sustainable living, recycling, deforestation and pollution. Participants actively engaged in the discussions and gained practical knowledge on adopting eco-friendly practices.

The event witnessed enthusiastic participation and meaningful discussions among attendees. It inspired participants to adopt sustainable habits and become more conscious of their environmental responsibilities. The webinar successfully highlighted the importance of collective efforts in creating a cleaner, greener and more sustainable future.


                "
        desc1="Date  :-5th June 2026."
      />
    </div>
  );
};

export default E26;
