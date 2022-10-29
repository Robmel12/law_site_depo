import React, { Suspense, useEffect, useRef } from "react";
import useColorNav from "./Pagefunctions/useColorNav";
// const Services = lazy(() => import("../sections/Services/Services"));
import { Services } from "../sections/Services/Services";
function PracticeAreas(props) {
  const { setUseDarkLogo, setUseWhiteLinks, setUseWhiteLogo } = props;
  const servicesRef = useRef();
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

  useEffect(() => {
    setUseDarkLogo(true);
    setUseWhiteLinks(false);
    setUseWhiteLogo(false);
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
  }, [isCardsVisible, isIconsVisible, isSpacerVisible]);

  return (
    <>
      <Services ref={servicesRef} normal={true} />
    </>
  );
}

export default PracticeAreas;
