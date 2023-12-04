import React,{useState} from 'react'

const Demo2 = () => {
  let [x ,setX] = useState(0)
  let [y ,setY] = useState(0)
    let move = (event)=>{
        setX(event.clientX)
        setY(event.clientY)
    }
   
  return (
    <>
        <h2>X : {x} Y:{y} </h2>
        <div  onMouseMove={(event)=>move(event)} className='my-2' style={{height : "300px", width :"300px", backgroundColor : "red"}}></div>
    </>
  )
}

export default Demo2