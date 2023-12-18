import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useFormik } from "formik";

import signupSchema from '../../schemas/SignupSchema';
import { API_URL } from '../../util/API_URL';
import {useNavigate} from "react-router-dom"



const SignUp = () => {
    let navigate = useNavigate()
    let signupForm = useFormik({
        validationSchema: signupSchema,
        initialValues: {
            name: "",
            email: "",
            password: "",
            repassword: "",
            state: "",
            city: "",
            address: "",
            gender: "",
            contact : ""
        },
        onSubmit: (formdata) => {
            axios.post(`${API_URL}signup`, formdata).then(response=>{
                if(response.data.success==true)
                {
                    navigate("/login");
                }
            });

        }

    });

    let [state, setState] = useState([]);
    let [city, setCity] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}city/state`).then(response => {
            setState(response.data)
        })
    }, []);

   

    let getCity = (event) => {
        let x = event.target.value
        axios.get(`${API_URL}city/getcity/${x}`).then(response => {
            setCity(response.data)
        })
    }

    return (
        <div className='container' style={{ minHeight: "700px" }}>
            <form onSubmit={signupForm.handleSubmit}>
                <div className='row'>
                    <div className="col-md-6 mx-auto">
                        <div className="card border-dark m-2 ">
                            <div className="card-header border-dark">
                                <h5 className='text-center text-dark'><b>User Registration</b></h5>
                            </div>
                            <div className="card-body border-dark">
                                <div className="my-2">
                                    <label htmlFor="Fullname">FullName</label>
                                    <input type="text" name='name' onChange={signupForm.handleChange} className={"form-control " + (signupForm.errors.name && signupForm.touched.name ? "is-invalid" : '')} />
                                    {
                                        signupForm.errors.name && signupForm.touched.name ? <small className='text-danger' >{signupForm.errors.name} </small> : ""
                                    }
                                </div>
                                <div className="my-2">
                                    <label htmlFor="email">Email/UserName</label>
                                    <input type="text" name='email' onChange={signupForm.handleChange} className={"form-control " + (signupForm.errors.email && signupForm.touched.email ? "is-invalid" : '')}  />
                                    {
                                        signupForm.errors.email && signupForm.touched.email ? <small className='text-danger' >{signupForm.errors.email} </small> : ""
                                    }
                                </div>
                                <div className="my-2">
                                    <label htmlFor="password">password</label>
                                    <input type="password" name='password' onChange={signupForm.handleChange} className={"form-control " + (signupForm.errors.password && signupForm.touched.password ? "is-invalid" : '')}  />
                                    {
                                        signupForm.errors.password && signupForm.touched.password ? <small className='text-danger' >{signupForm.errors.password} </small> : ""
                                    }
                                </div>
                                <div className="my-2">
                                    <label htmlFor="Re-password">Re-password</label>
                                    <input type="text" name='repassword' onChange={signupForm.handleChange} className={"form-control " + (signupForm.errors.repassword && signupForm.touched.repassword ? "is-invalid" : '')} />
                                    {
                                        signupForm.errors.repassword && signupForm.touched.repassword ? <small className='text-danger' >{signupForm.errors.repassword} </small> : ""
                                    }
                                </div>
                                <div className='my-2'>
                                    <label htmlFor="">State</label>
                                    <select onChange={(event) => { getCity(event); signupForm.handleChange(event) }} name='state' className={"form-control " + (signupForm.errors.state && signupForm.touched.state ? "is-invalid" : '')} >
                                        <option value="">select</option>
                                        {
                                            state.map(value => <option>{value}</option>)
                                        }
                                        

                                    </select>
                                    {
                                        signupForm.errors.state && signupForm.touched.state ? <small className='text-danger' >{signupForm.errors.state} </small> : ""
                                    }
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">City</label>
                                    <select className={"form-control " + (signupForm.errors.city && signupForm.touched.city ? "is-invalid" : '')}  onChange={signupForm.handleChange} name='city'>
                                        <option value="">select</option>
                                        {
                                            city.map(value => <option>{value.name}</option>)
                                        }
                                       
                                    </select>
                                    {
                                        signupForm.errors.city && signupForm.touched.city ? <small className='text-danger' >{signupForm.errors.city} </small> : ""
                                    }
                                </div>
                                <div className="my-2">
                                    <label htmlFor="address">Address</label>
                                    <textarea name="address" onChange={signupForm.handleChange} className={"form-control " + (signupForm.errors.address && signupForm.touched.address ? "is-invalid" : '')} ></textarea>
                                    {
                                        signupForm.errors.address && signupForm.touched.address ? <small className='text-danger' >{signupForm.errors.address} </small> : ""
                                    }
                                </div>
                                <div className="my-2">
                                    <label htmlFor="contact">contact</label>
                                    <input type="text" name='contact' onChange={signupForm.handleChange} className={"form-control " + (signupForm.errors.contact && signupForm.touched.contact ? "is-invalid" : '')}  />
                                    {
                                        signupForm.errors.contact && signupForm.touched.contact ? <small className='text-danger' >{signupForm.errors.contact} </small> : ""
                                    }
                                </div>

                                <div className="my-2">
                                    <label htmlFor="gender">Gender</label> <br/>
                                    <label htmlFor='male' >Male</label><input type="radio" value="male" name='gender' id='male' onChange={signupForm.handleChange} /> 
                                    <label htmlFor='female'>Female</label> <input type="radio" value="female" name='gender' id='female' onChange={signupForm.handleChange} />
                                    {
                                        signupForm.errors.gender && signupForm.touched.gender ? <small className='text-danger' >{signupForm.errors.gender} </small> : ""
                                    }
                                </div>


                            </div>
                            <div className="card-footer border-dark">
                                <button className='btn btn-success'>Signup</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>

    )
}

export default SignUp