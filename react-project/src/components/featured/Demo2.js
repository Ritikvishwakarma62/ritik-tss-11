import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Demo2 = () => {
  // let [x ,setX] = useState(0)
  // let [y ,setY] = useState(0)
  //   let move = (event)=>{
  //       setX(event.clientX)
  //       setY(event.clientY)
  //   }

  let [i, setI] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(response => {
      setI(response.data)
    })
  }, [])

  return (
    <>
      {/* <h2>X : {x} Y:{y} </h2>
        <div  onMouseMove={(event)=>move(event)} className='my-2' style={{height : "300px", width :"300px", backgroundColor : "red"}}></div> */}

      <div className="container my-2">
        <div className="row">
          {
            i.map((value) => {
              return (
                <div className="col-md-3">
                  <div className="card my-2">
                     <div class=" card card-body">
                      
                      <h5 class="card-title">Special title treatment</h5>
                      <img src={value.image} alt="" />
                    </div>

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Demo2