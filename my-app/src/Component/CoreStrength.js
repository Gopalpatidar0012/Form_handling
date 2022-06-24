import { faL, faLessThanEqual } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import NotAllNormal from './NotAllNormal'
import TopTitle from './TopTitle'

const CoreStrength = ({data,colorChange,changeAccordion,AccordionC ,handleChangeOption,removeCoreData,checkRemove ,allNormalSets}) => {
    
const[Strength,setStrenght]=useState(false);

const Validation=()=>{
let decide=false;
data.forEach(element => {
  if((element.leftValue && element.rightValue)||element.tested)
  {
    decide=true
        }
 else{
   decide=false;
 }
        
    });

     return decide;


}

useEffect(()=>{
  const update= Validation();
  setStrenght(update);

  console.log("Strenght",Strength);
},[data])


  return (
    <div>
        	<div className="accordian-row">
          <TopTitle title="Core Strength Testing" changeAccordion={changeAccordion} Validate={Strength} colorChange={colorChange}/>
													{/* <div className="accordian-title accordian-title-full-arrow accordian-title-active">
														<div className="row">
															<div className="col p-l-0 p-r-0 p-t-10 p-b-10 text-bold"
																style={{display: 'flex', alignContent: 'center'}}>
																Core Strength Testing
																<svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
																	style={{fontSize: '25px' , color: 'red', marginLeft: '5px'}}>
																	<path
																		d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
																	</path>
																</svg>
															</div>
														</div>
													</div> */}
													<div className={AccordionC?"accordian-content accordian-content-active":"accordian-content"}>
														<span>
															<div className="row">
																<div className="col p-b-0">
																	<h6 className="m-b-10">Flexibility Testing:</h6>
																<NotAllNormal removeCoreData={removeCoreData} checkRemove={checkRemove} allNormalSets={allNormalSets}/>
																	<div
																		className="row assessment-question-row assessment-focused-physical-exam-group-header">
																		<div className="col-xs-12 col-md-4 col-lg-3 col-xl-3 assessment-question">
																		</div>
																		<div className="col-xs-12 col-md-8 col-lg-8 col-xl-9 assessment-answer">
																			<div className="row assessment-answer-row">
																				<div className="col assessment-answer-col">
																					<h6>Left Side</h6>
																				</div>
																				<div className="col assessment-answer-col">
																					<h6>Right Side</h6>
																				</div>
																				<div className="col assessment-answer-col">
																					&nbsp;</div>
																			</div>
																		</div>
																	</div>
                                      {data.map((current,index)=>
                                  <div className="row assessment-question-row">
																		<div className="col-xs-12 col-md-4 col-lg-3 col-xl-3 assessment-question">
																			{current.title}:</div>
																		<div className="col-xs-12 col-md-8 col-lg-8 col-xl-9 assessment-answer">
																			<div className="row assessment-answer-row">
																				<div className="col assessment-answer-col radio-group">
																					<div className="assessment-focused-physical-exam-group-header-responsive">
																						Left Side:</div>
																					<div className="radio-item"><input type="radio"
																							name={current.leftName} checked={current.leftValue==='Adequate' ? true : false}
																							value="Adequate" onChange={(e)=>handleChangeOption(e, index,'leftValue')}/><label>Adequate</label>
																					</div>
																					<div className="radio-item"><input type="radio"
																							name={current.leftName} checked={current.leftValue==='Hypertonic'?true:false}
																							value="Hypertonic" onChange={(e)=>handleChangeOption(e, index,'leftValue')}/><label>Hypertonic</label>
																					</div>
																					<div className="radio-item"><input type="radio"
																							name={current.leftName} checked={current.leftValue==='Short'?true:false}
																							value="Short" onChange={(e)=>handleChangeOption(e, index,'leftValue')}/><label>Short</label>
																					</div>
																				</div>
																				<div className="col assessment-answer-col radio-group">
																					<div className="assessment-focused-physical-exam-group-header-responsive">
																						Right Side:</div>
																					<div className="radio-item"><input type="radio"
																							name={current.rightName} checked={current.rightValue==='Adequate'?true:false}
																							value="Adequate" onChange={(e)=>handleChangeOption(e, index,'rightValue')}/><label>Adequate</label>
																					</div>
																					<div className="radio-item"><input type="radio"
																							name={current.rightName} checked={current.rightValue==='Hypertonic'?true:false}
																							value="Hypertonic" onChange={(e)=>handleChangeOption(e, index,'rightValue')}/><label>Hypertonic</label>
																					</div>
																					<div className="radio-item"><input type="radio"
																							name={current.rightName} checked={current.rightValue==='Short'?true:false}
																							value="Short" onChange={(e)=>handleChangeOption(e, index,'rightValue')}/><label>Short</label>
																					</div>
																				</div>
																				<div className="col assessment-answer-col radio-group">
																					<span><input type="checkbox" name="Iliopsoas:"
																							id="Iliopsoas:" checked={current.tested}  onChange={(e)=>handleChangeOption(e, index,'tested')} /><label></label></span><label>Not
																						Tested</label>
																				</div>
																			</div>
																		</div>
																	</div>
                           )}
																	
																	
																</div>
															</div>
														</span>
													</div>
												</div>
    </div>
  )
}

export default CoreStrength