import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../componets/featured/Home"
import About from "../componets/featured/About"
import Contact from "../componets/featured/Contact"
import Practice from '../componets/featured/Practice'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact/>} />
                <Route path='practice' element={<Practice/>} />
            </Routes>

        </>
    )
}

export default AllRoutes