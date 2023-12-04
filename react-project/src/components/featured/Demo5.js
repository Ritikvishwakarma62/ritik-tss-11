import React ,{useState} from 'react'

const Demo5 = () => {
    let [num , setNum] = useState("1.jpg")

    let over = (a)=>{
        setNum(a)
    }

    let task = ()=>{
        setNum("1.jpg")
    }

  return (
    <div className='container my-2'>
        <div className="row">
            <div className="col-md-12" onMouseOut={task}>
                <img src={"/assets/imges/" +num} style={{height : "400px" ,width : "400px"}} alt="" />
                <br/>
                <br/>
                <img src="/assets/imges/2.jpg" style={{height :"80px",width : "80px"}} alt=""onMouseOver={()=>over("2.jpg")} />
                <img src="/assets/imges/3.jpg" style={{height :"80px",width : "80px"}} alt="" onMouseOver={()=>over("3.jpg")}/>
                <img src="/assets/imges/4.jpeg" style={{height :"80px",width : "80px"}} alt=""onMouseOver={()=>over("4.jpeg")} />
                <img src="/assets/imges/5.jpeg" style={{height :"80px",width : "80px"}} alt=""onMouseOver={()=>over("5.jpeg")} />
            </div>
        </div>
    </div>
  )
}

export default Demo5