import React, {useState} from 'react'

const About = () => {
  let [age,setAge] = useState(20)
  let demo = ()=>{
    setAge(10)
      
  }
  return (
    <div>
      <h1>{age} </h1>
      <button className='btn btn-warning' onClick={demo} >OK</button>
    </div>
  )
}

export default About