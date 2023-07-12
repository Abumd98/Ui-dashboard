import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
export const  Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='logoboard'>
          <h3>Dashboard</h3>
        </div>
        <div className="search">
      <input type='text' placeholder='search..'/>

      <SearchIcon style={{color:"lightgrey"}}/>

        </div>
        <div className='item'><NotificationsIcon /></div>
        <div className='item'><img src="https://th.bing.com/th/id/OIP.feTg0Vo5rrGp6MFVYxbslgHaH0?pid=ImgDet&rs=1"
       alt="newavatar" className='avatar'></img></div>
      </div>
      </div>
     

    
  )
}
