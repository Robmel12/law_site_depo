import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Logo from "../Header/Navbar/Logo";
import LogoImageBlack from "../../../images/logo-image.webp";
import Links from "../Header/Navbar/Links";
import { MainNavItems } from "../Header/Navbar/MainNavItems";
import Form from "../Jumbotron/Form";
import { SocialMediaLinks } from "../Header/Navbar/Social-Media-Links";
import formStyles from "./BigFooterForm.module.scss";

export default function BigFooter(Props) {
  return (
    <footer className="BigFooter">
      <div className="footer-logo-container">
        <Link to="/law_site_depo/">
          <Suspense fallback={<></>}>
            <Logo
              src={LogoImageBlack}
              alt="Fargus And William"
              className="footer-logo"
            />
          </Suspense>
        </Link>
        <Links className="social-media-links" List={SocialMediaLinks} />
        <div className="address-container">
          <p className="address">123 broad st., Detroit, Michigan 10090</p>
        </div>
      </div>
      <div className="vr"></div>
      <Links className="footer-nav-links" List={MainNavItems} />
      <Form styles={formStyles} />
    </footer>
  );
}
