import React from "react";
import { Link } from "react-router-dom";
function LinkItem(props) {
  const { item } = props;
  return (
    <li
      className={item.ListItemClassName && item.ListItemClassName}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {item.hasOwnProperty("path") ? (
        <Link
          className={item.LinkClassName && item.LinkClassName}
          to={item.path && item.path}
          onClick={props.onClick}
        >
          {item.title}
          {item.icon}
        </Link>
      ) : (
        <a
          className={item.LinkClassName && item.LinkClassName}
          href={item.url && item.url}
          onClick={props.onClick}
        >
          {item.title}
          {item.icon}
        </a>
      )}
      <p className={item.TextClassName && item.TextClassName}>
        {item.text && item.text}
      </p>
      {props.DropDown}
    </li>
  );
}

export default function Links(props) {
  return (
    <>
      <ul className={props.className}>
        {props.List.map((item, index) => {
          return (
            <LinkItem
              key={index}
              item={item}
              onClick={item.onClick && props.onClick}
              onMouseEnter={item.onMouseEnter && props.onMouseEnter}
              onMouseLeave={item.onMouseLeave && props.onMouseLeave}
              DropDown={item.DropDown && props.DropDown}
            />
          );
        })}
      </ul>
    </>
  );
}
