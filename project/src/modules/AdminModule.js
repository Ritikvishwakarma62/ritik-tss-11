import React from 'react'
import Header from '../components/admin/shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/admin/shared/Footer'

const AdminModule = () => {
  return (
    <>
    <Header/>
    <div className="container my-2" style={{minHeight : "600px"}}>

    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default AdminModule