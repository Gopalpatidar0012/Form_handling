import React from 'react'
// import { faHeart as heartEmpty, faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark,faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopTitle = ({title,changeAccordion,Validate,colorChange}) => {
 
 
  return (
    
        <div className="accordian-title accordian-title-full-arrow accordian-title-active">
														<div className="row">
															<div className="col p-l-0 p-r-0 p-t-10 p-b-10 text-bold" onClick={changeAccordion} style={{display: 'flex', alignContent: 'center'}}>
																{title} 
                                <div style={{marginLeft:15}}>
                                {Validate || colorChange ?<FontAwesomeIcon icon={faCheckCircle} color="green" style={{width:25,height:25}}/>:<FontAwesomeIcon icon={faCircleXmark} color="red"style={{width:25,height:25}}/>}

                                </div>
                               
  
															</div>
														</div>
													</div>
    
  )
}

export default TopTitle