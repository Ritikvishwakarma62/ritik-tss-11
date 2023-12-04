import React ,{useState} from 'react'

const Demo4 = () => {
  
    let [like , setLike] = useState("fa fa-heart-o" );
    let [count , setCount] = useState(45);

    let  add = ()=>{
          if(like == "fa fa-heart-o"){
            setLike("fa fa-heart" );
            setCount(count +1)
          }
          else{
            setLike("fa fa-heart-o");
            setCount(count-1)
          }
        };
        
    
  return (
    <> 
  <div className='my-2'>
  <h2 style={{color : "red" ,borderColor:"blue" }}>
     <i className={like} style={{cursor : "pointer" }} onClick={add} aria-hidden="true"></i>
     {count}
   </h2>
  </div>

     {/* <i className= aria-hidden="true"></i> */}
    </>
  )
}

export default Demo4