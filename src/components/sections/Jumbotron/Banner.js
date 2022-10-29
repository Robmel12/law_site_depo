import React from 'react';
import { BannerWords } from './BannerWords';
export default function Banner(props) {

 
 const {styles} = props;
  
  return(
    <>
    <div className={`${styles.banner} banner `}>
    <ul className={`${styles.list} banner-list` }>
    {BannerWords.map((e, index) =>{return(<li  key={index} className={`${styles.item} ${props.show ? styles.show: styles.hide} banner-list__item ${index}`}> {e.text}</li>)} )}
    </ul>
    </div>
    
    </>
  )
}
