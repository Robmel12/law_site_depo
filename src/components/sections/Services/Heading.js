import React from "react";

export default function Heading(props) {
  return (
    <div className={props.className}>
      {props.spanRight ? (
        <h2 className={props.className}>
          {props.heading} <span>{props.spanRight}</span>
        </h2>
      ) : props.spanLeft ? (
        <h2 className={props.className}>
          <span>{props.spanLeft}</span>
          {props.heading}
        </h2>
      ) : (
        <h2>{props.heading}</h2>
      )}
      <p>{props.subtext}</p>
    </div>
  );
}
