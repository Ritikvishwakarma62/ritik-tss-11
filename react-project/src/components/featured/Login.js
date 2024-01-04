import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'

import * as YUP from 'yup'

const Login = () => {

    let navigate = useNavigate()  
    let [err , setErr] = useState("")
    let loginSchema = YUP.object({
        email : YUP.string().email("incorrect email").required("enter email"),
        password : YUP.string().required("incorrect password")
    })

    let loginfrm = useFormik({
        validationSchema : loginSchema,
        initialValues : {
            email : '',
            password : '',
        },
        onSubmit : (data)=>{
            axios.post("https://api.escuelajs.co/api/v1/auth/login",data)
            .then(res=>{
                localStorage.setItem("access-token",res.data.access_token)
                navigate("/")
            })
            .catch(()=>{
                setErr("incorrect email and password")
            })
        }
    })

   

  return (
    <div className='container my-2'>
        <form onSubmit={loginfrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h1>user login</h1>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label htmlFor="">Email</label>
                            <input type="text" name='email' onChange={loginfrm.handleChange} className='form-control'/>
                        </div>
                        <div className="my-2">
                            <label htmlFor="">password</label>
                            <input type="password" onChange={loginfrm.handleChange} name='password' className='form-control'/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-primary'>Login</button>
                        {
                            err ? <div className='my-2 alert alert-danger'>{err }</div>:''
                        }
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login