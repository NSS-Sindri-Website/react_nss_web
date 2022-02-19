import React from "react";

const LeftSide = (props) => {
  return (
    <>
      <div className="LeftInnerCon">
        <img className="EventImg" src={props.src} alt="" />
        <div className="eventCon">
          <h1>{props.eventName}</h1>
          <p>{props.desc}</p>
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
        </div>
        <img className="EventImg" src={props.src} alt="" />
      </div>
    </>
  );
};

const EventYear = (props) => {
  return (
    <>
      <div className="eventYear">
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
      <EventYear eventYear="2021" />
      <LeftSide
        src="images/Event_img8.jpg"
        eventName="Event Name"
        desc="All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <RightSide
        src="images/Event_img9.jpg"
        eventName="Event Name"
        desc="All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <LeftSide
        src="images/Event_img10.jpg"
        eventName="Event Name"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <EventYear eventYear="2020" />
      <RightSide
        src="images/Event_img5.jpg"
        eventName="Event Name"
        desc="All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <LeftSide
        src="images/Event_img4.jpg"
        eventName="Event Name"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <RightSide
        src="images/Event_img1.jpg"
        eventName="Event Name"
        desc="All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <EventYear eventYear="2019" />
      <LeftSide
        src="images/Event_img2.jpg"
        eventName="Event Name"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <RightSide
        src="images/Event_img3.jpg"
        eventName="Event Name"
        desc="All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <LeftSide
        src="images/Event_img4.jpg"
        eventName="Event Name"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <EventYear eventYear="2018" />
      <RightSide
        src="images/Event_img5.jpg"
        eventName="Event Name"
        desc="All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <LeftSide
        src="images/Event_img4.jpg"
        eventName="Event Name"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
      <RightSide
        src="images/Event_img1.jpg"
        eventName="Event Name"
        desc="All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum.All I know is nothingLorem ipsum dolor sit, amet consectetur adipisicing elit. Sed officia voluptas deserunt soluta commodi nesciunt quae nisi, quis ad vel atque animi ipsa dolores nihil magnam aliquid cumque non enim. Ea est quod nulla!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate voluptas impedit illo, incidunt nesciunt, porro consectetur veniam minima in quia. Velit inventore ex, beatae, hic magni officia in maiores iusto nesciunt, ipsum rerum quos animi molestiae? Repellat similique tempora ut, quod odio consequuntur voluptatum."
      />
    </div>
  );
};

export default Eventsdiscription;
