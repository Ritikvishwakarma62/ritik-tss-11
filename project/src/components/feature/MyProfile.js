import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../util/API_URL';

const MyProfile = () => {
    let navigate = useNavigate();
    let [user, setUser] = useState({})

    useEffect(() => {
        if (!localStorage.getItem("access-token")) {
            navigate("/login")
        }

    }, [])

    useEffect(() => {
        axios.get(`${API_URL}user-profile`, {
            headers: { Authorization: localStorage.getItem("access-token") }
        }).then(respones => {
            setUser(respones.data.result)
        })
    }, [])

    return (
        <>
            <div style={{ minHeight: " 500px" }} className="container my-2">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2 className='text-center'><b>User Information</b></h2>
                        <table className='table table-dark my-2'>
                            <tbody>
                                <tr>
                                    
                                    <td>FullName</td>
                                    <td>{user.name}</td>
                                    
                                </tr>
                                <tr>
                                    
                                    <td>Email</td>
                                    <td>{user.email}</td>
                                    
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>{user.contact}</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>{user.gender}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile