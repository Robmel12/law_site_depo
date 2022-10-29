import React, { useRef, forwardRef, useImperativeHandle } from "react";
import CityBackground from "../../../images/city-background.webp";
import { ServiceCards } from "./ServiceCards";
import { ServicesIcons } from "./ServicesIcons";
import { Spacer } from "./Spacer";

export const Services = forwardRef((props, ref) => {
  const iconsRef = useRef(null);
  const spacerRef = useRef(null);
  const cardsRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      iconsRef: () => iconsRef,
      spacerRef: () => spacerRef,
      cardsRef: () => cardsRef,
    };
  });
  return (
    <section className="services">
      <ServicesIcons ref={iconsRef} normal={props.normal} />
      <Spacer ref={spacerRef} className="services-spacer" />
      <ServiceCards ref={cardsRef} url={CityBackground} />
    </section>
  );
});
