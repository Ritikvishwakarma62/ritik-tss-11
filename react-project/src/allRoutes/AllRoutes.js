import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../components/featured/Home"
import About from "../components/featured/About"
import Contact from '../components/featured/Contact'

const AllRoutes = () => {
    return (
        <> 
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default AllRoutes