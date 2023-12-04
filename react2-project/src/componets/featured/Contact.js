import React, {useState} from 'react'

const Contact = () => {
  let [g , setG] = useState("5.jpeg");
  let move = (a)=>{
    setG(a)
  }
  let out = ()=>{
    setG("5.jpeg")
  }
  return (
    <>
    <div className="container my-2 " onMouseOut={out}>
      <img src={"/assets/imges/"+g} style={{height : "500px", width : "500px"}} alt=""/>
      <br/>
      <br/>
      <img src="/assets/imges/6.jpeg" onMouseOver={()=>move("6.jpeg")} style={{height : "100px", width : "115px"}} alt=""/>
      <img src="/assets/imges/4.jpeg" onMouseOver={()=>move("4.jpeg")} style={{height : "100px", width : "115px"}} alt=""/>
      <img src="/assets/imges/2.jpg" className='ms-3' style={{height : "100px", width : "115px"}} onMouseOver={()=>move("2.jpg")} alt=""/>
     
    </div>
    </>
  )
}

export default Contact