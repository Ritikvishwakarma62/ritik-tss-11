import React ,{useState} from 'react'

const Demo3 = () => {
  let [t, setT] =useState(0);
  let [l, setL] =useState(0);
  let [color, setColor] = useState("454876")

  let task = ()=>{
    let x = Math.random()*500;
    let y = Math.floor(x); 

    let z = Math.random()*800;
    let w = Math.floor(z);

    
    let temp = "";
    for(let i =1; i <= 6; i++)
    {
        let num = Math.floor(Math.random()*9);
        // let d = Math.floor(num)
        temp += num;
        // console.log(temp)
    }

    console.log(temp);  

    setT(y);
    setL(w)
    setColor(temp)
  }

  return (
    <div onMouseMove={task} style={{height : "100px", width : "100px",borderRadius:"60px",marginTop:t+"px",marginLeft:l+"px" ,backgroundColor :"#"+color}}></div>
  )
}

export default Demo3