import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="javascript:void(0)">Admin Panel</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/deshboard">Deshboard</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

  )
}

export default Header