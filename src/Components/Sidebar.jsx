import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  return (
<>
<div style={{height:"99vh"}} className=" d-flex justify-content-center align-items-center">
    <div style={{height:"90%", borderRadius:"15px",backgroundColor:"#0b4373"}} className='list-items py-5 px-4'>
    <ul className='px-2' style={{listStyle:"none",lineHeight:"45px"}}>
       <Link  style={{textDecoration:"none",color:"white"}} to={"/dashboard"}>        <li><i class="fa-solid mx-2 fa-house-user"></i>Rent</li>
</Link>
        <Link style={{textDecoration:"none",color:"white"}} to={"/rooms"}><li> <i class="fa-solid mx-2 fa-bed"></i> Rooms</li></Link>
        <Link style={{textDecoration:"none",color:"white"}} to={"/list"}><li><i class="fa-solid mx-2 fa-users"></i>Residents</li></Link>
        <Link style={{textDecoration:"none",color:"white"}} to={"/expenses"}><li><i class="fa-solid mx-2 p-1 fa-receipt"></i>Expenses</li></Link>
        <li><i class="fa-solid mx-2  fa-chart-line"></i> Analytics</li>
        <li><i class="fa-solid mx-2 fa-utensils"></i> Food Menu</li>
        <li><i class="fa-solid mx-2 fa-wrench"></i> Settings</li>

    </ul>
    </div>
</div>
</>)
}

export default Sidebar