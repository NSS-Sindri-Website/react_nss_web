import "./EventsHome.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <>
      <div className="eventCard">
        <div className="top_side">
          <img src={props.src} alt="" />
        </div>
        <div className="bottom_side">
          <Link as={Link} to={props.href}>
            <h2>{props.title}</h2>
          </Link>
          <p>
            <strong>{props.eventTitle}</strong>
            {props.desc}
          </p>
          <Link as={Link} to={props.href}>
            <p className="read">READ MORE</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default class EventsHome extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="post_event_events">
        <h2> EVENTS </h2>
        <Slider {...settings}>
          <div>
            <Item
              src="images/Events/2k24/wow2.webp"
              title="2024"
              href="/E24"
              eventTitle="Swjkfjdfodsason 2:"
              desc=" kfjdkfldsafkdjflkdslkfldklfscussions on a wide array
of topics. "
            ></Item>
          </div>
          <div>
            <Item
              src="images/Events/2k24/wow2.webp"
              title="2023"
              href="/E24"
              eventTitle="Swatantra: War Of Words (W.O.W) Season 2:"
              desc=" As part of their Swatantra initiative, NSS BIT Sindri hosted the dynamic War of Words debate
competition, which unfolded in two captivating seasons. Season One kicked off as an online
challenge, where participants engaged in thought-provoking group discussions on a wide array
of topics. "
            ></Item>
          </div>
          <div>
            <Item
              src="images/Events/cddp.webp"
              title="2022"
              href="/E23"
              eventTitle="Cloth Donation Drive :"
              desc=" NSS BIT SINDRI organized
              the  COLLECTION PHASE  for CLOTH DONATION DRIVE on WEDNESDAY the 16th of November, 2022.
               Our aim was to connect those who don't have enough to those who have plenty & excess.
              CLEAN & WASHED clothes was meant to be dropped. "
            ></Item>
          </div>
          <div>
            <Item
              src="images/Event_img4.jpg"
              title="2021"
              href="/E21"
              eventTitle="Rapprochement 2.0 :"
              desc="Rapprochement was a one-week mental health awareness program. It was organized to address the mental health issues which impacted many people due to the ongoing pandemic. "
            ></Item>
          </div>
          <div>
            <Item
              src="images/r1.jpg"
              title="2020"
              href="/E20"
              eventTitle="Rapprochement :"
              desc="(Mental Health Awareness week) was a one-week mental health awareness program organized from 4th – 10th October, 2020. It was organized to address the mental health issues which impacts people and has increased due to the COVID-19 pandemic. "
            ></Item>
          </div>
          <div>
            <Item
              src="images/Event_img10.jpg"
              title="2019"
              href="/E19"
              eventTitle="Blood Donation Camp :"
              desc="Blood Donation Camp collaborated with the Leo Club, BIT Sindri :
                Blood donation is considered to be one of the most significant
                contributions towards the society. It is a voluntary practice
                that helps those in need of blood transfusion. "
            ></Item>
          </div>
          <div>
            <Item
              src="images/e.jpg"
              title="2018"
              href="/E19"
              eventTitle="Hindi Essay Competition :"
              desc="  An essay competition was organized
                wherein participants had to write an essay on Hindi and express
                their views on different topics. The event concluded with a
                number of participants from all the batches and endorsed the use
                of Hindi among youth. "
            ></Item>
          </div>
          <div>
            <Item
              src="images/img2.jpeg"
              title="2017"
              href="/E19"
              eventTitle="Republic Day :"
              desc=" NSS BIT Sindri celebrated 70th Republic Day in the arena of
                Administration block. Respected Director sir, Dr. D.K. Singh,
                respected professors, first year students and NSS members
                gathered to celebrated this auspicious day. "
            ></Item>
          </div>
        </Slider>
      </div>
    );
  }
}
