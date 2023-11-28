import React from 'react'
import Header from './componets/shared/Header'
import Footer from './componets/shared/Footer'
import AllRoutes from './allRoutes/AllRoutes'


const App = () => {
  return (
    <>
    <Header/>
    <div className="container" style={{minHeight : "700px"}}>
       <AllRoutes/>
    </div>
    <Footer/>
    </>
  )
}

export default App