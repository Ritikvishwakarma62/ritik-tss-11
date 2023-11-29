import React, {useState} from 'react'

const About = () => {
  let  [name , setName] = useState(800)
  let Demo = ()=>{
    setName(()=>{
      let x = name+1
      return x
    })
  }
  let Demo1 = ()=>{
    setName(()=>{
      let x = name-1
      return x
    })
  }
  return (
    <>
    <h1>{name} </h1>
    <button className='btn btn-info m-2' onClick={Demo}>Ok</button>
    <button className='btn btn-info' onClick={Demo1}>Ok</button>
   
    
    </>
  )
}

export default About