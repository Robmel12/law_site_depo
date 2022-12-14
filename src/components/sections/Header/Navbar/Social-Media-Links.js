import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
export const SocialMediaLinks = [
  {
    title: false,
    icon: <AiFillInstagram />,
    LinkClassName: "social-media-links",
    ListItemClassName: "social-media-item",
    url: "https://www.instagram.com/",
    target: "_blank",
  },
  {
    title: false,
    icon: <BsFacebook />,
    LinkClassName: "social-media-links",
    ListItemClassName: "social-media-item",
    url: "https://www.facebook.com/",
    target: "_blank",
  },
  {
    title: false,
    icon: <GrLinkedinOption />,
    LinkClassName: "social-media-links",
    ListItemClassName: "social-media-item",
    url: "https://www.linkedin.com/",
    target: "_blank",
  },
];
