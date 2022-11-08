import React, { forwardRef } from "react";

import Gerald from "../../../images/agent-gerald-shwartz.webp";
import Donna from "../../../images/agent-donna-lee.webp";
import Gavel from "../../../images/gavel-min.webp";
import { FaHeadset } from "react-icons/fa";
// import AgentCard from './AgentCard';
import Quote from "./Quote";
import AttorneysStyles from "./Attorneys.module.scss";
import AgentCardStyles from "./AgentCard.module.scss";
import QuoteStyles from "./Quote.module.scss";
import AttorneyCallToActionStyles from "./AttorneyCallToAction.module.scss";
import CallToAction from "../Jumbotron/CallToAction";
import AgentCard from "./AgentCard";
import BackgroundImage from "../Jumbotron/BackgroundImage";
import Links from "../Header/Navbar/Links";
import { SocialMediaLinks } from "../Header/Navbar/Social-Media-Links";

export const Attorneys = forwardRef((props, ref) => {
  const { normal, ...rest } = QuoteStyles;

  return (
    <section
      ref={ref}
      id="attorneys"
      className={
        props.normal
          ? `${AttorneysStyles.attorneys}  ${AttorneysStyles.normal}`
          : AttorneysStyles.attorneys
      }
    >
      <Links
        className={AttorneysStyles.socialMediaLinks}
        List={SocialMediaLinks}
      />
      <BackgroundImage styles={AttorneysStyles} url={Gavel} />
      <Quote
        styles={props.normal ? QuoteStyles : rest}
        quote="We are thorough and dedicated to all our clients."
        author="Gerald Shwarts"
      />
      <div className={AgentCardStyles.container}>
        <AgentCard
          styles={AgentCardStyles}
          title="Managing Attorney"
          image={Gerald}
          name="Gerald Swartz"
          position=""
        />
        <AgentCard
          styles={AgentCardStyles}
          title="Senior Associate"
          image={Donna}
          name="Donna Lee"
          position="center"
        />
      </div>
      <CallToAction
        styles={AttorneyCallToActionStyles}
        words={["605-908-5405"]}
        buttons={["Free Consultation >"]}
        icons={[<FaHeadset />]}
        buttonPosition="bottom"
      />
    </section>
  );
});
