import React, { useRef, useEffect } from "react";
import useColorNav from "./Pagefunctions/useColorNav";
import { Jumbotron } from "../sections/Jumbotron/Jumbotron";
import { Services } from "../sections/Services/Services";
import { Attorneys } from "../sections/Attorneys/Attorneys";
import { CustomerTestimonials } from "../sections/CustomerTestimonials/CustomerTestimonials";

export const Home = (props) => {
  const { setUseDarkLogo, setUseWhiteLinks, setUseWhiteLogo } = props;
  const jumboRef = useRef();
  const attorneyRef = useRef();
  const servicesRef = useRef();
  const testimonialsRef = useRef();
  const isJumboVisible = useColorNav(
    { root: null, rootMargin: "0px", threshold: 0 },
    jumboRef
  );
  const isAttorneyVisible = useColorNav(
    { root: null, rootMargin: "0px", threshold: 0 },
    attorneyRef
  );
  const isIconsVisible = useColorNav(
    { root: null, rootMargin: "0px", threshold: 0 },
    servicesRef.current?.iconsRef()
  );
  const isCardsVisible = useColorNav(
    { root: null, rootMargin: "0px", threshold: 0.1 },
    servicesRef.current?.cardsRef()
  );
  const isSpacerVisible = useColorNav(
    { root: null, rootMargin: "0px", threshold: 0.1 },
    servicesRef.current?.spacerRef()
  );
  const isTestimonialsVisible = useColorNav(
    { root: null, rootMargin: "0px", threshold: 0.1 },
    testimonialsRef
  );
  useEffect(() => {
    if (!isTestimonialsVisible) {
      setUseWhiteLinks(false);
      setUseDarkLogo(true);
      setUseWhiteLogo(false);
    }
    if (isTestimonialsVisible) {
      setUseWhiteLinks(true);
      setUseWhiteLogo(true);
    }
    if (isCardsVisible) {
      setUseWhiteLinks(true);
      setUseWhiteLogo(false);
      setUseDarkLogo(false);
    }

    if (isSpacerVisible && !isIconsVisible) {
      setUseWhiteLogo(true);
      setUseWhiteLinks(false);
    }
    if (isIconsVisible) {
      setUseWhiteLinks(false);
      setUseWhiteLogo(false);
      setUseDarkLogo(true);
    }

    if (isAttorneyVisible) {
      setUseDarkLogo(false);
    }
    if (isJumboVisible) {
      setUseDarkLogo(true);
    }

    if (isAttorneyVisible || isJumboVisible) {
      setUseWhiteLinks(true);
    }
  }, [
    isJumboVisible,
    isAttorneyVisible,
    isSpacerVisible,
    isIconsVisible,
    isTestimonialsVisible,
    isCardsVisible,
  ]);

  return (
    <>
      <Jumbotron ref={jumboRef} />
      <Attorneys ref={attorneyRef} />
      <Services ref={servicesRef} />
      <CustomerTestimonials ref={testimonialsRef} />
    </>
  );
};
