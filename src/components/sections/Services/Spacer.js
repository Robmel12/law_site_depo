import React, { forwardRef } from "react";
import { FaHeadset } from "react-icons/fa";
import CallToActionStyles from "./spacerCallToAction.module.scss";
import CallToAction from "../Jumbotron/CallToAction";
export const Spacer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={props.className}>
      <CallToAction
        styles={CallToActionStyles}
        words={["605-908-5405"]}
        buttons={["Free Consultation >"]}
        icons={[<FaHeadset />]}
        buttonPosition="bottom"
      />
    </div>
  );
});
