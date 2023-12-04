import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <>
     <nav className="navbar bg-dark navbar-dark navbar-expand-sm">

<div className="container">
    <h5 className='p-1' style={{color : "white"}}>
    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
    </h5>

     <a href="" className="navbar-brand "> <b>Instagram</b> </a>

 <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
     <span className="navbar-toggler-icon"></span>
 </button>

<div id="menu" className="collapse navbar-collapse">
 <ul className="nav navbar-nav">
     <li className="nav-item">
         <NavLink to="/" className="nav-link">Home</NavLink>
     </li>
     <li className="nav-item">
         <NavLink to="/about" className="nav-link">About</NavLink>
     </li>
     <li className="nav-item">
         <NavLink to="/contact" className="nav-link">Contact</NavLink>
     </li>
     <li className="nav-item">
         <NavLink to="/practice" className="nav-link">Practice</NavLink>
     </li>
 </ul>
</div>
</div>
</nav>
    </>
  )
}

export default Header