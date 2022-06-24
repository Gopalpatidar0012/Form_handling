import React, { useEffect, useState } from "react";
import TopTitle from "./TopTitle";
import NotAllNormal from "./NotAllNormal";

const MotorFunction = ({
  tasks,
  handleChangeMotor,
  removeData,
  allNormal,
  check,
  Accordion,
  changeAccordion,
  colorChange
}) => {

  
  const [valid, setValid] = useState(false);

  const validateMotor = () => {
    let result = true;
    tasks.forEach((element) => {
      if ((element.left && element.right) || element.notSelected) {
      } else {
        result = false;
      }
    });
    console.log("result", result);
    return result;
  };

  useEffect(() => {
    const validValue = validateMotor();
    setValid(validValue);
  }, [tasks]);

  return (
    <div>
     <TopTitle changeAccordion={changeAccordion} title="Motor Function (Fatigable Weakness)" Validate={valid} colorChange={colorChange}/>
      <div className="accordian-row">
        {/* add or remove the className accordian-content-active to close and open the accordian  */}
        <div className={Accordion?"accordian-content accordian-content-active":"accordian-content"}>
          <span>
            <div className="row">
              <div className="col p-b-0">
               <NotAllNormal removeCoreData={removeData} checkRemove={check} allNormalSets={allNormal}/>

                {tasks.map((item, index) => {
                  return (
                    <div className="row assessment-question-row assessment-neurology-screen-row">
                      <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 assessment-question">
                        {item.item_name}:
                      </div>
                      <div className="col-xs-12 col-md-9 col-lg-9 col-xl-8 assessment-answer">
                        <div className="row assessment-answer-row">
                          <div className="col assessment-answer-col">
                            <div className="field-group">
                              <label>Left</label>
                              <select
                                name="motorFunctionL2Left"
                                className="form-medium fixed-w-150"
                                value={item.left}
                                onChange={(e) =>
                                  handleChangeMotor(e, index, "left")
                                }
                              >
                                <option value="">Select</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col assessment-answer-col">
                            <div className="field-group">
                              <label>Right</label>
                              <select
                                name="motorFunctionL2Right"
                                className="form-medium fixed-w-150"
                                value={item.right}
                                onChange={(e) =>
                                  handleChangeMotor(e, index, "right")
                                }
                              >
                                <option value="">Select</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col assessment-answer-col">
                            <span>
                              <input
                                type="checkbox"
                                name="motorFunctionL2NotTested"
                                checked={item.notSelected}
                                onChange={(e) =>
                                  handleChangeMotor(e, index, "notSelected")
                                }
                                id="m1"
                              />
                              <label>Not Tested</label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MotorFunction;
