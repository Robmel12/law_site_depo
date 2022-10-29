import React from 'react'

export default function Icon(props) {
  return(
    <div key={props.index} className="service-icon">
    <div  role='img' style={{backgroundImage:`url(${props.image})`}}alt={props.caption} className={'service-icon-image ' + props.index}></div>{props.icon}
    <p>{props.caption}</p>
    </div>

  )

  }

