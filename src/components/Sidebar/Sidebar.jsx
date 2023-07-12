import React from 'react'
import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellIcon from '@mui/icons-material/Sell';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className='logo'>Board.</span></div>
        
        <div className='center'>
            <ul>
            <li><DashboardIcon className='icon'/>
                <span >Dashboard</span></li>
                <li><SellIcon className='icon'/>
                    <span>Transactions</span></li>
                <li><EventAvailableIcon className='icon'/>
                    <span>Schedules</span></li>
                <li><PermIdentityIcon className='icon'/>
                <span>
                    Users</span></li>
                <li><SettingsSuggestIcon className='icon'/>
                    <span>Settings</span></li>
            </ul>
        </div>
        <div className='bottom'>
            <ul>
        <li>Help</li>
        <li>Contact Us</li>
            </ul></div>
            </div>
            
  )
}
