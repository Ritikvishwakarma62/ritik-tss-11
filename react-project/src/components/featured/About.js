import React, { useState } from 'react'
import axios from "axios"

const About = () => {
  let [pro, setPro] = useState([]);
  let [spinner, setSpinner] = useState(false)

  let product = () => {
    setSpinner(true)
    axios.get("https://fakestoreapi.com/products").then(response=>{
      setPro(response.data);
      setSpinner(false);
    })
  }

  return (
    <>
      <div className="container my-2" style={{ minHeight: "900px" }}>
        <button className='btn btn-warning' onClick={product}>ShowProduct { spinner == true ?<span className='spinner-border spinner-border-sm'></span> : ''}</button>
        
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              {
                pro.map((value,index)=>{
                  return(
                    <div className="col-md-3">
                      <div className="card my-2">
                        <div className="card-header">
                          <h5 >{value.title}</h5>
                        </div>
                        <div className=" card-body m-0">
                          <img src={value.image} style={{minHeight: "200px" }} alt="" />
                          <p className='p-0 m-0'>{value.price} </p>
                          <p>{value.category}</p>
                        </div>
                        <div className="card-footer">
                          <button className='btn btn-info'>Buy</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About