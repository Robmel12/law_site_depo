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
      <section className="references">
        <h2 className="references-title">
          We Use These APIs To
          <span className="accent"> Make Your Life Easier</span>
        </h2>
        <Links List={ReferencesList} className="references__links" />
        <script
          async
          src="https://cse.google.com/cse.js?cx=43689168b59d843ff"
        ></script>
        <div
          class="gcse-searchbox-only"
          style={{ width: "100px", height: "100px" }}
        ></div>
      </section>
    </>
  );
}

export default References;
