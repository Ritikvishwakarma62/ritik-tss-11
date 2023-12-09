import React ,{useState,useEffect} from 'react'
import axios from 'axios'

const SignUp = () => {

    let [signup , setSignup] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:4545/api/city").then(response=>{
        setSignup(response.data)
      })
    },[])

  return (
    <div className='container' style={{minHeight : "700px"}}>
        <div className='row'>
            <div className="col-md-6 mx-auto">
                <div className="card border-dark m-2 ">
                    <div className="card-header border-dark">
                        <h5 className='text-center'>User Registration</h5>
                    </div>
                    <div className="card-body border-dark">
                        <div className="my-2">
                            <label htmlFor="Fullname">FullName</label>
                            <input type="text" className='form-control border-dark' />
                        </div>
                        <div className="my-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" className='form-control border-dark' />
                        </div>
                        <div className="my-2">
                            <label htmlFor="password">password</label>
                            <input type="password" className='form-control border-dark' />
                        </div>
                        <div className="my-2">
                            <label htmlFor="Re-password">Re-password</label>
                            <input type="text" className='form-control border-dark' />
                        </div>
                        <div className="my-3">
                            <select className='form-control border-dark'>
                                <option value="">select</option>
                                {
                                    signup.map(value=><option>{value.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="my-2">
                            <label htmlFor="address">Address</label>
                            <textarea name="" className='form-control border-dark'></textarea>
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Gender</label>
                            <label >male</label><input type="radio" />
                            <label >female</label> <input type="radio"  />
                        </div>
                      
                        
                    </div>
                    <div className="card-footer border-dark">
                        <button className='btn btn-success'>Signup</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

  )
}

export default SignUp