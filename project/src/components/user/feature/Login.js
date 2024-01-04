import React,{useState} from 'react'
import { useFormik } from "formik";
import loginSchema from '../../../schemas/LoginSchema';
import { API_URL } from '../../../util/API_URL';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()
    let [errMsg , setErrMsg] = useState("")
    let loginForm = useFormik({
        validationSchema : loginSchema,
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (data) => {
            axios.post(`${API_URL}auth`,data).then(response=>{
                
                if(response.data.success == true)
                {
                    
                    localStorage.setItem("access-token", response.data.token)
                    navigate("/");
                }

                if(response.data.success== false && response.data.type ==1)
                {
                    setErrMsg('This UserName/Email and Password is Incorrect !')
                }

                if(response.data.success== false && response.data.type ==2)
                {
                    setErrMsg('This  Password is Incorrect !')
                }
            })
        }
    })

    return (
        <>
            <div className="container my-2" style={{ minHeight: "600px" }}>
                <form onSubmit={loginForm.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className='text-center'>Login</h5>
                                </div>
                                <div className="card-body">
                                    <div className="my-2">
                                        <label htmlFor="">UserName/Email</label>
                                        <input type="text" name='email' onChange={loginForm.handleChange} className={ 'form-control' + (loginForm.errors.email && loginForm.touched.email ? " is-invalid" : '')} />
                                        {
                                            loginForm.errors.email && loginForm.touched.email ? <small className='text-danger'>{loginForm.errors.email}</small> : ""
                                        }
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="">Password</label>
                                        <input type="password" name='password' onChange={loginForm.handleChange}className={ 'form-control' + (loginForm.errors.password && loginForm.touched.password ? " is-invalid" : '')} />
                                        {
                                            loginForm.errors.password && loginForm.touched.password ? <small className='text-danger'>{loginForm.errors.password}</small> : ""
                                        }
                                    </div>
                                </div>
                                <div className="card-header">
                                    <button type='submit' className='btn btn-success'>Login</button>
                                    {
                                        errMsg ? <div className='alert alert-danger my-2'>{errMsg }</div> : ''
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