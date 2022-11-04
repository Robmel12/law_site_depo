import React, { useState, useEffect, Suspense, useRef } from "react";
import LogoImageWhite from "../../../../images/logo-image-white.webp";
import LogoAllWhite from "../../../../images/Fragus&WilliamLawAllWhite.png";
import { Link } from "react-router-dom";
import LogoImageBlack from "../../../../images/logo-image.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "./Dropdown";
import { MainNavItems } from "./MainNavItems";
import Links from "./Links";
import Hours from "./Hours";
import Logo from "./Logo";
// const Logo = lazy(()=> import('./Logo'))

export default function Navbar(props) {
  const { useDarkLogo, useWhiteLogo, useWhiteLinks, shrinkLogo } = props;

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const menuIconDisplay = useRef(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 950) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 950) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  useEffect(() => {
    if (
      window.getComputedStyle(document.getElementsByClassName("menu-icon")[0])
        .display === "none"
    ) {
      menuIconDisplay.current = false;
    } else {
      menuIconDisplay.current = true;
    }
  });
  return (
    <header>
      <div
        className={
          shrinkLogo || click ? "navbar-container sidebar" : "navbar-container"
        }
      >
        <Link to="/law_site_depo">
          <Suspense fallback={<></>}>
            <Logo
              src={
                useWhiteLogo
                  ? LogoAllWhite
                  : useDarkLogo
                  ? LogoImageBlack
                  : LogoImageWhite
              }
              alt="Fargus And William"
              id="logo-nav"
              className={shrinkLogo ? "nav-logo logo-shrink" : "nav-logo"}
            />
          </Suspense>
        </Link>
        <nav
          className="navbar topbar"
          id="header-nav"
          style={useWhiteLinks ? { color: "white" } : { color: "black" }}
        >
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <span className="fa-times">
                <FaTimes />
              </span>
            ) : (
              <span className="hamburgerMenu">
                <GiHamburgerMenu />
              </span>
            )}
          </div>
          <Links
            List={MainNavItems}
            className={click ? "nav-menu active" : "nav-menu"}
            onClick={closeMobileMenu}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            DropDown={
              dropdown &&
              !menuIconDisplay.current && (
                <Dropdown onMouseEnter={onMouseEnter} />
              )
            }
          />

          <Hours hours="8am- 6pm" days="Mon. - Fri." />
        </nav>
      </div>
    </header>
  );
}
