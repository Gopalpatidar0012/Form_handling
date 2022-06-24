import { useState } from "react";
import "./App.css";
import CoreStrength from "./Component/CoreStrength";
import MotorFunction from "./Component/MotorFunction";
import SensoryFunction from "./Component/SensoryFunction";
import { dataC } from "./Database/CoreData";
import { dataM } from "./Database/MotorData";
import { dataS } from "./Database/SensoryData";
import TopTitle from "./Component/TopTitle";
import SecondAll from "./Component/SecondAll";
import { faItalic } from "@fortawesome/free-solid-svg-icons";

const initialData = [
  { left: "", right: "", notSelected: false, item_name: "L2(Hip Flexion)" },
  {
    left: "",
    right: "",
    notSelected: false,
    item_name: "L3(Knee Extension)",
  },
  {
    left: "",
    right: "",
    notSelected: false,
    item_name: "L4(Ankle Dorsiflexion)",
  },
  {
    left: "",
    right: "",
    notSelected: false,
    item_name: "L5(Great Toe Extension)",
  },
  {
    left: "",
    right: "",
    notSelected: false,
    item_name: "S1(Ankle Plantarflexion)",
  },
];
function App() {

  // MoterFunction Hooks
  const [update, setUpdate] = useState([{ removeCheck: false ,changeColorM:false}]);
  const [dataList, setDataList] = useState(initialData);

  const[accordion,setAccordion]=useState(false);
  const[accordionS,setAccordionS]=useState(false);

// SensoryFunction Hooks
  const[sensory,setSensory]=useState(dataS);
  const[sensNotSelect,setSensNotSelect]=useState({notTestedS:false,changeColorS:false});
  console.log("sensory",sensory);

//CoreStrenght Hooks

const[Core,setCore]=useState(dataC);
const[remove,setChangeRemove]=useState({notTested:false,changeColor:false});
const[AccorCore,setAccorCore]=useState(false);

  // console.log("second updater",update[0].removeCheck);
  console.log("initialData", dataList);
  const handleChangeMotor = (e, index, side) => {
    let temp = [...dataList];
    
    // console.log("found",found);
    // let updatedItem = {};
    switch (side) {
      case "left":
        temp[index][side] = e.target.value;
        temp[index].notSelected = "";
        setUpdate(false);
        // updatedItem = {...found, left: e.target.value}
        setDataList(temp);
        break;
      case "right":
        temp[index][side] = e.target.value;
        setUpdate(false);
        // updatedItem ={...found ,right:e.target.value}
        setDataList(temp);
        break;
      case "notSelected":
        temp[index][side] = e.target.checked;
        temp[index].left = "";
        temp[index].right = "";
        
        // updatedItem = {...found, notSelected: e.target.checked}
       setUpdate(false);
        setDataList(temp);

        break;
      default:
        break;
    }
    console.log("check last data", dataList);

    //item feetch;
    //left ={....,}

    // console.log("updatedItem",updatedItem);

    // console.log("temp",temp);
    // setDataList(temp);
    console.log("updated data", dataList);
  };

  const removeData = (e, remove) => {
    setUpdate({ removeCheck: true ,changeColorM:true})

    let updatedData = [...dataList];
    updatedData.forEach((element) => {
      element.left = "";
      element.right = "";
      element.notSelected = false;
    });
    setDataList(updatedData);
    console.log("removed data", dataList);
  };

  const allNormal = () => {
    setUpdate(false);
    let updateAll = [...dataList];
    updateAll.forEach((element) => {
      element.left = 5;
      element.right = 5;
      element.notSelected = false;
    });
    setDataList(updateAll);
  };


// SensoryFunction All Function is here

const handleOptionChange=(e,index,names)=>{
console.log("sensory function",e.currentTarget.value);
//found
const temp=[...sensory];
switch (names) {
  case "leftValue":
    temp[index][names]=e.currentTarget.value;
    setSensory(temp);
    setSensNotSelect(false);
    break;
  case "rightValue":
    temp[index][names]=e.currentTarget.value;
    setSensory(temp);
    setSensNotSelect(false);
     break;
   
  default:
    break;
}
// {...sensory, leftValue: e.currentTarget.value}
}

const removeSelected=(e)=>{
setSensNotSelect({notTestedS:true,changeColorS:true});

const updateData=[...sensory];
updateData.forEach((item)=>{
  item.leftValue=""
  item.rightValue=""

})
setSensory(updateData);


}


const SensorAllNormal=()=>{
  setSensNotSelect(false);
const normal=[...sensory];
normal.forEach((item)=>{
item.leftValue="Normal"
item.rightValue="Normal"
})
setSensory(normal);
}


// CoreStrength all Functions
console.log("all data of CoreStre",Core);
const handleChangeOption=(e,index,name)=>{
   console.log("Core Value",e.target.value,index,name);
   const newData=[...Core];

   switch (name) {
     case "leftValue":
        newData[index][name]=e.target.value;
        newData[index].tested="";
        setChangeRemove(false);
        setCore(newData);
       break;
     case "rightValue":
      newData[index][name]=e.target.value;
      newData[index].tested="";
      setChangeRemove(false);
      setCore(newData);
      break;
     case "tested":
      newData[index][name]=e.target.checked;
      newData[index].leftValue="";
      newData[index].rightValue="";
      setChangeRemove(false);
      setCore(newData);
       break;
   
     default:
       break;
   }
}

const removeCoreData=()=>{
  setChangeRemove({notTested:true,changeColor:true})
 console.log("hello remove")
 const updateData=[...Core];
 updateData.forEach((it)=>{
   it.leftValue="";
   it.rightValue="";
   it.tested=false;
  return it;  
 })
 setCore(updateData);
}

const allNormalChanges=()=>{
  setChangeRemove(false);
  const ChangeData=[...Core];
  ChangeData.forEach((it)=>{
    it.leftValue="Adequate";
    it.rightValue="Adequate";
  })
  setCore(ChangeData);
}


  return (
    <div className="App">
      <p>gopal</p>
      <main className="main-with-sidebar">
        <section className="main-area">
          <div className="main-area-wrapper">
            <div className="main-wrapper">
              <div className="row">
                <div className="col-xs-12">
                  <div className="grid-container">
                    <div className="card merge-2col cases-profile">
                      <div className="card-body">
                        {/* <!-- Assessment Content --> */}
                        <div className="row case-assessment">
                          <div className="col p-t-0">
                          {/* <SecondAll/> */}
                            <MotorFunction
                              tasks={dataList}
                              handleChangeMotor={handleChangeMotor}
                              removeData={removeData}
                              allNormal={allNormal}
                              check={update}
                              Accordion={accordion}
                              changeAccordion={()=>setAccordion(!accordion)}
                              colorChange={update.changeColorM}


                            />
                            <SensoryFunction data={sensory} 
                              handleOptionChange={handleOptionChange}
                              removeSelected={removeSelected}
                              check={sensNotSelect}
                              allNormal={SensorAllNormal}
                              Accordion={accordionS}
                              colorChange={sensNotSelect.changeColorS}
                              changeAccordion={()=>setAccordionS(!accordionS)}
                            />

                              <CoreStrength data={Core}
                                changeAccordion={()=>setAccorCore(!AccorCore)}
                                AccordionC={AccorCore}
                                handleChangeOption={handleChangeOption}
                                removeCoreData={removeCoreData}
                                allNormalSets={allNormalChanges}
                                checkRemove={remove}
                                colorChange={remove.changeColor}
                              />





                          </div>
                        </div>
                        {/* Assessment Content  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
