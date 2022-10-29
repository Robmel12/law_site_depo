import React from "react";

export default function Logo(props) {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        id={props.id}
        className={props.className}
      />
    </>
  );
}
