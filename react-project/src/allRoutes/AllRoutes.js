import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../components/featured/Home"
import About from "../components/featured/About"
import Contact from '../components/featured/Contact'
import Demo from '../components/featured/Demo'
import Demo2 from '../components/featured/Demo2'
import Demo3 from '../components/featured/Demo3'
import Demo4 from '../components/featured/Demo4'
import Demo5 from '../components/featured/Demo5'

const AllRoutes = () => {
    return (
        <> 
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='demo' element={<Demo/>} />
                <Route path='demo2' element={<Demo2/>} />
                <Route path='demo3' element={<Demo3/>} />
                <Route path='demo4' element={<Demo4/>} />
                <Route path='demo5' element={<Demo5/>} />
            </Routes>
        </>
    )
}

export default AllRoutes