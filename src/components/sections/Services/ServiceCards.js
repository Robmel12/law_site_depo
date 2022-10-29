import React, { forwardRef } from "react";
import { Cards } from "./Cards";
import Heading from "./Heading";
import { ImLibrary } from "react-icons/im";
import BackgroundImage from "../Jumbotron/BackgroundImage";
import ServiceCardStyles from "./ServiceCards.module.scss";
function Card(props) {
  return (
    <div className="service-card">
      <div className="service-card-icon">{props.icon}</div>
      <div className="service-card-text-container">
        <h3 className="service-card-title">{props.title}</h3>
        <p className="service-card-text">{props.text}</p>
      </div>
    </div>
  );
}
export const ServiceCards = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="service-cards">
        <BackgroundImage
          styles={ServiceCardStyles}
          url={props.url}
          shadow={false}
        />
        <div className="service-cards-heading-container">
          <div className="service-cards-heading-icon">
            <ImLibrary />
          </div>
          <div className="hr"></div>

          <Heading
            className="service-cards-heading"
            heading={"What Puts Fargus And William Ahead Of The Curve"}
          />
        </div>

        {Cards.map((e, index) => {
          return (
            <Card key={index} title={e.title} text={e.text} icon={e.icon} />
          );
        })}
      </div>
    </>
  );
});
