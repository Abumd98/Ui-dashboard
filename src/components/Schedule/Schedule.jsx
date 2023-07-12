import React from 'react'
import "./Schedule.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Schedule() {
  return (
    <div className='schedule'>
       <div className="top">
        <h1 className='title'>Today's schedule</h1>
        <h4 className='keyarrow'>see all <KeyboardArrowDownIcon fontSize='small'/></h4>
        
      </div>
      <div className="bottom">
      <div className='s1'>
        <h3>Meeting with suppliers from Kuta Bali</h3>
        <h5 className='gray'>14.00-15.00</h5>
        <h5 className='gray'>at Sunset road,Kuta Bali</h5>
      
        
      </div>
      <div className='s2'>
        <h3>Check operation at Giga Factory 1</h3>
        <h5 className='gray'>18.00-20.00</h5>
        <h5 className='gray'>at Central jakarta</h5>
      </div>
      </div>
      </div>
  )
}

export default Schedule