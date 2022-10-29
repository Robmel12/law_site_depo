import React, { useEffect } from "react";
import { ReferencesList } from "./ReferencesList";
import Links from "../sections/Header/Navbar/Links";
import "./references.scss";

function References(props) {
  const { setUseDarkLogo, setUseWhiteLinks, setUseWhiteLogo } = props;
  useEffect(() => {
    setUseDarkLogo(true);
    setUseWhiteLinks(false);
    setUseWhiteLogo(false);
  });

  return (
    <>
      <Links List={ReferencesList} className="references" />
    </>
  );
}

export default References;
