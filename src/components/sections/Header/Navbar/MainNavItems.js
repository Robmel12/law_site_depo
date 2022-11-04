import { RiArrowDropDownLine } from "react-icons/ri";

export const MainNavItems = [
  {
    title: "Home",
    path: "/law_site_depo",
    LinkClassName: "nav-links",
    ListItemClassName: "nav-item",
    onClick: true,
  },
  {
    title: "Our Attorneys",
    path: "/law_site_depo/our-attorneys",
    LinkClassName: "nav-links",
    ListItemClassName: "nav-item",
    onClick: true,
  },
  {
    title: "Practice Areas",
    path: "/law_site_depo/practice-areas",
    LinkClassName: "nav-links",
    ListItemClassName: "nav-item",
    onClick: true,
  },
  {
    title: "More",
    icon: <RiArrowDropDownLine />,
    LinkClassName: "nav-links",
    ListItemClassName: "nav-item",
    onMouseLeave: true,
    onMouseEnter: true,
    onClick: false,
    DropDown: true,
    path: "#",
  },
];
