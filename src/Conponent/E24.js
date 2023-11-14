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
const E24 = () => {
  return (
    <div className="MainEventCon">
      <EventYear eventYear="2023-24" id="e1" />
      <RightSide
        src="images/Events/2k24/wow2.webp"
        eventName="Swatantra: War Of Words (W.O.W) Season 2"
        desc="As part of their Swatantra initiative, NSS BIT Sindri hosted the dynamic War of Words debate
competition, which unfolded in two captivating seasons. Season One kicked off as an online
challenge, where participants engaged in thought-provoking group discussions on a wide array
of topics. This season served as a test of knowledge and adaptability in the digital age.
Transitioning into Season Two, the competition took on an offline triumph, with participants
gathering in person for riveting debate rounds. This shift to an offline format allowed debaters to
bring their online experiences to life and further hone their persuasive communication skills.
Both seasons of War of Words celebrated the immense power of words, fostering critical
thinking and eloquence among participants. It served as a testament to intellectual growth and
the art of compelling argumentation and persuasion, embodying the essence of the Swatantra
initiative.
        "
        desc1="Date  :-15th August 2023."
      />
      <LeftSide
        src="images/Events/2k24/fg.webp"
        eventName="Swatantra:Flag Code"
        desc="At the heart of the event on 15th August lay a profound reverence for the flag code—an initiative
aimed at raising awareness. During this program, dedicated NSS volunteers undertook the
noble task of elucidating the proper protocols for handling the Indian National Flag. Participants
were thoroughly educated on the intricacies of the Flag codes, meticulously outlined by the
Home Ministry of India. This enlightening session encompassed not only the correct positioning
of the flag but also the appropriate procedures for the dignified disposal of a damaged or
defected Indian flag. This event, aligned with the principles of Swatantra, symbolized our
collective commitment to upholding the sanctity and honor of our national emblem, reinforcing
the significance of responsible flag etiquette in the minds of all participants.
   "
        desc1="Date  :-15th August 2023."
      />
      <RightSide
        src="images/Events/2k24/yoga2.webp"
        eventName="International Yoga Day Webinar"
        desc=" On International Yoga Day, NSS BIT Sindri took the initiative to promote the holistic benefits of
        yoga, catering to individuals of all ages, by organizing an enlightening webinar. The event
        served as a platform to raise awareness about the numerous physical and mental health
        advantages that yoga offers, ultimately contributing to improved well-being. The guest of honor,
        Sonali Singh, a distinguished faculty member at Art of Living, brought her expertise and
        experience to the forefront, leading the participants through an engaging and instructive yoga
        session. With enthusiasm and wholehearted participation, attendees embraced the opportunity
        to explore the world of yoga, discovering its profound effects on both their physical and mental
        fitness. The event undoubtedly succeeded in spreading the message of yoga's immense
        potential to foster overall health and wellness, leaving participants enriched and motivated to
        incorporate yoga into their daily lives.
       "
        desc1="Date :- 21st June 2023"
      />
      <LeftSide
        src="images/Events/2k24/ambient2.jpg"
        eventName="Ambient 2.0"
        desc="On World Environment Day, NSS BIT Sindri orchestrated an intellectually invigorating quiz
competition known as AMBIENTE 2.0, offering participants the thrilling pursuit of knowledge as
each answer unlocked new realms of understanding. This online event provided an excellent
opportunity for participants to showcase their environmental knowledge and engage in a spirit of
healthy competition with like-minded enthusiasts. The competition resonated with the core
values of environmental awareness and sustainable living, making it a fitting tribute to the
occasion. Participants, from the comfort of their screens, delved into a world of ecocentric
questions and challenges, reinforcing their commitment to our planet's well-being. AMBIENTE
2.0 was a remarkable initiative that not only tested participants' environmental acumen but also
fostered a sense of responsibility towards the Earth.
   "
        desc1="Date  :-5th June 2023"
      />
      <RightSide
        src="images/Events/2k24/toba.jpg"
        eventName="No Tobacco Day Survey"
        desc="In a recent Tobacco Behavior Survey conducted by NSS BIT SINDRI on World No Tobacco Day,
a startling revelation emerged: our youth are increasingly taking up smoking at an alarming
early age, with the habit often beginning between the ages of 13 to 19. This concerning trend
underscores the pressing need for urgent action to address this growing issue among our young
population.
On a more optimistic note, the survey also uncovered a silver lining—more than 50% of
smokers expressed a strong desire to quit. This willingness to break free from the shackles of
tobacco addiction presents an opportunity for positive change. In response to this, NSS
suggests a practical approach: those looking to quit smoking should consider reducing their
cigarette consumption and transitioning to nicotine gums as an alternative. Additionally, seeking
medical assistance for a structured quitting plan is highly encouraged.
NSS BIT SINDRI extends heartfelt gratitude to all the participants who dedicated their time to
contribute to this crucial survey. Your engagement is a crucial step towards creating a healthier,
tobacco-free future for our youth and our nation. Together, we can make a difference.
   "
        desc1="Date  :-31st May 2023"
      />

      <LeftSide
        src="images/au.jpg"
        eventName="Ambient 2.0"
        desc="lojdjfldkflkslsjd
   "
        desc1="Date  :-5th June 2023"
      />
    </div>
  );
};

export default E24;
