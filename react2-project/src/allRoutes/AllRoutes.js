import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../componets/featured/Home"
import About from "../componets/featured/About"
import Contact from "../componets/featured/Contact"

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact/>} />
            </Routes>

        </>
    )
}

export default AllRoutes