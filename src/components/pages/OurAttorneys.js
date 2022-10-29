import React, { useEffect, useRef } from "react";
import { Attorneys } from "../sections/Attorneys/Attorneys";
import useColorNav from "./Pagefunctions/useColorNav";
import LogoImageWhite from "../../images/logo-image-white.webp";

function OurAttorneys(props) {
  const { setUseDarkLogo, setUseWhiteLinks, setUseWhiteLogo } = props;
  const attorneyRef = useRef();
  const isAttorneyVisible = useColorNav(
    { root: null, rootMargin: "0px", threshold: 0 },
    attorneyRef
  );
  useEffect(() => {
    if (isAttorneyVisible) {
      setUseDarkLogo(false);
      setUseWhiteLinks(true);
      setUseWhiteLogo(false);
    }
    if (!isAttorneyVisible) {
      setUseDarkLogo(true);
      setUseWhiteLinks(false);
      setUseWhiteLogo(false);
    }
  }, [isAttorneyVisible]);

  return <Attorneys ref={attorneyRef} normal={true} />;
}

export default OurAttorneys;
