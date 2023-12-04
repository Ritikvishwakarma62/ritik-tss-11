import React ,{useState} from 'react'

const Home = () => {
  let [color, setColor] = useState("gray");
  let [num , setNum] = useState(0)
  // let down = ()=>{
  //   setColor("blue")
  // }
  // let up = (event)=>{
  //   let s = event.target.value;
  //   setNum(s.length)
  //   setColor("white")
  // }

  let change = (a)=>{
    setColor(a)
  }

  return (
    <div>HomePages 
       <div className='my-2'>
       {/* <h5>{num} </h5>
        <input type="text" onKeyDown={down} onKeyUp={(event)=>up(event)} style={{backgroundColor : color}} /> */}
        <input type="radio" onChange={()=>change("green")} name='color'  />green
        <input type="radio"onChange={()=>change('red')} name='color' />red
        <input type="radio"onChange={()=>change("blue")} name='color'  />blue
        <div style={{height :"400px",width:"400px" ,backgroundColor :color}}></div>
      </div> 

    </div>
  )
}

export default Home