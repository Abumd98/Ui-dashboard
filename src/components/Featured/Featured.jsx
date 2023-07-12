import React from 'react'
import "./Featured.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const options={
  
  plugins:{
    legend:{
display:true,
position:"right",

labels:{
  usePointStyle:true, 
  PointStyle:"circle",
  color:"black",
  
    }
  }
},responsive: true,
maintainAspectRatio: false,
animation: false,
offset:true,

}
let data = [55, 31, 14]
let labels = ['Basic Tees', 'Custom Short Pants', 'Super Hoodies']
    
let customLabels = labels.map((label,index) =>`${label} 
\n ${data[index]}%`)
const chartdata = {
  labels: customLabels,
 
  datasets: [
    {
    
      data: data,
      backgroundColor: [
        'rgba(152, 216, 158, 1)',
        'rgba(238, 132, 132, 1)',
        'rgba(246, 220, 125, 1)',
       
      ],
      hoverBackgroundColor: [
        'rgba(102, 255, 102,1)',
        'rgba(255, 255, 51,1)',
        'rgba(255, 51, 51,1)',
      ]
    }
  ],
 

};
function Featured() {

  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Top products</h1>
        <h4 className='keyarrow'>May-june2021 <KeyboardArrowDownIcon fontSize='small'/></h4>
        
      </div>
      <div className="bottom">
      <Pie options={options}  data={chartdata} className='piechart'  style={{ width: "500px" }}
       
    />
      </div>
      </div>
  )
}

export default Featured