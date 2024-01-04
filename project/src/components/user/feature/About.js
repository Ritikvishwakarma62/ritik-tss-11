import React,{useState} from 'react'

const About = () => {
  let [user , setUser] = useState({name : "",age : "", fee : ""})

  return (
    <>
    <div className="container my-2" style={{minHeight : "700px"}}>
          <h1>{user.name} {user.age} {user.fee} </h1> 
        <div className="row">
          <br/>
          <br/>
            <div className="col-md-6 offset-md-3">
                Name <input type="text" className='form-control' onChange={(e)=>setUser({ ...user, name : e.target.value})} />
                age <input type="text" className='form-control' onChange={(e)=>setUser({ ...user , age : e.target.value})} />
                fee <input type="text" className='form-control' onChange={(e)=>setUser({ ...user , fee : e.target.value})} />
            </div>
        </div>
    </div>
    </>
  )
}

export default About