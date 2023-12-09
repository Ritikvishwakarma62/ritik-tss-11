import React from "react"
import { NavLink } from "react-router-dom"

let Header = () => {
    return (
        <>
            <nav className="navbar bg-warning navbar-dark navbar-expand-sm">
                <div className="container">
                    <i class="fa fa-leaf fa-2x text-light" aria-hidden="true"></i>
                    <div className="navbar-brand">
                        <b><h5>Nature</h5></b></div>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbar" className=" navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link text-light"><b>Home</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link text-light"><b>About</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link text-light"><b>Contact</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/demo" className="nav-link text-light"><b>Demo</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/demo2" className="nav-link text-light"><b>Demo2</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/demo3" className="nav-link text-light"><b>Demo3</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/demo4" className="nav-link text-light"><b>Demo4</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/demo5" className="nav-link text-light"><b>Demo5</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/demo6" className="nav-link text-light"><b>Demo6</b></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header