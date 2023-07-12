import React from 'react'
import "./Widget.scss"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StyleIcon from '@mui/icons-material/Style';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
export const Widget = ({type}) => {
let data;
const amount=100;
switch(type){
case "revenue":
  data={
    title:"Total Revenue",
    ismoney:true,
    icon:<AccountBalanceWalletIcon className='icons'/>,
  
  };
  break;  
  case "transaction":
    data={
      title:"Total Transactions",
      ismoney:false,
      icon:<StyleIcon className='icons'/>,
    };
    break;
    case "likes":
  data={
    title:"Likes",
    ismoney:false,
    icon:<ThumbUpIcon className='icons'/>,
  };
  break;
  case "users":
  data={
    title:"Users",
    ismoney:false,
    icon:<PersonOutlineIcon className='icons'/>,
  };
  break;
  default:
    break;
}
  return (
    <div className='widget'>
        <div className="left">
          <span className="title">{data.title}</span>
<span className='counters'>{data.ismoney && "$"}{amount}</span>
          
        </div>
        <div className="right">{data.icon}</div>

    </div>
 )
}
