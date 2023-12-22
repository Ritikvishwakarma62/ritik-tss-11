import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Profile = () => {
    let [user, setUser] = useState({})
    let navigate = useNavigate()
    useEffect(() => {

        if (!localStorage.getItem("access-token")) {
            navigate("/login")
        }

    }, [])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
            headers: { Authorization: "Bearer " + localStorage.getItem("access-token") }
        }).then(response => {
            setUser(response.data);
            console.log(response.data)
        })

    }, [])


    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 className='text-center'>UserProfile</h1>
                       <div className="card">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={user.avatar} style={{height : "170px"}} />
                            </div>
                            <div className="col-md-9 mt-3">
                            <table className='table table-info'>
                            <tbody>
                                <tr>
                                    <td>Name :</td>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <td>Email :</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>Role :</td>
                                    <td>{user.role}</td>
                                </tr>
                            </tbody>
                        </table>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile