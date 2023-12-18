import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container my-2" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h5 className='text-center'>Login</h5>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label htmlFor="">UserName/Email</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="my-2">
                            <label htmlFor="">Password</label>
                            <input type="password" className='form-control' />
                        </div>
                    </div>
                    <div className="card-header">
                        <button  className='btn btn-success'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login