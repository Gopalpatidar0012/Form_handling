import React, { useEffect, useState } from 'react'
import TopTitle from './TopTitle';
import NotAllNormal from './NotAllNormal';

const SensoryFunction = ({data,colorChange,handleOptionChange,removeSelected,check,allNormal,changeAccordion,Accordion}) => {
const[validate,setValidate]=useState(false);
	const validateSensory=()=>{
		let isTrue=true;
		data.forEach(element => {
			 if(element.leftValue === '' || element.leftValue === null || element.rightValue === '' || element.rightValue === null){
			isTrue=false
		}})
		return isTrue;
	}

	useEffect(()=>{
    const valids=validateSensory();
	console.log(valids)
	setValidate(valids);
	},[data])
    
  return (
    <div>
    <TopTitle changeAccordion={changeAccordion} title="Sensory Function" Validate={validate} colorChange={colorChange} />
        <div className="accordian-row">
		{/* <div className="accordian-title accordian-title-full-arrow accordian-title-active">
														<div className="row">
															<div className="col p-l-0 p-r-0 p-t-10 p-b-10 text-bold"
																style={{display: 'flex', alignContent: 'center'}}>
																Sensory Function
																<svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
																	style={{fontSize: '25px', color: validate ? 'green':'red', marginLeft: '5px'}}>
																	<path
																		d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
																	</path>
																</svg>
															</div>
														</div>
	</div> */}
		<div className={Accordion ? "accordian-content accordian-content-active" :"accordian-content"}>
														<span>
															<div className="row">
																<div className="col p-b-0">
																	<NotAllNormal removeCoreData={removeSelected} checkRemove={check} allNormalSets={allNormal}/>
                                                                             
																	<div className="row assessment-question-row assessment-sensory-functions-header">
																		<div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 assessment-question">
																			&nbsp;</div>
																		<div className="col-xs-12 col-md-9 col-lg-9 col-xl-8 assessment-answer">
																			<div className="row assessment-answer-row">
																				<div className="col assessment-answer-col">
																					<h6>Left Side</h6>
																				</div>
																				<div className="col assessment-answer-col">
																					<h6>Right Side</h6>
																				</div>
																			</div>
																		</div>
																	</div>
                                                                    {data.map((current,index)=>
                                                                
                                                                        <div className="row assessment-question-row">
																		<div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 assessment-question">
																			{current.title}:</div>
																		<div className="col-xs-12 col-md-9 col-lg-9 col-xl-8 assessment-answer">
																			<div className="row assessment-answer-row">
																				<div className="col assessment-answer-col radio-group">
																					<div className="assessment-sensory-functions-header-responsive">
																						Left Side:</div>
																					<div className="radio-item"><input type="radio"
																							name={current.leftName}
																							value="Normal" checked={current.leftValue === "Normal" ? true : false} 
																							onChange={(e)=>handleOptionChange(e, index,'leftValue')} /><label>Normal</label>
																					</div>
																					<div className="radio-item"><input type="radio"
																							name={current.leftName}
																							value="Abnormal" checked={current.leftValue === "Abnormal" ? true : false}
																							onChange={(e)=>handleOptionChange(e,index, 'leftValue')} 
								
																							/><label>Abnormal</label>
																					</div>
																				</div>
																				<div className="col assessment-answer-col radio-group">
																					<div className="assessment-sensory-functions-header-responsive">
																						Right Side:</div>
																					<div className="radio-item"><input type="radio"
																							name={current.rightName}
																							value="Normal" checked={current.rightValue === "Normal" ? true : false}
																							onChange={(e)=>handleOptionChange(e,index,'rightValue')} 

																							/><label>Normal</label>
																					</div>
																					<div className="radio-item"><input type="radio"
																							name={current.rightName}
																							value="Abnormal" checked={current.rightValue === "Abnormal" ? true : false}
																							onChange={(e)=>handleOptionChange(e,index, 'rightValue')} 
																							 /><label>Abnormal</label>
																					</div>
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

export default SensoryFunction