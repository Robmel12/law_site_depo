
import React from 'react'

export default function BackgroundImage(props) {
  const {styles} =  props
  return (
    <div className={styles.backgroundImage} style={{backgroundImage: `url(${props.url})`}}>
      {props.shadow && <div className={styles.shadow}></div>}
    </div>
    
  )
}
