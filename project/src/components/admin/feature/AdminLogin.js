import React ,{useState} from 'react'
import { useFormik } from 'formik'
import loginSchema from '../../../schemas/AdminLoginSchema'
import {API_URL} from '../../../util/API_URL'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AdminLogin = () => {
  let navigate = useNavigate()
  let [err ,setErr] = useState("")
  let loginfrm = useFormik({
    validationSchema : loginSchema,
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: (formdata) => {
      axios.post(`${API_URL}admin-auth`,formdata).then(res=>{
        if(res.data.success == true)
        {
          localStorage.setItem("admin-token", res.data.token)
          navigate("/admin/deshboard")
        }

        if(res.data.success ==false && res.data.type ==1)
        {
            setErr("Your Username and Password Incorrect")
        }
        if(res.data.success ==false && res.data.type ==2)
        {
            setErr("Your Password Incorrect")
        }
      })
    }
  })

  return (
    <>
      <form onSubmit={loginfrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4 className='text-center'>Admin Login</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <div className="my-2">
                    <label htmlFor="">UserName</label>
                    <input type="text" onChange={loginfrm.handleChange} name="username" id="" className={'form-control ' + (loginfrm.errors.username && loginfrm.touched.username ? "is-invalid" :'')} />
                  </div>
                  {loginfrm.errors.username && loginfrm.touched.username ?<small className='text-danger'>{loginfrm.errors.username}</small> : ''} 
                  <div className="my-2">
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={loginfrm.handleChange}  name="password" id="" className={'form-control ' + (loginfrm.errors.password && loginfrm.touched.password ? "is-invalid" :'')}  />
                    {loginfrm.errors.password && loginfrm.touched.password ?<small className='text-danger'>{loginfrm.errors.password}</small> : ''} 
                  </div>
                  <br />
                  <button type='submit' className='btn btn-success'>Login</button>
                  {
                    err ? <div className='alert alert-danger my-2'>{err}</div> : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default AdminLogin