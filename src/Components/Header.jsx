import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
<>
<nav style={{backgroundColor:"#002E47"}} class="navbar py-2  ">
  <div class="container-fluid">
    <a class="navbar-brand text-light mx-3" href="#">
      <img src="https://cdn-icons-png.flaticon.com/128/10799/10799992.png?uid=R50329035&ga=GA1.1.1147060452.1699182643&semt=ais" alt="Logo" width="30" height="24" class="d-inline-block mx-2 align-text-top"/>
      Hostel Management System
    </a>
<Link to={"login"}>
<button className='mx-3 btn btn-success'>Login</button>
</Link>  </div>
</nav>
</>  )
}

export default Header