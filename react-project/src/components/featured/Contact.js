import React, {useState} from 'react'

const Contact = () => {
    let [num, setNum] = useState(13);
    
    let sub = ()=>{
      setNum(()=>{
        let a = num;
        let b = a % 2 == 0?"indore":"mumbai";
        return b
      })
    }
    let add = ()=>{
      setNum(()=>{
        let x = num+1;
        return x
      })
    }
    let add2 = ()=>{
      setNum(()=>{
        let x = num-1;
        return x
      })
    }

  return (
      <>
      <h1>{num}</h1>
      <button onClick={sub} className='btn btn-warning'>Add</button>
      <button onClick={add} className='btn btn-warning'>+</button>
      <button onClick={add2} className='btn btn-warning'>-</button>
     
    
    </>
  )
}

export default Contact