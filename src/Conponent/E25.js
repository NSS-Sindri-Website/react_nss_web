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
const E25 = () => {
  return (
    <div className="MainEventCon">
      <EventYear eventYear="2024-25" id="e1" />


      <LeftSide
        src="images/Events/2k25/badlav.jpg"
        eventName="Badlav, No More Hushh!!"
        desc="BADLAV - an initiative by NSS Bit Sindri, is dedicated to breaking silence and encouraging open dialogue around sensitive yet essential issues. The focus lies on menstrual hygiene and child safety topics that shape young lives but are too often ignored or whispered about.

The first session addresses menstrual hygiene, educating young girls on the importance of using sanitary pads, maintaining cleanliness during periods and following safe disposal practices. The aim is to replace myths with facts and help girls view menstruation as a natural and healthy process. It shapes individuals and societies, helping them move toward a better future.

BADLAV is not just an event it is a step toward awareness, confidence and a future where growing up is guided by knowledge not silence. This initiative helps reduce social stigma, promotes healthy practices, strengthens children’s awareness about personal safety.ace.



   "
        desc1="Date  :-2nd  May 2026."
      />
      <RightSide
        src="images/Events/2k25/bloodDonationCamp.jpg"
        eventName="Blood Donation Camp"
        desc="The blood donation camp was organized by NSS BIT Sindri at the Health Centre of the institute in association with Shahid Nirmal Mahto Medical College and Madhumita Edu. Med. Foundation. concluded on a meaningful note. The event reflected the act of selfless giving with enthusiastic participation from faculty members, students and volunteers.

Donors were warmly welcomed, provided with refreshments to ensure their comfort and well-being and appreciated with certificates and mementos for their noble gesture. Each moment of the camp highlighted the importance of social responsibility and empathy.

NSS BIT Sindri took this initiative to encourage awareness about blood donation and to inspire young minds to contribute towards saving lives.
Presenting the moment from the blood donation camp.


   "
        desc1="Date  :-22nd February 2026."
      />
      <LeftSide
        src="images/Events/2k25/clothDonationDrive2.0.jpg"
        eventName="Cloth Donation Drive2.0"
        desc="Driven by this spirit, NSS BIT Sindri organized a cloth donation initiative with the aim of extending warmth, dignity and comfort to those in need. The drive served as a reminder that thoughtful gestures can create meaningful change in the lives of people who often go unnoticed.

Volunteers worked collectively to collect, sort and distribute a wide range of clothing and winter essentials. Phase II reached additional areas and beneficiaries, reflecting greater outreach and coordination ensuring that every donated item reached deserving hands. These glimpses capture the essence of service, where compassion becomes action and small efforts come together to form a larger impact.

NSS BIT Sindri expresses sincere gratitude to every donor and volunteer for contributing to this initiative.Their support made the event purposeful and impactful.
"
        desc1="Date  :-12th January 2026."
      />
      <RightSide
        src="images/Events/2k25/khelMahotsav.jpg"
        eventName="Khel Mahotsav"
        desc="The Khel Mahotsav, organized by the NSS BIT Sindri at the Rajkiya Buniyadi Vidyalaya, received overwhelming response and interest, where the essence of sportsmanship and fitness was celebrated among the students. The occasion brought along a lively and zestful environment among the students, who enthusiastically participated in different sporting activities.

The Khel Mahotsav provided a platform where students could test themselves, develop teamwork, and bask in the excitement of just participating. The air was thick with joyful smiles, determination, and encouragement as all students demonstrated their talent while also living the true spirit of sports.

NSS BIT Sindri presented medals, trophies and certificates to appreciate the winners. Khel Mahotsav stood as a successful celebration and encouragement of sportsmanship and unity.

                "
        desc1="Date  :-18th December 2025."
      />
      <LeftSide
        src="images/Events/2k25/annualActivismSeminar.jpg"
        eventName="Annual Activism Seminar"
        desc="NSS BIT Sindri organized a seminar as part of the Annual Activism for Ending Gender-Based Violence. The program aimed to raise awareness about the various forms of gender-based violence and highlights the importance of creating a safe, respectful and socially just society for all.

The seminar focused on understanding the root causes and serious repercussions of gender-based violence. Through informative discussions, people were encouraged to question deep-rooted stereotypes and take responsibility in preventing violence. The session highlighted that awareness, education is the key tools for empowerment.

When awareness leads to action, justice follows. NSS BIT Sindri sincerely thanks all speakers, volunteers and participants for their valuable contributions.

   "
        desc1="Date  :-13th December 2025."
      />
      <RightSide
        src="images/Events/2k25/clothesDonationDrive1.0.jpg"
        eventName="Clothes Donation Drive1.0"
        desc="NSS BIT Sindri successfully organized and executed the Cloth Donation Camp. The objective of this initiative was to share warmth and essential necessities with the people in need. It was a rewarding experience to see the positive impact of the donations firsthand.

During the event, a strong sense of compassion was evident as volunteers and members distributed clothing, blankets and other necessary items. This collaborative moment highlighted the generosity of the community, where everyone worked together for the better living conditions of the needy.

NSS BIT Sindri extends its heartfelt gratitude to everyone who contributed — be it through generous donations or by spreading awareness about the cause. Your compassion and support have truly brought warmth, hope and happiness to many lives.

                "
        desc1="Date  :-10th December 2025."
      />
      <LeftSide
        src="images/Events/2k25/janjatiyaGauravDiwas.jpg"
        eventName="Janjatiya Gaurav Diwas"
        desc="Hello Folks!
As we celebrate the foundation of our beloved state, Jharkhand, NSS BIT Sindri proudly presents Janjatiya Gourav Diwas, a vibrant event series dedicated to honoring the heritage, resilience and pride of our land.

The highlight of the celebration is the Debate Competition, where participants will express their views on Jharkhand’s growth, identity and progress. Adding to the excitement, the Quiz Competition—will test their knowledge about Jharkhand’s history, culture and heroes.

The celebration also features a Cultural Heritage Program, showcasing Jharkhand’s rich art, tradition and tribal legacy. Together, these events blend intellect, culture and pride encouraging everyone to celebrate Jharkhand Sthapna Diwas with unity and enthusiasm
   "
        desc1="Date  :-14th and 15th November 2025."
      />
      
      
      
      

      <RightSide
        src="images/Events/2k25/mentalHealthAwareness.jpg"
        eventName="Webinar Mental Health Awareness"
        desc="NSS BIT Sindri organized a webinar on mental health awareness titled Rapprochement, which aimed to provide a platform for individuals to discuss their mental health struggles.The webinar featured mentor Dr. Anupriya Gupta ma'am who shared valuable insights and strategies for maintaining good mental health.

The event was a huge success, with participants actively engaging with the speakers and sharing their experiences. The webinar helped break down stigma surrounding mental health issues and encouraged attendees to prioritize their well-being. By hosting this event, NSS BIT Sindri demonstrated its commitment to promoting mental health awareness.

NSS BIT Sindri congratulates all participants and organizers for making Rapprochement a success. May the webinar inspire individuals to prioritize their mental health and may it serve as a stepping stone for future initiatives promoting mental health awareness.

                "
        desc1="Date  :-12th October 2025."
      />
      
      
    </div>
  );
};

export default E25;
