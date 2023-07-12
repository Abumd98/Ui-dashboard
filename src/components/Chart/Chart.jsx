import React from 'react'
import "./Chart.scss"
 import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  
{name:"Week 1 ", guest:300,user:350},
{name:"Week 2 ", guest:280,user:320},
{name:"Week 3" ,guest:400,user:430},
{name:"Week 4" ,guest:420,user:480},

]
export const Chart = () => {
    
  return (
    <div className='chart'>
      <div className="title"><span className='top'>Activities </span><br/><span className='bottom'>May-June2021</span></div>
   <ResponsiveContainer width="90%" height="60%">
     <LineChart
          width={850}
          height={700}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray=" none" vertical={false}  />
          <XAxis dataKey="name"  padding={{ left: 30, right: 30 }} tick={{ fill: 'rgb(133,133,133,1)' }} tickLine={{stroke:'white'}}/>
          <YAxis  axisLine={false} type="number"  ticks={[100, 200,300,400,500]}
  domain={[0, 500]} tick={{ fill: 'rgb(133,133,133,1)' }} tickLine={{stroke:'white'}} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} iconType='circle'/>
          <Line type="monotone" dataKey="guest" stroke="rgb(233,160,160,1)" fill="rgb(234,234,234,1)" dot={false}/>
          <Line type="monotone" dataKey="user" stroke="rgb(155,221,124,1)" fill="rgb(234,234,234,1)" dot={false}/>
        </LineChart>
  </ResponsiveContainer>        
  

    </div>
  )
}
