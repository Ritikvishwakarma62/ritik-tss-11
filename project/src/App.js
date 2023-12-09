import React from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './allRoutes/AllRoutes';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';


const App = () => {
  return (
    <>
    <Header/>
    <AllRoutes/>
    <Footer/>

    </>
  )
}

export default App