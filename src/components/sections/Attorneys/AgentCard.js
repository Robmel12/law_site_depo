import React from 'react';
export default function AgentCard(props) {
  const {styles} = props
  return (
    <>
    <div className={styles.card}><div className={styles.image } style={{backgroundImage: `url(${props.image})`, backgroundPosition: props.position}}></div>
      <div className={styles.placard}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.name} >{props.name}</p>
      </div>
    </div>
    </>
  )
}
