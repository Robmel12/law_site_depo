import {AiFillClockCircle} from "react-icons/ai"

function Hours(props){
  
  return(
   
   <> 
   <div className="hours">
    <div className="icon"><AiFillClockCircle/></div>
    <div className="schedule">
    <p>{props.hours}<br/>
     {props.days}</p>
    </div>
    </div>
  </>
  )
}
export default Hours;