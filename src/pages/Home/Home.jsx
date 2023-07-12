import React from 'react';
import  {Sidebar} from '../../components/Sidebar/Sidebar';
import {Navbar} from "../../components/Navbar/Navbar";
import  {Widget}  from '../../components/Widget/Widget';
import "./Home.scss"
import { Chart } from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Schedule from "../../components/Schedule/Schedule"
export const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
        
        <div className="homecontainer">
          <Navbar />
      
    <div className="widgets">
      <Widget type="revenue"/>
      <Widget type="transaction"/>
      <Widget type="likes"/>
      <Widget type="users"/>

</div>
<div className="charts">
  <Chart/>
</div>

    <div className="end">
    <Featured/>
    <Schedule/>
    </div>
    </div>
    </div>
  )
}
