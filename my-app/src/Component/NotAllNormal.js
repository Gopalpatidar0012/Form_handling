import React from 'react'

const NotAllNormal = ({removeCoreData,checkRemove,allNormalSets}) => {
  return (
        	<div className="checkbox-group m-b-20"><span><input type="checkbox"
				name="coreStrengthLowerLimbStrengthNotTested"  checked={checkRemove}
				id="coreStrengthFlexibilityNotTested"  onChange={removeCoreData}/><label>Not Tested</label></span>
             <button className="button button-secondary button-small" onClick={allNormalSets}>All Normal</button></div>
    
  )
}

export default NotAllNormal