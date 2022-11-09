import { RiArrowDropDownLine } from "react-icons/ri";

export const MainNavItems = [
  {
    title: "Home",
    path: "/",
    LinkClassName: "nav-links",
    ListItemClassName: "nav-item",
    onClick: true,
  },
  {
    title: "Our Attorneys",
    path: "/our-attorneys",
    LinkClassName: "nav-links",
    ListItemClassName: "nav-item",
    onClick: true,
  },
  {
    title: "Practice Areas",
    path: "/practice-areas",
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
    onClick: true,
    DropDown: true,
    path: "#",
  },
];
