import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../componets/featured/Home"
import About from "../componets/featured/About"
import Contact from "../componets/featured/Contact"
import Practice from '../componets/featured/Practice'
import Login from '../componets/featured/Login'
import Logout from '../componets/featured/Logout'
import Profile from '../componets/featured/Profile'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact/>} />
                <Route path='practice' element={<Practice/>} />
                <Route path='login' element={<Login/>} />
                <Route path='logout' element={<Logout/>} />
                <Route path='profile' element={<Profile/>} />
            </Routes>

        </>
    )
}

export default AllRoutes