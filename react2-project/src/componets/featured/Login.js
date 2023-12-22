import React ,{useEffect,useState } from 'react'
import {useFormik} from "formik"
import axios from 'axios'
import * as YUP from "yup"
import { useNavigate } from 'react-router-dom'


let loginSchema = YUP.object({
    email : YUP.string().email("Incorrect Email id").required("Enter Your Email Id"),
    password : YUP.string().required("Enter Your Password")
})

const Login = () => {

    let [err ,serErr] = useState('')
    let navigate = useNavigate();
    let[spinner,setSpinner] = useState(false)
    let loginfrm = useFormik({
        validationSchema : loginSchema,
        initialValues : {
            email : "",
            password : "",
        },
        onSubmit : (formdata)=>{
            //console.log(formdata)
            setSpinner(true)
            axios.post("https://api.escuelajs.co/api/v1/auth/login",formdata)
            .then(Response=>{
                localStorage.setItem("access-token", Response.data.access_token)
                navigate("/")
            })
            .catch(()=>{
                setSpinner(false)
                serErr("Incorrect Email and password")
            })
        }
    })

  
  return (
    <>
    <div className="container my-2">
        <form onSubmit={loginfrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label htmlFor="">UserId/Email</label>
                            <input type="text" name='email' onChange={loginfrm.handleChange}       className={"form-control " + (loginfrm.errors.email && loginfrm.touched.email ? "is-invalid" : '') } />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Password</label>
                            <input type="password" name='password' className={"form-control " + (loginfrm.errors.password && loginfrm.touched.password ? "is-invalid" : '') } onChange={loginfrm.handleChange} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-success' type="submit " >Login  {spinner ? <small className='spinner-border spinner-border-sm'></small> : ''}  </button>
                        {
                            err ? <div className='alert alert-danger my-2'>{err}</div> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Login