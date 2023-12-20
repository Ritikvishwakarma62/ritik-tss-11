import React from 'react'
import{Routes, Route} from "react-router-dom";
import Home from '../components/feature/Home';
import Shop from '../components/feature/Shop';
import FeatureCart from '../components/feature/FeatureCart';
import Cart from '../components/feature/Cart';
import About from '../components/feature/About';
import SignUp from '../components/feature/SignUp';
import Login from '../components/feature/Login';
import Logout from '../components/feature/Logout';
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='feature' element={<FeatureCart/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='logout' element={<Logout/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes