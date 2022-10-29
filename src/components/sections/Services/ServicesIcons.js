
import React, { lazy, forwardRef } from 'react'
import { Icons } from './Icons';
import Heading from './Heading'
import {GiCheckMark} from 'react-icons/gi'
const Icon = lazy(()=> import('./Icon'))



export const ServicesIcons= forwardRef((props, ref) => {
  
  return (

    <div ref={ref} className='service-icons'>
   <div className={props.normal ? 'services-icons-heading-container normal':'services-icons-heading-container'}>  
   <Heading spanLeft={"Let us "}heading="help you" className='services-icons-heading' subtext="Our team is dedicated to our service"/>
   </div> 

      
   <div className='icons-container'>
    {Icons.map((e, index)=>{
      return(
        <Icon key={index} symbol={e.symbol} index={index} image={e.image} caption={e.caption} icon={<GiCheckMark/>}/>
      )
    })}
   </div>
  
    
   </div>
  )
}
)
