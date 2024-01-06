import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/user/feature/Home';
import Shop from '../components/user/feature/Shop';
import FeatureCart from '../components/user/feature/FeatureCart';
import Cart from '../components/user/feature/Cart';
import About from '../components/user/feature/About';
import SignUp from '../components/user/feature/SignUp';
import Login from '../components/user/feature/Login';
import Logout from '../components/user/feature/Logout';
import MyProfile from '../components/user/feature/MyProfile';
import UserModule from '../modules/UserModule';
import AdminModule from '../modules/AdminModule';
import AdminLogin from '../components/admin/feature/AdminLogin';
import Deshboard from '../components/admin/feature/Deshboard';
import AdminLogout from '../components/admin/feature/AdminLogout';
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<UserModule />}>
          <Route path='' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='feature' element={<FeatureCart />} />
          <Route path='cart' element={<Cart />} />
          <Route path='about' element={<About />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='my-profile' element={<MyProfile />} />
          <Route path='logout' element={<Logout />} />
        </Route>

        <Route path='admin'element={<AdminModule/>} >
          <Route path='' element={<AdminLogin/>} />
          <Route path='deshboard' element={<Deshboard/>} />
          <Route path='logout' element={<AdminLogout/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AllRoutes