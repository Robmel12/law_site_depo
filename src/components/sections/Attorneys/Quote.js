import React from 'react'

export default function Quote(props) {
  const {styles} = props;
  return (
    <>
    <div className={styles.normal ? `${styles.container} ${styles.normal}`: `${styles.container}`}>
      <p className={styles.quote}>"{props.quote}"<span className={styles.author}>{props.author}</span></p>
    </div>
    </>
  )
}
